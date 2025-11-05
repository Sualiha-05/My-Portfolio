import React from "react";
import { FaLaptopCode, FaServer, FaCogs, FaCode } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Animation

const cards = [
  { 
    title: "Frontend Development", 
    desc: "Responsive, accessible UI using React & Tailwind CSS.", 
    icon: <FaLaptopCode className="text-4xl text-yellow-400 mb-4 drop-shadow-lg" /> 
  },
  { 
    title: "Backend & APIs", 
    desc: "Robust REST APIs with Node.js, Express, and secure MySQL databases.", 
    icon: <FaServer className="text-4xl text-yellow-400 mb-4 drop-shadow-lg" /> 
  },
  { 
    title: "Full-Stack Integration", 
    desc: "End-to-end web applications with authentication and deployment pipelines.", 
    icon: <FaCogs className="text-4xl text-yellow-400 mb-4 drop-shadow-lg" /> 
  },
  { 
    title: "Software Development", 
    desc: "Custom software solutions tailored to business needs with scalability in mind.", 
    icon: <FaCode className="text-4xl text-yellow-400 mb-4 drop-shadow-lg" /> 
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6" data-aos="fade-up">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl font-bold text-center"
        >
          My <span className="">Services</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="text-center mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          I provide end-to-end solutions from frontend design to backend systems and custom software.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="p-6 rounded-xl border bg-white dark:bg-gray-800 shadow-md 
                         hover:shadow-yellow-400/50 transition-transform 
                         duration-300 text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center">{c.icon}</div>
              
              {/* Title */}
              <h3 className="font-semibold text-lg mt-2 group-hover:text-yellow-500 transition">
                {c.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
