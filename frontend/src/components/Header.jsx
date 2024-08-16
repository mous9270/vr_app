import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

function Header() {
  return (
    <header className="flex flex-wrap gap-10 items-center text-sm font-semibold leading-none text-white whitespace-nowrap rounded-none">
      <Logo />
      <Navigation />
      <ContactButton />
    </header>
  );
}

export default Header;
