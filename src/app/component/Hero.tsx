'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, 
        transition: { duration: 1 } 
    },
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-6">
      {/* Wavy Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('/wave-pattern.png')`,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Heading */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="whitespace-nowrap">TOGETHER WE</span>
          <br />
          <span className="whitespace-nowrap ml-15">REINVENTED</span>
        </motion.h1>

        {/* Description and Link */}
        <div className="mt-8 md:mt-0 max-w-md">
          <div className="w-12 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg leading-relaxed">
            Together, we can reinvent your business. 
            <br />Reinvention is about breaking industry norms. 
            <br />Our wide range of capabilities, ecosystem 
            <br />partnerships and unmatched industry expertise 
            <br />can help your business become the next best version of itself.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            See what we do
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#60A5FA"
              className="ml-2"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;