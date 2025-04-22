'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const InputWithIcon = ({iconSrc}) => {

  return (
    <div className='relative flex flex-col'>
            <div className="absolute left-3 top-2">
                <Image src={iconSrc} alt="person" width={20} height={20}/>
            </div>
            <Input type="text" placeholder="Last Name" className="pl-12"/>
    </div>
  )
}

export default InputWithIcon
