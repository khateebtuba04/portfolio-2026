'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Landmark, Users, Briefcase, MailOpen } from 'lucide-react';

const achievements = [
  {
    title: 'Department First Rank',
    metric: '94.6%',
    metricLabel: 'Overall Score',
    institution: 'Marudhar Kesari Jain College for Women',
    icon: Trophy,
    desc: 'Achieved top rank across all semesters in the Data Science department.',
  },
  {
    title: 'Second Prize — TechTuner',
    metric: '#2',
    metricLabel: 'National Rank',
    institution: 'National-Level Inter-College IT Symposium',
    icon: Award,
    desc: 'Won second prize in a competitive national IT symposium against 50+ teams.',
  },
  {
    title: 'Certificate of Merit',
    metric: '1st',
    metricLabel: 'Exhibition',
    institution: 'HealthVar: Live Healthcare Analytics Project',
    icon: Landmark,
    desc: 'Awarded Certificate of Merit at the Statistical Exhibition for HealthVar project.',
  },
  {
    title: 'LinkedIn Network',
    metric: '5k+',
    metricLabel: 'Connections',
    institution: 'Professional Brand Building',
    icon: Users,
    desc: 'Built a strong professional brand and data science network of 5000+ connections.',
  },
  {
    title: 'Internships',
    metric: '6+',
    metricLabel: 'Selections',
    institution: 'Oasis, Prodigy, ShadowFox, CodeAlpha...',
    icon: Briefcase,
    desc: 'Selected across 6 competitive internship programs spanning ML, Data Science, and Full Stack.',
  },
  {
    title: 'Recommendations',
    metric: '4+',
    metricLabel: 'LoRs Received',
    institution: 'Oasis Infobyte & Prodigy Infotech',
    icon: MailOpen,
    desc: 'Received top validation letters and appreciation certificates from industry mentors.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full overflow-hidden bg-ink-black py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col justify-center text-center items-center">
          <div className="section-tag text-almond-cream mb-4 justify-center">
            <span className="w-8 h-px bg-tomato-jam" /> Milestones
          </div>
          <h2 className="font-shrikhand text-almond-cream text-2xl md:text-3xl lg:text-2xl tracking-tight leading-[1.1] mb-6">
            Numbers of <br/> <span className="text-tomato-jam italic">Success.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111111] border border-white/10 rounded-[30px] p-8 lg:p-10 hover:-translate-y-2 hover:bg-[#151515] hover:border-tomato-jam/30 hover:shadow-[0_0_30px_rgba(192,57,43,0.15)] hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-white/5 rounded-[20px] group-hover:bg-tomato-jam/10 transition-colors border border-white/5 group-hover:border-tomato-jam/20">
                    <Icon className="w-8 h-8 text-tomato-jam group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="font-shrikhand text-3xl text-almond-cream group-hover:text-white transition-colors">
                      {item.metric}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-almond-cream text-2xl mb-2 group-hover:text-white transition-colors leading-snug">{item.title}</h3>
                  <div className="text-tomato-jam text-xs font-bold uppercase tracking-widest mb-4 transition-colors">
                    {item.institution}
                  </div>
                  <p className="text-gray-400 text-base font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
