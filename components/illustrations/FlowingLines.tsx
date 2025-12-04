"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FlowingLinesProps {
  className?: string;
  variant?: "hero" | "connector" | "accent";
}

export default function FlowingLines({ className = "", variant = "hero" }: FlowingLinesProps) {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  if (variant === "hero") {
    return (
      <svg
        ref={ref}
        className={`absolute pointer-events-none ${className}`}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle curved line */}
        <motion.path
          d="M-100 450 Q200 350, 400 400 T900 350"
          stroke="url(#heroGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength, opacity }}
        />
        
        {/* Secondary subtle line */}
        <motion.path
          d="M0 500 Q300 420, 500 480 T1000 400"
          stroke="var(--charcoal)"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.1"
          style={{ pathLength, opacity }}
        />
        
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--peach)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--turquoise)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "connector") {
    return (
      <svg
        ref={ref}
        className={`absolute pointer-events-none ${className}`}
        viewBox="0 0 100 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="50"
          y1="0"
          x2="50"
          y2="200"
          stroke="var(--charcoal)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.1"
          style={{ pathLength, opacity }}
        />
      </svg>
    );
  }

  // Accent - minimal
  return (
    <svg
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        stroke="var(--coral)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
        style={{ pathLength, opacity }}
      />
    </svg>
  );
}
