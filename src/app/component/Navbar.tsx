'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: 'Who we are', href: '#' },
    { name: 'What we do', href: '#' },
    { name: 'Insights', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const menuVariants = {
    hover: { y: -2, transition: { duration: 0.2 } },
    initial: { y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.5 } },
    initial: { scale: 1 },
  };

  const underlineVariants = {
    hover: { width: '100%', transition: { duration: 0.3 } },
    initial: { width: '0%', transition: { duration: 0.3 } },
  };

  return (
    <nav className="text-white py-4 px-6 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        <img src="./main-logo.png" alt="BlackCoffer Logo" />
      </Link>

      {/* Menu Items */}
      <ul className="flex space-x-8">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            variants={menuVariants}
            initial="initial"
            whileHover="hover"
            onHoverStart={() => setHoveredItem(item.name)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative flex items-center space-x-1"
          >
            <div className="relative">
              <Link href={item.href} className="text-sm">
                {item.name}
              </Link>
              <motion.div
                variants={underlineVariants}
                initial="initial"
                animate={hoveredItem === item.name ? 'hover' : 'initial'}
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </motion.li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        {/* Search Button */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className="flex items-center border border-white rounded-full p-2 shadow-md"
        >
          <Link href="/">
            <Search size={16} />
          </Link>
        </motion.div>

        {/* Contact Us Button */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className="flex items-center space-x-2 border border-white rounded-full py-1 px-3 shadow-md"
        >
          <div className="bg-white bg-opacity-20 rounded-full p-1">
            <Phone size={16} />
          </div>
          <Link href="/" className="text-sm uppercase font-semibold">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;