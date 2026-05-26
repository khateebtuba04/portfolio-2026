'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'dashboards', 'contact'];
      const triggerY = window.innerHeight / 2;
      
      let currentSection = 'home';
      let minDistance = Infinity;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceAboveTrigger = triggerY - rect.top;
          
          if (distanceAboveTrigger >= 0 && distanceAboveTrigger < minDistance) {
            minDistance = distanceAboveTrigger;
            currentSection = section;
          }
        }
      }
      
      setActiveSection((prev) => currentSection !== prev ? currentSection : prev);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#f5f0e8]/95 backdrop-blur-md shadow-sm border-black/10 py-4' : 'bg-[#f5f0e8] border-black/5 py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-center gap-6 lg:gap-12">
        <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
          {[
            ['Home', 'home'],
            ['About', 'about'],
            ['Skills', 'skills'],
            ['Experience', 'experience'],
            ['Projects', 'projects'],
            ['Showcase', 'dashboards'],
            ['Contact', 'contact']
          ].map(([label, id]) => {
            const isActive = activeSection === id;
            return (
              <a 
                key={id} 
                href={`#${id}`}
                className={`relative px-5 py-2.5 rounded-full text-[13px] md:text-[15px] font-bold tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${
                  isActive ? 'text-[#f5f0e8]' : 'text-[#111111] hover:text-[#c0392b]'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#111111] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
