// @/components/navbar/navbar
"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='nav fixed w-full h-[60px] flex justify-between items-center z-10 bg-[#20487b]'>
      <div className='px-4 z-10'>
        <Link href='/'><Image src='/assets/images/logos/sh_logo_256_256.png' width='50' height='50' alt='Logo' /></Link>
      </div>

      {/* menu */}
      <div>
        <ul className='hidden md:flex px-4 text-lg'>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><Link href='/'>Home</Link></li>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><Link href='/resume/'>Resume</Link></li>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><Link href='/about/'>About</Link></li>
          <li className='px-4 border rounded-3xl border-transparent hover:border-gray-200 cursor-pointer'><Link href='/hobbies/'>Hobbies</Link></li>
        </ul>
      </div>

      <div className='flex px-2'>
        {/* social icons */}
        <div className='w-[110px]'>
          <ul className='flex'>
            <li className='px-2'><Link className='flex items-center' target='_blank' href='https://github.com/SHendryx'><FaGithub size={30}/></Link></li>
            <li className='px-2'><Link className='flex items-center' target='_blank' href='https://www.linkedin.com/in/samuel-hendryx-34605a151/'><FaLinkedin size={30}/></Link></li>
          </ul>
        </div>
        
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-20 px-4 content-center'>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25}/>}
        </div>
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#20487b] flex flex-col justify-center items-center z-10'}>
          <li className='py-6 text-4xl' onClick={handleClick}><Link href='/'>Home</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick}><Link href='/resume/'>Resume</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick}><Link href='/about/'>About</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick}><Link href='/hobbies/'>Hobbies</Link></li>
        </ul>
    </div>
  )
};

export default Navbar