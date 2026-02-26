"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Particles from "@/components/Particles";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null);
  const { scrollY } = useScroll();

  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [params.id]);

  if (!project) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse space-y-6 w-[400px]">

        <div className="h-10 bg-gray-700 rounded-xl"></div>

        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>

        <div className="h-32 bg-gray-800 rounded-2xl"></div>

      </div>
    </div>
  );
}

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      
      <Particles />

      {/* HERO PARALLAX */}
      {project.imageUrl && (
        <motion.div style={{ y: yParallax }} className="relative h-[450px]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-center"
            >
              {project.title}
            </motion.h1>
          </div>
        </motion.div>
      )}

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* Description Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-6">About This Project</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>

          <div className="flex flex-wrap gap-4">
            {project.techStack?.split(",").map((tech: string, index: number) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm"
              >
                {tech.trim()}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 flex-wrap"
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              className="px-6 py-3 bg-gray-800 rounded-xl hover:scale-105 transition"
            >
              GitHub
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition"
            >
              Live Demo
            </a>
          )}

          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            ← Back
          </Link>
        </motion.div>

      </div>
    </div>
  );
}