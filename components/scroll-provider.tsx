'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'

const ScrollContext = createContext<void>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
      rootMargin: '50px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with animation triggers
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <ScrollContext.Provider value={undefined}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScrollContext must be used within ScrollProvider')
  }
  return context
}
