import React from 'react';

const DigitalExcellence = () => {
  return (
    <div className="bg-gray-900 relative digital_div bg-[url('https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/bg_pattern.png')] text-white font-sans min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Section (Our Value) */}
          <div className="col-span-3 flex flex-col justify-end relative bg-[url('https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/computer-screens-with-data.jpg')] bg-cover bg-center rounded-2xl py-8 px-4 sm:px-8 shadow-lg">
            <div id='digital_first_block' className='rounded-2xl'></div>
            <span className="text-pink-500 z-10 relative uppercase font-bold text-sm">Our Value</span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 z-10 relative">
              Smart Designs, Sharp Results - Choose Digimax for Digital Excellence.
            </h1>
            <p className="text-gray-400 mt-4 z-10 relative">
              Neque sodales elementum fames ac nunc pellentesque penatibus. Consectetur donec nascetur fames metus est faucibus sodales commodo natoque consequat fusce.
            </p>
            <button className="mt-8 bg-gradient-to-r relative z-10 from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full hover:opacity-90 transition w-40">
              Learn More
            </button>
          </div>

          {/* Right Section (Our Vision and Our Mission) */}
          <div className="col-span-2 flex flex-col gap-8">
            {/* Our Vision Card */}
            <div className="relative bg-purple-500 rounded-2xl p-8 shadow-lg">
              <span className="text-gray-100 uppercase font-bold text-sm">Our Vision</span>
              <h2 className="text-xl font-semibold mt-2">
                Elevate Your Digital Presence with Digimax Expertise.
              </h2>
              <p className="text-gray-300 mt-4">
                Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="relative bg-pink-500 rounded-2xl p-8 shadow-lg">
              <span className="text-gray-100 uppercase font-bold text-sm">Our Mission</span>
              <h2 className="text-xl font-semibold mt-2">
                Unleash Your Potential in the Digital Realm with Digimax.
              </h2>
              <p className="text-gray-300 mt-4">
                Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExcellence;
