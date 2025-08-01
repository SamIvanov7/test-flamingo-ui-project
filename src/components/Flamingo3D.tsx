/* Flamingo3D.tsx */
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Html, useGLTF, useAnimations } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three'

export interface Flamingo3DProps {
  /** idle | happy | thinking | excited (можно расширить) */
  animationState?: 'idle' | 'happy' | 'thinking' | 'excited'
  /** reactive – реагирует на курсор; static – просто играет клип */
  interactionMode?: 'reactive' | 'static'
  /** увеличить или уменьшить размер всей сцены */
  scale?: number
}

const CLIP_ALIAS: Record<NonNullable<Flamingo3DProps['animationState']>, string> = {
  idle: 'Idle',
  happy: 'HappyDance',
  thinking: 'Thinking',
  excited: 'ExcitedFlap',
}

export default function Flamingo3D({
  animationState = 'idle',
  interactionMode = 'reactive',
  scale = 1.4,
}: Flamingo3DProps) {
  /** ------------------------------------------------------------------ */
  /**                           LOAD MODEL                               */
  /** ------------------------------------------------------------------ */
  const group = useRef<THREE.Group>(null!)
  const gltf = useGLTF('/assets/models/flamingo.glb') as unknown as {
    scene: THREE.Group
    animations: THREE.AnimationClip[]
  }

  /** Разбираем нужные узлы по имени – полезно для процедурных анимаций */
  const parts = useMemo(() => {
    const get = (name: string) => gltf.scene.getObjectByName(name) as THREE.Object3D | null
    return {
      wingL: get('Wing_L'),
      wingR: get('Wing_R'),
      eyeL: get('Eye_L'),
      eyeR: get('Eye_R'),
      head: get('Head'),
      glasses: get('Glasses'), // отдельный меш для очков
      legL: get('Leg_L'),
      legR: get('Leg_R'),
    }
  }, [gltf.scene])

  /** ------------------------------------------------------------------ */
  /**                       CLIP‑BASED ANIMATION                         */
  /** ------------------------------------------------------------------ */
  const { actions } = useAnimations(gltf.animations, group)
  useEffect(() => {
    /** Cтопаем всё старое и запускаем нужное с кросс‑фейдом */
    Object.values(actions).forEach((a) => {
      if (a) a.stop()
    })
    const clipName = CLIP_ALIAS[animationState]
    const action = actions[clipName]
    if (action) {
      action
        .reset()
        .fadeIn(0.25)
        .setEffectiveTimeScale(animationState === 'excited' ? 1.3 : 1)
        .play()
    }
  }, [animationState, actions])

  /** ------------------------------------------------------------------ */
  /**                           GLASSES LIFT                             */
  /** ------------------------------------------------------------------ */
  const [hovered, setHovered] = useState(false)
  const { lift } = useSpring({
    lift: hovered ? 0.18 : 0, // подъём очков вверх
    config: { mass: 1, tension: 230, friction: 26 },
  })
  useEffect(() => {
    if (parts.glasses)
      lift.to((y) => {
        parts.glasses!.position.y = y
      })
  }, [lift, parts.glasses])

  /** ------------------------------------------------------------------ */
  /**                    PROCEDURAL / INTERACTIVE LAYER                  */
  /** ------------------------------------------------------------------ */
  const { mouse } = useThree()

  useFrame((state) => {
    /** ======= REACTIVE HEAD & EYES =======  */
    if (interactionMode === 'reactive' && parts.head) {
      const lookX = THREE.MathUtils.lerp(parts.head.rotation.y, mouse.x * 0.6, 0.1)
      const lookY = THREE.MathUtils.lerp(parts.head.rotation.x, mouse.y * 0.4, 0.1)
      parts.head.rotation.set(lookY, lookX, 0)

      /** Глаза бегают за курсором */
      if (parts.eyeL && parts.eyeR) {
        parts.eyeL.position.x = -0.07 + mouse.x * 0.1
        parts.eyeR.position.x = 0.07 + mouse.x * 0.1
      }
    }

    /** ======= FALLBACK FLAP IF NO CLIP ======= */
    const t = state.clock.elapsedTime
    if (!actions[CLIP_ALIAS[animationState]]) {
      switch (animationState) {
        case 'idle':
          group.current.rotation.y = Math.sin(t * 0.5) * 0.08
          break
        case 'happy':
          if (parts.wingL && parts.wingR) {
            const flap = Math.sin(t * 6) * Math.PI * 0.08
            parts.wingL.rotation.z = -0.4 + flap
            parts.wingR.rotation.z = 0.4 - flap
          }
          group.current.position.y = Math.sin(t * 3) * 0.05
          break
        case 'thinking':
          if (parts.head) parts.head.rotation.z = Math.sin(t * 1.5) * 0.25
          break
        case 'excited':
          if (parts.wingL && parts.wingR) {
            const flap = Math.sin(t * 12) * Math.PI * 0.25
            parts.wingL.rotation.z = -0.6 + flap
            parts.wingR.rotation.z = 0.6 - flap
          }
          group.current.position.y = Math.sin(t * 8) * 0.12
          break
      }
    }
  })

  /** ------------------------------------------------------------------ */
  /**                               RENDER                               */
  /** ------------------------------------------------------------------ */
  return (
    <Suspense
      fallback={
        <Html>
          <span style={{ color: '#fff' }}>loading flamingo…</span>
        </Html>
      }
    >
      <Float
        speed={animationState === 'idle' ? 1.6 : 3.5}
        rotationIntensity={0.4}
        floatIntensity={0.45}
      >
        <a.group
          ref={group}
          scale={scale}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* примитив добавляет всю иерархию модели */}
          <primitive object={gltf.scene} dispose={null} />
        </a.group>
      </Float>
    </Suspense>
  )
}

useGLTF.preload('/assets/models/flamingo.glb')