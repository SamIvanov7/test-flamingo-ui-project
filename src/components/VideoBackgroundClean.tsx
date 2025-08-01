import { useEffect, useRef } from 'react'

interface VideoBackgroundCleanProps {
  videoSrc: string
}

export default function VideoBackgroundClean({ videoSrc }: VideoBackgroundCleanProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}