"use client";

import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { photos } from "./photos";
import Image from "next/image";

const SlideshowPhotography = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % photos.length);
  };

  const handlePrevious = () => {
    setIndex((index - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center bg-[#11223f] rounded-2xl object-contain">
        <div><button className='previous' onClick={handlePrevious}><FaAngleLeft size={30} /></button></div>
        <div className="flex max-w-full max-h-full w-full h-[200px] lg:h-[450px] object-contain justify-center">
        <Image className='fade max-h-full object-contain' src={photos[index].image.src} alt={photos[index].caption} width={photos[index].image.width} height={photos[index].image.height} />
        </div>
        <div><button className='next' onClick={handleNext}><FaAngleRight size={30} /></button></div>
      </div>
      <div className='caption w-full py-2 text-center'>{photos[index].caption}</div>
    </div>
  );
};

export default SlideshowPhotography;