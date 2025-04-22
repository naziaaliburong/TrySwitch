'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const Features = () => {
  useEffect(() => {
    const text = document.querySelector('.marque') as HTMLElement | null;
  
    if (text && text.parentElement) {
      const textWidth = text.offsetWidth;
  
      gsap.fromTo(
        text,
        { x: 0},
        {
          x: -textWidth,
          duration: 20,
          repeat: -1,
          ease: 'linear',
        }
      );
    }
  }, []);
  return (
    <div className='flex flex-col items-start overflow-hidden my-15'>
        <div className='text-center w-full'>
            <h2 className='text-[#EC4010] text-4xl font-semibold mb-10'>Features</h2>
        </div>
        <p className='text-[#ECECEC] text-8xl font-bold w-[3100px] text-left uppercase max-sm:text-4xl marque'>TrySwitch – Your Gateway to Off-Market Deals.</p>
    </div>
  )
}

export default Features