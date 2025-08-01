import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GameControlsProps {
  betSize: number
  setBetSize: (size: number) => void
  balance: number
  isSpinning: boolean
  onSpin: () => void
}

const betOptions = [1, 5, 10, 25, 50, 100]

export default function GameControls({ 
  betSize, 
  setBetSize, 
  balance, 
  isSpinning, 
  onSpin 
}: GameControlsProps) {
  const [isCharging, setIsCharging] = useState(false)
  const [chargeLevel, setChargeLevel] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isCharging && !isSpinning) {
      interval = setInterval(() => {
        setChargeLevel(prev => Math.min(prev + 2, 100))
      }, 20)
    } else {
      setChargeLevel(0)
    }

    return () => clearInterval(interval)
  }, [isCharging, isSpinning])

  const handleMouseDown = () => {
    if (!isSpinning && balance >= betSize) {
      setIsCharging(true)
    }
  }

  const handleMouseUp = () => {
    if (isCharging) {
      setIsCharging(false)
      onSpin()
    }
  }

  return (
    <div className="glassmorphism rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        {/* Bet Size Selector */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-beigeCream mb-4">Bet Size</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {betOptions.map((option) => (
              <motion.button
                key={option}
                onClick={() => setBetSize(option)}
                disabled={option > balance}
                whileHover={{ scale: option <= balance ? 1.05 : 1 }}
                whileTap={{ scale: option <= balance ? 0.95 : 1 }}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  betSize === option
                    ? 'bg-limeGreen text-darkGreen shadow-[0_0_20px_rgba(171,248,11,0.5)]'
                    : option > balance
                    ? 'bg-white/5 text-beigeCream/30 cursor-not-allowed'
                    : 'bg-white/10 text-beigeCream hover:bg-white/20'
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Custom Bet Input */}
        <div className="mb-8">
          <label className="block text-sm text-beigeCream/70 mb-2">Custom Bet</label>
          <div className="flex gap-3">
            <input
              type="number"
              value={betSize}
              onChange={(e) => {
                const value = Math.min(Number(e.target.value), balance)
                setBetSize(Math.max(1, value))
              }}
              className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10
                       text-beigeCream focus:outline-none focus:border-limeGreen/50 transition-colors"
            />
            <div className="flex gap-1">
              <motion.button
                onClick={() => setBetSize(Math.max(1, betSize - 10))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-white/10 rounded-l-xl hover:bg-white/20 transition-colors"
              >
                -10
              </motion.button>
              <motion.button
                onClick={() => setBetSize(Math.min(balance, betSize + 10))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-white/10 rounded-r-xl hover:bg-white/20 transition-colors"
              >
                +10
              </motion.button>
            </div>
          </div>
        </div>

        {/* Spin Button */}
        <div className="flex items-center justify-between">
          <motion.button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsCharging(false)}
            disabled={balance < betSize || isSpinning}
            whileHover={{ scale: balance >= betSize && !isSpinning ? 1.05 : 1 }}
            whileTap={{ scale: balance >= betSize && !isSpinning ? 0.95 : 1 }}
            className={`relative px-12 py-6 rounded-2xl font-bold text-2xl transition-all
                      overflow-hidden ${
              balance < betSize || isSpinning
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-limeGreen text-darkGreen hover:shadow-[0_0_40px_rgba(171,248,11,0.6)]'
            }`}
          >
            {/* Charging animation background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isCharging ? '100%' : '-100%' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            
            {/* Charge level indicator */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-white/50 transition-all duration-100"
              style={{ width: `${chargeLevel}%` }}
            />

            {/* Button text */}
            <span className="relative z-10">
              {isSpinning ? 'Spinning...' : isCharging ? 'Hold to Spin!' : 'SPIN'}
            </span>

            {/* Math formulas floating effect */}
            {isCharging && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[
                  'P(x) = λe^(-λx)',
                  '∑(n=1 to ∞)',
                  'RNG ≠ Random',
                  'σ² = E[X²] - μ²',
                  'H(X) = -∑p(x)log p(x)',
                  '∫f(x)dx',
                  'Φ(x) = P(X ≤ x)',
                  'E[X] = μ',
                  'Var(X) = σ²',
                  'P(A|B) = P(B|A)P(A)/P(B)'
                ].map((formula, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-limeGreen text-xs font-mono whitespace-nowrap"
                    initial={{
                      x: '50%',
                      y: '50%',
                      scale: 0,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 300}%`,
                      y: `${50 + (Math.random() - 0.5) * 300}%`,
                      scale: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                      rotate: (Math.random() - 0.5) * 90,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeOut',
                    }}
                    style={{
                      textShadow: '0 0 10px rgba(171, 248, 11, 0.8)',
                    }}
                  >
                    {formula}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.button>

          {/* Responsible Gaming Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-4 glassmorphism rounded-xl hover:bg-white/10 transition-colors
                     group relative"
          >
            <svg 
              className="w-8 h-8 text-mossGreen animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            <span className="absolute -top-8 right-0 px-2 py-1 bg-raisinBlack/90 text-xs rounded
                           opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Play Responsibly
            </span>
          </motion.button>
        </div>

        {/* Bet Info */}
        <div className="mt-6 flex justify-between text-sm text-beigeCream/60">
          <span>Bet: {betSize} WNT</span>
          <span>Potential Win: {betSize * 2} WNT</span>
          <span>Balance After: {balance - betSize} WNT</span>
        </div>
      </div>
    </div>
  )
}