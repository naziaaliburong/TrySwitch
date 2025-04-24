import React from 'react'
import Image from 'next/image'

const StoreButtons = () => {
  return (
    <div className='flex gap-4'>
        <div>
            <button className='flex border rounded-lg px-8 justify-center py-3 bg-black text-white text-left gap-2'><Image src="/assets/pngs/googleplay.png" width={100} height={100} alt="logo" className='h-9 w-9 '/><div className='flex flex-col'><span className='text-[12px] max-lg:text-[10px]'>GET IT ON</span><span className='font-semibold text-lg max-lg:text-xs h-5 max-lg:w-20'>Google Play</span></div></button>
        </div>
        <div>
            <button className='flex border rounded-lg px-8 py-3 bg-black text-white text-left gap-2'><Image src="/assets/pngs/apple.png" width={100} height={100} alt="logo" className='h-9 w-9 '/><div className='flex flex-col'><span className='text-[12px] max-lg:text-[8px]'>Download on the</span><span className='font-semibold text-lg max-lg:text-xs h-5 max-lg:w-20'>App Store</span></div></button>
        </div>
    </div>
  )
}

export default StoreButtons