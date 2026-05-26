'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { Github } from './Icons';

interface Project {
  id: string;
  title: string;
  category: string[];
  categoriesText: string;
  github?: string;
  desc: string;
  tech: string[];
}

const projectsData: Project[] = [
  {
    id: 'customer-behavior',
    title: 'Customer Shopping Behavior Analysis',
    category: ['Data Analytics', 'SQL', 'Power BI'],
    categoriesText: 'Data Analytics | SQL | Power BI',
    github: 'https://github.com/khateebtuba04/Customer_behavior_analysis',
    desc: 'End-to-end customer analytics project analyzing shopping patterns, spending behavior, discount usage, subscription status, and product performance. Combined Python for EDA, PostgreSQL for business queries, and Power BI for interactive dashboards.',
    tech: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Pandas', 'Seaborn', 'Gamma', 'EDA'],
  },
  {
    id: 'ecommerce-sales',
    title: 'E-Commerce Sales Analysis',
    category: ['Data Analytics'],
    categoriesText: 'Data Analytics | EDA',
    github: 'https://github.com/khateebtuba04/E-Commerce-Sales-Analysis',
    desc: 'A Python-based e-commerce sales data analysis project exploring sales trends, product performance, and business insights using data visualization and EDA techniques.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Data Visualization'],
  },
  {
    id: 'netflix-data',
    title: 'Netflix Data Analysis Project',
    category: ['Data Analytics'],
    categoriesText: 'Data Analytics | Exploratory Analysis',
    github: 'https://github.com/khateebtuba04/Netflix-Data-Analysis-Project',
    desc: 'Exploratory data analysis of Netflix content library, investigating release trends, geographical distribution, genre popularity, and rating demographics.',
    tech: ['Python', 'Pandas', 'Plotly', 'Seaborn', 'EDA'],
  },
  {
    id: 'zepto-sql',
    title: 'Zepto SQL Data Analysis',
    category: ['Data Analytics', 'SQL'],
    categoriesText: 'Data Analytics | SQL',
    github: 'https://github.com/khateebtuba04/Zepto-SQL-Data-Analysis',
    desc: 'Performed business-focused SQL analysis on Zepto retail data using PostgreSQL to answer real-world business questions related to inventory, pricing, discounts, revenue estimation, and product performance. The project focused on transforming raw e-commerce data into actionable business insights.',
    tech: ['PostgreSQL', 'SQL', 'Data Analytics', 'Business Analytics', 'Data Cleaning', 'E-Commerce Analytics'],
  },
  {
    id: 'gladiron-leather',
    title: 'Gladiron Leather E-Commerce Platform',
    category: ['Full Stack Development', 'E-Commerce'],
    categoriesText: 'Full Stack | E-Commerce | Real-World',
    github: 'https://github.com/khateebtuba04/gladiron-leather-website',
    desc: 'Developed a full-stack e-commerce platform for Gladiron Leather, my father\'s business, to establish a professional digital storefront. The project features a complete shopping experience including product management, secure payment integration, and a responsive, premium user interface designed to drive online sales.',
    tech: ['Full Stack', 'Payment Gateway', 'E-Commerce', 'Responsive Design', 'UI/UX'],
  },
  {
    id: 'healthvar',
    title: 'HealthVar — Live Healthcare Analytics Project',
    category: ['Healthcare Analytics', 'Data Visualization'],
    categoriesText: 'Healthcare Analytics | Statistical Analysis',
    desc: 'HealthVar (Health + Variability) was a college-level healthcare analytics project developed for a scientific/statistical exhibition to demonstrate how data science concepts can be applied to real-world health analysis.\n\nThe project involved collecting real-world healthcare information through Google Forms from participants with different medical conditions and health backgrounds, including diabetes and other health-related indicators.\n\nAfter collecting the data, statistical analysis was performed to extract meaningful insights using concepts such as Mean, Median, Mode, Variance, Standard Deviation, and Data Distribution Analysis.\n\nThe findings were then visualized through charts and graphs to identify trends, patterns, and health variability among participants.\n\n🏆 Achievement: Presented at Scientific/Statistical Exhibition',
    tech: ['Python', 'Google Forms', 'Google Sheets', 'Statistics', 'Matplotlib', 'Healthcare Analytics'],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-almond-cream py-24 md:py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-tomato-jam" /> Portfolio
          </div>
          <h2 className="font-shrikhand text-ink-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
            Selected <span className="text-tomato-jam italic">Works.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Explore projects where data takes shape to tell stories, predict trends, and drive strategic business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full border border-black/10 group-hover:bg-[#111111]/95 group-hover:backdrop-blur-xl group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden z-10">
                {/* Subtle Glow Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <span className="text-tomato-jam text-[9px] font-bold uppercase tracking-widest bg-tomato-jam/10 px-3 py-1.5 rounded-full group-hover:bg-white/10 group-hover:text-blue-200 transition-colors">
                    {project.categoriesText.split('|')[0]}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/20 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-shrikhand text-ink-black text-2xl lg:text-3xl mb-4 group-hover:text-white transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-ink-black/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-almond-cream rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-white/20"
            >
              {/* Modal Header */}
              <div className="bg-ink-black p-8 sm:p-12 lg:p-16 relative shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-tomato-jam hover:scale-110 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-tomato-jam text-[10px] font-bold uppercase tracking-widest mb-6">
                  {selectedProject.categoriesText}
                </div>
                <h3 className="font-shrikhand text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] pr-12 max-w-3xl">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-12 lg:p-16 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="font-shrikhand text-ink-black text-3xl mb-6">Overview</h4>
                      <p className="text-gray-600 leading-relaxed font-light text-base lg:text-lg">
                        {selectedProject.desc}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-1 space-y-12">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 border-b border-black/5 pb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-4 py-2 bg-white border border-black/5 shadow-sm text-ink-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 border-b border-black/5 pb-2">External Links</h4>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 bg-ink-black text-white hover:bg-tomato-jam rounded-full transition-all shadow-lg hover:-translate-y-1 font-bold uppercase tracking-wider text-[10px]"
                        >
                          <Github className="w-4 h-4 fill-current" /> View Source Code
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
