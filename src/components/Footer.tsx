'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-ink-black pt-24 pb-12 overflow-hidden flex flex-col items-center">
      
      {/* Background glow */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-tomato-jam/20 via-ink-black to-ink-black pointer-events-none" />
      
      <div className="w-full container mx-auto px-6 flex flex-col items-center justify-center mb-24 relative z-10 text-center space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, textShadow: "0px 10px 30px rgba(255,255,255,0.2)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="font-shrikhand text-[9vw] md:text-[6vw] lg:text-[5vw] leading-[0.9] text-white opacity-90 select-none cursor-default tracking-wide drop-shadow-xl"
        >
          TUBA MARIYAM
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, filter: "brightness(1.2)" }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="font-shrikhand text-[9vw] md:text-[6vw] lg:text-[5vw] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-tomato-jam to-orange-400 select-none cursor-default tracking-wide drop-shadow-[0_10px_30px_rgba(192,57,43,0.3)]"
        >
          KHATEEB
        </motion.h2>
      </div>

      {/* Footer Content */}
      {/* Footer Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="w-full container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-white relative z-10 pt-12 border-t border-white/10"
      >
        
        {/* Contact Info */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
            Contact
          </div>
          <a href="mailto:khateebtubamariyam@gmail.com" className="font-bold text-sm md:text-base hover:text-tomato-jam transition-colors break-all group flex flex-col items-start w-fit">
            khateebtubamariyam@gmail.com
            <span className="w-0 h-px bg-tomato-jam group-hover:w-full transition-all duration-300 mt-1" />
          </a>
          <p className="font-light text-sm text-gray-400 mt-2">
            Ambur, TamilNadu
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
            Social
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href="https://www.linkedin.com/in/tuba-mariyam-khateeb-17aa13316/" target="_blank" rel="noreferrer" className="font-bold text-sm hover:text-tomato-jam transition-all flex items-center gap-3 group">
              <span className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-tomato-jam group-hover:border-tomato-jam group-hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-4 h-4 text-white" />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
            </a>
            <a href="https://github.com/khateebtuba04" target="_blank" rel="noreferrer" className="font-bold text-sm hover:text-tomato-jam transition-all flex items-center gap-3 group">
              <span className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-tomato-jam group-hover:border-tomato-jam group-hover:-translate-y-1 transition-all duration-300">
                <Github className="w-4 h-4 text-white" />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Back to top & Copyright */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-start md:items-end justify-between gap-8 h-full">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 font-bold uppercase tracking-widest text-[10px] hover:text-tomato-jam transition-colors group mt-2"
          >
            Back to Top 
            <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-tomato-jam group-hover:border-tomato-jam group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(192,57,43,0.4)] transition-all duration-500">
              <ArrowUp className="w-4 h-4 text-white" />
            </div>
          </button>
          
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
            © {new Date().getFullYear()} T.M.K. <span className="w-1 h-1 rounded-full bg-tomato-jam" /> All Rights Reserved.
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
