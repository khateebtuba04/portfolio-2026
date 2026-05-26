'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

interface Project {
  title: string;
  overview: string;
  keyFeatures?: string[];
  techStack: string[];
  skills: string[];
  githubUrl?: string;
  externalLinkText?: string;
  professionalNote?: string;
}

interface Internship {
  company: string;
  role: string;
  duration: string;
  certificates?: string[];
  desc: string;
  projects: Project[];
  overallSkills: string[];
}

const internshipsData: Internship[] = [
  {
    company: 'OASIS INFOBYTE',
    role: 'DATA SCIENCE INTERN',
    duration: '1 Month',
    certificates: ['Offer Letter', 'Completion Certificate', 'Appreciation Certificate', 'Letter of Recommendation'],
    desc: 'Completed multiple data science projects covering machine learning classification, regression analysis, and NLP text classification.',
    overallSkills: ['Python', 'Machine Learning', 'Data Analysis', 'NLP'],
    projects: [
      {
        title: 'Iris Flower Classification',
        overview: 'Built a machine learning classification system to identify Iris flower species based on flower measurements such as petal and sepal dimensions. The project involved preprocessing data, training classification models, and evaluating prediction accuracy to understand supervised learning workflows.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
        skills: ['Classification', 'Data Preprocessing', 'Model Evaluation'],
        githubUrl: 'https://github.com/khateebtuba04/OIBSIP/tree/main/Task-1-Iris-Flower-Classification'
      },
      {
        title: 'Unemployment Analysis with Python',
        overview: 'Performed exploratory data analysis on unemployment trends using Python to understand patterns and analyze the impact of economic changes on employment statistics through visualization and insights.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        skills: ['EDA', 'Data Visualization', 'Analytics'],
        githubUrl: 'https://github.com/khateebtuba04/OIBSIP/tree/main/Task-2-Unemployment-Analysis'
      },
      {
        title: 'Car Price Prediction',
        overview: 'Developed a machine learning model to estimate car selling prices based on multiple factors such as year, fuel type, transmission, and usage. The project focused on regression analysis and predictive modeling.',
        techStack: ['Python', 'Scikit-Learn', 'Pandas'],
        skills: ['Regression', 'Predictive Analytics'],
        githubUrl: 'https://github.com/khateebtuba04/OIBSIP/tree/main/Task-3-Car-Price-Prediction'
      },
      {
        title: 'Email Spam Detection',
        overview: 'Built a text classification system capable of identifying spam and non-spam emails using machine learning techniques and natural language processing concepts.',
        techStack: ['Python', 'NLP', 'Scikit-Learn'],
        skills: ['NLP', 'Classification', 'Text Analysis'],
        githubUrl: 'https://github.com/khateebtuba04/OIBSIP/tree/main/Task-4-Email-Spam-Detection'
      },
      {
        title: 'Sales Prediction Using Python',
        overview: 'Created a predictive model to estimate product sales based on advertising and historical business data, helping understand data-driven forecasting.',
        techStack: ['Python', 'Regression', 'Pandas'],
        skills: ['Forecasting', 'Data Analytics'],
        githubUrl: 'https://github.com/khateebtuba04/OIBSIP/tree/main/Task-5-Sales-Prediction'
      }
    ]
  },
  {
    company: 'PRODIGY INFOTECH',
    role: 'MACHINE LEARNING INTERN',
    duration: '1 Month',
    certificates: ['Offer Letter', 'Completion Certificate', 'Appreciation Certificate', 'Letter of Recommendation'],
    desc: 'Built advanced ML projects spanning computer vision, deep learning, clustering, and image classification.',
    overallSkills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'CNN'],
    projects: [
      {
        title: 'House Price Prediction',
        overview: 'Developed a robust linear regression model to predict housing prices based on square footage, location, and property features, focusing on advanced feature engineering.',
        techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
        skills: ['Regression', 'EDA', 'Predictive Modeling'],
        githubUrl: 'https://github.com/khateebtuba04/PRODIGY_INFOTECH_ML/tree/main/PRODIGY_ML_01'
      },
      {
        title: 'Customer Segmentation using K-Means',
        overview: 'Implemented an unsupervised machine learning clustering algorithm to group retail customers based on purchasing behavior and demographic data to drive targeted marketing.',
        techStack: ['Python', 'K-Means', 'Scikit-Learn', 'Seaborn'],
        skills: ['Clustering', 'Unsupervised Learning', 'Customer Analytics'],
        githubUrl: 'https://github.com/khateebtuba04/PRODIGY_INFOTECH_ML/tree/main/PRODIGY_ML_02'
      },
      {
        title: 'Image Classification using SVM',
        overview: 'Built a Support Vector Machine (SVM) binary image classifier to differentiate between images of cats and dogs, utilizing OpenCV for image preprocessing and feature extraction.',
        techStack: ['Python', 'OpenCV', 'SVM', 'Scikit-Learn'],
        skills: ['Computer Vision', 'Image Processing', 'Classification'],
        githubUrl: 'https://github.com/khateebtuba04/PRODIGY_INFOTECH_ML/tree/main/PRODIGY_ML_03'
      },
      {
        title: 'Hand Gesture Recognition',
        overview: 'Created a real-time computer vision system using MediaPipe and OpenCV to detect and interpret human hand gestures via webcam input.',
        techStack: ['Python', 'OpenCV', 'MediaPipe'],
        skills: ['Computer Vision', 'Real-time Tracking'],
        githubUrl: 'https://github.com/khateebtuba04/PRODIGY_INFOTECH_ML/tree/main/PRODIGY_ML_04'
      },
      {
        title: 'Food Classification & Calorie Estimator',
        overview: 'Developed a Convolutional Neural Network (CNN) to classify food items from images and estimate nutritional and caloric content for dietary tracking.',
        techStack: ['Python', 'TensorFlow', 'Keras', 'CNN'],
        skills: ['Deep Learning', 'Computer Vision', 'CNN'],
        githubUrl: 'https://github.com/khateebtuba04/PRODIGY_INFOTECH_ML/tree/main/PRODIGY_ML_05'
      }
    ]
  },
  {
    company: 'SHADOWFOX',
    role: 'DATA SCIENCE INTERN',
    duration: '1 Month',
    desc: 'Completed comprehensive data science tasks focusing on environmental analytics, healthcare data analysis, and technical documentation.',
    overallSkills: ['EDA', 'Data Visualization', 'Healthcare Analytics'],
    projects: [
      {
        title: 'Matplotlib & Seaborn Documentation',
        overview: 'Created structured documentation exploring popular Python visualization libraries including different graph types, use cases, and analytical storytelling through charts.',
        techStack: ['Python', 'Matplotlib', 'Seaborn'],
        skills: ['Technical Writing', 'Data Visualization', 'Documentation'],
        githubUrl: 'https://github.com/khateebtuba04/Shadowfox/tree/main/Task_1_Visualization_Documentation'
      },
      {
        title: 'Delhi AQI Analysis Project',
        overview: 'Analyzed Delhi’s Air Quality Index dataset to identify pollution trends, environmental patterns, and air quality indicators through data analysis and visualization techniques.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        skills: ['EDA', 'Environmental Analytics', 'Data Visualization'],
        githubUrl: 'https://github.com/khateebtuba04/Shadowfox/tree/main/Task_2_Delhi_AQI_Analysis'
      },
      {
        title: 'Advanced Healthcare Analytics Project',
        overview: 'Performed healthcare-focused data analysis to derive meaningful medical insights using advanced analytical methods and exploratory data analysis.',
        techStack: ['Python', 'Healthcare Analytics', 'Visualization'],
        skills: ['Healthcare Data', 'EDA', 'Analytics'],
        githubUrl: 'https://github.com/khateebtuba04/Shadowfox/tree/main/Task_3_Healthcare_Diabetes_Analysis'
      }
    ]
  },
  {
    company: 'CODEALPHA',
    role: 'FULL STACK INTERN',
    duration: '1 Month',
    desc: 'Engineered full-stack web applications spanning e-commerce, social networking, and real-time communications.',
    overallSkills: ['React', 'JavaScript', 'Full Stack', 'Node.js'],
    projects: [
      {
        title: 'The Corner Pantry',
        overview: 'Developed a grocery delivery web application inspired by modern instant commerce platforms, featuring authentication, product management, and shopping functionality.',
        techStack: ['React', 'Node.js', 'Express.js', 'SQLite'],
        skills: ['Full Stack Development', 'API Design', 'State Management'],
        githubUrl: 'https://github.com/khateebtuba04/CodeAlpha_FullStackDevelopment/tree/main/CodeAlpha_Task1'
      },
      {
        title: 'Wavely',
        overview: 'Built a modern social media application focused on user interaction, content sharing, and social engagement features.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        skills: ['Social Graph', 'Real-time Updates', 'Full Stack Development'],
        githubUrl: 'https://github.com/khateebtuba04/CodeAlpha_FullStackDevelopment/tree/main/CodeAlpha_Task2'
      },
      {
        title: 'NextLink',
        overview: 'Developed a real-time video conferencing platform enabling virtual communication and collaboration through online meetings.',
        techStack: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
        skills: ['Real-Time Communication', 'WebSockets', 'Video Streaming'],
        githubUrl: 'https://github.com/khateebtuba04/CodeAlpha_FullStackDevelopment/tree/main/CodeAlpha_Task3'
      }
    ]
  },
  {
    company: 'MASKAN TECHNOLOGIES',
    role: 'INTERN',
    duration: '1 Month',
    desc: 'Internship focused on building large-scale company forecasting and analytics platforms.',
    overallSkills: ['Forecasting', 'Analytics', 'Power BI'],
    projects: [
      {
        title: 'PredictaCore Forecasting Platform',
        overview: 'PredictaCore is a company forecasting and analytics platform developed during my internship at Maskan Technologies. The platform was designed to transform raw business data into meaningful forecasts and actionable insights through analytical dashboards and structured workflows.\n\nThe system enables organizations to upload and analyze company datasets, generate forecasts, visualize trends, and support smarter business decision-making. The project combined forecasting, analytics, dashboarding, and real-world problem-solving into one centralized platform.',
        keyFeatures: [
          'Company data upload system',
          'Forecasting & predictive insights',
          'Interactive analytics dashboards',
          'Business intelligence visualization',
          'Inventory & logistics analysis',
          'Secure workflow management'
        ],
        techStack: ['Analytics', 'Forecasting', 'Full Stack Development'],
        skills: ['Business Analytics', 'Forecasting', 'Data Visualization', 'Full Stack Development', 'Problem Solving'],
        professionalNote: 'Source code unavailable due to internship project confidentiality.'
      }
    ]
  },
  {
    company: 'MYCAPTAIN',
    role: 'UI/UX DESIGNER',
    duration: 'Training / Internship',
    desc: 'At MyCaptain, I pursued structured training in UI/UX Design, where I developed a strong understanding of creating intuitive, user-centered digital experiences through research, design thinking, and problem-solving.\n\nDuring this learning experience, I explored the complete UI/UX design process — from identifying user problems to designing meaningful and visually appealing solutions. I worked on understanding user behavior, creating structured design systems, and improving digital usability through thoughtful interface design.\n\nMy training focused on combining creativity with problem-solving by learning how to design experiences that are not only visually engaging but also functional and user-friendly.',
    overallSkills: ['Figma', 'Canva', 'Design Systems', 'Prototyping', 'User Research', 'Design Thinking'],
    projects: [
      {
        title: 'UI/UX Practical Work & Case Studies',
        overview: 'As part of my UI/UX learning journey, I worked on real design case studies and projects focused on problem-solving, research, and interface design. These projects involved user interviews, surveys, personas, empathy mapping, user flows, and designing intuitive interfaces to improve user experiences.\n\nThis experience strengthened my ability to think from both a user perspective and a problem-solving perspective, helping me approach digital products with a balance of usability, research, and visual design.',
        keyFeatures: [
          'UX Research & Problem Identification',
          'User-Centered Design Thinking',
          'Empathy & User Journey Mapping',
          'Affinity Mapping & Brainstorming',
          'Wireframing & Low/High-Fidelity Mockups',
          'Visual Hierarchy & Typography'
        ],
        techStack: ['Figma', 'Canva', 'Design Systems', 'Prototyping Tools'],
        skills: ['UI Design', 'UX Strategy', 'Information Architecture', 'User Flows'],
        githubUrl: 'https://www.behance.net/gallery/221015857/UIUX-DESIGN-PORTFOLIO',
        externalLinkText: 'View My UI/UX Portfolio'
      }
    ]
  }
];

