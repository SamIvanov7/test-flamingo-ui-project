import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Flamingo3D from './Flamingo3D'

export default function Flamingo3DWrapper() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Flamingo3D 
            animationState="happy"
            interactionMode="static"
            scale={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}