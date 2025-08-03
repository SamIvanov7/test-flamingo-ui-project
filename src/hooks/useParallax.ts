import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxOptions {
  offset?: [string, string]
  speed?: number
  easing?: (value: number) => number
}

export function useParallax({
  offset = ["start end", "end start"],
  speed = 0.5,
  easing
}: ParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200 * speed],
    { clamp: false }
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1, 0]
  )

  return {
    ref,
    y: easing ? useTransform(y, easing) : y,
    opacity,
    scrollYProgress
  }
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}