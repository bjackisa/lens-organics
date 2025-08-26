import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import { Footer } from "@/components/footer"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Lens Organics - Premium Agricultural Solutions",
  description:
    "Lens Health Supplies SMC Limited - Integrated farming operations producing premium lemon grass oil and value-added agricultural products in Uganda",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://vjs.zencdn.net/8.10.0/video-js.css"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          {children}
          <Footer />
        </ThemeProvider>
        <Script src="https://vjs.zencdn.net/8.10.0/video.min.js" />
      </body>
    </html>
  )
}
