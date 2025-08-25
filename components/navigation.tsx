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
    { href: "/partners", label: "Partners" }, // Replaced "Investors" with "Partners" to focus on business partnerships
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b glass-card backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/images/lens-organics-logo.png"
              alt="Lens Organics"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="font-serif font-bold text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Lens Organics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-emerald-600 focus:outline-none">
                    {item.label}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-card border-muted/20 backdrop-blur-xl">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          href={dropdownItem.href}
                          className="w-full cursor-pointer hover:text-emerald-600 transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-emerald-600"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              className="hidden md:flex glass-card hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              <Link href="tel:+256772614807">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-emerald-100 dark:hover:bg-emerald-900">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-card backdrop-blur-xl">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) =>
                    item.dropdown ? (
                      <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-emerald-600 border-b border-muted pb-2">
                          {item.label}
                        </h3>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-base font-medium transition-colors hover:text-emerald-600"
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
                        className="text-lg font-medium transition-colors hover:text-emerald-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                  <Button asChild className="mt-6 glass-card hover:bg-emerald-600 hover:text-white">
                    <Link href="tel:+256772614807">
                      <Phone className="mr-2 h-4 w-4" />
                      +256 772 614807
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
