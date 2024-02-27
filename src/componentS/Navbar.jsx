// Navbar.js

import React from 'react';
import logo from '../assets/logo.png';
import Voucher from '../assets/voucher.png';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo}alt="Logo" className="h-20 w-35" />
        </div>
        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#" className="text-black hover:green-500 hover:underline">Who we are</a>
          <a href="#" className="text-black hover:text-green-400">Our Unique Approach</a>
          <a href="#" className="text-black hover:text-green-400">How it Works</a>
          <a href="#" className="text-black hover:text-green-400">Contact Us</a>
        </div>
        {/* Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-600">

        <img src={Voucher} alt="Button Icon" className="h-6 w-6 " />
      <span>GET COUPONS</span>
           </button>
      </div>
    </nav>
  );
};

export default Navbar;