'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BarChart3, X, CheckCircle2 } from 'lucide-react';

interface Dashboard {
  id: string;
  title: string;
  featured?: boolean;
  overview: string;
  keyInsights: string[];
  tools: string[];
  dashboardUrl?: string;
  caseStudyUrl?: string;
}

export default function Dashboards() {
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(null);

  const dashboardsData: Dashboard[] = [
    {
      id: 'customer-behavior',
      title: 'Customer Shopping Behavior Analysis',
      featured: true,
      overview: 'Built an end-to-end customer behavior analytics dashboard to uncover purchasing trends, spending patterns, subscription impact, discounts, and business performance insights. Combined Python, SQL, and Power BI to transform raw retail data into strategic business insights.',
      keyInsights: [
        'Customer spending trends',
        'Subscription impact on purchases',
        'Revenue contribution patterns',
        'Product performance analysis',
        'Business-focused KPIs'
      ],
      tools: ['Power BI', 'Python', 'SQL', 'PostgreSQL', 'Analytics'],
      dashboardUrl: 'https://www.linkedin.com/posts/tuba-mariyam-khateeb-17aa13316_dataanalytics-python-sql-activity-7420095458078941184-d3rk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFA9fi4BnOVzxyvdSecy_kzBzv3yhdjS97w',
      caseStudyUrl: '#',
    },
    {
      id: 'smoking-health',
      title: 'Smoking Health Risk Analysis',
      featured: true,
      overview: 'Developed an interactive healthcare analytics dashboard to study smoking behavior and its impact on health conditions across different age groups and demographics.',
      keyInsights: [
        'Smoking status trends',
        'Daily cigarette consumption',
        'Cholesterol & hypertension risk',
        'BMI and health indicators',
        'Age-based health analysis'
      ],
      tools: ['Power BI', 'DAX', 'Healthcare Analytics'],
      dashboardUrl: 'https://www.linkedin.com/posts/tuba-mariyam-khateeb-17aa13316_powerbi-powerbidashboard-dataanalytics-activity-7421125492273098752-X0nd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFA9fi4BnOVzxyvdSecy_kzBzv3yhdjS97w',
    },
    {
      id: 'ulcer-health',
      title: 'Ulcer Health Risk Analysis',
      overview: 'Built a healthcare-focused Power BI dashboard to analyze ulcer patient risk patterns using medical indicators, BMI levels, pain patterns, haemoglobin trends, medication usage, and demographic insights.',
      keyInsights: [
        'Ulcer depth distribution',
        'Pain pattern analysis',
        'Medication trends',
        'Average BMI & haemoglobin',
        'Age-group health trends'
      ],
      tools: ['Power BI', 'Healthcare Analytics', 'Visualization'],
      dashboardUrl: 'https://www.linkedin.com/posts/tuba-mariyam-khateeb-17aa13316_powerbi-dataanalytics-healthcareanalytics-activity-7449155528649404416-qttr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFA9fi4BnOVzxyvdSecy_kzBzv3yhdjS97w',
    },
    {
      id: 'ecommerce-sales',
      title: 'E-Commerce Sales Analysis',
      overview: 'Designed an interactive sales analytics dashboard to visualize revenue trends, sales performance, product categories, and business KPIs for better strategic decision-making.',
      keyInsights: [
        'Sales trends',
        'Profit performance',
        'Regional analysis',
        'Product category insights',
        'Business KPIs'
      ],
      tools: ['Power BI', 'Business Analytics'],
      dashboardUrl: 'https://www.linkedin.com/posts/tuba-mariyam-khateeb-17aa13316_powerbi-dataanalytics-dashboarddesign-activity-7423679203767787520-ygp2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFA9fi4BnOVzxyvdSecy_kzBzv3yhdjS97w',
    },
    {
      id: 'amazon-prime',
      title: 'Amazon Prime Video Analysis',
      overview: 'Created an interactive dashboard to explore content trends, genre distribution, ratings, and entertainment insights within the Amazon Prime Video dataset.',
      keyInsights: [
        'Genre analysis',
        'Content distribution',
        'Ratings trends',
        'Entertainment analytics'
      ],
      tools: ['Power BI', 'Data Visualization'],
      dashboardUrl: 'https://www.linkedin.com/posts/tuba-mariyam-khateeb-17aa13316_powerbi-dataanalytics-datavisualization-activity-7416230943260073984-fC1S?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFA9fi4BnOVzxyvdSecy_kzBzv3yhdjS97w',
    },
  ];

  return (
    <section id="dashboards" className="relative w-full overflow-hidden bg-ink-black py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="section-tag mb-4 text-almond-cream justify-center">
            <span className="w-8 h-px bg-tomato-jam" /> Dashboard & Intelligence
          </div>
          <h2 className="font-shrikhand text-almond-cream text-5xl md:text-6xl lg:text-[6rem] tracking-tight leading-[1.1] mb-6">
            Dashboards & <span className="text-tomato-jam italic">Intelligence.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Transforming raw data into interactive insights through visualization, storytelling, and business intelligence using Power BI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dashboardsData.map((db, idx) => (
            <motion.div
              key={db.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedDashboard(db)}
            >
              <div className="bg-[#111111] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full border border-white/10 group-hover:bg-[#151515] group-hover:backdrop-blur-xl group-hover:border-tomato-jam/30 group-hover:shadow-[0_0_30px_rgba(192,57,43,0.15)] group-hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden z-10">
                {/* Subtle Glow Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-tomato-jam/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  {db.featured ? (
                    <span className="text-tomato-jam text-[11px] font-bold uppercase tracking-widest bg-tomato-jam/10 px-4 py-2 rounded-full group-hover:bg-tomato-jam group-hover:text-white transition-colors flex items-center gap-2">
                      ⭐ Featured
                    </span>
                  ) : (
                    <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full group-hover:bg-white/10 group-hover:text-gray-200 transition-colors">
                      Interactive Dashboard
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-tomato-jam/20 transition-all duration-300">
                    <BarChart3 className="w-5 h-5 text-tomato-jam" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-shrikhand text-almond-cream text-3xl lg:text-4xl mb-4 group-hover:text-white transition-colors leading-tight">
                    {db.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base font-medium line-clamp-3 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {db.overview}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Dashboard Modal */}
      <AnimatePresence>
        {selectedDashboard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDashboard(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-black/10"
            >
              {/* Modal Header */}
              <div className="bg-[#111111] p-8 sm:p-12 lg:p-16 relative shrink-0">
                <button
                  onClick={() => setSelectedDashboard(null)}
                  className="absolute top-6 right-6 p-4 rounded-full bg-white/10 text-white hover:bg-tomato-jam hover:scale-110 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-tomato-jam text-xs font-bold uppercase tracking-widest mb-4">
                  DASHBOARD CASE STUDY
                </div>
                <h3 className="font-shrikhand text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] pr-12 max-w-3xl">
                  {selectedDashboard.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-12 lg:p-16 overflow-y-auto bg-[#fdfcf9]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                  
                  {/* Left Column: Overview & Insights */}
                  <div className="lg:col-span-2 space-y-10">
                    <div>
                      <h4 className="font-shrikhand text-ink-black text-3xl mb-4">Overview</h4>
                      <p className="text-gray-600 leading-relaxed font-medium text-base sm:text-lg whitespace-pre-line">
                        {selectedDashboard.overview}
                      </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/5 shadow-sm">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-tomato-jam mb-6">Key Insights</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {selectedDashboard.keyInsights.map((insight, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-800 text-base font-medium">
                            <CheckCircle2 className="w-6 h-6 text-tomato-jam shrink-0" /> {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Tools & Actions */}
                  <div className="lg:col-span-1 space-y-10">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 border-b border-black/5 pb-2">Tools & Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDashboard.tools.map((t) => (
                          <span key={t} className="px-4 py-2 bg-almond-cream border border-black/5 shadow-sm text-ink-black text-xs font-bold uppercase tracking-wider rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-black/5">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Action Links</h4>
                      {selectedDashboard.dashboardUrl && selectedDashboard.dashboardUrl !== '#' && (
                        <a
                          href={selectedDashboard.dashboardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 bg-tomato-jam text-white hover:bg-ink-black rounded-full transition-all shadow-lg hover:-translate-y-1 font-bold uppercase tracking-wider text-xs"
                        >
                          View Dashboard <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {selectedDashboard.caseStudyUrl && selectedDashboard.caseStudyUrl !== '#' && (
                        <a
                          href={selectedDashboard.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border-2 border-ink-black text-ink-black hover:bg-ink-black hover:text-white rounded-full transition-all shadow-sm hover:-translate-y-1 font-bold uppercase tracking-wider text-xs"
                        >
                          View Case Study <ExternalLink className="w-5 h-5" />
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
