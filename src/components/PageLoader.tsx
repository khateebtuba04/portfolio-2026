'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 10;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white"
        >
          <div className="w-72 space-y-5 text-center">
            {/* Monogram branding */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-2xl text-white tracking-[0.2em] font-bold uppercase"
            >
              Tuba Mariyam
            </motion.div>

            {/* Loading text with percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] text-accent-cyan uppercase tracking-[0.3em] font-semibold font-mono"
            >
              Initializing Core Deck // {progress}%
            </motion.div>

            {/* Glowing Tech Progress Bar */}
            <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-cyan to-accent-violet shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
