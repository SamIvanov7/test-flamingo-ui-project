import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleFieldProps {
  mode?: 'chaos' | 'order'
  isActive?: boolean
  count?: number
  density?: number
  color?: string
}

const mathFormulas = [
  'P(x) = λe^(-λx)',
  '∑(n=1 to ∞)',
  'RNG ≠ Random',
  'σ² = E[X²] - μ²',
  'H(X) = -∑p(x)log p(x)',
  '∫f(x)dx',
  'Φ(x) = P(X ≤ x)',
  'E[X] = μ',
  'Var(X) = σ²',
  'P(A|B) = P(B|A)P(A)/P(B)',
  'lim(n→∞)',
  '∇²ψ = 0',
  'e^(iπ) + 1 = 0',
  'χ² = Σ(O-E)²/E'
]

const casinoSymbols = ['$', '€', '£', '¥', '♠', '♥', '♦', '♣', '7', '🎰', '💰', '🎲', '⚡', '❌', '💸']

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  targetPosition: THREE.Vector3
  formula: string
  scale: number
  opacity: number
  rotation: number
  rotationSpeed: number
  color: string
}

function ParticleFieldContent({ 
  mode = 'chaos',
  isActive = true,
  count = 20, 
  density = 1, 
  color = '#ABF80B' 
}: ParticleFieldProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const particlesRef = useRef<Particle[]>([])
  
  // Create particles with formulas or casino symbols
  const particles = useMemo(() => {
    const particleArray: Particle[] = []
    const symbols = mode === 'chaos' ? [...mathFormulas, ...casinoSymbols] : mathFormulas
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 2 + Math.random() * 2
      
      particleArray.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ),
        targetPosition: new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.5,
          Math.sin(angle) * radius * 0.5
        ),
        formula: symbols[Math.floor(Math.random() * symbols.length)],
        scale: mode === 'chaos' ? 0.15 + Math.random() * 0.25 : 0.1 + Math.random() * 0.1,
        opacity: 0.6 + Math.random() * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        color: mode === 'chaos' 
          ? ['#FF6B6B', '#FF006E', '#C9184A', '#FFB700', '#06FFA5'][Math.floor(Math.random() * 5)]
          : color
      })
    }
    
    particlesRef.current = particleArray
    return particleArray
  }, [count, mode, color])

  useFrame((state) => {
    if (!groupRef.current || !isActive) return
    
    const time = state.clock.elapsedTime
    
    // Rotate entire group based on mode
    if (mode === 'chaos') {
      groupRef.current.rotation.y = time * 0.05
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
    } else {
      groupRef.current.rotation.y = time * 0.01
    }
    
    // Update each particle
    particlesRef.current.forEach((particle, i) => {
      if (mode === 'chaos') {
        // Chaotic movement
        particle.velocity.x += (Math.random() - 0.5) * 0.002
        particle.velocity.y += (Math.random() - 0.5) * 0.002
        particle.velocity.z += (Math.random() - 0.5) * 0.002
        
        // Apply velocity with damping
        particle.position.x += particle.velocity.x * density
        particle.position.y += particle.velocity.y * density
        particle.position.z += particle.velocity.z * density
        
        // Bounce off boundaries
        if (Math.abs(particle.position.x) > 5) {
          particle.velocity.x *= -0.8
          particle.position.x = Math.sign(particle.position.x) * 5
        }
        if (Math.abs(particle.position.y) > 5) {
          particle.velocity.y *= -0.8
          particle.position.y = Math.sign(particle.position.y) * 5
        }
        if (Math.abs(particle.position.z) > 3) {
          particle.velocity.z *= -0.8
          particle.position.z = Math.sign(particle.position.z) * 3
        }
        
        // Random rotation
        particle.rotation += particle.rotationSpeed
        
        // Flickering opacity
        particle.opacity = 0.3 + Math.random() * 0.7 + Math.sin(time * 10 + i) * 0.2
      } else {
        // Ordered movement - smooth interpolation to target positions
        const lerpFactor = 0.02
        particle.position.lerp(particle.targetPosition, lerpFactor)
        
        // Gentle orbital motion
        const orbitRadius = 0.1
        particle.position.x += Math.sin(time + i * 0.5) * orbitRadius * 0.01
        particle.position.y += Math.cos(time * 0.7 + i * 0.3) * orbitRadius * 0.01
        
        // Stable rotation
        particle.rotation = i * 0.1
        
        // Gentle pulsing
        particle.opacity = 0.8 + Math.sin(time * 2 + i * 0.5) * 0.2
      }
    })
  })

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <Billboard
          key={index}
          position={particle.position}
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false}
        >
          <Text
            fontSize={particle.scale}
            color={particle.color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={particle.opacity}
            outlineWidth={mode === 'chaos' ? 0.006 : 0.004}
            outlineColor={mode === 'chaos' ? '#FF0000' : '#000000'}
            outlineOpacity={mode === 'chaos' ? 0.5 : 0.3}
            rotation={[0, 0, particle.rotation]}
          >
            {particle.formula}
          </Text>
        </Billboard>
      ))}
    </group>
  )
}

export default function ParticleField(props: ParticleFieldProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleFieldContent {...props} />
      </Canvas>
    </div>
  )
}