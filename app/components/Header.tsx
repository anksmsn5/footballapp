// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import '../globals.css'; 
import Logo from '../public/images/logo.png';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white-600 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-white text-2xl font-bold">
         <Image src={Logo} className='logo'></Image>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-black hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-black hover:text-blue-300">
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-black hover:text-blue-300">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
