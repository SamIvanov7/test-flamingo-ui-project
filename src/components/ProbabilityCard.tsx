import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface ProbabilityCardProps {
  probability: number
  isSpinning: boolean
}

function RadialProgress({ value, color }: { value: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = -Math.PI / 2
      
      // Mesh deformation based on probability
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 * (value / 100)
      meshRef.current.scale.set(scale, scale, 1)
    }

    // Particle emission at high probabilities
    if (particlesRef.current && value > 66) {
      particlesRef.current.rotation.z += 0.01
      particlesRef.current.position.z = Math.sin(state.clock.elapsedTime * 3) * 0.1
    }
  })

  // Create ring geometry
  const geometry = new THREE.RingGeometry(1.5, 2, 64, 1, 0, (value / 100) * Math.PI * 2)

  return (
    <group>
      {/* Progress ring */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glow effect */}
      <mesh geometry={geometry} scale={[1.1, 1.1, 1]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Particles for high probability */}
      {value > 66 && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={50}
              array={new Float32Array(150).map(() => (Math.random() - 0.5) * 4)}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color={color}
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}
    </group>
  )
}

export default function ProbabilityCard({ probability, isSpinning }: ProbabilityCardProps) {

  const getColor = (value: number) => {
    if (value > 66) return '#ABF80B' // Lime Green - High chance
    if (value > 33) return '#E59FCE' // Pink - Moderate
    return '#CE91BA' // Lilac - Low probability
  }

  const color = getColor(probability)

  return (
    <motion.div
      className="glassmorphism p-8 rounded-3xl"
      animate={{
        borderColor: color,
        boxShadow: `0 0 ${isSpinning ? 60 : 30}px ${color}40`,
      }}
      transition={{ duration: 0.5 }}
      style={{ borderWidth: '2px' }}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-beigeCream">
        Win Probability
      </h2>

      <div className="relative w-80 h-80 mx-auto">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Float
            speed={isSpinning ? 10 : 2}
            rotationIntensity={isSpinning ? 2 : 0.5}
            floatIntensity={0.5}
          >
            <RadialProgress value={probability} color={color} />
            
            {/* Percentage text */}
            <Text
              font="/fonts/inter-bold.woff"
              fontSize={1}
              color={color}
              anchorX="center"
              anchorY="middle"
            >
              {probability}%
            </Text>
          </Float>
        </Canvas>

        {/* Animated background effects */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            animation: isSpinning ? 'pulse 0.5s infinite' : 'pulse 2s infinite',
          }}
        />
      </div>

      {/* Status text */}
      <motion.div
        className="text-center mt-6"
        animate={{ opacity: isSpinning ? 0.5 : 1 }}
      >
        <p className="text-lg text-beigeCream/60">
          {isSpinning ? 'Calculating...' : 'Current prediction'}
        </p>
        <motion.p
          className="text-2xl font-bold mt-2"
          animate={{ color }}
          transition={{ duration: 0.5 }}
        >
          {probability > 66 ? 'High Chance!' : probability > 33 ? 'Moderate' : 'Low Probability'}
        </motion.p>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </motion.div>
  )
}