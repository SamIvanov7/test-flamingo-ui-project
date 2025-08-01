import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import ChatFlamingo3D from './ChatFlamingo3D'

interface Message {
  id: string
  text: string
  sender: 'user' | 'flamingo'
  timestamp: Date
}

interface ChatPanelProps {
  probability: number
  balance: number
  isSpinning: boolean
}

const quickReplies = [
  "What's my chance?",
  "Should I increase bet?",
  "Show statistics",
  "Tips for winning"
]

export default function ChatPanel({ probability, balance, isSpinning }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. I'll help you make informed decisions while playing. How can I help you today?",
      sender: 'flamingo',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [flamingoState, setFlamingoState] = useState<'idle' | 'happy' | 'thinking' | 'excited'>('idle')

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // React to probability changes
  useEffect(() => {
    if (isSpinning) {
      setFlamingoState('thinking')
    } else if (probability > 66) {
      setFlamingoState('excited')
    } else if (probability > 33) {
      setFlamingoState('happy')
    } else {
      setFlamingoState('idle')
    }
  }, [probability, isSpinning])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response
    setTimeout(() => {
      let response = ''
      
      if (text.toLowerCase().includes('chance') || text.toLowerCase().includes('probability')) {
        response = `Current win probability is ${probability}%. ${
          probability > 66 ? "Looking good! 🎰" : 
          probability > 33 ? "Moderate chances ahead." : 
          "Might want to wait for better odds."
        }`
      } else if (text.toLowerCase().includes('bet')) {
        response = `Your current balance is ${balance} WNT. ${
          balance > 500 ? "You have room to increase your bet if you're feeling lucky!" :
          "Consider keeping your bets conservative with your current balance."
        }`
      } else if (text.toLowerCase().includes('statistics')) {
        response = "In the last hour: Average probability 48%, Best streak: 5 wins, Highest payout: 250 WNT"
      } else if (text.toLowerCase().includes('tips')) {
        response = "Set a budget and stick to it. Take breaks every 30 minutes. Remember, it's entertainment!"
      } else {
        response = "I'm here to help! Ask me about probabilities, betting strategies, or responsible gaming tips."
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'flamingo',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="glassmorphism rounded-3xl p-6 h-full flex flex-col">
      {/* Flamingo Avatar */}
      <div className="h-32 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-salmon/20 to-acid/20">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#E59FCE" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ABF80B" />
          <spotLight 
            position={[0, 5, 2]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1} 
            color="#ABF80B"
            castShadow
          />
          <directionalLight position={[0, 2, 5]} intensity={0.5} color="#E7DFCE" />
          <ChatFlamingo3D 
            animationState={flamingoState}
            scale={1.2}
          />
        </Canvas>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 min-h-[300px]">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-acid/20 text-acid border border-acid/30'
                    : 'bg-salmon/20 text-cream border border-salmon/30'
                } backdrop-blur-sm`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-50 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {quickReplies.map((reply) => (
          <motion.button
            key={reply}
            onClick={() => handleSendMessage(reply)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-sm glassmorphism rounded-full
                     hover:bg-white/10 transition-colors magnetic-hover"
          >
            {reply}
          </motion.button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSendMessage(inputValue)
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10
                   text-cream placeholder-cream/50 focus:outline-none focus:border-acid/50
                   transition-colors"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-acid text-djungle font-semibold rounded-xl
                   hover:shadow-[0_0_20px_rgba(173,255,0,0.5)] transition-all"
        >
          Send
        </motion.button>
      </form>
    </div>
  )
}