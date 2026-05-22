"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wider drop-shadow-md">
          PLATFORM<span className="text-blue-500">.</span>
        </Link>

        <div className="flex items-center space-x-6 text-gray-200 font-medium">
          <Link href="/course" className="hover:text-white transition drop-shadow">Courses</Link>
          
          {session ? (
            <>
              <Link href="/profile" className="hover:text-white transition text-blue-400 drop-shadow">
                Your Profile
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition drop-shadow"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-blue-600 border border-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}