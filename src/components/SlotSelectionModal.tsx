import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, RoundedBox, Float } from '@react-three/drei'
import * as THREE from 'three'

interface SlotSelectionModalProps {
  currentSlot: string
  onSelect: (slot: string) => void
  onClose: () => void
}

interface Slot {
  id: string
  name: string
  theme: string
  volatility: 'Low' | 'Medium' | 'High'
  rtp: number
  color: string
}

const slots: Slot[] = [
  { id: '1', name: 'Lucky Fortune', theme: 'Asian', volatility: 'Medium', rtp: 96.5, color: '#FF6B6B' },
  { id: '2', name: 'Cosmic Cash', theme: 'Space', volatility: 'High', rtp: 94.8, color: '#4ECDC4' },
  { id: '3', name: 'Golden Pharaoh', theme: 'Egyptian', volatility: 'Low', rtp: 97.2, color: '#FFD93D' },
  { id: '4', name: 'Wild Safari', theme: 'Animals', volatility: 'Medium', rtp: 95.9, color: '#95E1D3' },
  { id: '5', name: 'Neon Nights', theme: 'Retro', volatility: 'High', rtp: 93.5, color: '#F38181' },
  { id: '6', name: 'Ocean Treasures', theme: 'Underwater', volatility: 'Low', rtp: 96.8, color: '#08D9D6' },
]

function SlotCard3D({ slot, index, totalSlots, isSelected, onSelect }: {
  slot: Slot
  index: number
  totalSlots: number
  isSelected: boolean
  onSelect: () => void
}) {
  const meshRef = useRef<THREE.Group>(null)
  const angle = (index / totalSlots) * Math.PI * 2

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate carousel
      const time = state.clock.elapsedTime
      meshRef.current.position.x = Math.sin(angle + time * 0.2) * 3
      meshRef.current.position.z = Math.cos(angle + time * 0.2) * 3
      meshRef.current.rotation.y = -angle - time * 0.2
      
      // Scale up when in front
      const frontFactor = Math.max(0, Math.cos(angle + time * 0.2))
      meshRef.current.scale.setScalar(0.8 + frontFactor * 0.2)
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group
        ref={meshRef}
        onClick={onSelect}
      >
        <RoundedBox
          args={[2, 3, 0.3]}
          radius={0.1}
          smoothness={4}
        >
          <meshStandardMaterial
            color={slot.color}
            emissive={slot.color}
            emissiveIntensity={isSelected ? 0.5 : 0.2}
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0.5, 0.2]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {slot.name}
        </Text>
        
        <Text
          position={[0, 0, 0.2]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {slot.theme}
        </Text>
        
        <Text
          position={[0, -0.5, 0.2]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          RTP: {slot.rtp}%
        </Text>
      </group>
    </Float>
  )
}

export default function SlotSelectionModal({ currentSlot, onSelect, onClose }: SlotSelectionModalProps) {
  const [selectedSlot, setSelectedSlot] = useState(currentSlot)
  const [filter, setFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all')

  const filteredSlots = filter === 'all' 
    ? slots 
    : slots.filter(slot => slot.volatility.toLowerCase() === filter)

  const handleSelect = (slotName: string) => {
    setSelectedSlot(slotName)
    setTimeout(() => {
      onSelect(slotName)
    }, 300)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-6xl h-[80vh] glassmorphism rounded-3xl p-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-cream">Select a Slot Machine</h2>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Filters */}
          <div className="flex space-x-3 mb-6">
            {(['all', 'low', 'medium', 'high'] as const).map((volatility) => (
              <motion.button
                key={volatility}
                onClick={() => setFilter(volatility)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl capitalize transition-all ${
                  filter === volatility
                    ? 'bg-acid text-djungle'
                    : 'bg-white/10 text-cream hover:bg-white/20'
                }`}
              >
                {volatility === 'all' ? 'All Slots' : `${volatility} Volatility`}
              </motion.button>
            ))}
          </div>

          {/* 3D Carousel */}
          <div className="h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-djungle/50">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
              
              {filteredSlots.map((slot, index) => (
                <SlotCard3D
                  key={slot.id}
                  slot={slot}
                  index={index}
                  totalSlots={filteredSlots.length}
                  isSelected={selectedSlot === slot.name}
                  onSelect={() => handleSelect(slot.name)}
                />
              ))}
            </Canvas>
          </div>

          {/* Slot Details */}
          <motion.div
            className="mt-6 text-center"
            key={selectedSlot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-cream/60 mb-2">Selected:</p>
            <p className="text-2xl font-bold text-acid">{selectedSlot}</p>
          </motion.div>

          {/* Skeleton loading preview */}
          <div className="mt-4 flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-20 h-20 bg-white/10 rounded-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}