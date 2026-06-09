"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "Company",
      dropdown: [
        { href: "/about", label: "About Us" },
        { href: "/operations", label: "Our Operations" },
        { href: "/sustainability", label: "Sustainability" },
      ],
    },
    {
      label: "Solutions",
      dropdown: [
        { href: "/products", label: "Products" },
        { href: "/value-chain", label: "Value Chain" },
        { href: "/quality", label: "Quality Standards" },
      ],
    },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b glass-card-enhanced backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 hover:shadow-lg transition-shadow duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group transform transition-all duration-300 hover:scale-105">
            <img
              src="/images/lens-organics-logo.png"
              alt="Lens Organics"
              className="h-10 w-auto transition-transform group-hover:rotate-6"
            />
            <span className="font-serif font-bold text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-blue-500 transition-all duration-300">
              Lens Organics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-all duration-300 hover:text-emerald-600 focus:outline-none group relative">
                    {item.label}
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-card-enhanced border-muted/20 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          href={dropdownItem.href}
                          className="w-full cursor-pointer hover:text-emerald-600 transition-all duration-300 group/link relative"
                        >
                          <span className="relative">
                            {dropdownItem.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover/link:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 group relative"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              className="hidden md:flex glass-card text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn relative overflow-hidden"
            >
              <Link href="tel:+256772614807">
                <span className="relative z-10 flex items-center">
                  <Phone className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12 duration-300" />
                  Call Us
                </span>
                <div className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0" />
              </Link>
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 transform hover:scale-110">
                  <Menu className="h-5 w-5 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-card-enhanced backdrop-blur-xl animate-in slide-in-from-right duration-300">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) =>
                    item.dropdown ? (
                      <div key={index} className="space-y-2 animate-float-up" style={{ animationDelay: `${0.05 * index}s` }}>
                        <h3 className="text-lg font-semibold text-emerald-600 border-b border-muted pb-2 hover:text-emerald-700 transition-colors duration-300">
                          {item.label}
                        </h3>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-base font-medium transition-all duration-300 hover:text-emerald-600 hover:translate-x-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium transition-all duration-300 hover:text-emerald-600 hover:translate-x-1 animate-float-up"
                        style={{ animationDelay: `${0.05 * index}s` }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                  <Button asChild className="mt-6 glass-card text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn relative overflow-hidden animate-float-up">
                    <Link href="tel:+256772614807">
                      <span className="relative z-10 flex items-center">
                        <Phone className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12 duration-300" />
                        +256 772 614807
                      </span>
                      <div className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
