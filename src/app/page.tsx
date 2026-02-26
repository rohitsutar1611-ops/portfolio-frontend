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
            Data Science Intern at CloudBlitz | Python | ML | Data Analytics
          </p>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Computer Science graduate and Data Science Intern at CloudBlitz Pune, turning real-world data into impactful insights with Python and machine learning.
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
            I am a Computer Science graduate with a strong interest in Data Science.

            Currently working as a Data Science Intern at CloudBlitz PUNE, where I analyze real-world datasets, build machine learning models, and derive actionable insights from data.

            I enjoy solving complex problems using Python, applying statistical thinking, and turning raw data into meaningful business intelligence
            <br /><br />
            My long-term goal is to grow as a data-driven engineer with strong expertise in machine learning and scalable cloud systems.
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Frontend</h3>
              <p className="text-gray-400">Next.js, React, Tailwind CSS</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Backend</h3>
              <p className="text-gray-400">NestJS, Node.js, Django</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Database</h3>
              <p className="text-gray-400">PostgreSQL, MySQL</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="font-semibold mb-3">Machine Learning</h3>
              <p className="text-gray-400">Python, scikit-learn, PyTorch</p>
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
          LinkedIn: linkedin.com/in/rohitsagarsutar
        </p>
      </section>

    </main>
  );
}