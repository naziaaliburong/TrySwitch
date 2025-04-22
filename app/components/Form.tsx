'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import InputWithIcon from './InputWithIcon'
import PhoneInput2 from './PhoneInput2'
import FormSubmitButton from './FormSubmitButton'
import { Label } from '@/components/ui/label'
import TextareaWithIcon from './TextareaWithIcon'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Form = () => {
  useEffect(()=>{
    gsap.from(".image-motion",{
        x: '-100%',
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger : {
          trigger: ".image-motion",
          start: 'top bottom',
          end: 'top bottom',
        }})
},[])

  return (
    <div className="flex gap-10 relative max-sm:flex-col">
        <Image src="/assets/images/formhouse.png" width={500} height={650} className='h-[600px] w-[45%] max-sm:w-full rounded-2xl image-motion' alt="house"/>
        <div className='flex flex-col gap-5 text-[#555555] w-full'>
            <h2 className='text-5xl font-bold'>Let’s Get in Touch</h2>
            <p className=' text-xl'>Get in touch with us at <span className='text-[#F54208] font-bold'>Team@tryswitch.io</span></p>
            <div className='flex gap-5'>
                {["First Name", "Last Name"].map((label, index)=>(
                  <div key={index} className='w-full'>
                    <Label className='text-xl'>{label}</Label>
                    <InputWithIcon iconSrc={"/assets/favicon/name.png"}/>
                  </div>
                ))
                }    
            </div>
            <div>
              <Label className='text-xl'>Subject</Label>
              <InputWithIcon iconSrc={"/assets/favicon/subject.png"}/>
            </div>
            <div>
              <Label htmlFor="message" className='text-xl'>Message</Label>
              <TextareaWithIcon iconSrc={"/assets/favicon/message.png"}/>
            </div>
            <div>
              <Label htmlFor="message" className='text-xl'>Phone Number</Label>
              <PhoneInput2 />
            </div>
            <FormSubmitButton />
        </div>
    </div>
  )
}

export default Form