'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a15020d2-4e97-4a22-af02-63e8e9aa9565',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-almond-cream py-24 md:py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="section-tag mb-4 justify-center md:justify-start">
            <span className="w-8 h-px bg-tomato-jam" /> Contact
          </div>
          <h2 className="font-shrikhand text-ink-black text-2xl md:text-2xl lg:text-3xl tracking-tight leading-[1.1] mb-6">
            Let&apos;s Start a <br/> <span className="text-tomato-jam italic">Project.</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base font-light leading-relaxed">
            Have a data-driven project in mind or looking for a Data Scientist for your team? Let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-8 lg:space-y-12">
            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              href="mailto:khateebtubamariyam@gmail.com"
              className="flex items-center gap-6 group brutalist-card bg-white p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-[20px] bg-black/5 flex items-center justify-center group-hover:bg-tomato-jam/10 transition-colors duration-300">
                <Mail className="w-6 h-6 text-ink-black group-hover:text-tomato-jam transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Email</div>
                <div className="font-shrikhand text-lg md:text-xl lg:text-2xl text-ink-black break-all group-hover:text-tomato-jam transition-colors duration-300">
                  khateebtubamariyam@gmail.com
                </div>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-6 group brutalist-card bg-white p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-[20px] bg-black/5 flex items-center justify-center group-hover:bg-ink-black/5 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-ink-black transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</div>
                <div className="font-shrikhand text-lg md:text-xl text-ink-black">
                  Ambur, TamilNadu
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="brutalist-card bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-lg shadow-green-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-shrikhand text-3xl text-ink-black mb-4">Message Sent!</h3>
                  <p className="text-gray-500 max-w-md font-medium">
                    Thank you for reaching out. Your message has been sent directly to my email, and I will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-8 px-8 py-3 bg-black/5 hover:bg-tomato-jam text-ink-black hover:text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="brutalist-card bg-white/80 backdrop-blur-xl border border-black/5 p-8 md:p-12 space-y-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block pl-4 group-focus-within:text-tomato-jam transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-ink-black focus:outline-none focus:border-tomato-jam focus:bg-white focus:ring-4 focus:ring-tomato-jam/10 transition-all placeholder:text-gray-400 font-medium"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block pl-4 group-focus-within:text-tomato-jam transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-ink-black focus:outline-none focus:border-tomato-jam focus:bg-white focus:ring-4 focus:ring-tomato-jam/10 transition-all placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block pl-4 group-focus-within:text-tomato-jam transition-colors">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-black/5 border border-black/5 rounded-3xl px-6 py-5 text-ink-black focus:outline-none focus:border-tomato-jam focus:bg-white focus:ring-4 focus:ring-tomato-jam/10 transition-all placeholder:text-gray-400 font-medium resize-none"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-tomato-jam text-sm font-medium">
                      Something went wrong. Please check your network and try again.
                    </p>
                  )}
                  
                  <div className="pt-8 flex justify-end">
                    <button 
                      disabled={status === 'submitting'}
                      className="group relative inline-flex items-center justify-center px-10 py-4 bg-tomato-jam text-white font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(192,57,43,0.5)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 w-full h-full bg-ink-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      <span className="relative flex items-center gap-3 z-10">
                        {status === 'submitting' ? (
                          <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                        ) : (
                          <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
