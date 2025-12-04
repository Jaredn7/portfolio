"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border";
  
  const variants = {
    primary: "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 hover:border-slate-800 shadow-[0_0_20px_-5px_rgba(15,23,42,0.3)]",
    secondary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-500 hover:border-blue-500 shadow-md",
    outline: "bg-transparent text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
