import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SamuelHendryx.com - A portfolio",
  description: "Samuel Hendryx: developer, photographer, nerd, jack of all trades, dad of two teenage sons, and husband.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-screen bg-[#20487b] text-gray-200'>
          <Navbar />
          <main className="min-h-[calc(100vh-80px)] border">{children}</main>
        </div>
        </body>
    </html>
  );
}
