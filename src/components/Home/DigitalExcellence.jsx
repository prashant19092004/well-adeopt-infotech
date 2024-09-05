import React from 'react';

const DigitalExcellence = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Section (Our Value) */}
          <div className="col-span-3 relative bg-gray-800 rounded-2xl p-8 shadow-lg">
            <span className="text-pink-500 uppercase font-bold text-sm">Our Value</span>
            <h1 className="text-4xl font-bold mt-4">
              Smart Designs, Sharp Results - Choose Digimax for Digital Excellence.
            </h1>
            <p className="text-gray-400 mt-4">
              Neque sodales elementum fames ac nunc pellentesque penatibus. Consectetur donec nascetur fames metus est faucibus sodales commodo natoque consequat fusce.
            </p>
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full hover:opacity-90 transition">
              Learn More
            </button>
            {/* Overlay arrow circle */}
            <div className="absolute top-8 right-8 w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v6a1 1 0 102 0V6a1 1 0 011-1h5a1 1 0 000-2h-6a1 1 0 00-1 1v6a1 1 0 11-2 0V6a1 1 0 00-1-1H5a1 1 0 000 2h5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
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
              {/* Overlay arrow circle */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v6a1 1 0 102 0V6a1 1 0 011-1h5a1 1 0 000-2h-6a1 1 0 00-1 1v6a1 1 0 11-2 0V6a1 1 0 00-1-1H5a1 1 0 000 2h5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
              {/* Overlay arrow circle */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v6a1 1 0 102 0V6a1 1 0 011-1h5a1 1 0 000-2h-6a1 1 0 00-1 1v6a1 1 0 11-2 0V6a1 1 0 00-1-1H5a1 1 0 000 2h5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExcellence;
