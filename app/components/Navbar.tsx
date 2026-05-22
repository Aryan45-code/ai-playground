"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wider">
          PLATFORM<span className="text-blue-500">.</span>
        </Link>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center space-x-6 text-gray-300 font-medium">
          <Link href="/course" className="hover:text-white transition">Courses</Link>
          
          {session ? (
            <>
              <Link href="/profile" className="hover:text-white transition text-blue-400">
                Your Profile
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-700 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}