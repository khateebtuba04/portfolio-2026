'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages & DB',
    skills: [
      'Python', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB Atlas',
      'Supabase', 'Oracle', 'DBMS', 'C++', 'HTML', 'CSS', 'JavaScript',
    ],
  },
  {
    id: 'data-science',
    label: 'Data Science',
    skills: [
      'Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis',
      'Statistical Analysis', 'Data Analytics', 'Predictive Analytics',
      'Data Visualization', 'Business Analytics',
    ],
  },
  {
    id: 'ml-ai',
    label: 'ML & AI',
    skills: [
      'Regression Analysis', 'Classification Models', 'Clustering Algorithms',
      'Recommendation Systems', 'NLP Fundamentals', 'Computer Vision',
      'CNN', 'Model Evaluation', 'Supervised Learning', 'Unsupervised Learning',
    ],
  },
  {
    id: 'libraries',
    label: 'Libraries',
    skills: [
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn',
      'TensorFlow', 'OpenCV', 'Streamlit', 'SciPy', 'Plotly', 'Flask',
    ],
  },
  {
    id: 'bi',
    label: 'BI & Viz',
    skills: ['Power BI', 'Tableau', 'Dashboard Design', 'KPI Reporting', 'Business Insights'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Microsoft Excel', 'AWS Cloud Fundamentals'],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="relative w-full overflow-hidden bg-almond-cream py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="section-tag justify-center md:justify-start">
              <span className="w-8 h-px bg-tomato-jam" /> Expertise
            </div>
            <h2 className="font-shrikhand text-ink-black text-2xl md:text-3xl lg:text-2xl leading-[1.1] tracking-tight">
              Technology <br/> <span className="text-tomato-jam italic">Arsenal.</span>
            </h2>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24"
        >
          
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 text-left px-6 py-4 rounded-[20px] transition-all duration-400 font-bold tracking-widest uppercase text-xs md:text-sm border ${
                  activeTab === category.id 
                    ? 'bg-ink-black text-white border-ink-black shadow-[0_15px_30px_-10px_rgba(17,17,17,0.4)] lg:translate-x-4 scale-105' 
                    : 'bg-white/40 border-black/5 text-gray-500 hover:bg-white hover:text-ink-black hover:border-black/10 hover:shadow-sm'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Display Area */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {skillCategories.map((category) => (
                activeTab === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="brutalist-card bg-white/70 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-white border"
                  >
                    <h3 className="font-shrikhand text-2xl md:text-3xl text-ink-black mb-10 pb-6 border-b border-black/10 drop-shadow-sm">
                      {category.label}
                    </h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                          className="px-6 py-3 rounded-full border border-black/10 bg-white/80 text-ink-black text-xs md:text-[13px] font-bold tracking-widest uppercase hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(192,57,43,0.2)] hover:border-tomato-jam/50 hover:bg-tomato-jam hover:text-white transition-all cursor-default group flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-tomato-jam/50 group-hover:bg-white/80 transition-colors" />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
