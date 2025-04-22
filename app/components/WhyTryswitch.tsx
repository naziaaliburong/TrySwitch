import React from 'react'
import Card from './Card'

const WhyTryswitch = () => {
  return (
    <div className='text-center mb-80 max-sm:mb-[1200px]'>
      <h2 className='text-5xl font-semibold mb-10'><span>Why</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2A0EA6] to-[#F54208]'>TrySwitch?</span></h2>
      <div className='bg-[url(/assets/images/bg-solution.png)] bg-cover bg-center h-[400px] rounded-2xl relative'>
        <div className=' h-52 absolute top-[80%] flex justify-around items-center w-full px-[2%] max-sm:flex-col max-sm:relative max-sm:top-[50%] max-sm:h-fit max-sm:gap-3'>
          <Card image={"/assets/images/FirstAbout.png"} reverse={false}/>
          <Card image={"/assets/images/ThirdAbout.png"} reverse={true} />
          <Card image={"/assets/images/ThirdAbout.png"} reverse={false}/>
        </div>
      </div>
    </div>
  )
}

export default WhyTryswitch