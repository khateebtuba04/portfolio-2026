'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function CountUp({
  end,
  duration = 1600,
  suffix = '',
  isFloat = false,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  isFloat?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, duration, started]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const badges = [
    'Data Scientist',
    'ML Engineer',
    'Data Analyst',
    'Analytics Engineer',
    'Python Developer',
    'Power BI Analyst'
  ];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#f5f0e8] box-border px-5 sm:px-8 lg:px-[80px] flex items-center"
    >
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center pt-28 pb-16 lg:py-0 gap-16 lg:gap-0">
        
        {/* Left Column: Text & Stats */}
        <div className="w-full flex flex-col justify-center gap-4 xl:gap-5 relative z-10">
          
          {/* Beautiful Premium Name Animation */}
          <div className="self-start flex flex-col mb-1 xl:mb-2 mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col"
            >
              <span className="text-[11px] md:text-[14px] uppercase tracking-[0.3em] text-ink-black font-bold mb-2 ml-1">
                Hello, I am
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[3.5rem] leading-[1.1] font-extrabold text-tomato-jam tracking-tight uppercase drop-shadow-sm">
                Tuba Mariyam Khateeb
              </h2>
            </motion.div>
            
            {/* Elegant Fading Underline */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
              className="h-[4px] bg-gradient-to-r from-tomato-jam to-orange-400 w-24 sm:w-32 origin-left mt-3 xl:mt-4 rounded-full"
            />
          </div>
          
          <div className="flex flex-col mt-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-6xl xl:text-[5.5rem] 2xl:text-[7.5rem] font-shrikhand text-[#111111] leading-[1] tracking-tight italic"
            >
              Data that
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-6xl xl:text-[5.5rem] 2xl:text-[7.5rem] font-shrikhand text-[#c0392b] leading-[1.1] italic tracking-tight drop-shadow-md"
            >
              Inspires.
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base lg:text-sm xl:text-xl text-gray-800 max-w-xl font-medium leading-relaxed mt-2"
          >
            Data Science & Analytics Engineer. I transform complexity into clear insights for winning strategies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 xl:gap-4 mt-2 xl:mt-3"
          >
            <a href="#projects" className="px-5 py-3 sm:px-8 sm:py-4 lg:px-6 lg:py-3 xl:px-10 xl:py-4 bg-[#111111] text-[#f5f0e8] rounded-full text-[11px] sm:text-[13px] lg:text-[11px] xl:text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-lg text-center flex-1 sm:flex-none">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 sm:px-8 sm:py-4 lg:px-6 lg:py-3 xl:px-10 xl:py-4 border-2 border-black/20 bg-transparent text-[#111111] rounded-full text-[11px] sm:text-[13px] lg:text-[11px] xl:text-sm font-bold tracking-widest uppercase transition-all hover:bg-white hover:border-transparent hover:shadow-md text-center flex-1 sm:flex-none">
              Contact Me
            </a>
            <a href="/Data_Science_Resume.pdf" download="Tuba_Mariyam_Khateeb_CV.pdf" className="px-5 py-3 sm:px-8 sm:py-4 lg:px-6 lg:py-3 xl:px-10 xl:py-4 border-2 border-tomato-jam text-tomato-jam rounded-full text-[11px] sm:text-[13px] lg:text-[11px] xl:text-sm font-bold tracking-widest uppercase transition-all hover:bg-tomato-jam hover:text-white hover:shadow-md text-center w-full sm:w-auto mt-2 sm:mt-0 lg:mt-0">
              Download CV
            </a>
          </motion.div>

          {/* Left Column Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 xl:gap-4 mt-6 max-w-2xl"
          >
            <div className="p-4 bg-white/80 border border-black/10 rounded-[20px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tomato-jam/50">
              <div className="font-shrikhand text-[#c0392b] text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-1">
                <CountUp end={94.6} isFloat={true} suffix="%" />
              </div>
              <div className="text-gray-700 text-[9px] lg:text-[10px] xl:text-xs tracking-[0.1em] font-bold uppercase leading-tight">First Rank <br/> Dept of Data Science</div>
            </div>
            
            <div className="p-4 bg-white/80 border border-black/10 rounded-[20px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tomato-jam/50">
              <div className="font-shrikhand text-[#c0392b] text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-1">
                <CountUp end={25} suffix="+" />
              </div>
              <div className="text-gray-700 text-[9px] lg:text-[10px] xl:text-xs tracking-[0.1em] font-bold uppercase leading-tight">Portfolio <br/> Projects</div>
            </div>

            <div className="p-4 bg-white/80 border border-black/10 rounded-[20px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tomato-jam/50">
              <div className="font-shrikhand text-[#c0392b] text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-1">
                <CountUp end={6} suffix="+" />
              </div>
              <div className="text-gray-700 text-[9px] lg:text-[10px] xl:text-xs tracking-[0.1em] font-bold uppercase leading-tight">Professional <br/> Internships</div>
            </div>

            <div className="p-4 bg-white/80 border border-black/10 rounded-[20px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tomato-jam/50">
              <div className="font-shrikhand text-[#c0392b] text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-1">
                <CountUp end={5} suffix="k+" />
              </div>
              <div className="text-gray-700 text-[9px] lg:text-[10px] xl:text-xs tracking-[0.1em] font-bold uppercase leading-tight">LinkedIn <br/> Network</div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Photo & Orbiting Badges */}
        <div className="w-full flex items-center justify-center relative z-0 pb-16 lg:pb-0">
          
          <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[350px] lg:h-[350px] xl:w-[480px] xl:h-[480px] 2xl:w-[600px] 2xl:h-[600px]">
            
            {/* Orbiting Badges Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-black/5 w-full h-full"
            >
              {badges.map((text, i) => {
                const angle = (i / badges.length) * 360;
                return (
                  <div 
                    key={text} 
                    className="absolute top-1/2 left-1/2 w-0 h-0" 
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="absolute top-0 left-0 -translate-y-[150px] sm:-translate-y-[225px] lg:-translate-y-[175px] xl:-translate-y-[240px] 2xl:-translate-y-[300px]">
                      <motion.div
                        initial={{ rotate: -angle }}
                        animate={{ rotate: -360 - angle }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 ${i % 2 === 0 ? 'bg-[#111111]' : 'bg-[#c0392b]'} text-white px-3 py-1.5 sm:px-7 sm:py-4 lg:px-4 lg:py-2 xl:px-6 xl:py-3 rounded-full shadow-xl text-[9px] sm:text-sm lg:text-[10px] xl:text-sm font-bold tracking-widest uppercase whitespace-nowrap`}
                      >
                        {text}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[240px] lg:h-[240px] xl:w-[360px] xl:h-[360px] 2xl:w-[460px] 2xl:h-[460px] rounded-[40px] 2xl:rounded-[56px] overflow-hidden shadow-[15px_15px_40px_rgba(192,57,43,0.2)] group z-10"
            >
              <div className="absolute inset-0 border-4 lg:border-[8px] 2xl:border-[10px] border-[#c0392b] transition-colors duration-500 rounded-[40px] 2xl:rounded-[56px] z-20 pointer-events-none opacity-90 group-hover:opacity-100 group-hover:border-[#111111]"></div>
              <Image 
                src="/profile.jpg" 
                alt="Tuba Mariyam Khateeb" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Tuba+Mariyam+Khateeb&background=9B2226&color=fff&size=512';
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator - absolute bottom center */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-gray-600 text-[11px] font-bold tracking-[0.2em] uppercase">Scroll to explore</span>
        <div className="relative h-12 w-[24px] overflow-hidden rounded-full border border-gray-400">
          <motion.div 
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#c0392b] absolute top-1.5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
