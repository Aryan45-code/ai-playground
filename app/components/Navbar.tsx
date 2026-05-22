"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Your Original AI Playground Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <span>AI <span className="text-indigo-400">PLAYGROUND</span></span>
        </Link>

        {/* Navigation & Auth Buttons */}
        <div className="flex items-center gap-8 text-sm font-semibold">
          <Link href="/course" className="hidden md:block text-gray-400 hover:text-white transition">Bootcamps</Link>
          
          {session ? (
            <div className="flex items-center gap-4">
              <Link href="/profile" className="text-indigo-400 hover:text-indigo-300 transition">
                Your Profile
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-gray-400 hover:text-white transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/login" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition transform hover:scale-105">
              Login to Enroll
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}