import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 text-sm opacity-80 flex items-center justify-between">
        <p>© <span>{new Date().getFullYear()}</span> JEEVANANTHAM K</p>
        <p>Built with React • Tailwind</p>
      </div>
    </footer>
  );
}