export default function Experience() {
  const [expandedInternshipIndex, setExpandedInternshipIndex] = useState<number | null>(0);
  const [expandedProjectTitle, setExpandedProjectTitle] = useState<string | null>(null);

  const toggleInternship = (index: number, e: React.MouseEvent) => {
    const isExpanding = expandedInternshipIndex !== index;
    setExpandedInternshipIndex(isExpanding ? index : null);
    setExpandedProjectTitle(null);

    if (isExpanding) {
      const el = (e.currentTarget as HTMLElement).closest('.internship-card');
      setTimeout(() => {
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 250); // Small delay to let the UI start transitioning
    }
  };

  const toggleProject = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedProjectTitle(expandedProjectTitle === title ? null : title);
  };

  return (
    <section id="experience" className="relative w-full overflow-hidden bg-almond-cream py-24 md:py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="section-tag">
            <span className="w-8 h-px bg-tomato-jam" /> Journey
          </div>
          <h2 className="font-shrikhand text-ink-black text-2xl md:text-3xl lg:text-2xl tracking-tight leading-[1.1]">
            Experience & <br/> <span className="text-tomato-jam italic">Milestones.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {internshipsData.map((internship, index) => {
            const isInternshipExpanded = expandedInternshipIndex === index;

            return (
              <motion.div
                key={internship.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`internship-card border border-black/10 transition-all duration-400 ease-out ${
                  isInternshipExpanded ? 'bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-transparent' : 'bg-transparent rounded-3xl hover:bg-white/50'
                }`}
              >
                {/* Internship Header (Always Visible) */}
                <div 
                  className={`flex flex-col md:flex-row md:items-center justify-between cursor-pointer gap-5 ${isInternshipExpanded ? 'p-8 lg:p-12 border-b border-black/5' : 'p-8 lg:px-10'}`}
                  onClick={(e) => toggleInternship(index, e)}
                >
                  <div className="flex-1">
                    <h3 className="font-shrikhand text-2xl md:text-3xl text-ink-black transition-colors">
                      {internship.company}
                    </h3>
                    <p className="text-tomato-jam font-bold uppercase tracking-widest text-sm md:text-base mt-3">
                      {internship.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 lg:gap-8 text-gray-500">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest bg-black/5 px-5 py-2.5 rounded-full text-ink-black">
                      {internship.duration}
                    </span>
                    <button className={`p-3 rounded-full border transition-all ${isInternshipExpanded ? 'bg-tomato-jam border-tomato-jam text-white shadow-lg' : 'border-black/10 hover:border-tomato-jam hover:text-tomato-jam text-ink-black'}`}>
                      {isInternshipExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                {/* Internship Expanded Content */}
                <AnimatePresence>
                  {isInternshipExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-b-[32px]">
                        
                        {/* Left Sidebar: Info & Certs */}
                        <div className="lg:col-span-1 space-y-10">
                          <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">
                            {internship.desc}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Skills Core</h4>
                            <div className="flex flex-wrap gap-2">
                              {internship.overallSkills.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-black/5 text-ink-black text-[11px] font-bold tracking-widest rounded-full uppercase">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {internship.certificates && (
                            <div className="space-y-4 pt-6 border-t border-black/5">
                              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Certifications Earned</h4>
                              <ul className="text-gray-700 text-sm md:text-base space-y-3 font-medium">
                                {internship.certificates.map(cert => (
                                  <li key={cert} className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-tomato-jam rounded-full shrink-0"/> {cert}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Right Content: The Interactive Project Grid */}
                        <div className="lg:col-span-2 space-y-5">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Key Projects & Selected Work</h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {internship.projects.map((proj, i) => {
                              const isProjExpanded = expandedProjectTitle === proj.title;
                              
                              return (
                                <div 
                                  key={i} 
                                  className={`p-6 md:p-8 border border-black/5 rounded-[24px] transition-all duration-300 cursor-pointer ${
                                    isProjExpanded 
                                      ? 'col-span-1 sm:col-span-2 bg-[#fbf9f6] border-tomato-jam/20 shadow-md' 
                                      : 'bg-[#f5f0e8]/50 hover:border-tomato-jam/30 hover:bg-white hover:shadow-lg'
                                  }`}
                                  onClick={(e) => toggleProject(proj.title, e)}
                                >
                                  {/* Project Header */}
                                  <div className="flex justify-between items-start gap-4 mb-4">
                                    <h5 className={`font-shrikhand text-2xl md:text-3xl transition-colors ${isProjExpanded ? 'text-tomato-jam' : 'text-ink-black'}`}>
                                      {proj.title}
                                    </h5>
                                    <div className="p-2 rounded-full bg-black/5 mt-1 shrink-0">
                                      {isProjExpanded ? <ChevronUp className="w-4 h-4 text-gray-600"/> : <ChevronDown className="w-4 h-4 text-gray-600"/>}
                                    </div>
                                  </div>
                                  
                                  {/* Collapsed State: Short Preview */}
                                  {!isProjExpanded && (
                                    <>
                                      <p className="text-gray-600 text-sm md:text-base font-medium mb-5 line-clamp-2 leading-relaxed">
                                        {proj.overview}
                                      </p>
                                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black text-tomato-jam bg-tomato-jam/10 px-4 py-2 rounded-full inline-block">
                                        {proj.techStack[0]} {proj.techStack.length > 1 && `+${proj.techStack.length - 1}`}
                                      </span>
                                    </>
                                  )}

                                  {/* Expanded State: Full Case Study Layout */}
                                  <AnimatePresence>
                                    {isProjExpanded && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                      >
                                        <div className="mt-6 border border-black/10 rounded-[24px] overflow-hidden bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                                          {/* Banner / Header */}
                                          <div className="bg-[#111111] p-6 md:p-8 relative">
                                            <div className="text-tomato-jam text-[9px] font-bold uppercase tracking-widest mb-3">Project Case Study</div>
                                            <h4 className="font-shrikhand text-white text-2xl md:text-lg lg:text-xl pr-8 leading-tight">
                                              {proj.title}
                                            </h4>
                                          </div>
                                          
                                          {/* Body */}
                                          <div className="p-6 md:p-8">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                              
                                              {/* Left Column: Overview */}
                                              <div className="lg:col-span-2 space-y-6">
                                                <div>
                                                  <h5 className="font-shrikhand text-xl text-ink-black mb-4">Overview</h5>
                                                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium">
                                                    {proj.overview}
                                                  </p>
                                                </div>
                                                
                                                {/* Key Features (for Maskan) */}
                                                {proj.keyFeatures && (
                                                  <div className="bg-[#f5f0e8]/50 p-5 rounded-2xl border border-black/5 mt-6">
                                                    <h6 className="text-[10px] uppercase font-bold tracking-[0.2em] text-tomato-jam mb-4">Platform Features</h6>
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                      {proj.keyFeatures.map((feat, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm font-medium">
                                                          <CheckCircle2 className="w-4 h-4 text-tomato-jam shrink-0 mt-0.5" /> {feat}
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  </div>
                                                )}
                                              </div>

                                              {/* Right Column: Meta & Actions */}
                                              <div className="lg:col-span-1 space-y-8">
                                                <div>
                                                  <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 border-b border-black/5 pb-2">Tech Stack</h6>
                                                  <div className="flex flex-wrap gap-2">
                                                    {proj.techStack.map(tech => (
                                                      <span key={tech} className="px-3 py-1.5 bg-[#f5f0e8] text-ink-black text-[10px] font-bold uppercase tracking-wider rounded-full border border-black/5">
                                                        {tech}
                                                      </span>
                                                    ))}
                                                  </div>
                                                </div>
                                                
                                                <div>
                                                  <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 border-b border-black/5 pb-2">Skills Applied</h6>
                                                  <div className="flex flex-wrap gap-2">
                                                    {proj.skills.map(skill => (
                                                      <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                                                        {skill}
                                                      </span>
                                                    ))}
                                                  </div>
                                                </div>

                                                <div className="pt-2">
                                                  {proj.professionalNote ? (
                                                    <div className="bg-orange-50 border border-orange-200 text-orange-800 text-xs px-4 py-3 rounded-xl flex items-start gap-3">
                                                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                                                      <p className="font-bold leading-relaxed italic">
                                                        {proj.professionalNote}
                                                      </p>
                                                    </div>
                                                  ) : (
                                                    <a 
                                                      href={(proj.githubUrl && proj.githubUrl !== '#') ? proj.githubUrl : `https://github.com/khateebtuba04/${proj.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                                                      target="_blank" 
                                                      rel="noopener noreferrer" 
                                                      onClick={(e) => e.stopPropagation()}
                                                      className={`flex items-center justify-center gap-3 w-full py-4 rounded-full transition-all shadow-lg hover:-translate-y-1 font-bold uppercase tracking-wider text-[10px] ${
                                                        proj.externalLinkText 
                                                          ? 'bg-gradient-to-r from-tomato-jam to-orange-500 text-white hover:shadow-[0_10px_30px_rgba(192,57,43,0.3)] border border-tomato-jam/20' 
                                                          : 'bg-ink-black text-white hover:bg-tomato-jam'
                                                      }`}
                                                    >
                                                      {proj.externalLinkText || 'View Source Code'} <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                  )}
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
