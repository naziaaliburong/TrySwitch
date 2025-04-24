'use client'
import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import StoreButtons from './StoreButtons'

const Hero = () => {
  const noOfFrames = 151
  const [currentFrame, setCurrentFrame] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const frameRef = useRef({ frame: 0 })

  useEffect(() => {
    let loadedCount = 0
    const preloadImages = []

    for (let i = 0; i < noOfFrames; i++) {
      const paddedIndex = i.toString().padStart(4, '0')
      const img = new Image()
      img.src = `/assets/images/${paddedIndex}.png`
      img.onload = () => {
        loadedCount++
        if (loadedCount === noOfFrames) {
          setImagesLoaded(true)
        }
      }
      preloadImages.push(img)
    }
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return

    const tl = gsap.timeline({
      onComplete: () => setAnimationComplete(true),
    })

    tl.to(frameRef.current, {
      frame: noOfFrames - 1,
      duration: (noOfFrames * 40) / 1000,
      ease: 'none',
      onUpdate: () => {
        setCurrentFrame(Math.round(frameRef.current.frame))
      },
    })
  }, [imagesLoaded])

  const frameName = currentFrame.toString().padStart(4, '0')
  const imgSrc = animationComplete
    ? '/assets/images/Tryswitch-hero.png'
    : `/assets/images/${frameName}.png`

  return (
    <div className='flex max-md:flex-col bg-gradient-to-r from-[#FFC2AE80] to-[#B7A8FF80] rounded-2xl my-20 relative h-[550px] max-md:h-[750px] max-lg:h-[500px] max-sm:h-[550px] max-lg:mb-35'>
      <div className='flex flex-col p-[5%] w-[50%] max-md:w-full'>
        <h1 className='text-6xl font-semibold w-[610px] max-lg:w-auto max-lg:text-4xl py-5 pb-28'>
          The all-in-one app for off-market deals
        </h1>
        <StoreButtons />
      </div>
      <div className='w-[50%] h-full relative max-md:w-full'>
        {imagesLoaded ? (
          <img
            src={imgSrc}
            width={300}
            height={300}
            alt='mobile'
            className='absolute top-10 left-10 max-lg:left-0 w-full h-full max-md:w-[60%] max-md:ml-[20%]'
          />
        ) : (
          <div className="text-xl font-semibold p-10">Loading animation...</div>
        )}
      </div>
    </div>
  )
}

export default Hero