import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='w-full relative hero_section h-[100vh] flex justify-center items-center'>
        <div className='overlay_div absolute top-0 left-0 w-[100%] h-[100%] z-0'></div>
        <div className='w-[50%] z-10 flex flex-col gap-4'>
            <h1 className='text-white text-6xl font-bold text-center z-10'>Your Path to Digital Excellence</h1>
            <p className='text-gray-400 text-lg text-center'>At ligula justo morbi sagittis fusce. Accumsan magna habitant non habitasse litora etiam torquent. Placerat lobortis volutpat efficitur elementum sagittis leo amet euismod tristique.</p> 
        </div>
    </div>
  )
}

export default Hero