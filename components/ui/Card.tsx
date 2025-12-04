"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-2xl ${className}`}
      whileHover={hover ? { 
        y: -2,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        borderColor: "rgba(59, 130, 246, 0.2)"
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
