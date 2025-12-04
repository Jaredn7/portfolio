"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const jobs = [
  {
    company: "Vereant Pty Ltd",
    role: "Fullstack & AI App Developer",
    period: "Mar 2025 — Present",
    description: "Leading development of 'Kale', an AI CRM assistant for real estate. Integrated voice/chat AI for calendar management and cold calling, reducing manual admin time.",
  },
  {
    company: "Vereant Pty Ltd",
    role: "No-Code & Backend App Developer",
    period: "Sept 2021 — Mar 2025",
    description: "Developed internal tools and client apps using Xano and no-code platforms. Designed data models and APIs to digitize manual business workflows.",
  },
  {
    company: "Vereant Pty Ltd",
    role: "Motion Graphics Animator",
    period: "Jul 2017 — Sept 2021",
    description: "Produced motion graphics and explainer videos. Self-taught mastery of Adobe Creative Suite, demonstrating ability to learn complex tools independently.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
          {jobs.map((job, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-blue-600" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 inline-block w-fit mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="text-blue-600 font-medium mb-3">{job.company}</div>
              <p className="text-slate-600 leading-relaxed">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
