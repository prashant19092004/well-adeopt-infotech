import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 w-full border-t border-gray-400/10">
      <div className="w-full">
        <div className="flex px-6 flex-wrap justify-between items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 w-full flex flex-col items-center lg:items-start lg:w-[29%]">
            <a href="#" className="text-[3rem]">
              <img className='h-14 logo mb-4' src={logo} alt='logo' />
            </a>
            <p className="text-md w-[100%] md:w-[60%] lg:w-[100%] text-center lg:text-left mb-4 text-[#9B96B0]">
              Transforming Ideas into Digital Excellence. 
              Elevate your online presence with our innovative solutions and
              strategic digital services.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons */}
              <a href="#" className="text-black bg-white rounded-full p-2">
                <FaFacebookF />
              </a>
              <a href="#" className="text-black bg-white rounded-full p-2">
                <FaInstagram />
              </a>
              <a href="#" className="text-black bg-white rounded-full p-2">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-black bg-white rounded-full p-2">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="flex flex-wrap mt-8 lg:mt-0 w-[100%] lg:w-[60%] justify-between md:space-x-16 space-y-8 md:space-y-0">
            {/* Services */}
            <div className='w-full md:w-[25%]'>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">
                  Website Development
                </li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">
                  App Development
                </li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">
                  Digital Marketing
                </li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Graphic Design</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Brand Identity</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">
                  Search Engine Optimization
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className='w-[47%] md:w-[25%]'>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Help Center</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">FAQ</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">
                  Ticket Support
                </li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Sales Support</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Contact us</li>
              </ul>
            </div>

            {/* Company */}
            <div className='w-[47%] md:w-[25%]'>
              <h5 className="text-lg font-semibold mb-4">Company</h5>
              <ul>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">About us</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Our Team</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Careers</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Article & News</li>
                <li className="text-[#9B96B0] hover:text-white mt-2 cursor-pointer text-sm">Legal Notices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 px-6 border-t border-gray-400/10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#9B96B0] text-sm">
            Copyright© 2023 DigiMax, All rights reserved. Powered by MoxCreative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
