import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiSpringboot, SiGit, SiDocker } from "react-icons/si";
import { DiJava } from "react-icons/di";

const groups = [
  {
    title: "Core Skills",
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Java", icon: <DiJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          text-transparent bg-clip-text text-center">Skills</h2>

      <div className="mt-8 overflow-hidden relative">
        {groups.map((group) => {
          // Duplicate items for seamless loop
          const loopItems = [...group.items, ...group.items];

          return (
            <motion.div
              key={group.title}
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 15, // speed (higher = slower)
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopItems.map((it, idx) => (
                <div
                  key={idx}
                  className="
                    flex flex-col items-center justify-center min-w-[120px] p-4 rounded-xl 
                    bg-white border border-gray-200 shadow-md 
                    dark:bg-white/5 dark:border-white/10 
                    hover:bg-gray-50 dark:hover:bg-white/10 
                    transition
                  "
                >
                  <div className="text-3xl">{it.icon}</div>
                  <span className="mt-2 text-sm opacity-90">{it.name}</span>
                </div>


              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
