import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InteractiveSlotDemoProps {
  onComplete?: () => void
}

const SYMBOLS = ['🍒', '🍋', '🍊', '🍇', '💎', '7️⃣', '🎰']

export default function InteractiveSlotDemo({ onComplete }: InteractiveSlotDemoProps) {
  const [reels, setReels] = useState(['🍒', '🍋', '🍊'])
  const [spinning, setSpinning] = useState(false)
  const [probability, setProbability] = useState(0)
  const [recommendation, setRecommendation] = useState('')
  const [hasSpun, setHasSpun] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  const spinReels = () => {
    setSpinning(true)
    setAnalyzing(true)
    setHasSpun(true)
    
    const spinDuration = 2000
    const intervals: NodeJS.Timeout[] = []
    
    reels.forEach((_, index) => {
      intervals[index] = setInterval(() => {
        setReels(prev => {
          const newReels = [...prev]
          newReels[index] = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
          return newReels
        })
      }, 100)
    })

    setTimeout(() => {
      intervals.forEach(interval => clearInterval(interval))
      
      const finalReels = Array(3).fill(null).map(() => 
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      )
      setReels(finalReels)
      setSpinning(false)
      
      const hasWin = finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2]
      const calculatedProb = hasWin ? 87.3 : Math.random() * 40 + 20
      setProbability(calculatedProb)
      
      setRecommendation(
        calculatedProb > 70 
          ? 'High probability detected!' 
          : calculatedProb > 40 
          ? 'Moderate chance' 
          : 'Low probability - wait'
      )
      
      setTimeout(() => {
        setAnalyzing(false)
        if (onComplete) onComplete()
      }, 1000)
    }, spinDuration)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setProbability(Math.random() * 30 + 10)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-limeGreen/20 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-limeGreen">Live Demo</h3>
          
          <div className="flex justify-center space-x-2">
            {reels.map((symbol, index) => (
              <motion.div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-darkGreen border-2 border-limeGreen/30 
                         rounded-lg flex items-center justify-center text-3xl sm:text-4xl"
                animate={spinning ? { 
                  y: [-100, 0],
                  transition: { 
                    duration: 0.1, 
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                } : {}}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
          
          <motion.button
            onClick={spinReels}
            disabled={spinning}
            whileHover={{ scale: spinning ? 1 : 1.05 }}
            whileTap={{ scale: spinning ? 1 : 0.95 }}
            className={`
              w-full py-3 px-6 rounded-lg font-bold transition-all duration-300
              ${spinning 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-pink hover:bg-pink/80 shadow-[0_0_20px_rgba(229,159,206,0.5)]'
              }
            `}
          >
            {spinning ? 'Analyzing...' : hasSpun ? 'Spin Again' : 'Try a Spin'}
          </motion.button>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-pink">AI Analysis</h3>
          
          <div className="space-y-3">
            <div className="bg-darkGreen/50 rounded-lg p-4">
              <div className="text-sm text-beigeCream/60 mb-1">Win Probability</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={probability}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="text-3xl font-bold text-limeGreen"
                >
                  {analyzing ? '...' : `${probability.toFixed(1)}%`}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="bg-darkGreen/50 rounded-lg p-4">
              <div className="text-sm text-beigeCream/60 mb-1">Recommendation</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={recommendation}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="text-lg font-medium text-beigeCream"
                >
                  {analyzing ? 'Analyzing patterns...' : recommendation || 'Ready to analyze'}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {hasSpun && !spinning && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-beigeCream/60 text-center"
            >
              Real AI analyzes 2.7M+ spins daily
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}