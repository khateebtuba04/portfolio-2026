'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Star, GitCommit, GitPullRequest, Code2 } from 'lucide-react';



const languages = [
  { name: 'Python', percent: 65, color: 'bg-blue-500' },
  { name: 'Jupyter Notebook', percent: 20, color: 'bg-orange-500' },
  { name: 'JavaScript', percent: 10, color: 'bg-yellow-400' },
  { name: 'SQL', percent: 5, color: 'bg-indigo-500' },
];

// Generate a random-looking but static contribution grid
const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 98; i++) { // 14 weeks x 7 days
    // Use a deterministic pseudo-random calculation so SSR matches Client perfectly
    const rand = Math.abs(Math.sin(i * 12.9898));
    let intensity = 0;
    if (rand > 0.8) intensity = 3;
    else if (rand > 0.6) intensity = 2;
    else if (rand > 0.4) intensity = 1;
    
    grid.push(intensity);
  }
  return grid;
};

const staticGrid = generateGrid();

export default function GitHubShowcase() {
  const contributionGrid = staticGrid;

  return (
    <section id="github-showcase" className="relative w-full overflow-hidden bg-[#f5f0e8] py-24 md:py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          <div>
            <div className="section-tag mb-4 justify-center md:justify-start">
              <span className="w-8 h-px bg-tomato-jam" /> Open Source
            </div>
            <h2 className="font-shrikhand text-ink-black text-5xl md:text-6xl lg:text-[6rem] tracking-tight leading-[1.1]">
              The GitHub <br/> <span className="text-tomato-jam italic">Footprint.</span>
            </h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/khateebtuba04"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 pr-8 pl-2 py-2 bg-white/60 backdrop-blur-xl border border-black/5 text-ink-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:bg-white hover:border-tomato-jam/30 hover:shadow-[0_20px_40px_-15px_rgba(192,57,43,0.2)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tomato-jam/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-tomato-jam text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-tomato-jam/30">
              <FolderGit2 className="w-5 h-5" />
            </span>
            <span className="relative z-10">
              View Profile
            </span>
            <span className="relative z-10 text-tomato-jam text-lg font-normal group-hover:translate-x-2 transition-transform duration-500">
              →
            </span>
          </motion.a>
        </div>

        {/* Custom Analytics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
          
          {/* Main Contributions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/60 backdrop-blur-xl border border-black/5 rounded-[32px] p-8 md:p-10 hover:bg-white hover:border-tomato-jam/20 hover:shadow-[0_20px_40px_-15px_rgba(192,57,43,0.1)] transition-all duration-500 flex flex-col justify-between"
          >
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="font-shrikhand text-3xl md:text-4xl text-ink-black mb-2">Contribution Activity</h3>
                <p className="text-gray-500 text-sm font-medium">Consistent code ships and repository updates.</p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>Less</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 rounded-sm bg-black/5" />
                  <div className="w-4 h-4 rounded-sm bg-tomato-jam/30" />
                  <div className="w-4 h-4 rounded-sm bg-tomato-jam/60" />
                  <div className="w-4 h-4 rounded-sm bg-tomato-jam" />
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
              <div className="grid grid-flow-col grid-rows-7 gap-2 w-max">
                {contributionGrid.map((intensity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: idx * 0.01 }}
                    className={`w-5 h-5 rounded-sm sm:w-6 sm:h-6 sm:rounded-md transition-colors duration-500 hover:scale-125 hover:z-10 cursor-pointer ${
                      intensity === 3 ? 'bg-tomato-jam' :
                      intensity === 2 ? 'bg-tomato-jam/60' :
                      intensity === 1 ? 'bg-tomato-jam/30' :
                      'bg-black/5'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-black/5">
              <div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><GitCommit className="w-3 h-3"/> Total Commits</div>
                <div className="font-shrikhand text-3xl text-ink-black">520+</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><GitPullRequest className="w-3 h-3"/> PRs Opened</div>
                <div className="font-shrikhand text-3xl text-ink-black">45</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><FolderGit2 className="w-3 h-3"/> Repositories</div>
                <div className="font-shrikhand text-3xl text-ink-black">28</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><Star className="w-3 h-3"/> Longest Streak</div>
                <div className="font-shrikhand text-3xl text-ink-black">15 Days</div>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-white/60 backdrop-blur-xl border border-black/5 rounded-[32px] p-8 md:p-10 hover:bg-white hover:border-tomato-jam/20 hover:shadow-[0_20px_40px_-15px_rgba(192,57,43,0.1)] transition-all duration-500 flex flex-col"
          >
            <h3 className="font-shrikhand text-2xl md:text-3xl text-ink-black mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-tomato-jam" /> Top Languages
            </h3>
            
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              {languages.map((lang, idx) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                    <span className="text-ink-black">{lang.name}</span>
                    <span className="text-gray-400">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>



      </div>
    </section>
  );
}
