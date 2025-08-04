import { motion } from 'framer-motion'
import PlaylistItem from './PlaylistItem'
import { VideoCase } from './InteractiveVideoPlayer'

interface VideoPlaylistProps {
  videos: VideoCase[]
  activeVideo: VideoCase
  onVideoSelect: (video: VideoCase) => void
}

export default function VideoPlaylist({ videos, activeVideo, onVideoSelect }: VideoPlaylistProps) {
  return (
    <div className="bg-darkGreen/50 backdrop-blur-sm rounded-lg p-4 border border-beigeCream/10">
      <motion.h3
        className="text-lg font-bold text-limeGreen mb-4 font-mono uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Case Files
      </motion.h3>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <PlaylistItem
              video={video}
              isActive={activeVideo.id === video.id}
              onSelect={() => onVideoSelect(video)}
            />
          </motion.div>
        ))}
      </div>
      
    </div>
  )
}