import React from 'react';
import { FaGithub } from 'react-icons/fa';  // GitHub icon

const projects = [
  { 
    id: 1, 
    title: 'E-Commerce App', 
    desc: 'Ecommerce site with Django authentication , place order , checkout and Admin Panel.', 
    tags: ['Django','Html5, CSS3','Bootstrap','SQLite'], 
    image: 'https://tse4.mm.bing.net/th/id/OIP.6fmPnp4funHqkAWs6CnsMwHaEJ?pid=Api&P=0&h=220', 
    github: 'https://github.com/Sualiha-05/Django-Ecommerce-Web-Application-with-Authentication'
  },
  { 
    id: 2, 
    title: 'Tech Agency website', 
    desc: 'Detail discription of projects/Portfolio, Skills and services In Tech Agency and Admin Panel.', 
    tags: ['PHP','Html, CSS','Javascript','MySQL'], 
    image: 'https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/654ab064d4eab26147024db8_cloudai-marketing-agency-website-template.jpg',
    github: 'https://github.com/Sualiha-05/Multi-Page-Tech-Agency-Website' 
  },
  { 
    id: 3, 
    title: 'Hotel Management System', 
    desc: 'Java Swing app with secure login, Signup, room booking, and payment integration.', 
    tags: ['Java','MYSQL','NetBeans','tailwindcss'], 
    image: 'https://tse3.mm.bing.net/th/id/OIP.aaAIijbckJ8n0N9At8CDkwHaF7?pid=Api&P=0&h=220',
    github: 'https://github.com/Sualiha-05/CodeAlpha_Task-3_Hotel_Reservation_System'  
  },
  { 
    id: 4, 
    title: 'Library Management System', 
    desc: 'Java Swing app Managed books and members with real-time database integration.', 
    tags: ['Java','MYSQL','NetBeans','Bootstrap'], 
    image: 'https://media.licdn.com/dms/image/v2/D5612AQGVftLfvQQmlw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693586856807?e=2147483647&v=beta&t=3PZVvD4xcC90Nd0Em677gX-o3e522HfdUOz2_MMjDxo',
    github: 'https://github.com/Sualiha-05/Duet_Project_Library_management_system'  
  },
  { 
    id: 5, 
    title: 'Job Tracker Web App', 
    desc: 'Job Tracker web app to manage job applications. Add, edit, or delete jobs with company, title, and status.', 
    tags: ['React + Vite','TailwindCSS','React Router','Context API','Recharts'], 
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c8ccba188641571.Y3JvcCwxNzY0LDEzODAsMTU3LDA.jpg',
    github: 'https://github.com/Sualiha-05/Job-Application-Tracker-Web-App'  
  },
  { 
    id: 6, 
    title: 'Freelance Dashboard', 
    desc: 'The Freelance Dashboard designed help freelancers manage their projects, tasks, and deadlines.', 
    tags: ['ReactJs','React Router','Tailwindcss','Chart.js','Recharts'], 
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8f7b65156103735.6363e60933dc7.jpg',
    github: 'https://github.com/Sualiha-05/Multi-Page-Dashboard-for-a-Fictional-Freelance-Client'  
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6" data-aos="fade-up">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Featured <span className="">Projects</span>
        </h2>
        <p className="text-center mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of apps I’ve built, ranging from full-stack systems to offline-first PWAs.
        </p>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <article 
              key={p.id} 
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 
                         shadow-md hover:shadow-2xl hover:-translate-y-2 
                         transition-transform duration-300"
            >
              {/* Image with padding + GitHub Overlay */}
              <div className="relative p-3">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <a 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 bg-black/80 text-white p-2 rounded-full 
                             hover:bg-black transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <h3 className="font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
