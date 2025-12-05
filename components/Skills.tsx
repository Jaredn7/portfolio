"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["TypeScript / JavaScript", "React & React Native", "Swift (iOS)", "Node.js", "Python"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Cursor", "Git & GitHub", "Xano", "Vercel", "Postman"],
  },
  {
    title: "AI & Integrations",
    skills: ["OpenAI API", "Voice AI", "REST APIs", "Twilio", "WhatsApp Business"],
  },
  {
    title: "Design & Media",
    skills: ["Figma", "After Effects", "Illustrator", "UI/UX Design", "Motion Graphics"],
  },
];

const stats = [
  { value: "4+", label: "Years Building Apps" },
  { value: "5+", label: "Apps Shipped" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0F4C5C] rounded-2xl p-8 md:p-12 mb-16 md:mb-20"
        >
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">
              Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Building real products<br className="hidden sm:block" />
              that solve real problems.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 text-center max-w-md mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-white/60 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wider mb-4 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technologies I work with
          </h2>
        </motion.div>

        {/* Skills Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xs sm:text-sm font-semibold text-[#0F4C5C] uppercase tracking-wider mb-3 md:mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0F4C5C] rounded-full flex-shrink-0" />
                    <span className="truncate">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
