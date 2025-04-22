'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const SignupInput = () => {

  return (
    <div className='relative flex flex-col'>
            <div className="absolute right-3 top-4">
                <Image src="/assets/favicon/cheveron.png" alt="cheveron" width={10} height={10}/>
            </div>
            <Input type="text" placeholder="Enter your email  address here" className="pl-12 h-13"/>
    </div>
  )
}

export default SignupInput