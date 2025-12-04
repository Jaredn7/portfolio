"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Kale – AI Real Estate Assistant",
    description: "iOS & Android app that manages calendars, logs deals, and automates cold calling for agents.",
    tags: ["Swift", "React Native", "OpenAI", "Xano"],
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: 2,
    title: "HMS Online",
    description: "Medical case management CRM with voice AI for updating patient records via speech.",
    tags: ["React", "Voice AI", "REST API"],
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: 3,
    title: "Voice AI Agents",
    description: "Custom voice bots for inbound/outbound calls, integrated with CRM workflows.",
    tags: ["Twilio", "WebRTC", "Node.js"],
    gradient: "from-orange-50 to-amber-50",
  },
  {
    id: 4,
    title: "Bash – Team Management",
    description: "Internal tool for managing team goals, performance, and operational workflows.",
    tags: ["No-Code", "Xano", "UX Design"],
    gradient: "from-violet-50 to-purple-50",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Selected Work
            </h2>
            <p className="text-slate-500 text-lg">
              Production apps and AI agents solving real business problems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className="group cursor-pointer h-full" hover>
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="text-center px-6">
                    <h3 className="text-2xl font-bold text-slate-900/80 mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600/80 font-medium uppercase tracking-wide">In Production</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
