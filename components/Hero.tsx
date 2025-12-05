"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-[#F8FAFB] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F4C5C]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#0F4C5C]">Available for opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              I&apos;m Jared Naidoo.<br />
              <span className="text-[#0F4C5C]">Software developer</span><br />
              shipping real products.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              I build iOS, Android, and web apps using modern AI-assisted workflows. 
              I&apos;m looking for a role where I can contribute to meaningful products and continue growing as a developer.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="#projects"
                className="px-6 py-3 bg-[#0F4C5C] text-white font-medium rounded-lg hover:bg-[#1A6B7D] transition-colors flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-slate-400 text-sm">
              <span>Built apps for:</span>
              <div className="flex items-center gap-3 sm:gap-6 font-medium text-slate-600">
                <span>Real Estate</span>
                <span className="hidden sm:inline">•</span>
                <span>Healthcare</span>
                <span className="hidden sm:inline">•</span>
                <span>AI/ML</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-mono">developer.ts</span>
              </div>
              
              {/* Code Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                <div className="text-slate-400">// Building production apps</div>
                <div className="mt-2">
                  <span className="text-purple-600">const</span>{" "}
                  <span className="text-blue-600">developer</span> = {"{"}
                </div>
                <div className="pl-4 mt-1">
                  <span className="text-slate-600">name:</span>{" "}
                  <span className="text-emerald-600">&quot;Jared Naidoo&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">role:</span>{" "}
                  <span className="text-emerald-600">&quot;Full Stack Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">stack:</span> [
                  <span className="text-emerald-600">&quot;Swift&quot;</span>,{" "}
                  <span className="text-emerald-600">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-600">&quot;AI&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">status:</span>{" "}
                  <span className="text-emerald-600">&quot;Available&quot;</span>{" "}
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div>{"}"}</div>
              </div>
            </div>

            {/* Stats - Below card */}
            <div className="flex justify-center lg:justify-end gap-4 mt-6">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 min-w-[120px] text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#0F4C5C]">4+</div>
                <div className="text-xs sm:text-sm text-slate-600">Years Building Apps</div>
              </div>
              
              <div className="bg-[#0F4C5C] text-white rounded-xl shadow-lg p-4 min-w-[120px] text-center">
                <div className="text-2xl sm:text-3xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-white/80">Apps Shipped</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
