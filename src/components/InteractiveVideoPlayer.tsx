import { useState } from 'react'
import MainVideoDisplay from './MainVideoDisplay'
import VideoPlaylist from './VideoPlaylist'

export interface VideoCase {
  id: string
  title: string
  protocol: string
  accuracy: string
  tags: string[]
  thumbnailUrl: string
  videoUrl: string
  analysis?: string
  target?: string
}

const videoCases: VideoCase[] = [
  {
    id: 'case001',
    title: "Case #001: Breakthrough in 'Gates of Olympus'",
    protocol: 'Hunter Protocol',
    accuracy: '94%',
    tags: ['Bonus Game', 'High Volatility'],
    thumbnailUrl: '/assets/images/thumb_olympus.png',
    videoUrl: '/assets/videos/case_olympus.mp4',
    target: 'Gates of Olympus',
    analysis: 'Pattern Detection in Bonus Rounds'
  },
  {
    id: 'case002',
    title: "Case #002: Analysis of 'The Dog House'",
    protocol: 'Hunter Protocol',
    accuracy: '95%',
    tags: ['Multipliers', 'Base Game'],
    thumbnailUrl: '/assets/images/thumb_doghouse.png',
    videoUrl: '/assets/videos/case_doghouse.mp4',
    target: 'The Dog House',
    analysis: 'Multiplier Prediction Algorithm'
  },
  {
    id: 'case003',
    title: "Case #003: 'Buy Bonus' Prediction",
    protocol: 'Oracle Protocol',
    accuracy: '99.8%',
    tags: ['Buy Bonus', 'RTP-Analysis', 'Oracle'],
    thumbnailUrl: '/assets/images/thumb_bonanza.png',
    videoUrl: '/assets/videos/case_bonanza.mp4',
    target: 'Sweet Bonanza',
    analysis: 'Predictive Buy Bonus Value'
  }
]

export default function InteractiveVideoPlayer() {
  const [activeVideo, setActiveVideo] = useState<VideoCase>(videoCases[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {/* Main Video Display - Takes up 2 columns on large screens */}
      <div className="lg:col-span-2">
        <MainVideoDisplay activeVideo={activeVideo} />
      </div>
      
      {/* Video Playlist - Takes up 1 column on large screens */}
      <div className="lg:col-span-1">
        <VideoPlaylist 
          videos={videoCases}
          activeVideo={activeVideo}
          onVideoSelect={setActiveVideo}
        />
      </div>
    </div>
  )
}