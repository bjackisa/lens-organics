import { Phone, MessageCircle, Mail, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-gray-200 text-xs text-gray-600">
      <div className="container mx-auto flex flex-col gap-2 py-2 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1 text-center md:flex-row md:items-center md:gap-2 md:text-left">
          <span>
            Lens Organics is a subsidiary of Lens Health Supplies SMC Limited, Company Reg No.: 80020003209814
          </span>
          <span>2021 to {currentYear} all rights reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <a href="tel:256772614807" aria-label="Call Lens Organics">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://wa.me/256772614807" aria-label="Chat on WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="mailto:256772614807" aria-label="Email Lens Organics">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-2 py-2 px-4 md:flex-row md:justify-between">
        <span>Developed by Jackisa Daniel Barack</span>
        <div className="flex items-center gap-4">
          <a href="tel:256760570331" aria-label="Call Jackisa Daniel Barack">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://wa.me/256702860347" aria-label="Chat with Jackisa Daniel Barack">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="https://my.jackisa.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Jackisa Daniel Barack's website"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

