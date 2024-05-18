import type { Metadata } from 'next';
import { Inter, Caveat } from 'next/font/google';
import '@/app/globals.css'
import Navbar from '@/components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SamuelHendryx.com - A portfolio',
  description: 'Samuel Hendryx: developer, tinkerer, photographer, nerd, step-dad of two teenage sons, and husband.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen bg-[#20487b] text-gray-200'>
          <Navbar />
          <main className='border'>{children}</main>
        </div>
        </body>
    </html>
  );
}
