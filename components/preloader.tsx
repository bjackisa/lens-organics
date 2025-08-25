"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24">
          <img src="/images/lens-logo.png" alt="Lens Organics Loading" className="w-full h-full object-contain" />
        </div>

        {/* Windows 11 style loading indicator */}
        <div className="flex space-x-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground font-medium">Loading Excellence...</p>
      </div>
    </div>
  )
}
