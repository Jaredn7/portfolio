"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <motion.div variants={fadeInUp} className="order-2 lg:order-1">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Self-taught developer <br />
            <span className="text-slate-400">supercharged by AI.</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              I’m a web and app developer who doesn't just write code—I design and ship production systems. I specialize in using AI-assisted coding tools like Cursor and ChatGPT to build Swift iOS apps, React Native Android apps, and complex backends faster and more reliably.
            </p>
            <p>
              Based in Johannesburg, I’ve been working remotely since 2021, delivering apps that real businesses use daily. From medical case management to AI real estate assistants, I focus on turning manual workflows into streamlined digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Visuals / Stats Bento Grid */}
        <motion.div 
          variants={staggerContainer} 
          className="order-1 lg:order-2 grid grid-cols-2 gap-4"
        >
          <motion.div variants={fadeInUp} className="col-span-2">
            <Card className="aspect-[2/1] relative overflow-hidden flex items-center justify-center bg-slate-100 border-0">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />
               <div className="relative z-10 text-center p-6">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-3 flex items-center justify-center text-3xl">🤖</div>
                 <p className="font-bold text-slate-900 text-lg">AI-First Approach</p>
                 <p className="text-slate-500 text-sm mt-1">Leveraging LLMs for rapid development</p>
               </div>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-blue-600 mb-1">4+</span>
              <span className="text-sm text-slate-500 font-medium">Years Experience</span>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-indigo-600 mb-1">Daily</span>
              <span className="text-sm text-slate-500 font-medium">Production Usage</span>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
