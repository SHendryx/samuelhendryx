// @/resume/
import Image from 'next/image';
import React from 'react';

const Hobbies = () => {
  return( 
    <div className='min-h-[calc(100vh-60px)] h-full m-auto max-w-[1000px]'>
      <div id='photography' className='mx-4 w-full'>
        <h1>Photography</h1>
        {/* Photography Slideshow Container */}
        <div id='photography-slide'>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>1 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\folsom-lake-2.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Folsom lake at sunset</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>2 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\folsom-lake-1.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Folsom lake before sunset</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>3 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\folsom-sunrise.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Sunrise over Folsom</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>4 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\lake-aloha-sunrise.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Sunrise over a frozen Lake Aloha</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>5 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\lake-of-the-woods-golden-hour.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>'The Golden Hour' at Lake of the Woods</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>6 / 7</div>
              <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\lake-of-the-woods-night.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Moonlight over Lake of the Woods</div>
          </div>
          <div className='slides relative fade border bg-[#11223f] grid justify-center'>
            <div className='slide-number absolute top-0 left-0 px-2 py-3 border'>7 / 7</div>
            <img className='max-h-[400px] max-w-[1000px] object-scale-down border' src='\assets\images\photos\sacramento.jpg' />
            <div className='caption absolute bottom-0 w-full text-center'>Morning fog over Sacramento</div>
          </div>
        </div>
      </div>
      <div id='4wheeling' className='mx-4 w-full'>
        <h1>4-Wheeling</h1>
      </div>
    </div>
  );
};

export default Hobbies;