import React from 'react';
import Image from 'next/image';
import SignupBtn from './SignupBtn';
import { navLinks } from '../../objects/navLinks';
import Link from 'next/link';
import Hamburger from './Hamburger';

const Navbar = () => {
    
  return (
    <div className='flex items-center justify-between'>
        <Link href='/'><div className='flex items-center cursor-pointer'>
        <Image src="/assets/favicon/apple-touch-icon.png" width={50} height={50} className='w-13 h-auto' alt="logo"/>
        <Image src="/assets/favicon/logoname.png" width={50} height={50} alt="logo" className='h-4 w-35'/>
        </div></Link>
        <div className='flex gap-10 max-lg:gap-3 items-center font-semibold text-[14px] max-md:hidden'>
            <ul className='flex gap-10 max-lg:gap-3 text-[#270AAD]'>
                {navLinks.map((list, index)=> (<li key={index}><Link href={list.link}>{list.name}</Link></li>))}
            </ul>
            <SignupBtn />
        </div>
        <div className='hidden max-md:flex'>
          <Hamburger />
        </div>
    </div>
  )
}

export default Navbar