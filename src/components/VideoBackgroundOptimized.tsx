import { useRef, useEffect, memo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface VideoBackgroundProps {
  videoSrc: string
  posterSrc?: string
}

// Memoized video background component to prevent unnecessary re-renders
// Video element is expensive to re-render, so we memoize the entire component
const VideoBackgroundOptimized = memo(({ videoSrc, posterSrc }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // UseCallback for video load handler to prevent recreation
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  // UseCallback for error handler
  const handleVideoError = useCallback(() => {
    setHasError(true)
    console.error('Video failed to load:', videoSrc)
  }, [videoSrc])

  // Effect to handle video playback
  // Only runs when videoSrc changes or on mount
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play video with user interaction workaround
    const playVideo = async () => {
      try {
        // Set video properties for optimal performance
        video.playbackRate = 1.0
        video.muted = true // Required for autoplay in most browsers
        
        await video.play()
      } catch (error) {
        console.warn('Video autoplay failed:', error)
        // Fallback: show poster image
        setHasError(true)
      }
    }

    // Check if video is already loaded
    if (video.readyState >= 3) {
      handleVideoLoad()
      playVideo()
    }

    // Add event listeners
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('error', handleVideoError)

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('error', handleVideoError)
    }
  }, [videoSrc, handleVideoLoad, handleVideoError])

  // Use intersection observer to pause video when not visible
  // Improves performance by not rendering video frames when off-screen
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Fallback image for mobile or video load failures
  if (hasError || (posterSrc && window.innerWidth < 768)) {
    return (
      <div className="absolute inset-0 -z-10">
        <img
          src={posterSrc || '/assets/images/fallback-bg.jpg'}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-darkGreen/70" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Loading state with skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-darkGreen animate-pulse" />
      )}
      
      {/* Video element with performance optimizations */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline // Important for mobile
        poster={posterSrc}
        // Disable right-click to prevent user controls
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay for better text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-darkGreen/30 via-transparent to-darkGreen/70"
      />
    </div>
  )
})

VideoBackgroundOptimized.displayName = 'VideoBackgroundOptimized'

export default VideoBackgroundOptimized