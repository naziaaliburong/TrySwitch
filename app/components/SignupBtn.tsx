import React from 'react'
import Link from 'next/link';

const SignupBtn = () => {
  return (
    <button className='border rounded-lg px-5 py-1 text-white bg-[#EC4010] cursor-pointer'><Link href='/signup'>SignUp</Link></button>
  )
}

export default SignupBtn