"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-950 to-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/profile_photo.png"
            alt="Rohit Sutar"
            width={160}
            height={160}
            className="rounded-full shadow-2xl border-4 border-gray-700 mx-auto"
          />

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Rohit Sagar Sutar
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Data Science Intern | Machine Learning Enthusiast | Data Analytics
          </p>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Computer Science graduate specializing in Data Science, focused on building
            intelligent models and transforming real-world data into scalable, actionable insights.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a Computer Science graduate and Data Science Intern passionate about
            transforming data into actionable insights. I work with real-world datasets,
            build machine learning models, and apply statistical analysis to solve
            complex business problems.

            <br /><br />

            With strong proficiency in Python and data-driven thinking, I focus on
            delivering scalable and impactful solutions. My goal is to grow as a
            data-driven engineer specializing in machine learning and intelligent systems.
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Programming & Databases</h3>
              <p className="text-gray-400">
                Python, SQL, PostgreSQL
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Data Analysis & Visualization</h3>
              <p className="text-gray-400">
                Pandas, NumPy, Matplotlib, Seaborn, Excel, Power BI
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Machine Learning</h3>
              <p className="text-gray-400">
                Scikit-learn, PyTorch, Feature Engineering,
                Regression, Classification, Model Evaluation
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Tools & Workflow</h3>
              <p className="text-gray-400">
                Jupyter Notebook, Git, Data Cleaning,
                EDA, Statistical Analysis
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400">
          Email: rohitsutar1611@gmail.com
        </p>
        <p className="text-gray-400 mt-2">
          LinkedIn: linkedin.com/in/rohit-sutar-38b837399
          GitHub: https://github.com/rohitsutar1611-ops
        </p>
      </section>

    </main>
  );
}