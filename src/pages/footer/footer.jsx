import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-semibold">Vertex Wave</h1>
          <p className="text-sm text-gray-400">Empowering ideas. Connecting people.</p>
        </div>
        
        {/* Footer Links Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center md:text-left">
          <a href="#about" className="hover:text-gray-400">About Us</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#industries" className="hover:text-gray-400">Industries</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Footer Social Icons Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center md:text-left mt-4 md:mt-0">
          <a href="#facebook" className="hover:text-gray-400">Facebook</a>
          <a href="#twitter" className="hover:text-gray-400">Twitter</a>
          <a href="#linkedin" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        © 2024 Vertex Wave. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
