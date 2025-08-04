import { motion } from 'framer-motion'
import { VideoCase } from './InteractiveVideoPlayer'

interface VideoOverlayProps {
  activeVideo: VideoCase
}

export default function VideoOverlay({ activeVideo }: VideoOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none font-mono">
      {/* Top Left - Recording Status and Case ID */}
      <motion.div
        className="absolute top-4 left-4 text-limeGreen text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            className="inline-block w-2 h-2 bg-pink rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-pink font-bold">REC</span>
        </div>
        <div className="text-beigeCream/60">
          CASE_ID: <span className="text-limeGreen">{activeVideo.id}</span>
        </div>
      </motion.div>

      {/* Top Right - Protocol and Accuracy */}
      <motion.div
        className="absolute top-4 right-4 text-right text-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-beigeCream/60 mb-1">
          PROTOCOL: <span className="text-pink">{activeVideo.protocol}</span>
        </div>
        <div className="text-beigeCream/60">
          CORE_ACCURACY: <span className="text-limeGreen">{activeVideo.accuracy}</span>
        </div>
      </motion.div>

      {/* Bottom Left - Target and Analysis */}
      <motion.div
        className="absolute bottom-4 left-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {activeVideo.target && (
          <div className="text-beigeCream/60 mb-1">
            TARGET: <span className="text-limeGreen">{activeVideo.target}</span>
          </div>
        )}
        {activeVideo.analysis && (
          <div className="text-beigeCream/60">
            ANALYSIS: <span className="text-pink">{activeVideo.analysis}</span>
          </div>
        )}
      </motion.div>

      {/* Corner Brackets */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Top Left Corner */}
        <motion.path
          d="M 20 20 L 20 40 M 20 20 L 40 20"
          stroke="rgba(171, 248, 11, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Top Right Corner */}
        <motion.path
          d="M -20 20 L -20 40 M -20 20 L -40 20"
          stroke="rgba(171, 248, 11, 0.3)"
          strokeWidth="2"
          fill="none"
          style={{ transform: 'translateX(100%)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />
        {/* Bottom Left Corner */}
        <motion.path
          d="M 20 -20 L 20 -40 M 20 -20 L 40 -20"
          stroke="rgba(229, 159, 206, 0.3)"
          strokeWidth="2"
          fill="none"
          style={{ transform: 'translateY(100%)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* Bottom Right Corner */}
        <motion.path
          d="M -20 -20 L -20 -40 M -20 -20 L -40 -20"
          stroke="rgba(229, 159, 206, 0.3)"
          strokeWidth="2"
          fill="none"
          style={{ transform: 'translate(100%, 100%)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>

      {/* Scan Lines Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(171, 248, 11, 0.1) 2px, rgba(171, 248, 11, 0.1) 4px)'
        }}
        animate={{ y: [0, 4] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
    </div>
  )
}