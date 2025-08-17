import React from 'react';
import { motion } from 'framer-motion';

const skills = [
   'JavaScript','Docker', 'AWS', 'Git', 'Java', 'Spring Boot', 'JSP', 'HTML', 'CSS'
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ opacity:0, y:20 }} 
        whileInView={{ opacity:1, y:0 }} 
        viewport={{ once:true }} 
        transition={{ duration:0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          text-transparent bg-clip-text text-center">
          About Me
        </h2>

        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Enthusiastic front-end developer with a foundation in 
          <span className="font-semibold"> HTML, CSS, and JSP</span>, 
          complemented by a working knowledge of 
          <span className="font-semibold"> Java and Spring Boot</span>. 
          Passionate about creating responsive and user-friendly web interfaces. 
          Interested in building intuitive front-end experiences and 
          continuously improving UI/UX skills. 
          Eager to grow in modern front-end technologies and frameworks.
        </p>

        <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up">
          {skills.map(s => (
            <span 
              key={s} 
              className="px-3 py-1 rounded-full text-sm font-medium
                bg-gray-100 text-gray-800 
                dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-500 
                dark:text-white shadow-sm hover:scale-105 transition-transform"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
