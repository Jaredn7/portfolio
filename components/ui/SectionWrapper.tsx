"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
