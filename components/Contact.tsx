"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
        >
          Ready to collaborate?
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-slate-600 mb-10"
        >
          I&apos;m currently available for junior web developer roles or freelance projects. Let&apos;s discuss how I can contribute to your team.
        </motion.p>
        
        <motion.div variants={fadeInUp}>
          <Button href="mailto:jaredonaidoo@gmail.com" variant="primary" size="lg" className="rounded-full px-10 py-4 text-lg">
            jaredonaidoo@gmail.com
          </Button>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-slate-200 flex justify-center gap-8 text-slate-500"
        >
          <a href="tel:+27781024033" className="hover:text-slate-900 transition-colors">078 102 4033</a>
          <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
