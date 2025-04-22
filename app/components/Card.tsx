'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({reverse, image}) => {
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom',
        end: 'top bottom',
      },
    })

    tl.from(cardRef.current, {
      x: '-100%',
      opacity: 0,
      ease: 'power2.out',
      duration: 3,
    })
      .from(
        imageRef.current,
        {
          y: reverse ? '-5%' : '5%',
          opacity: 0,
          ease: 'power2.out',
          duration: 1,
        },
      )
      .from(
        headingRef.current,
        {
          y: 5,
          opacity: 0,
          ease: 'power2.out',
          duration: 1,
        },
      )
  }, [])

  return (
        <div ref={cardRef} className={`bg-gray-100 h-[430px] w-80 max-lg:w-60 max-md:w-45 max-sm:w-[80%] rounded-2xl flex ${reverse===true ? "flex-col-reverse" : "flex-col"} p-5`}>
            <div className='flex flex-col items-center pt-5' ref={headingRef}>
              <h3 className='font-semibold text-xl text-[#292929] pb-3'>Trusted Connections</h3>
              <p className='font-thin text-sm text-[#292929] w-[300px] max-lg:w-auto'>Verified sellers, secure investments.</p>
            </div>
            <div className='bg-[url(/assets/images/CurveAbout.png)] bg-cover bg-center overflow-hidden' ref={imageRef}>
              <Image src={image} alt="about" width={100} height={100} className='w-full h-[330px] max-lg:h-[250px] object-cover'/>
            </div>
        </div>
  )
}

export default Card