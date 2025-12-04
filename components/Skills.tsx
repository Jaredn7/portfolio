"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stack = [
  {
    category: "Mobile & Web",
    items: ["Swift (iOS)", "React Native", "React", "HTML5/CSS3", "JavaScript"],
  },
  {
    category: "Backend & Data",
    items: ["Xano", "REST APIs", "Database Design", "Auth & Security"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "Twilio (Voice/SIP)", "WhatsApp Business API", "Cursor", "ChatGPT"],
  },
  {
    category: "Product & UX",
    items: ["User Flows", "Feature Design", "Manual Testing", "Remote Collaboration"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Technical <br />
              <span className="text-slate-400">Arsenal</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md">
              I combine traditional development with AI-assisted workflows to build faster and smarter. My stack is chosen for reliability and speed of delivery.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-8">
            {stack.map((group) => (
              <motion.div key={group.category} variants={fadeInUp}>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
