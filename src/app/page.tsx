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

/* Animation Variant */
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

      {/* SKILLS SECTION */}
      <section className="relative py-28 bg-gray-950 px-6 overflow-hidden">

        <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 tracking-wide"
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
                className="bg-white/5 backdrop-blur-md border border-white/10 
                p-6 rounded-2xl transition duration-300 
                hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                <h3 className="font-semibold mb-6 text-lg">
                  {card.title}
                </h3>

                <div className="space-y-4 text-gray-300">
                  {card.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 justify-center 
                      hover:text-blue-400 transition"
                    >
                      {item.icon}
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
        className="flex flex-col items-center py-20"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

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
              className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}