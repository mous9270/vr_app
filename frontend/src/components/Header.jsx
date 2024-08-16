import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">Immersa</div>
      </div>
      <nav className="space-x-8">
        <a href="#" className="hover:text-indigo-300">Home</a>
        <a href="#" className="hover:text-indigo-300">About</a>
        <a href="#" className="hover:text-indigo-300">Services</a>
        <a href="#" className="hover:text-indigo-300">Blog</a>
        <button className="px-4 py-2 bg-white text-indigo-900 rounded-full hover:bg-gray-100">Contact</button>
      </nav>
    </header>
  );
};

export default Header;

