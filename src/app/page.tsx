// @/
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex'>
      <div className='min-h-[calc(100vh-85px)] max-w-[1000px] mx-auto px-2 flex flex-col justify-center items-center text-xl'>
        <div className='flex flex-col md:flex-row shrink-0 place-items-center space-x-8 m-4'>
        {/* name tag */}
          <div className='h-[150px] w-[300px] text-center bg-[#1c325f] rounded-3xl border-4 -rotate-6 -z-0'>
            <div className='h-[35px] p-1 bg-[#1c325f] rounded-3xl'><p>Hello, my name is</p></div>
            <div className='h-[85px] p-1 bg-gray-200 text-black place-content-center'><h1 className={caveat.className} style={{ fontSize: '48px'}}>Samuel Hendryx</h1></div>
            <div className='bg-[#1c325f]'></div>
          </div>
          <div>
            <Image className='me-circle' src='/assets/images/photos/samuelhendryx.png' width='150' height='150' alt='Samuel Hendryx' />
          </div>
        </div>
        {/* intro paragraph */}
        <div className='p-4'>
          <p className='max-w-[700px]'>I am a software developer who graduated in Spring of 2020.</p>
          <p className='max-w-[700px]'>I enjoy backend development in Python, Linux System Administration, and I&apos;m 
          currently working on personal projects in React, and DevOps, while studying for the Network+ exam.</p>
        </div>
      </div>
    </div>
  );
}

