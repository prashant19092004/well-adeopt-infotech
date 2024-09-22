import React from 'react'
import './Hero.css'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import gsap from 'gsap'

const Hero = () => {

  let typeSplit = new SplitType('#hero_heading', {
    types: 'lines, words, chars',
    tagName: 'span'
  })
  
  useGSAP(() => {
    gsap.from('#hero_heading .word', {
      y: '110%',
      opacity: 0,  // Usually, we start with opacity 0 to fade in
      rotationZ: 10,  // No need for quotes for numbers
      duration: 2,
      ease: 'back.inOut',
      stagger: 0.1
    })
  }, []);
  return (
    <div className='w-full relative hero_section h-[100vh] flex justify-center items-center'>
        <div className='overlay_div absolute top-0 left-0 w-[100%] h-[100%] z-0'></div>
        <div className='sm:w-[75%] md:w-[70%] lg:w-[55%] z-10 flex flex-col gap-4 items-center px-4'>
            <h5 id='' className='text-lg sm:text-xl text-center font-semibold bg-clip-text text-transparent mix-blend-lighten bg-gradient-to-b from-[rgba(34,181,243,1)] via-[rgba(34,181,243,0.4)] to-[rgba(34,181,243,0)]'>WELCOME TO WELL ADEPT INFOTECH</h5>
            <h1 id='hero_heading' className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold sm:font-bold text-center z-10'>Your Path to Digital Excellence</h1>
            <p className='text-gray-400 text-sm md:text-md lg:text-lg text-center'>At ligula justo morbi sagittis fusce. Accumsan magna habitant non habitasse litora etiam torquent. Placerat lobortis volutpat efficitur elementum sagittis leo amet euismod tristique.</p> 
            <button className='bg-gradient-to-r from-teal-400 to-blue-500 rounded-full text-white w-[160px] font-medium py-2 px-4'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Hero