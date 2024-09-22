import React from 'react';

const CardSection = () => {
  return (
    <section>
      <div className='grid grid-cols-4 gap-8 h-[100vh]'>
        <div className='col-span-2 row-span-1 bg-blue-400 rounded-lg'>
            <div class="bg-purple-900 text-white p-6 rounded-lg flex">
                <div class="w-1/2">
                    <h2 class="text-xl font-bold mb-4">Timely and Transparent Communication</h2>
                    <p class="mb-4">Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum</p>
                    <a href="#" class="bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-500 transition">Learn More</a>
                </div>
                <div class="w-1/2">
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/imac_img.png" alt="iMac" class="rounded-lg" />
                </div>
            </div>
        </div>
        <div className='col-span-1 bg-blue-400 rounded-lg'>

        </div>
        <div className='col-span-1 row-span-2 bg-blue-400 rounded-lg'>

        </div>
        <div className='col-span-1 bg-blue-400 rounded-lg'>

        </div>
        <div className='col-span-2 bg-blue-400 rounded-lg'>

        </div>
      </div>
    </section>
  );
};

export default CardSection;
