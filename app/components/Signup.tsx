import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import SignupInput from './SignupInput';
import CheckboxWithLabel from './CheckboxWithLabel';
import { menuLinks, socialIcons, bottomLinks } from '@/objects/signupObjects'; 
  
const Signup = () => {

  return (
    <div className='flex flex-col mt-30 mb-5 gap-20 text-[#555555]'>
        <div className='flex max-md:flex-col max-md:gap-5'>
            <div className='flex w-[55%] flex-col gap-10 max-md:w-full'>
            <Link href='/'>
                <div className='flex items-center cursor-pointer'>
                    <Image src="/assets/favicon/apple-touch-icon.png" width={50} height={50} className='w-13 h-auto' alt="logo"/>
                    <Image src="/assets/favicon/logoname.png" alt="logo" width={50} height={50} className='h-4 w-35'/>
                </div>
            </Link>
            <ul className='flex gap-15 text-lg font-semibold'>
            {menuLinks.map((item, index)=>(
                <li key={index}><Link href={item.href}>{item.name}</Link></li>
            ))}
            </ul>
            <div className='flex gap-8'>
            {socialIcons.map((icon, index)=>(
                <Image key={index} src={icon.src} height={22} width={22} alt="icon"/>
            ))}
            </div>
            </div>
            <div className='flex flex-col gap-10 w-[45%] max-md:w-full'>
                <h2 className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2A0EA6] to-[#F54208]'>Subscribe to get new updates & offers.</h2>
                <SignupInput />
                <CheckboxWithLabel/>
            </div>
        </div>
        <div className='flex gap-5 max-sm:gap-2 justify-center'>
            {bottomLinks.map((item, index)=>(
                <ul key={index} className='flex gap-5 max-sm:gap-2 max-sm:text-sm'>
                <li>{item}</li>
                {index < bottomLinks.length - 1 && (
                <Image src="/assets/favicon/verticalbar.png" height={20} width={1} alt="vertical bar" />
                )}
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Signup