import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Platform",
  description: "Enroll in our exclusive programs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Providers>
          <Navbar /> {/* This puts the menu at the top of every page! */}
          <main className="pt-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}