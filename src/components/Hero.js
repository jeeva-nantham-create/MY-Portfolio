import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-40 pb-24 md:pt-44">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-x opacity-20"></div>

      {/* Soft particles */}
      <div className="particle particle--1"></div>
      <div className="particle particle--2"></div>
      <div className="particle particle--3"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">JEEVANANTHAM K</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">Front-End Developer • Lifelong Learner</p>
          <p className="mt-2 opacity-80">I build beautiful, accessible web apps with HTML, CSS.</p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white shadow-lg">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white shadow-lg">Contact Me</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white shadow-lg">Download Resume</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="glass rounded-3xl p-6 md:p-10">
            <div className="aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center">
              
              <img 
                src="/preview.png"   
                alt="Jeevanantham K"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
