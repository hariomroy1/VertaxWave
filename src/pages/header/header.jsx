import React from "react";
import logo from "../../assets/V.jpg";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 bg-gray-800 text-white">
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img
          src={logo}
          alt="Vertex Wave Logo"
          className="w-16 h-14"
        />
        <h1 className="text-xl font-semibold">Vertex Wave</h1>
      </div>

      {/* Center Section: Links */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#industries" className="hover:text-gray-400">Industries</a>
        <a href="#aboutus" className="hover:text-gray-400">About Us</a>
      </div>

      {/* Right Section: Login Button */}
      <div className="mt-4 md:mt-0">
        <a href="#login" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
