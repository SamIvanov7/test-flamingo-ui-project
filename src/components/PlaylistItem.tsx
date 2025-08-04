import { motion } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'
import { VideoCase } from './InteractiveVideoPlayer'

interface PlaylistItemProps {
  video: VideoCase
  isActive: boolean
  onSelect: () => void
}

export default function PlaylistItem({ video, isActive, onSelect }: PlaylistItemProps) {
  return (
    <motion.button
      onClick={onSelect}
      className={`
        w-full text-left p-3 rounded-lg transition-all duration-300
        ${isActive 
          ? 'bg-gradient-to-r from-limeGreen/20 to-pink/20 border border-limeGreen' 
          : 'bg-darkGreen/50 border border-beigeCream/10 hover:border-beigeCream/30'
        }
      `}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        {/* Thumbnail */}
        <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className={`w-full h-full object-cover ${isActive ? 'opacity-100' : 'opacity-60'}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/placeholder-video.png'
            }}
          />
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-limeGreen/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Play className="w-6 h-6 text-limeGreen" fill="currentColor" />
            </motion.div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-mono text-sm mb-1 ${isActive ? 'text-limeGreen' : 'text-beigeCream'}`}>
            {video.title}
          </h4>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {video.tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  text-xs px-2 py-0.5 rounded font-mono
                  ${isActive 
                    ? 'bg-limeGreen/20 text-limeGreen border border-limeGreen/30' 
                    : 'bg-beigeCream/10 text-beigeCream/60 border border-beigeCream/20'
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Arrow Indicator */}
        <motion.div
          className={`flex-shrink-0 ${isActive ? 'text-limeGreen' : 'text-beigeCream/40'}`}
          animate={{ x: isActive ? [0, 5, 0] : 0 }}
          transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </div>
      
      {/* Active Indicator Bar */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-limeGreen to-pink"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  )
}