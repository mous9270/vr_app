import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
        <span className="font-bold text-xl">Immersa</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-purple-300">Home</a></li>
          <li><a href="#" className="hover:text-purple-300">About</a></li>
          <li><a href="#" className="hover:text-purple-300">Services</a></li>
          <li><a href="#" className="hover:text-purple-300">Blog</a></li>
        </ul>
      </nav>
      <button className="bg-white text-purple-900 px-4 py-2 rounded-full font-bold">
        Contact
      </button>
    </header>
  );
}

export default Header;
