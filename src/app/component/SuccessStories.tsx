"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const SuccessStories = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const stories = [
    {
      date: "February 28, 2024",
      title: "Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development"
    },
    {
      date: "March 17, 2024",
      title: "Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application"
    },
    {
      date: "March 16, 2024",
      title: "Streamlined Equity Waterfall Calculation and Deal Management System"
    },
    {
      date: "March 15, 2024",
      title: "Automated Orthopedic Case Report Generation: Harnessing Web Scraping and AI Integration"
    },
    {
      date: "March 14, 2024",
      title: "MVP for a software that analyses content from audio (Pharma-based)"
    },
    {
      date: "March 10, 2024",
      title: "Text Summarizing Tool to scrape and summarize pubmed medical papers"
    },
    {
      date: "March 12, 2024",
      title: "Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development"
    },
    {
      date: "March 25, 2024",
      title: "Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application"
    },
    {
      date: "March 29, 2024",
      title: "Streamlined Equity Waterfall Calculation and Deal Management System"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const speed = 0.1; 
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const totalWidth = stories.length * 100;
        if (prevPosition >= totalWidth - 100) {
          return 0;
        }
        return prevPosition + speed;
      });
    }, 50); 
    
    return () => clearInterval(interval);
  }, [isPaused, stories.length]);

  
  const handlePrev = () => {
    setIsPaused(true);
    setPosition(prev => Math.max(0, prev - 100));
    
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setPosition(prev => Math.min((stories.length - 1) * 100, prev + 100));
    
    setTimeout(() => setIsPaused(false), 2000);
  };

  
//   const visibleIndex = Math.floor(position / 100) % stories.length;
  
  return (
    <div className="w-full bg-black">
      <section className="text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Success Stories</h2>
            <a href="#" className="flex items-center gap-2 text-white group">
              <span className="group-hover:underline">Read all stories</span>
              <ArrowRight size={20} className="text-blue-500" />
            </a>
          </div>
          <div className="relative h-48 mb-16 overflow-hidden" ref={containerRef}>
            <div 
              className="absolute flex w-full transition-all ease-linear"
              style={{ 
                transform: `translateX(-${position}%)`,
                width: `${stories.length * 100}%`
              }}
            >
              {stories.map((story, index) => (
                <div 
                  key={index} 
                  className="w-full px-4"
                  style={{
                    flex: `0 0 ${100 / stories.length}%`
                  }}
                >
                  <div className="p-6 bg-black border border-gray-800 rounded-lg h-full">
                    <p className="text-gray-400 mb-4">{story.date}</p>
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">{story.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-16">
            <div className="flex space-x-4">
              <button 
                onClick={handlePrev}
                className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Next story"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;