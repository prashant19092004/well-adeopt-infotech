import React from 'react';
import './Hero.css';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.",
      image: "https://html.modernwebtemplates.com/dotcreative/images/step_img_1.jpg",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Aliquam semper purus in nulla dictum fermentum. Nullam faucibus magna at velit ultricies posuere.",
      image: "https://html.modernwebtemplates.com/dotcreative/images/step_img_1.jpg",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Pellentesque sit amet mauris sit amet dolor hendrerit elementum ut vitae elit.",
      image: "https://html.modernwebtemplates.com/dotcreative/images/step_img_1.jpg",
    },
    {
      number: "04",
      title: "Support",
      description:
        "Mauris efficitur, ligula ac cursus vestibulum, orci dolor scelerisque lectus, nec consectetur ligula est id enim.",
      image: "https://html.modernwebtemplates.com/dotcreative/images/step_img_1.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center w-[100%] gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`px-2 sm:px-16 flex ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} relative justify-center gap-4 sm:gap-4 lg:gap-14 m-0 flex-col lg:flex-row items-center my-6 w-[100%]`}
          >
            <div className='lg:w-[32%] flex lg:block gap-4 items-center'>
              <h2
                className={`${index % 2 === 0 ? 'text-[#0071bc]' : 'text-teal-400'} ${index % 2 === 0 ? 'left-28' : 'right-28'} lg:absolute lg:top-[50%] lg:-translate-y-[50%] text-7xl m-0 lg:text-[10rem] font-semibold`}
              >
                {step.number}
              </h2>
              <h3 className={`text-[2.5rem] ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} lg:text-[3.3rem] text-white font-medium relative z-20`}>{step.title}</h3>
            </div>
            <div id='step_img_div' className="h-64 w-64 relative p-3 bg-gray-500 rounded-full">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover rounded-full"
              />
              {
                index % 2 == 0 ? 
                <img className='hidden lg:block absolute -bottom-[40%] right-0' src='https://html.modernwebtemplates.com/dotcreative/img/right_arrow.png' alt='' /> : 
                <img className={`hidden absolute -bottom-[40%] left-0 ${index == 3 ? 'lg:hidden' : 'lg:block'}`} src='https://html.modernwebtemplates.com/dotcreative/img/left_arrow.png' alt='' />
              }
            </div>
            <p className={`text-zinc-500 mt-2 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-md w-[100%] text-center lg:w-[32%] font-thin`}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
