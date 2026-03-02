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
import { Typewriter } from "react-simple-typewriter";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0a0f1f] via-[#0f172a] to-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Image
            src="/profile_photo.png"
            alt="Rohit Sutar"
            width={170}
            height={170}
            className="rounded-full shadow-2xl border-4 border-cyan-500/40 mx-auto"
          />

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Rohit{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sagar Sutar
            </span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg font-medium">
            <Typewriter
              words={[
                "Machine Learning Enthusiast",
                "Data Analyst",
                "Business Intelligence Developer",
                "AI Solutions Builder"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center gap-12 mt-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">3</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">Analytics</h3>
              <p className="text-gray-400 text-sm">BI Expertise</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-400">Interactive</h3>
              <p className="text-gray-400 text-sm">Dashboards</p>
            </div>
          </motion.div>

          <div className="flex gap-4 justify-center mt-10">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-cyan-500/40 rounded-xl hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-[#0f172a] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            I am a Computer Science graduate passionate about building intelligent,
            data-driven systems that bridge analytics and machine learning.
            I enjoy transforming complex datasets into structured insights that
            drive strategic and operational decision-making.

            <br /><br />

            My work spans the complete data lifecycle — from data cleaning and
            exploratory analysis to predictive modeling and interactive dashboards.
            I focus on developing scalable, real-world solutions that combine
            analytical depth with practical business impact.
          </motion.p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-28 bg-[#0a0f1f] px-6 overflow-hidden">

        <div className="absolute w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                title: "Programming & Databases",
                items: [
                  { icon: <FaPython />, text: "Python" },
                  { icon: <FaDatabase />, text: "SQL" },
                  { icon: <SiPostgresql />, text: "PostgreSQL" }
                ]
              },
              {
                title: "Data Analysis & Visualization",
                items: [
                  { icon: <SiPandas />, text: "Pandas" },
                  { icon: <SiNumpy />, text: "NumPy" },
                  { icon: <MdBarChart />, text: "Matplotlib / Seaborn" },
                  { icon: <MdBarChart />, text: "Excel / Power BI" }
                ]
              },
              {
                title: "Machine Learning",
                items: [
                  { icon: <SiScikitlearn />, text: "Scikit-learn" },
                  { icon: <SiPytorch />, text: "PyTorch" }
                ],
                extra:
                  "Feature Engineering, Regression, Classification, Model Evaluation"
              },
              {
                title: "Tools & Workflow",
                items: [
                  { icon: <SiJupyter />, text: "Jupyter Notebook" },
                  { icon: <FaGitAlt />, text: "Git" }
                ],
                extra:
                  "Data Cleaning, EDA, Statistical Analysis"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 
          p-6 rounded-2xl transition duration-300 
          hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
              >
                <h3 className="font-semibold mb-6 text-lg text-cyan-400">
                  {card.title}
                </h3>

                <div className="space-y-4 text-gray-300">
                  {card.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 justify-center 
                hover:text-cyan-400 transition text-base"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {card.extra && (
                  <div className="text-sm text-gray-400 mt-4 leading-relaxed">
                    {card.extra}
                  </div>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="flex flex-col items-center py-20 bg-[#0f172a]"
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="flex justify-center items-center gap-6">
          {[
            { icon: <Mail size={28} />, link: "mailto:rohitsutar1611@gmail.com" },
            { icon: <Linkedin size={28} />, link: "https://www.linkedin.com/in/rohit-sutar-38b837399" },
            { icon: <Github size={28} />, link: "https://github.com/rohitsutar1611-ops" },
            { icon: <Twitter size={28} />, link: "https://x.com/ROHIT0146" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}