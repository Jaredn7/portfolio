"use client";

import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Minimal futuristic grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
    </div>
  );
}

function AIGreeting() {
  const searchParams = useSearchParams();
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    setGreeting("AI-Assisted App Developer");
  }, [searchParams]);

  return (
    <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">
      {greeting}
    </span>
  );
}

function GreetingFallback() {
  return <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Loading...</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      <GridBackground />
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <Suspense fallback={<GreetingFallback />}>
            <AIGreeting />
          </Suspense>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-display font-bold tracking-tight text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700"
        >
          Jared Naidoo
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build production-ready apps and AI agents using modern tools like Cursor and OpenAI. Specializing in Swift, React Native, and web development.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#projects" variant="primary" size="lg" className="rounded-full px-8">
            View Projects
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="rounded-full px-8 bg-white/50 backdrop-blur-sm">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      {/* Tech Stack Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 opacity-40 grayscale text-sm font-medium text-slate-400"
      >
        <span>Swift</span>
        <span>React Native</span>
        <span>OpenAI</span>
        <span>Xano</span>
        <span>React</span>
      </motion.div>
    </section>
  );
}
