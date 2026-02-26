"use client";

import { motion } from "framer-motion";

export default function Particles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: 4 + (i % 6),
    left: (i * 7) % 100,
    duration: 10 + (i % 5),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-blue-500 rounded-full opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: "-10px",
          }}
          animate={{ y: ["0%", "120vh"] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}