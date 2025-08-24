"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hello! I'm ${formData.name} (${formData.email}). ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/256772614807?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl z-50 animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Get in Touch</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={3}
              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-medium"
            >
              Send via WhatsApp
            </Button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20"
        aria-label="Chat with us"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C12 2 6 8 6 13C6 16.866 9.134 20 13 20C16.866 20 20 16.866 20 13C20 8 12 2 12 2Z"
            fill="white"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  )
}
