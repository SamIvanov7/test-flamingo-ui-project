import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleFieldProps {
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
  'χ² = Σ(O-E)²/E',
  'H₀: μ = μ₀',
  'ℒ = ∑log P(xᵢ|θ)',
  'S = -k∑p·log(p)',
  'ΔS ≥ 0',
  'I(X;Y) = H(X) - H(X|Y)',
  'DKL(P||Q) = ∑P(x)log(P(x)/Q(x))'
]

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  formula: string
  scale: number
  opacity: number
}

export default function ParticleField({ 
  count = 30, 
  density = 1, 
  color = '#ABF80B' 
}: ParticleFieldProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  // Create particles with formulas
  const particles = useMemo(() => {
    const particleArray: Particle[] = []
    
    for (let i = 0; i < count; i++) {
      particleArray.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01 + 0.005,
          (Math.random() - 0.5) * 0.01
        ),
        formula: mathFormulas[Math.floor(Math.random() * mathFormulas.length)],
        scale: 0.08 + Math.random() * 0.12,
        opacity: 0.6 + Math.random() * 0.4
      })
    }
    
    return particleArray
  }, [count])

  useFrame((state) => {
    if (!groupRef.current) return
    
    const time = state.clock.elapsedTime
    
    // Rotate entire group
    groupRef.current.rotation.y = time * 0.02
    
    // Update each particle
    particles.forEach((particle, i) => {
      // Update position
      particle.position.x += particle.velocity.x * density
      particle.position.y += particle.velocity.y * density
      particle.position.z += particle.velocity.z * density
      
      // Wrap around
      if (particle.position.y > 4) {
        particle.position.y = -4
        particle.position.x = (Math.random() - 0.5) * 8
        particle.position.z = (Math.random() - 0.5) * 8
      }
      if (Math.abs(particle.position.x) > 4) {
        particle.position.x *= -0.9
      }
      if (Math.abs(particle.position.z) > 4) {
        particle.position.z *= -0.9
      }
      
      // Update opacity for pulsing effect
      particle.opacity = 0.6 + Math.sin(time * 2 + i * 0.5) * 0.3
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
            color={color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={particle.opacity}
            outlineWidth={0.004}
            outlineColor="#000000"
            outlineOpacity={0.3}
          >
            {particle.formula}
          </Text>
        </Billboard>
      ))}
    </group>
  )
}