'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Briefcase, Users, Brain, Terminal, ArrowRight, Activity, Clock, Play, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
} as const;

// Helper components for the Bento Grid widgets
function SynapseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    // Neural nodes
    const nodes = [
      { x: width * 0.15, y: height * 0.5, r: 4 },
      { x: width * 0.45, y: height * 0.25, r: 4 },
      { x: width * 0.45, y: height * 0.75, r: 4 },
      { x: width * 0.85, y: height * 0.5, r: 4 },
    ];

    interface Pulse {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }

    let pulses: Pulse[] = [];
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connection lines
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1.5;
      connections.forEach((c) => {
        ctx.beginPath();
        ctx.moveTo(nodes[c.from].x, nodes[c.from].y);
        ctx.lineTo(nodes[c.to].x, nodes[c.to].y);
        ctx.stroke();
      });

      // Spawn pulses randomly
      if (Math.random() < 0.03 && pulses.length < 5) {
        const conn = connections[Math.floor(Math.random() * connections.length)];
        pulses.push({
          fromIdx: conn.from,
          toIdx: conn.to,
          progress: 0,
          speed: Math.random() * 0.015 + 0.01,
        });
      }

      // Draw & update pulses
      pulses.forEach((p, idx) => {
        p.progress += p.speed;
        if (p.progress >= 1.0) {
          pulses.splice(idx, 1);
          return;
        }

        const startNode = nodes[p.fromIdx];
        const endNode = nodes[p.toIdx];
        const px = startNode.x + (endNode.x - startNode.x) * p.progress;
        const py = startNode.y + (endNode.y - startNode.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00d4ff';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00d4ff';
        ctx.fill();
      });

      ctx.shadowBlur = 0; // reset

      // Draw Nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = '#7b5cf0';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(123, 92, 240, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-24 pointer-events-none" />;
}

const mockCodeLines = [
  'import pandas as pd',
  'import numpy as np',
  '# Load customer dataset',
  'df = pd.read_csv("behavior.csv")',
  '# Segment subscription groups',
  'g = df.groupby("Subscription")',
  'res = g["Spend"].agg(["mean", "count"])',
  'print(">> Output Pipeline Compiled")',
  'print(">> Subscriber mean: $68.50")',
  'print(">> General spend: $51.20")',
];

