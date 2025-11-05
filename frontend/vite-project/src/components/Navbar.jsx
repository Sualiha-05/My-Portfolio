import React, { useEffect, useState } from 'react';

const NAV_LINKS = ['Home', 'about', 'services', 'projects', 'skills', 'contact'];

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState('home');

  // Scroll spy: set active based on which section is near top
  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      for (const id of NAV_LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // If the section's top is in the upper third of the viewport, mark it active
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.2) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <nav className="fixed w-full z-40 bg-white dark:bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-900 rounded-full border border-gray-700 shadow">
            <div className="relative">
              <span className="absolute inset-0 text-4xl font-serif text-gray-400 select-none">S</span>
              <span className="relative text-4xl font-serif text-yellow-400 ml-1 select-none">S</span>
            </div>
          </div>
          <div className="font-semibold text-gray-600 dark:text-gray-300 text-lg">Sualiha Salahuddin | Portfolio</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative inline-block group px-1"
              aria-current={active === link ? 'page' : undefined}
            >
              <span
               className={`capitalize text-sm font-medium transition-colors ${
               active === link
               ? 'text-yellow-400'
               : 'text-gray-800 dark:text-white/90'
              }`}
            >
            {link}
            </span>



              {/* underline: visible on hover OR when active */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5  bg-yellow-500 transition-all duration-300
                  ${active === link ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </button>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => {
              setDark(!dark);
              document.documentElement.classList.toggle('dark');
            }}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile contact button */}
        <div className="md:hidden">
          <button onClick={() => scrollTo('contact')} className="px-3 py-1 rounded bg-yellow-500 text-black hover:bg-yellow-400 transition">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
