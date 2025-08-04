import { motion } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'
import { VideoCase } from './InteractiveVideoPlayer'
import { KeyboardEvent } from 'react'

interface PlaylistItemProps {
  video: VideoCase
  isActive: boolean
  onSelect: () => void
}

export default function PlaylistItemAccessible({ video, isActive, onSelect }: PlaylistItemProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect()
    }
  }

  return (
    <motion.button
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className={`
        w-full text-left p-3 rounded-lg transition-all duration-300
        ${isActive 
          ? 'bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400' 
          : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
        }
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
      `}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      aria-pressed={isActive}
      aria-label={`${isActive ? 'Currently playing: ' : 'Play video: '}${video.title}`}
      tabIndex={0}
    >
      <div className="flex items-start gap-3">
        {/* Thumbnail */}
        <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden">
          <img
            src={video.thumbnailUrl}
            alt=""
            className={`w-full h-full object-cover ${isActive ? 'opacity-100' : 'opacity-60'}`}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/placeholder-video.png'
            }}
          />
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              aria-hidden="true"
            >
              <Play className="w-6 h-6 text-cyan-400" fill="currentColor" />
            </motion.div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-mono text-sm mb-1 ${isActive ? 'text-cyan-400' : 'text-gray-300'}`}>
            {video.title}
          </h4>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1" role="list" aria-label="Video tags">
            {video.tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  text-xs px-2 py-0.5 rounded font-mono
                  ${isActive 
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' 
                    : 'bg-gray-700/50 text-gray-500 border border-gray-600/30'
                  }
                `}
                role="listitem"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Additional info for screen readers */}
          <div className="sr-only">
            Protocol: {video.protocol}, Accuracy: {video.accuracy}
          </div>
        </div>
        
        {/* Arrow Indicator */}
        <motion.div
          className={`flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-600'}`}
          animate={{ x: isActive ? [0, 5, 0] : 0 }}
          transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
          aria-hidden="true"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </div>
      
      {/* Active Indicator Bar */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        />
      )}
    </motion.button>
  )
}