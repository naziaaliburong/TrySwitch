'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Carousal = ({heading, para, image, icon, currentIndex}) => {
  const bottomTopRef = useRef(null)
  const rightLeftRef = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline()

    tl.fromTo(
      bottomTopRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo(
      rightLeftRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
      "-=1"
    )

    return () => {
      tl.kill()
    }
  },[currentIndex])
  return (
    <div className='flex  max-sm:flex-col overflow-hidden'>
        <div className='my-15 flex flex-col w-[55%] max-sm:w-full' ref={bottomTopRef}>
            <div className='flex items-center gap-3'>
                <Image src={icon} alt="house" width={80} height={80}/>
                <h2 className='text-[#270AAD] text-2xl font-bold uppercase'>{heading}</h2>
            </div>
            <p className='text-[#555555] text-xl my-5 w-[90%]'>{para}</p>
            <div className='flex gap-5 w-full justify-center pt-40'>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={`w-6 h-2 rounded-2xl ${currentIndex===index ? "bg-orange-600" : "bg-slate-300"}`}></div>
              ))}
            </div>
        </div>
        <div className='w-[45%] h-[500px] max-sm:w-full' ref={rightLeftRef}>
        <Image src={image} alt="house discount" height={100} width={600} className='h-full w-full'/>
        </div>
    </div>
  )
}

export default Carousal