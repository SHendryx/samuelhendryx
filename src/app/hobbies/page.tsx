// @/hobbies/
import Image from 'next/image';
import React from 'react';

import SlideshowWheeling from '@/lib/ss-wheeling';
import SlideshowPhotography from '@/lib/ss-photos';
import SlideshowOutdoors from '@/lib/ss-outdoors';

const Hobbies = () => {
  return( 
    <div className='min-h-[calc(100vh-60px)] h-full m-auto p-10 max-w-[850px]'>
      <div id='photography' className='m-auto w-full'>
        <h1>Photography</h1>
        {/* Photography Slideshow Container */}
        <div>
          <SlideshowPhotography />
        </div>
      </div>
      <div id='4wheeling' className='m-auto w-full'>
        <h1>4-Wheeling</h1>
        <div>
          <SlideshowWheeling />
        </div>
      </div>
      <div id='outdoors' className='m-auto w-full'>
        <h1>Hiking / Backpacking</h1>
        <div>
          <SlideshowOutdoors />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;