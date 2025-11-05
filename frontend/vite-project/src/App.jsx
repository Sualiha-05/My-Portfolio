import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(() => !!localStorage.getItem('dark'));
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('dark', dark ? '1' : '');
  }, [dark]);

  return (
    <div className="min-h-screen antialiased">
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
