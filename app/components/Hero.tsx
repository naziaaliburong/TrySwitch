'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import StoreButtons from './StoreButtons';

const Hero = () => {
  const noOfFrames = 151;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(()=>{
    for(let i = 0; i < noOfFrames; i++){
    setTimeout(()=>{
      setCurrentFrame(i)
    }, i*40)}

    setTimeout(() => {
      setAnimationComplete(true);
    }, noOfFrames * 40);
  }, [])

  const frameName = currentFrame.toString().padStart(4, '0');
  const imgSrc = animationComplete ? '/assets/images/Tryswitch-hero.png' : `/assets/images/${frameName}.png`;

  return (
    <div className='flex max-md:flex-col bg-gradient-to-r from-[#FFC2AE80] to-[#B7A8FF80] rounded-2xl my-20 relative h-[550px] max-md:h-[750px] max-lg:h-[500px] max-sm:h-[550px] max-lg:mb-35'>
      <div className='flex flex-col p-[5%] w-[50%] max-md:w-full'>
        <h1 className='text-6xl font-semibold w-[610px] max-lg:w-auto max-lg:text-4xl py-5 pb-28'>The all-in-one app for off-market deals</h1>
        <StoreButtons />
      </div>
      <div className='w-[50%] relative max-md:w-full'>
        <Image src={imgSrc} width={650} height={600} alt="mobile" className='absolute top-10 left-10 max-lg:left-0 w-[100%] max-md:w-[60%] max-md:ml-[20%]'/>
      </div>
    </div>
  )
}

export default Hero