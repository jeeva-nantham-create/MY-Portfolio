import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 py-3 mt-4 glass rounded-2xl flex items-center justify-between">
        <div onClick={() => scrollTo('home')} className="cursor-pointer font-bold text-lg">
          <span className="text-primary">My</span>Portfolio
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {['home','about','skills','projects','roadmap','contact'].map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="capitalize opacity-90 hover:opacity-100">
              {link}
            </button>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-white/10">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-white/10">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="px-3 py-2 rounded-lg border border-white/10">Menu</button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-xl p-4 flex flex-col gap-2">
          {['home','about','skills','projects','roadmap','contact'].map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="capitalize py-2 rounded-lg hover:bg-white/10">
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
