import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ChatFlamingo3DProps {
  animationState?: 'idle' | 'happy' | 'thinking' | 'excited'
  scale?: number
}

export default function ChatFlamingo3D({
  animationState = 'idle',
  scale = 1.2,
}: ChatFlamingo3DProps) {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/assets/models/chat-model-flamingo.glb')

  useFrame((state) => {
    if (!group.current) return
    
    const time = state.clock.elapsedTime
    
    // Different animations based on state
    switch (animationState) {
      case 'idle':
        group.current.rotation.y = Math.sin(time * 0.5) * 0.1
        group.current.position.y = Math.sin(time) * 0.05
        break
      case 'happy':
        group.current.rotation.y = Math.sin(time * 2) * 0.2
        group.current.position.y = Math.sin(time * 3) * 0.1
        break
      case 'thinking':
        group.current.rotation.y = time * 0.3
        group.current.position.y = Math.sin(time * 0.5) * 0.03
        break
      case 'excited':
        group.current.rotation.y = Math.sin(time * 4) * 0.3
        group.current.position.y = Math.sin(time * 5) * 0.15
        break
    }
  })

  return (
    <>
      <group ref={group} scale={scale}>
        <primitive object={scene} />
        {/* Add a subtle glow effect */}
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#E59FCE" distance={2} />
      </group>
      
      {/* Add a reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          blur={[300, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#041812"
          metalness={0.5}
        />
      </mesh>
    </>
  )
}

// Preload the model
useGLTF.preload('/assets/models/chat-model-flamingo.glb')