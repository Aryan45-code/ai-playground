import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./Providers";
import Navbar from './components/Navbar';

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
        {/* The Provider must wrap the ENTIRE body */}
        <Providers>
          
          {/* This points to your newly updated Navbar component */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="pt-24 min-h-screen">
            {children}
          </main>

          {/* GLOBAL FOOTER */}
          <footer className="border-t border-white/10 bg-[#050505] py-12 text-center text-gray-500 mt-20">
            <p className="text-sm">&copy; 2026 The AI Playground. All rights reserved.</p>
          </footer>

        </Providers>
      </body>
    </html>
  )
}