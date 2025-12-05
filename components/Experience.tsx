"use client";

import { motion } from "framer-motion";

const experience = [
  {
    step: "1",
    title: "Fullstack Developer",
    company: "Vereant Pty Ltd",
    period: "Mar 2025 — Present",
    description: "Building and shipping AI-powered apps across iOS, Android, and web. Leading development of a real estate CRM platform with voice AI, automated workflows, and cross-platform sync.",
  },
  {
    step: "2",
    title: "No-Code & Backend Developer",
    company: "Vereant Pty Ltd",
    period: "Sept 2021 — Mar 2025",
    description: "Developed internal and client-facing applications. Designed data models, built REST APIs, and integrated third-party services for production systems.",
  },
  {
    step: "3",
    title: "Motion Graphics Designer",
    company: "Vereant Pty Ltd",
    period: "Jul 2017 — Sept 2021",
    description: "Created motion graphics and explainer videos. Developed strong visual design skills that now inform my approach to UI/UX.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wider mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My journey in<br />
            software development.
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            From design to development—each role has shaped how I approach building products that people actually use.
          </p>
        </motion.div>

        {/* Timeline Cards - Stack on mobile, 3 cols on desktop */}
        <div className="grid md:grid-cols-3 gap-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 md:left-8 w-10 h-10 bg-[#0F4C5C] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">{job.step}</span>
              </div>
              
              <div className="pt-4">
                <div className="text-sm text-slate-500 mb-2">{job.period}</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                <p className="text-[#0F4C5C] font-medium text-sm mb-4">{job.company}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
