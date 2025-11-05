import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiBootstrap,
  SiPhp,
  SiExpress,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> }, // ✅ Added MySQL
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="relative group w-20 h-20 mx-auto flex items-center justify-center 
                         rounded-xl 
                         bg-white dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         shadow-md transition 
                         transform hover:-translate-y-2 hover:rotate-6 hover:shadow-yellow-400/50"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="absolute bottom-0 translate-y-8 opacity-0 group-hover:opacity-100 text-sm text-yellow-400 transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
