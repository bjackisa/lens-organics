'use client'

import { useEffect, useRef, useState } from 'react'

export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      // Get the scroll position from the top of the page
      const scrolled = window.scrollY
      const elementOffset = elementRef.current.offsetTop
      
      // Calculate the parallax offset based on how much we've scrolled
      // The background should move slower than the scroll speed
      const distance = scrolled * speed
      setOffset(distance)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { elementRef, offset }
}

export function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return { elementRef, isVisible }
}

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      const currentCount = Math.min(Math.floor(end * progress), end)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible, end, duration])

  return { countRef, count }
}
