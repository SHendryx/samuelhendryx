// @/
import Image from "next/image";
import React from "react";
import { RxWidth } from "react-icons/rx";

export default function Home() {
  return (
    <div className='text-gray-200 flex'>
      <div className='min-h-[calc(100vh-85px)] max-w-[1000px] mx-auto px-2 text-xl flex flex-col justify-center items-center'>
        <div className="flex space-x-10">
        {/* name tag */}
          <div className='h-[150px] w-[300px] text-center bg-[#1c325f] rounded-3xl border-4 -rotate-6'>
            <div className='h-[35px] bg-[#1c325f] text-gray-200 rounded-3xl'><p>Hello, my name is</p></div>
            <div className="h-[85px] bg-gray-200 text-black p-0 place-content-center"><h1>Samuel Hendryx</h1></div>
            <div className="bg-[#1c325f]"></div>
          </div>
          <div>
            <Image className='me_circle' src='/assets/images/photos/samuelhendryx.png' width='150' height='150' alt='Samuel Hendryx' />
          </div>
        </div>
        {/* intro paragraph */}
        <div className='p-4'>
          <p className='max-w-[700px]'>I am a software developer who graduated in Spring of 2020.</p>
          <p className='max-w-[700px]'>I enjoy backend development in Python, and I&apos;m currently working on developing web applications in React.</p>
        </div>
      </div>
    </div>
  );
}

