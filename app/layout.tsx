import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARC Auto Part - Used Auto Parts & Salvage Yard',
  description: 'Find quality used auto parts at ARC Auto Part. We offer engines, transmissions, headlights and more with nationwide shipping. Call (888) 508-6192.',
  generator: 'ARC Auto Part',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        <div className="min-h-screen overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
