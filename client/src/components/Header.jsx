import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE, CONTACT } from '../config/site';

function waLink() {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(CONTACT.waMessage)}`;
}

export default function Header() {
  const location = useLocation();

  function handleCoursesClick(e) {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="bg-surface dark:bg-slate-950 font-['Manrope'] font-bold tracking-tight text-2xl docked full-width top-0 z-50 transition-transform sticky w-full flex justify-between items-center px-8 py-4 max-w-full mx-auto shadow-sm">
      <div className="flex items-center gap-4">
        <span className="font-['Manrope'] font-extrabold text-primary-container dark:text-blue-300 tracking-tighter text-2xl">{SITE.name}</span>
      </div>
      <nav className="hidden md:flex gap-8">
        <Link className="text-primary-container font-bold border-b-2 border-primary-container" to="/">Home</Link>
        <a
          className="text-on-surface-variant dark:text-slate-400 hover:text-primary-container transition-colors"
          href={location.pathname === '/' ? '#courses' : '/#courses'}
          onClick={handleCoursesClick}
        >
          Courses
        </a>
        <Link className="text-on-surface-variant dark:text-slate-400 hover:text-primary-container transition-colors" to="/about">About</Link>
        <Link className="text-on-surface-variant dark:text-slate-400 hover:text-primary-container transition-colors" to="/contact">Contact</Link>
      </nav>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-container text-on-primary px-6 py-2 rounded-xl text-sm font-label flex items-center gap-2 hover:bg-primary transition-colors focus:ring-4 focus:ring-primary-container/30"
      >
        Enroll Now
      </a>
    </header>
  );
}
