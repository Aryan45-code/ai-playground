import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Providers } from "./Providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The AI Playground | Master Robotics & AI',
  description: 'An entry-level bootcamp for students and professionals to build real engineering projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-slate-50 antialiased selection:bg-indigo-500 selection:text-white mesh-bg`}>
        <Providers>
         {children}
        </Providers>
        
        {/* GLOBAL NAVIGATION */}
        <nav className="fixed w-full z-50 top-0 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <span>AI <span className="text-indigo-400">PLAYGROUND</span></span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
              <Link href="/#bootcamps" className="hover:text-white transition">Bootcamps</Link>
            </div>
            <Link href="/courses/ai-playground" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition transform hover:scale-105">
              Start Building
            </Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-20">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-white/10 bg-[#050505] py-12 text-center text-gray-500 mt-20">
          <p className="text-sm">&copy; 2026 The AI Playground. All rights reserved.</p>
        </footer>

      </body>
    </html>
  )
}