'use client'
import React, { useEffect, useRef, useState } from 'react'
import Carousal from './Carousal'
import { carouselObj } from '@/objects/carouselObject'

const CarouselAutoPlay = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const intervalRef = useRef(null);
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex+1) % carouselObj.length)
        }, 5000)
        return () => clearInterval(intervalRef.current)
        },[carouselObj.length]);

    
  return (
      <div>
        {carouselObj.map((obj, index)=>(
            currentIndex === index && (
            <div key={index}>
              <Carousal heading={obj.heading} para={obj.para} image={obj.image} icon={obj.icon} currentIndex={currentIndex}/>
            </div>
          )
        ))}
      </div>
  )
}

export default CarouselAutoPlay