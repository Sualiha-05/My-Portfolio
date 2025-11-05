import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section heading */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-4xl font-bold"> About Me</p>
          <h2 className="mt-2 text-3xl md:text-2xl font-semibold">
            Who is <span className="">Sualiha Salahuddin?</span>
          </h2>

          {/* Short description */}
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about technology and innovation. My journey has taken me 
            from school foundations to university and professional development, 
            growing into a Fullstack Developer ready to take on real-world challenges.
          </p>

          {/* Download CV button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/Sualiha.pdf"
              className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Download CV
              <span className="inline-block w-6 h-6 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center">
                ➜
              </span>
            </a>
          </div>
        </div>

        {/* Stats (below timeline) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
  <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-md transition">
    <p className="text-3xl md:text-4xl font-bold text-yellow-400">10+</p>
    <p className="mt-2 text-gray-900 dark:text-gray-300 text-sm">Completed Projects</p>
  </div>

  <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-md transition">
    <p className="text-3xl md:text-4xl font-bold text-yellow-400">10+</p>
    <p className="mt-2 text-gray-900 dark:text-gray-300 text-sm">Happy Clients</p>
  </div>

  <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-md transition">
    <p className="text-3xl md:text-4xl font-bold text-yellow-400">2+</p>
    <p className="mt-2 text-gray-900 dark:text-gray-300 text-sm">Years of Experience</p>
  </div>

  <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-md transition">
    <p className="text-3xl md:text-4xl font-bold text-yellow-400">4+</p>
    <p className="mt-2 text-gray-900 dark:text-gray-300 text-sm">Live Projects</p>
  </div>
</div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-yellow-400 rounded"></div>
          <div className="space-y-10">
            
            {/* Matric */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                🏫
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Matriculation in Biology</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                St. Patrick’s School
              </p>
            </div>

            {/* Intermediate */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                📘
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Intermediate in Pre-engineering</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Army Public College(APC)
              </p>
            </div>

            {/* Graduation */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                🎓
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Graduation in Computer Science</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2027</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dawood University of Engineering and Technology
              </p>
            </div>

            {/* Frontend Developer */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Frontend Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Innovation Studio
              </p>
            </div>

            {/* Fullstack Developer */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Fullstack Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2024 - 2025</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Elevvo Pathways
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
