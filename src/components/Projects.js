import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const data = [
  {
    title: 'E-Commerce Website',
    desc: 'Created a front-end gym products selling website using HTML, CSS, and JavaScript. Designed responsive layouts to showcase products and enhance user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Restaurant Menu Management',
    desc: 'Developed and deployed a restaurant menu management website using Spring Boot, AWS EC2, and Aurora. Enabled public menu viewing and secure admin access for creating, updating, and deleting menu items.',
    stack: ['Spring Boot', 'AWS EC2', 'Aurora'],
    demo: '#',
    code: 'https://github.com/jeeva-nantham-create/Restaurant-management'
  },
  {
    title: 'BMI Calculator',
    desc: 'Developed a BMI calculator web application using HTML, CSS, and JavaScript. Users can input their weight and height to calculate their BMI and receive health recommendations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://jeeva-nantham-create.github.io/bmi/',
    code: 'https://github.com/jeeva-nantham-create/bmi'
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center 
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
        text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition 
              bg-white dark:bg-gradient-to-br dark:from-indigo-500 
              dark:via-purple-500 dark:to-pink-500 p-[2px]"
          >
            <div className="rounded-2xl bg-white dark:bg-gray-900/90 
              backdrop-blur-lg p-6 flex flex-col h-full">
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full 
                      bg-gray-100 text-gray-800 
                      dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-500 
                      dark:text-white shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="mt-auto pt-6 flex justify-between
                  dark:opacity-0 dark:group-hover:opacity-100 dark:transition"
              >
                {p.demo && p.demo !== '#' ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg 
                      bg-gray-900 text-white font-medium inline-flex items-center gap-2 
                      hover:scale-105 transform transition
                      dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-600"
                  >
                    <FiExternalLink /> Live
                  </a>
                ) : (
                  <button
                    onClick={() => window.alert('🚧 Website Under Construction 🚧')}
                    className="px-4 py-2 rounded-lg 
                      bg-gray-500 text-white font-medium inline-flex items-center gap-2 
                      cursor-pointer hover:scale-105 transform transition
                      dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-700"
                  >
                    <FiExternalLink /> Live
                  </button>
                )}

                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg 
                    bg-gray-200 text-gray-900 font-medium inline-flex items-center gap-2 
                    hover:bg-gray-300 hover:scale-105 transform transition
                    dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
