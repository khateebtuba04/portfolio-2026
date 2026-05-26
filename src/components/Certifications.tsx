'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  name: string;
  platform: string;
  skills: string[];
}

interface CertTab {
  id: string;
  label: string;
  certs: Certificate[];
}

const certsData: CertTab[] = [
  {
    id: 'ds-analytics',
    label: 'Data Science & Analytics',
    certs: [
      { name: 'Popular Applications of Data Science', platform: 'Various', skills: ['Business Alignment'] },
      { name: 'Database Management Systems (DBMS)', platform: 'NPTEL', skills: ['Relational DBMS', 'SQL'] },
      { name: 'Deloitte Data Analytics Simulation', platform: 'Forage', skills: ['Data Analysis'] },
      { name: 'Tata Data Visualization', platform: 'Forage', skills: ['Dashboard Insights'] },
    ],
  },
  {
    id: 'ai-genai',
    label: 'AI & Generative AI',
    certs: [
      { name: 'What is Generative AI', platform: 'LinkedIn Learning', skills: ['GenAI', 'LLM Concepts'] },
      { name: 'Introduction to Artificial Intelligence', platform: 'LinkedIn Learning', skills: ['AI Basics'] },
      { name: 'Career Essentials in Generative AI', platform: 'Microsoft & LinkedIn', skills: ['Workplace AI'] },
      { name: 'Generative AI: Thoughtful Online Search', platform: 'LinkedIn Learning', skills: ['AI Search Engines'] },
      { name: 'Ethics in the Age of Generative AI', platform: 'LinkedIn Learning', skills: ['Responsible AI'] },
      { name: 'Streamlining Your Work with Copilot', platform: 'LinkedIn Learning', skills: ['Office AI'] },
      { name: 'Learning Microsoft 365 Copilot', platform: 'LinkedIn Learning', skills: ['Microsoft Ecosystem'] },
    ],
  },
  {
    id: 'python-prog',
    label: 'Python & Programming',
    certs: [
      { name: 'Level Up: Advanced Python', platform: 'LinkedIn Learning', skills: ['OOP', 'Generators'] },
      { name: 'Python for Data Science', platform: 'Various Platforms', skills: ['Numpy', 'Pandas'] },
      { name: 'Python Using AI Workshop', platform: 'AI For Techies', skills: ['AI Scripting'] },
      { name: 'Build Python App Using ChatGPT', platform: 'Great Learning', skills: ['Prompt Engineering'] },
    ],
  },
  {
    id: 'cloud-other',
    label: 'Cloud & Tech',
    certs: [
      { name: 'AWS Academic Discoverer', platform: 'AWS', skills: ['AWS Cloud'] },
      { name: 'Generative AI Overview for AWS', platform: 'AWS', skills: ['Cloud AI'] },
      { name: 'Foundations of Cybersecurity', platform: 'Google', skills: ['Security Protocols'] },
      { name: 'HTML & CSS Course', platform: 'Great Learning', skills: ['Frontend Web'] },
    ],
  },
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState(certsData[0].id);

  return (
    <section id="certifications" className="relative w-full overflow-hidden bg-[#f5f0e8] py-24 md:py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="section-tag mb-4">
              <span className="w-8 h-px bg-tomato-jam" /> Education
            </div>
            <h2 className="font-shrikhand text-ink-black text-2xl md:text-3xl lg:text-2xl tracking-tight leading-[1.1]">
              Learning & <br/> <span className="text-tomato-jam italic">Certifications.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-light leading-relaxed">
            Over 20 professional certifications focused on artificial intelligence, data science, and advanced programming.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {certsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 text-left px-6 py-4 rounded-[20px] transition-all duration-400 font-bold tracking-widest uppercase text-xs md:text-sm border ${
                  activeTab === tab.id 
                    ? 'bg-ink-black text-[#f5f0e8] border-ink-black shadow-[0_15px_30px_-10px_rgba(17,17,17,0.3)] lg:translate-x-4' 
                    : 'bg-white/40 border-black/5 text-gray-500 hover:bg-white hover:text-ink-black hover:border-black/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Certs Display Area */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {certsData.map((tab) => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4"
                  >
                    {tab.certs.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 lg:p-8 border border-black/10 rounded-[24px] hover:border-tomato-jam transition-colors bg-white/40 hover:bg-white group shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(192,57,43,0.15)]"
                      >
                        <div className="flex-1">
                          <h4 className="font-shrikhand text-xl lg:text-2xl text-ink-black mb-2 group-hover:text-tomato-jam transition-colors">{cert.name}</h4>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:text-ink-black/60 transition-colors">{cert.platform}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-black/5 group-hover:bg-tomato-jam/10 text-ink-black group-hover:text-tomato-jam text-[11px] font-bold tracking-widest rounded-full uppercase transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
