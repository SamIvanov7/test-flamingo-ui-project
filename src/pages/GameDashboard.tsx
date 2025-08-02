import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ProbabilityCard from '../components/ProbabilityCard'
import ChatPanel from '../components/ChatPanel'
import GameControls from '../components/GameControls'
import SessionHeader from '../components/SessionHeader'
import SlotSelectionModal from '../components/SlotSelectionModal'
import VideoBackgroundClean from '../components/VideoBackgroundClean'

export default function GameDashboard() {
  const navigate = useNavigate()
  const [probability, setProbability] = useState(45)
  const [balance, setBalance] = useState(1000)
  const [sessionTime, setSessionTime] = useState(0)
  const [currentSlot, setCurrentSlot] = useState('Lucky Fortune')
  const [betSize, setBetSize] = useState(10)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showSlotSelection, setShowSlotSelection] = useState(false)

  // Update session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulate probability changes
  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setProbability(Math.floor(Math.random() * 100))
      }, 100)
      
      setTimeout(() => {
        clearInterval(interval)
        setIsSpinning(false)
        // Update balance based on outcome
        const won = probability > 50
        setBalance(prev => won ? prev + betSize * 2 : prev - betSize)
      }, 2000)
      
      return () => clearInterval(interval)
    }
  }, [isSpinning, betSize, probability])

  const handleSpin = () => {
    if (balance >= betSize && !isSpinning) {
      setIsSpinning(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Video Background */}
      <VideoBackgroundClean videoSrc="/assets/videos/chat-background-flamingo.mp4" />

      <div className="relative z-10">
        {/* Header */}
        <SessionHeader
          slotName={currentSlot}
          balance={balance}
          sessionTime={sessionTime}
          onOpenSettings={() => navigate('/settings')}
          onSelectSlot={() => setShowSlotSelection(true)}
        />

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Probability Card */}
            <div className="flex items-center justify-center">
              <ProbabilityCard
                probability={probability}
                isSpinning={isSpinning}
              />
            </div>

            {/* Chat Panel */}
            <div className="flex items-stretch">
              <ChatPanel
                probability={probability}
                balance={balance}
                isSpinning={isSpinning}
              />
            </div>
          </div>

          {/* Game Controls */}
          <div className="mt-8">
            <GameControls
              betSize={betSize}
              setBetSize={setBetSize}
              balance={balance}
              isSpinning={isSpinning}
              onSpin={handleSpin}
            />
          </div>
        </div>
      </div>

      {/* Slot Selection Modal */}
      {showSlotSelection && (
        <SlotSelectionModal
          currentSlot={currentSlot}
          onSelect={(slot) => {
            setCurrentSlot(slot)
            setShowSlotSelection(false)
          }}
          onClose={() => setShowSlotSelection(false)}
        />
      )}
    </motion.div>
  )
}