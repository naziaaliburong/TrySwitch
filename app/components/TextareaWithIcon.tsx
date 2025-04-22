'use client'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

const TextareaWithIcon = ({iconSrc}) => {
  return (
    <div className='relative'>
        <div className="absolute left-3 top-2">
            <Image src={iconSrc} alt="person" width={20} height={20}/>
        </div>
       <Textarea placeholder="Type your message here." id="message" className="pl-12 h-[100px]"/>
       <span className='absolute right-3 bottom-1'>0/150</span>
    </div>
  )
}

export default TextareaWithIcon