function InteractiveTerminal() {
  const [typedCode, setTypedCode] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<'idle' | 'typing' | 'running' | 'success'>('idle');

  useEffect(() => {
    if (status !== 'typing') return;
    
    const targetLine = mockCodeLines[currentLineIdx];
    if (currentCharIdx < targetLine.length) {
      const timer = setTimeout(() => {
        setTypedCode((prev) => {
          const next = [...prev];
          if (!next[currentLineIdx]) next[currentLineIdx] = '';
          next[currentLineIdx] += targetLine[currentCharIdx];
          return next;
        });
        setCurrentCharIdx((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timer);
    } else {
      if (currentLineIdx < mockCodeLines.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLineIdx((prev) => prev + 1);
          setCurrentCharIdx(0);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // finished typing
        setStatus('running');
        setIsRunning(true);
        const timer = setTimeout(() => {
          setIsRunning(false);
          setStatus('success');
          setTerminalLogs([
            '>> Connecting to PostgreSQL Database...',
            '>> Querying CLV metrics on 15,400+ transaction records...',
            '✓ Calculation complete. Grouping success.',
            '>> Subscribers Avg Spend: $68.50',
            '>> Non-Subscribers Spend: $51.20',
          ]);
        }, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIdx, currentCharIdx, status]);

  const handleStartPipeline = () => {
    setTypedCode(['']);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setTerminalLogs([]);
    setStatus('typing');
  };

  return (
    <div className="relative w-full h-full bg-slate-950/90 rounded-2xl p-4 border border-white/5 font-mono text-[10px] sm:text-xs flex flex-col justify-between min-h-[250px]">
      <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-2">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">SQL_Pipeline.py</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide text-slate-350">
        {status === 'idle' && (
          <div className="text-slate-500 italic flex items-center justify-center h-28">
            Click Run Pipeline to compile models.
          </div>
        )}
        
        {typedCode.map((line, idx) => (
          <div key={idx} className={line.startsWith('#') ? 'text-accent-violet' : 'text-slate-200'}>
            <span className="text-slate-600 select-none mr-2">{(idx + 1).toString().padStart(2, '0')}</span>
            {line}
            {status === 'typing' && currentLineIdx === idx && <span className="w-1.5 h-3 bg-accent-cyan inline-block animate-pulse ml-0.5" />}
          </div>
        ))}

        {isRunning && (
          <div className="flex items-center gap-2 text-accent-cyan animate-pulse pt-2">
            <span className="w-3 h-3 rounded-full border border-accent-cyan border-t-transparent animate-spin" />
            <span>Calculating metrics...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-1 text-emerald-400 pt-2 border-t border-white/5 mt-2">
            {terminalLogs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-white/5 flex justify-between items-center mt-2">
        <span className="text-[9px] text-slate-550">Console Output</span>
        <button
          onClick={handleStartPipeline}
          disabled={status === 'typing' || status === 'running'}
          className="flex items-center gap-1 px-3 py-1 rounded bg-accent-cyan/15 hover:bg-accent-cyan/25 border border-accent-cyan/30 text-accent-cyan font-bold text-[10px] transition-colors cursor-pointer disabled:opacity-50"
        >
          <Play className="w-3 h-3" />
          Run Pipeline
        </button>
      </div>
    </div>
  );
}

const semesters = [
  { name: 'Sem 1', gpa: 9.2, info: 'Basics, Python, Stats' },
  { name: 'Sem 2', gpa: 9.4, info: 'C++, Relational Databases' },
  { name: 'Sem 3', gpa: 9.6, info: 'Machine Learning, EDA' },
  { name: 'Sem 4', gpa: 9.5, info: 'Power BI dashboards' },
  { name: 'Sem 5', gpa: 9.6, info: 'Deep Learning, CNN' },
];

function GPAChart() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Line points configuration
  const padding = 30;
  const chartWidth = 320;
  const chartHeight = 120;
  
  const getX = (idx: number) => padding + (idx * (chartWidth - padding * 2)) / (semesters.length - 1);
  const getY = (gpa: number) => {
    const minG = 9.0;
    const maxG = 9.8;
    return chartHeight - padding - ((gpa - minG) * (chartHeight - padding * 2)) / (maxG - minG);
  };

  // Generate SVG path string
  const points = semesters.map((s, idx) => ({ x: getX(idx), y: getY(s.gpa) }));
  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  return (
    <div className="relative w-full h-full bg-slate-950/80 rounded-2xl p-6 border border-white/5 flex flex-col justify-between min-h-[250px]">
      <div className="flex justify-between items-center pb-2 border-b border-white/5">
        <h4 className="font-heading font-black text-xs sm:text-sm text-white">Semester GPA Trend</h4>
        <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded">
          Mean: 9.46
        </span>
      </div>

      <div className="relative flex-1 flex items-center justify-center pt-2">
        <svg className="w-full h-[120px] overflow-visible">
          {/* Path line */}
          <path d={pathD} fill="none" stroke="url(#cyan-violet-grad)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Defs */}
          <defs>
            <linearGradient id="cyan-violet-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#7b5cf0" />
            </linearGradient>
          </defs>

          {/* Dots */}
          {points.map((p, idx) => (
            <g
              key={idx}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(idx)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hoveredNode === idx ? 7 : 5}
                className="fill-slate-950 stroke-accent-cyan transition-all duration-200"
                strokeWidth="2.5"
              />
              {hoveredNode === idx && (
                <circle cx={p.x} cy={p.y} r={12} className="fill-none stroke-accent-cyan/35 animate-ping" strokeWidth="1" />
              )}
            </g>
          ))}
        </svg>

        {/* Floating details tooltip */}
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
          <AnimatePresence mode="wait">
            {hoveredNode !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="p-2 rounded-xl bg-slate-900 border border-white/5 text-[10px] sm:text-xs"
              >
                <div className="flex justify-between items-center px-1 font-bold">
                  <span className="text-slate-100">{semesters[hoveredNode].name}</span>
                  <span className="text-accent-cyan">{semesters[hoveredNode].gpa} GPA</span>
                </div>
                <div className="text-slate-450 text-[9px] mt-0.5 text-left pl-1">
                  Focus: {semesters[hoveredNode].info}
                </div>
              </motion.div>
            ) : (
              <div className="text-[10px] text-slate-500 italic">
                Hover over nodes to see semester grades
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-550 mt-2 font-semibold">
        <span>Sem 1</span>
        <span>Sem 5</span>
      </div>
    </div>
  );
}

export default function Overview({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.05 } } }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-12"
    >
      {/* 1. Header Bio Card (2x2 equivalent - Col Span 8) */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-8 p-6 rounded-2xl glass-dark border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[200px]"
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-accent-cyan/5 blur-3xl rounded-full pointer-events-none" />
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-accent-cyan font-bold tracking-widest uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Recruiter-Ready Data Science Workspace
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 font-normal">
              <Clock className="w-3.5 h-3.5" />
              {time || 'Active'}
            </span>
          </div>
          
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white leading-tight">
            Tuba Mariyam Khateeb
          </h2>
          
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
            Passionate B.Sc. Data Science undergraduate turning raw data into narratives and decisions. Experienced in Machine Learning, Statistical Analysis, NLP, Computer Vision, and Business Intelligence Dashboards.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-4">
          <button
            onClick={() => setActiveTab('projects')}
            className="flex items-center gap-1.5 text-xs font-bold text-accent-cyan hover:text-accent-violet transition-colors cursor-pointer group"
          >
            Explore Projects Grid
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* 2. Neural Net Canvas Synapse Card (Col Span 4) */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-4 p-5 rounded-2xl glass-dark border border-white/5 flex flex-col justify-between min-h-[200px]"
      >
        <div className="flex justify-between items-start">
          <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            <Brain className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
            Synapses active
          </span>
        </div>
        
        {/* Render animated Canvas nodes */}
        <SynapseCanvas />

        <div className="space-y-1">
          <h4 className="font-heading font-black text-sm text-white">Neural Net Simulation</h4>
          <p className="text-[10px] text-slate-500 font-semibold">Real-time synapses calculation mapping data models.</p>
        </div>
      </motion.div>

      {/* 3. Interactive Code Console IDE Card (Col Span 6) */}
      <motion.div variants={cardVariants} className="md:col-span-6">
        <InteractiveTerminal />
      </motion.div>

      {/* 4. Interactive SVG GPA Chart Card (Col Span 6) */}
      <motion.div variants={cardVariants} className="md:col-span-6">
        <GPAChart />
      </motion.div>

      {/* 5. Metrics Counters Row (Col Span 12 - 4 Columns grid) */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="p-5 rounded-2xl glass-dark border border-white/5 flex flex-col justify-between min-h-[120px] hover:border-accent-cyan/30 transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 w-fit">
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="mt-2">
            <h3 className="font-heading font-black text-2xl text-white">6+</h3>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-450 mt-1">Completed Internships</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-dark border border-white/5 flex flex-col justify-between min-h-[120px] hover:border-accent-violet/30 transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-accent-violet/10 text-accent-violet border border-accent-violet/20 w-fit">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="mt-2">
            <h3 className="font-heading font-black text-2xl text-white">25+</h3>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-450 mt-1">Technical Projects</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-dark border border-white/5 flex flex-col justify-between min-h-[120px] hover:border-blue-500/30 transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 w-fit">
            <Users className="w-4 h-4" />
          </div>
          <div className="mt-2">
            <h3 className="font-heading font-black text-2xl text-white">5K+</h3>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-450 mt-1">LinkedIn Network</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-dark border border-white/5 flex flex-col justify-between min-h-[120px] hover:border-amber-500/30 transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 w-fit">
            <Trophy className="w-4 h-4" />
          </div>
          <div className="mt-2">
            <h3 className="font-heading font-black text-2xl text-white">94.6%</h3>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-450 mt-1">Department First Rank</p>
          </div>
        </div>
      </motion.div>

      {/* 6. Skills highlights Bento Module (Col Span 12) */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-12 p-6 rounded-2xl glass-dark border border-white/5 space-y-4"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <Brain className="w-4 h-4 text-accent-cyan" />
          Core Data Science Core Skills
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'EDA', 'Time-Series Forecasting', 'Clustering', 'Regression', 'Classification'].map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 font-semibold hover:border-accent-cyan/35 transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
