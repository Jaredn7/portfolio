"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0F4C5C] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Let&apos;s build<br />
              something together.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-6 md:mb-8">
              I&apos;m looking for a team where I can contribute to meaningful products using modern development workflows. 
              I ship features fast, solve problems efficiently, and I&apos;m always looking to grow alongside talented people.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="mailto:jaredonaidoo@gmail.com"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#0F4C5C] font-semibold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                Email Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+27781024033"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 transition-colors text-center"
              >
                +27 78 102 4033
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JN</span>
            </div>
            <span className="text-slate-600">© 2025 Jared Naidoo</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-500 hover:text-[#0F4C5C] transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-500 hover:text-[#0F4C5C] transition-colors">
                GitHub
              </Link>
            </div>
            <span className="text-slate-400">Johannesburg, South Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
