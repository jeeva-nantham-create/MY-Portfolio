import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          text-transparent bg-clip-text text-center">Contact</h2>
      
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 
                     bg-white dark:bg-white/5 backdrop-blur-lg"
        >
          <h3 className="font-semibold text-lg">Get in Touch</h3>
          <p className="opacity-80 mt-2 ">Building cool stuff, one line of code at a time.<br></br>
                      Drop a ping if you’d like to create something amazing together!</p>
          
          <div className="mt-4 flex gap-4 text-2xl">
            <a href="mailto:jeevamass158@gmail.com" className="hover:text-primary transition-colors" aria-label="Email"><FiMail/></a>
            <a href="https://www.instagram.com/jeeva_jordan_" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram"><FiInstagram/></a>
            <a href="https://www.linkedin.com/in/jeevanantham-k-8a2543362" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><FiLinkedin/></a>
            <a href="https://github.com/jeeva-nantham-create" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><FiGithub/></a>
          </div>
        </motion.div>

        {/* Personal Details Card */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 
                     bg-white dark:bg-white/5 backdrop-blur-lg"
        >
          <h3 className="font-semibold text-lg">My Details</h3>
          <div className="mt-4 space-y-3">
            <div className="px-4 py-3 rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="font-medium">Name:</span> Jeevanantham K
            </div>
            <div className="px-4 py-3 rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="font-medium">Email:</span> jeevamass158@gmail.com
            </div>
            <div className="px-4 py-3 rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="font-medium">Phone:</span> +91 7358835875
            </div>
            <div className="px-4 py-3 rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="font-medium">Location:</span> Krishnagiri, India
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
