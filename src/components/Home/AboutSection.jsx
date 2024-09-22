import React from 'react'
import './Hero.css';

const AboutSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='about_img_div relative w-full md:w-[48%] p-4 rounded-xl'>
        <img
          className='w-full opacity-50 hover:opacity-70 transition-all duration-200 rounded-xl'
          src='https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/im-so-glad-i-found-you-shot-of-two-coworkers-talking-while-using-a-digital-tablet--1536x1025.jpg'
          alt=''
        />
      </div>
      <div className='w-full md:w-[48%] p-6 flex items-center justify-start'>
        <div className='flex flex-col gap-5'>
          <h5 className='text-sm font-bold text-[#22b5f3]'>WHO WE ARE</h5>
          <h1 className='text-[1.8rem] md:text-[2.4rem] font-bold leading-[35px] md:leading-[50px] text-white'>
            Your Digital Future, Our Expertise: Digimax Delivers Excellence.
          </h1>
          <p className='text-gray-400 text-[1rem] md:text-[1.1rem]'>
            Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit
          </p>
          <button className='bg-[#22b5f3] rounded-full text-white w-[150px] md:w-[200px] font-semibold py-2 px-4'>
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
