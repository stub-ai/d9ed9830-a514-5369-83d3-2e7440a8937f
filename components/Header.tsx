import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 text-white">
      <h1 className="text-2xl">Your Name</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;