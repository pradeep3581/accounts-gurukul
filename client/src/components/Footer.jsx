import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-primary-container dark:bg-slate-950 text-white border-t border-white/10 w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-10 text-center sm:px-8">
        <div className="flex flex-col items-center gap-2">
          <div className="font-headline text-2xl font-black text-white">{SITE.name}</div>
          <div className="max-w-md text-sm text-white/70">
            {SITE.tagline}. {SITE.description}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/80">
          <Link className="transition-colors hover:text-white" to="/">Home</Link>
          <Link className="transition-colors hover:text-white" to="/about">About</Link>
          <Link className="transition-colors hover:text-white" to="/contact">Contact</Link>
        </div>

        <div className="border-t border-white/10 pt-5 text-xs font-medium tracking-[0.18em] text-white/55">
          Designed &amp; Developed by{' '}
          <a
            className="text-white/80 transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4"
            href="https://pivra.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pivra
          </a>
        </div>
      </div>
    </footer>
  );
}
