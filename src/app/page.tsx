"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import {
  FaPython,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import {
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiPytorch,
  SiScikitlearn,
  SiJupyter
} from "react-icons/si";

import { MdBarChart } from "react-icons/md";

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

      <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-wide">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 
      p-6 rounded-2xl transition duration-300 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">

              <h3 className="font-semibold mb-6 text-lg">
                Programming & Databases
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3 justify-center hover:text-yellow-400 transition">
                  <FaPython size={20} />
                  <span>Python</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-green-400 transition">
                  <FaDatabase size={20} />
                  <span>SQL</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-blue-400 transition">
                  <SiPostgresql size={20} />
                  <span>PostgreSQL</span>
                </div>

              </div>
            </div>

            {/* DATA ANALYSIS */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 
      p-6 rounded-2xl transition duration-300 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">

              <h3 className="font-semibold mb-6 text-lg">
                Data Analysis & Visualization
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3 justify-center hover:text-blue-300 transition">
                  <SiPandas size={20} />
                  <span>Pandas</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-indigo-300 transition">
                  <SiNumpy size={20} />
                  <span>NumPy</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-pink-300 transition">
                  <MdBarChart size={20} />
                  <span>Matplotlib / Seaborn</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-green-300 transition">
                  <MdBarChart size={20} />
                  <span>Excel / Power BI</span>
                </div>

              </div>
            </div>

            {/* MACHINE LEARNING */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 
      p-6 rounded-2xl transition duration-300 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">

              <h3 className="font-semibold mb-6 text-lg">
                Machine Learning
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3 justify-center hover:text-orange-400 transition">
                  <SiScikitlearn size={20} />
                  <span>Scikit-learn</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-orange-500 transition">
                  <SiPytorch size={20} />
                  <span>PyTorch</span>
                </div>

                <div className="text-sm text-gray-400 mt-4 leading-relaxed">
                  Feature Engineering, Regression, Classification, Model Evaluation
                </div>

              </div>
            </div>

            {/* TOOLS */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 
      p-6 rounded-2xl transition duration-300 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">

              <h3 className="font-semibold mb-6 text-lg">
                Tools & Workflow
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3 justify-center hover:text-purple-300 transition">
                  <SiJupyter size={20} />
                  <span>Jupyter Notebook</span>
                </div>

                <div className="flex items-center gap-3 justify-center hover:text-red-400 transition">
                  <FaGitAlt size={20} />
                  <span>Git</span>
                </div>

                <div className="text-sm text-gray-400 mt-4 leading-relaxed">
                  Data Cleaning, EDA, Statistical Analysis
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="flex flex-col items-center py-20"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <div className="flex justify-center items-center gap-6">
          <a
            href="mailto:rohitsutar1611@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition duration-300"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-sutar-38b837399"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition duration-300"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="https://github.com/rohitsutar1611-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition duration-300"
          >
            <Github size={28} />
          </a>

          <a
            href="https://x.com/ROHIT0146"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition duration-300"
          >
            <Twitter size={28} />
          </a>
        </div>
      </section>

    </main>
  );
}