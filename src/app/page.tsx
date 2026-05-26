'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Dashboards from '@/components/Dashboards';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import GitHubShowcase from '@/components/GitHubShowcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full bg-almond-cream text-seppia-black overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Dashboards />
        <Certifications />
        <Achievements />
        <GitHubShowcase />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
