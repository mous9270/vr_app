import React from 'react';

function Navigation() {
  const navItems = ['Home', 'About', 'Services', 'Blog'];

  return (
    <nav className="flex gap-9 justify-between self-stretch m-auto">
      {navItems.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase()}`} className="focus:outline-none focus:underline">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
