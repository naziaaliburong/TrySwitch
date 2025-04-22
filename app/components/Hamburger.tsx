'use client'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '@/objects/navLinks'
import Link from 'next/link'
import SignupBtn from './SignupBtn'

const Hamburger = () => {
  const [hamMenu, setHamMenu] = useState(false)

  const handleClick = () => {
    setHamMenu(!hamMenu)
  }

  console.log(hamMenu)

  return (
    <div className='relative'>
      <FaBars onClick={handleClick} />
      {hamMenu && (
        <ul className='fixed top-15 right-0 bg-white p-5 w-full shadow-2xl z-10 rounded-2xl'>
          <FaTimes className='absolute top-3 right-3' onClick={handleClick}/>
          {navLinks.map((list, index)=> (<li key={index} onClick={handleClick}><Link href={list.link}>{list.name}</Link></li>))}
          <SignupBtn />
        </ul>
      )}
    </div>
  )
}

export default Hamburger