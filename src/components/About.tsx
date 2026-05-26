'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-white overflow-hidden group transition-all duration-700">
      
      {/* Subtle Hover Gradient Background for the whole section */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f5f0e8]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          
          {/* Left Side: Typography Area */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Massive About Me Header */}
            <h1 className="font-shrikhand text-ink-black text-5xl md:text-6xl lg:text-6xl leading-[0.9] tracking-tight mb-8 drop-shadow-sm transition-transform duration-700 group-hover:translate-x-2 whitespace-nowrap">
              ABOUT <span className="text-tomato-jam">ME.</span>
            </h1>

            <h2 
              className="font-shrikhand text-3xl md:text-4xl lg:text-6xl leading-tight mb-10 text-ink-black"
              style={{ fontWeight: 900, WebkitTextStroke: '1px #111111' }}
            >
              Decoding Data, 
              <br />
              <span className="text-tomato-jam italic" style={{ WebkitTextStroke: '1px #c0392b' }}>Building</span> the Future.
            </h2>
            
            <p className="text-gray-800 font-sans font-medium text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-ink-black transition-colors duration-700">
              I am a results-driven Data Science and Analytics Engineer dedicated to transforming complex, raw data into clear, actionable business insights. With a strong foundation in statistical analysis, machine learning, and advanced data visualization, I specialize in uncovering hidden patterns and building intuitive dashboards that empower smarter decision-making. I approach technology not just as lines of code, but as a strategic asset to solve real-world problems, optimize operations, and unlock compelling new opportunities for growth.
            </p>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-4 text-gray-700 text-base tracking-[0.2em] font-bold uppercase bg-gray-50 px-8 py-4 rounded-full border border-gray-200 shadow-sm group-hover:shadow-md group-hover:border-tomato-jam/20 transition-all duration-500">
              <MapPin className="w-6 h-6 text-tomato-jam" />
              Ambur, Tamil Nadu
            </div>
          </motion.div>

          {/* Right Side: Education Card & Quote */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="lg:col-span-5 flex flex-col gap-10 w-full"
          >
            
            {/* Education Card */}
            <div className="brutalist-card bg-white p-8 lg:p-12 border border-black/10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(192,57,43,0.15)] hover:border-tomato-jam/30 transition-all duration-500 hover:-translate-y-2 group/card">
              <div className="flex items-start gap-6 mb-10 border-b border-black/5 pb-10">
                <div className="w-20 h-20 rounded-full bg-[#f5f0e8] flex items-center justify-center shrink-0 group-hover/card:bg-tomato-jam transition-colors duration-500">
                  <GraduationCap className="w-10 h-10 text-tomato-jam group-hover/card:text-white transition-colors duration-500" />
                </div>
                <div className="mt-1">
                  <h3 className="font-shrikhand text-ink-black text-2xl lg:text-3xl mb-3 group-hover/card:text-tomato-jam transition-colors duration-500">
                    BSc Data Science
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg font-bold uppercase tracking-widest leading-snug">
                    Marudhar Kesari Jain College (MKJC)
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 bg-tomato-jam/10 px-6 py-3 rounded-full">
                  <span className="font-shrikhand text-tomato-jam text-2xl">94.6%</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-tomato-jam">First Rank in Department</span>
                </div>

                <ul className="space-y-5">
                  {[
                    'First Rank Holder — 94.6%',
                    'Data Science Major',
                    'Strong Foundation in Analytics & ML',
                    'Hands-on Project Experience',
                    'Internship-Based Learning'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-700 text-base md:text-lg font-medium">
                      <CheckCircle2 className="w-6 h-6 text-tomato-jam/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Quote Card */}
            <div className="flex flex-col justify-center items-center text-center p-10 lg:p-12 bg-ink-black rounded-[32px] shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 mt-4">
              <h3 className="font-shrikhand text-almond-cream text-2xl md:text-3xl mb-4 leading-tight">
                "Data is the new oil,
              </h3>
              <p className="font-shrikhand text-tomato-jam text-2xl md:text-3xl">
                and I am the refinery."
              </p>
            </div>
            



          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
