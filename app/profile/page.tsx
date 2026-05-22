"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const sessionData = useSession() || {};
const { data: session, status } = sessionData;

  // If NextAuth is still checking their badge, show a loading screen
  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  }

  // If they are not logged in, kick them back to the login page
  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-2xl w-full flex items-center space-x-6 shadow-2xl">
        {/* Display their Google Profile Picture */}
        {session?.user?.image && (
          <Image 
            src={session.user.image} 
            alt="Profile" 
            width={100} 
            height={100} 
            className="rounded-full border-4 border-blue-500"
          />
        )}
        
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">{session?.user?.name}</h1>
          <p className="text-gray-400 text-lg">{session?.user?.email}</p>
          <div className="mt-4 inline-block bg-blue-900/50 text-blue-400 border border-blue-800 px-3 py-1 rounded-full text-sm">
            Authenticated User
          </div>
        </div>
      </div>
    </div>
  );
}