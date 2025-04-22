'use client'
import React, { useEffect } from "react";
import Video from "next-video";
import Image from "next/image";
import StoreButtons from "./StoreButtons";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = ({heading, para, src, rowReverse, playButton, video}) => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const textDivRef = useRef(null);

  useEffect(()=>{
   gsap.from(videoRef.current,{
    x: `${rowReverse ? '100%' : '-100%'}`,
    opacity: 0,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger : {
      trigger: videoRef.current,
      start: 'top bottom',
      end: 'top bottom',
    }
  })
  gsap.from(imageRef.current,{
    x: '100%',
    opacity: 0,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger : {
      trigger: imageRef.current,
      start: 'top bottom',
      end: 'top bottom',
    }
  })
if(!video){
  const tl = gsap.timeline({
    scrollTrigger : {
      trigger: textDivRef.current,
      start: 'top bottom',
      end: 'top bottom',
    }
  })
  tl.from('.heading-motion',{
    x: '-100%',
    opacity: 0,
    ease: 'power2.out',
    duration: 1
  }) 
  .from('.para-motion',{
    x: '-100%',
    opacity: 0,
    ease: 'power2.out',
    duration: 1
  }) 
  .from('.button-motion',{
    x: '-100%',
    opacity: 0,
    ease: 'power2.out',
    duration: 1
  })
  }
  },[])

  return(
  <div className={`flex ${rowReverse===true && "flex-row-reverse"} pt-40 pb-20 gap-5 max-sm:flex-col`}>
    <div className="w-[50%] max-sm:w-full overflow-hidden">
    {video===true ? (
      <div  ref={videoRef} className="overflow-hidden">
        <Video src={src} autoPlay loop muted controls={false} style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        />
    </div>
    ):(
      <Image src={src} alt="" width={100} height={100} className="w-[100%] h-[90%]" ref={imageRef}/>
    )}
    </div>
    <div className="w-[50%] max-sm:w-full opacity-100" >
      <div ref={textDivRef}>
        <h2 className={`text-[#270AAD] text-5xl font-bold pb-10 ${!video && 'heading-motion'}`}>{heading}</h2>
        <p className={`text-[#555555] text-lg pb-25 ${!video && 'para-motion'}`}>{para}</p>
      </div>
      {playButton===true ? (
        <div className="flex justify-center">
          <StoreButtons />
        </div>) : (
        <button className={`text-white bg-gradient-to-t from-[#F54208] to-[#FFC2AE] px-25 py-5 text-2xl font-semibold rounded-2xl ${!video && 'button-motion'}`}>Subscribe</button>
        )}
    </div>
  </div>
  )
      };

export default VideoComponent;