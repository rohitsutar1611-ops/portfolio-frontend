"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Particles() {
  // ✅ Generate random values once (pure render)
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 10,
    }));
  }, []);

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
          animate={{
            y: ["0%", "120vh"],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}