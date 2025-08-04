import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import VideoOverlay from './VideoOverlay'
import { VideoCase } from './InteractiveVideoPlayer'

interface MainVideoDisplayProps {
  activeVideo: VideoCase
}

export default function MainVideoDisplay({ activeVideo }: MainVideoDisplayProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [activeVideo.videoUrl])

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden bg-black"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Neon Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 20px rgba(171, 248, 11, 0.5)',
            '0 0 40px rgba(229, 159, 206, 0.5)',
            '0 0 20px rgba(171, 248, 11, 0.5)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-auto relative z-10"
        controls
        loop
        muted
        playsInline
        poster={activeVideo.thumbnailUrl}
      >
        <source src={activeVideo.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* HUD Overlay */}
      <VideoOverlay activeVideo={activeVideo} />
    </motion.div>
  )
}