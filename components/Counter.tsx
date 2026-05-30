'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export function Counter({
  target,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className = '',
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease: 'expo.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix
        }
      },
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    })
    return () => {
      tween.kill()
    }
  }, [target, suffix, prefix, duration])

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {prefix}0{suffix}
    </span>
  )
}
