import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="relative">
      {/* Sidebar */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 
                      w-16 flex flex-col items-center space-y-6 py-6
                      bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 shadow-md rounded-r-lg">
        {/* Rotated label */}
        <div className="transform -rotate-90 text-xs tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap mb-6">
          FOLLOW ME ON
        </div>

        {/* Divider */}
        <div className="w-[1px] h-8 bg-gray-400 dark:bg-gray-600"></div>

        {/* Social icons */}
        <a href="https://github.com/Sualiha-05" target="_blank" rel="noreferrer" aria-label="GitHub"
           className="p-2 rounded-full hover:bg-yellow-500 hover:text-white transition transform hover:scale-110">
          <FaGithub className="text-xl" />
        </a>

        <a href="mailto:sualiharajput@gmail.com" aria-label="Email"
           className="p-2 rounded-full hover:bg-yellow-500 hover:text-white transition transform hover:scale-110">
          <FaEnvelope className="text-xl" />
        </a>

        <a href="https://www.linkedin.com/in/sualiha-salahuddin-a81875282/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
           className="p-2 rounded-full hover:bg-yellow-500 hover:text-white transition transform hover:scale-110">
           <FaLinkedin className="text-xl" />
        </a>

        <a href="https://instagram.com/sualiharajput256" target="_blank" rel="noreferrer" aria-label="Instagram"
           className="p-2 rounded-full hover:bg-yellow-500 hover:text-white transition transform hover:scale-110">
          <FaInstagram className="text-xl" />
        </a>
      </div>

      {/* Main content */}
      <header id="home" className="min-h-screen flex items-center ml-20 bg-white dark:bg-gray-900 -mt-12">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="">Sualiha</span>
            </h1>

            {/* Animated Developer Roles */}
            <h2 className="mt-2 text-xl md:text-4xl font-semibold text-white-500">
              <Typewriter
                words={['Full Stack Developer', 'Software Developer', 'Python Developer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500} // 1.5 sec delay between roles
              />
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Full-Stack Developer specializing in React, Node.js, and modern web apps. 
              I build clean, performant, and accessible interfaces for production.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium 
                          bg-gradient-to-r from-yellow-400 to-yellow-600 
                          text-white shadow-md hover:shadow-lg 
                          transform hover:-translate-y-1 hover:scale-105 
                          transition duration-300"
              >
                🚀 See Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium 
                          border border-yellow-500 text-yellow-500 
                          hover:bg-yellow-500 hover:text-white 
                          shadow-md transform hover:-translate-y-1 hover:scale-105 
                          transition duration-300 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900"
              >
                ✉️ Contact Me
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div>React • Node.js • MySQL</div>
              <div>•</div>
              <div>Tailwind • Vite • AOS</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator (hidden on mobile) */}
<a
  href="#about"
  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
>
  <div className="flex flex-col items-center">
    <div className="w-7 h-12 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center hover:border-yellow-400 transition">
      <div className="w-2 h-3 bg-gray-500 dark:bg-gray-300 rounded-full mt-2 animate-slow-bounce"></div>
    </div>
  </div>
</a>



      </header>
    </div>
  );
}
