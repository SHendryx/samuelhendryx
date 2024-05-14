// @/
import React from "react";

export default function Home() {
  return (
    <div className='w-full h-screen bg-[#20487b] text-gray-200'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-xl'>
        <div className='justify-center bg-[#1c325f] rounded-3xl p-4 border-4'>
          <p>Hi, my name is</p>
          <h1>Samuel Hendryx</h1>
          <p className='max-w-[700px]'>I am a software developer who graduated in Spring of 2020.</p>
          <p className='py-2 max-w-[700px]'>I enjoy backend development in Python, and I&apos;m currently working on developing web applications in React.</p>
        </div>
      </div>
    </div>
  );
}
