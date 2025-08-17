import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCircle, FiCode, FiTool, FiDatabase,} from 'react-icons/fi';

const steps = [
  { icon:<FiCheckCircle/>, title:'Learned programming concepts', desc:'Variables, control flow, data structures', done:true },
  { icon:<FiTool/>, title:'Learned Java', desc:'OOP, exceptions, streams', done:true },
  { icon:<FiCode/>, title:'Web Development', desc:'HTML, CSS, JavaScript', done:true },
  { icon:<FiCode/>, title:'React', desc:'Components, hooks, state management', done:false },
  { icon:<FiDatabase/>, title:'Database', desc:'SQL, NoSQL, data modeling', done:false },
];

export default function Roadmap() {
  const completed = steps.filter(s => s.done).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          text-transparent bg-clip-text text-center">Roadmap</h2>
      <div className="mt-6 glass p-6 rounded-2xl">
        <div className="mb-4 flex items-center justify-between">
          {/* <span className="text-sm opacity-80">{completed} / {steps.length} completed</span> */}
          <span className="font-semibold">{pct}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: pct + '%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>

        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.05 }}
              className={`rounded-xl p-4 ${s.done ? 'bg-white/10' : 'bg-white/5'} border border-white/10`}
            >
              <div className={`text-2xl ${s.done ? 'text-primary' : 'opacity-70'}`}>{s.icon}</div>
              <h4 className="mt-2 font-semibold">{s.title}</h4>
              <p className="text-sm opacity-80">{s.desc}</p>
              <div className="mt-3 text-sm inline-flex items-center gap-2">
                {s.done ? <><FiCheckCircle/> Done</> : <><FiCircle/> Upcoming</>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
