// @/components/navbar/navbar
"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='nav fixed w-full h-[80px] flex justify-between items-center bg-[#20487b] text-gray-200'>
      <div className='px-4 z-10'>
        <Image src='/assets/images/logos/sh_logo_256_256.png' width='50' height='50' alt='Logo' />
      </div>

      {/* menu */}
      <div>
        <ul className='hidden md:flex px-4 text-lg'>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><a href='/'>Home</a></li>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><a href='/resume/'>Resume</a></li>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><a href='/about/'>About</a></li>
        </ul>
      </div>

      <div className='flex px-2'>
        {/* social icons */}
        <div className='w-[110px]'>
          <ul className='flex'>
            <li className='px-2'><a className='flex items-center' href='https://github.com/SHendryx'><FaGithub size={30}/></a></li>
            <li className='px-2'><a className='flex items-center' href='https://www.linkedin.com/in/samuel-hendryx-34605a151/'><FaLinkedin size={30}/></a></li>
          </ul>
        </div>
        
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 px-4 content-center'>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25}/>}
        </div>
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#20487b] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>About</li>
        </ul>
    </div>
  )
};

export default Navbar