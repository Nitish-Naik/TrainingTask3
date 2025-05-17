import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Column - Navigation Links */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">About Founder</a>
          <a href="#" className="hover:text-gray-400">Contact us</a>
          <a href="#" className="hover:text-gray-400">Team</a>
          <a href="#" className="hover:text-gray-400">Locations</a>
        </div>

        {/* Middle Column - More Links */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <a href="#" className="hover:text-gray-400">FAQ</a>
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-400">Careers</a>
          <a href="#" className="hover:text-gray-400">Solutions</a>
          <a href="#" className="hover:text-gray-400">Our Process</a>
        </div>

        {/* Right Column - Get in Touch + GIF */}
        <div className="flex flex-row items-start space-x-6">
          
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <p className="max-w-xs">
              Taking seamless key performance indicators offline to maximise the long tail.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* GIF beside Get in Touch */}
          <img
            src="/animation.gif"
            alt="Animation"
            className="w-48 h-auto object-contain"
          />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
