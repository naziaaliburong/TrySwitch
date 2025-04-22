'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

const FormSubmitButton = () => {
  const handleClick = () => {}

  return (
    <Button className='bg-[#270AAD] py-8 text-xl font-semibold w-[100%] mt-5' onClick={()=>handleClick}>SUBMIT</Button>
  )
}

export default FormSubmitButton
