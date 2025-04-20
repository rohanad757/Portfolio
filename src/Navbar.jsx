import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-gray-100 p-4 sticky top-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight">Rohan D</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 text-sm font-medium ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300`}>
          <li className="md:inline-block block py-2 md:py-0 px-4 md:px-0"><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li className="md:inline-block block py-2 md:py-0 px-4 md:px-0"><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li className="md:inline-block block py-2 md:py-0 px-4 md:px-0"><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li className="md:inline-block block py-2 md:py-0 px-4 md:px-0"><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li className="md:inline-block block py-2 md:py-0 px-4 md:px-0"><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;