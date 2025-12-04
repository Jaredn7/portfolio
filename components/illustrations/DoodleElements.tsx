"use client";

import { motion } from "framer-motion";

interface DoodleElementsProps {
  className?: string;
  variant?: "gradient" | "dots" | "grid" | "glow";
}

export default function DoodleElements({ className = "", variant = "gradient" }: DoodleElementsProps) {
  if (variant === "gradient") {
    // Subtle warm gradient orb - golden hour glow
    return (
      <motion.div
        className={`absolute rounded-full blur-3xl ${className}`}
        style={{
          background: "radial-gradient(circle, rgba(212, 133, 74, 0.15) 0%, rgba(201, 166, 122, 0.08) 50%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    );
  }

  if (variant === "glow") {
    // Ambient glow effect
    return (
      <motion.div
        className={`absolute rounded-full blur-2xl ${className}`}
        style={{
          background: "radial-gradient(circle, rgba(61, 122, 122, 0.12) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }

  if (variant === "grid") {
    // Subtle dot grid pattern
    return (
      <svg className={`absolute pointer-events-none opacity-30 ${className}`} viewBox="0 0 200 200" fill="none">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 22 + 10}
              cy={row * 22 + 10}
              r="1"
              fill="var(--charcoal)"
              opacity="0.3"
            />
          ))
        )}
      </svg>
    );
  }

  // Minimal dots
  return (
    <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none">
      {[
        { cx: 25, cy: 30, r: 2, opacity: 0.2 },
        { cx: 70, cy: 50, r: 1.5, opacity: 0.15 },
        { cx: 45, cy: 75, r: 2, opacity: 0.2 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="var(--charcoal)"
          initial={{ opacity: 0 }}
          animate={{ opacity: dot.opacity }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        />
      ))}
    </svg>
  );
}
