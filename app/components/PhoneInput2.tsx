'use client'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneInput2 = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className='!w-full'>
      <PhoneInput  country={'pk'} value={phone} onChange={(value)=>setPhone(value)} inputStyle={{width: '100%'}}/>
    </div>
  )
}

export default PhoneInput2
