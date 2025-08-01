import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SessionHeaderProps {
  slotName: string
  balance: number
  sessionTime: number
  onOpenSettings: () => void
  onSelectSlot: () => void
}

export default function SessionHeader({
  slotName,
  balance,
  sessionTime,
  onOpenSettings,
  onSelectSlot
}: SessionHeaderProps) {
  const [displayBalance, setDisplayBalance] = useState(balance)

  // Animate balance changes
  useEffect(() => {
    const diff = balance - displayBalance
    if (diff !== 0) {
      const steps = 20
      const increment = diff / steps
      let current = displayBalance
      let step = 0

      const interval = setInterval(() => {
        current += increment
        step++
        
        if (step >= steps) {
          setDisplayBalance(balance)
          clearInterval(interval)
        } else {
          setDisplayBalance(Math.round(current))
        }
      }, 30)

      return () => clearInterval(interval)
    }
  }, [balance, displayBalance])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <header className="glassmorphism border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Slot Name */}
          <motion.button
            onClick={onSelectSlot}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <h1 className="text-2xl font-bold text-cream group-hover:text-acid transition-colors">
              <span className="inline-block group-hover:animate-glitch">
                {slotName}
              </span>
            </h1>
            <p className="text-sm text-cream/50">Click to change slot</p>
          </motion.button>

          {/* Stats */}
          <div className="flex items-center space-x-8">
            {/* WNT Balance */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm text-cream/50 mb-1">WNT Balance</p>
              <motion.p 
                className="text-2xl font-bold text-acid"
                key={displayBalance}
                initial={{ scale: 1.2, color: '#ffffff' }}
                animate={{ scale: 1, color: '#ADFF00' }}
                transition={{ duration: 0.3 }}
              >
                {displayBalance.toLocaleString()}
              </motion.p>
            </motion.div>

            {/* Session Timer */}
            <div className="text-center">
              <p className="text-sm text-cream/50 mb-1">Session Time</p>
              <p className="text-2xl font-mono text-cream animate-pulse-glow">
                {formatTime(sessionTime)}
              </p>
            </div>

            {/* Settings Button */}
            <motion.button
              onClick={onOpenSettings}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glassmorphism hover:bg-white/10 transition-colors"
            >
              <svg 
                className="w-6 h-6 text-cream" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}