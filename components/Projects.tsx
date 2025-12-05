"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

// Before/After Image Slider Component
function ImageCompareSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: { 
  beforeImage: string; 
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
        />
        <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 text-white text-xs rounded-md">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
        />
        <span className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 text-white text-xs rounded-md">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Kale",
    subtitle: "AI Real Estate Assistant",
    description: "Voice-powered assistant for real estate agents. Manages calendars, logs deals, and automates cold calling across iOS and Android.",
    highlight: null, // No stat for now
    highlightLabel: null,
    image: "/projects/kale-apps.png",
    tags: ["Swift", "React Native", "OpenAI"],
    type: "image",
  },
  {
    title: "HMS Online",
    subtitle: "AI Voice Agent for Healthcare",
    description: "Conversational voice AI that captures patient information through natural speech and logs it directly into the CRM system.",
    highlight: "90% faster",
    highlightLabel: "Case assignment time",
    image: "/projects/hms-online.png",
    tags: ["React", "OpenAI Realtime"],
    type: "image",
  },
  {
    title: "Kale Studio",
    subtitle: "AI Photo Enhancement",
    description: "One-tap professional property photos. Real estate agents enhance listing images instantly with AI vision processing.",
    highlight: "1-tap",
    highlightLabel: "Professional photos",
    beforeImage: "/projects/kale-studio-original.jpg",
    afterImage: "/projects/kale-studio-enhanced.jpg",
    tags: ["Swift", "AI Vision", "Image Processing"],
    type: "slider",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wider mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What I&apos;ve been<br />
            building lately.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Kale - Featured Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="p-6 md:p-8 lg:w-1/2 flex flex-col justify-center">
                {/* Title First */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{projects[0].title}</h3>
                <p className="text-[#0F4C5C] font-medium mb-4">{projects[0].subtitle}</p>
                
                <p className="text-slate-600 mb-6">{projects[0].description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {projects[0].image && (
                <div className="p-6 md:p-8 lg:w-1/2">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0F4C5C]/5 to-[#0F4C5C]/10 rounded-xl overflow-hidden">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* HMS Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6 md:p-8">
              {/* Title First */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{projects[1].title}</h3>
              <p className="text-[#0F4C5C] font-medium text-sm mb-4">{projects[1].subtitle}</p>
              
              {/* Highlight */}
              {projects[1].highlight && (
                <div className="mb-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#0F4C5C]">{projects[1].highlight}</div>
                  <div className="text-slate-500 text-sm">{projects[1].highlightLabel}</div>
                </div>
              )}
              
              <p className="text-slate-600 text-sm mb-4">{projects[1].description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[1].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Image - full width inside padding */}
              {projects[1].image && (
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#0F4C5C]/5 to-[#0F4C5C]/10 rounded-xl overflow-hidden">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* Kale Studio - With Image Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
          >
            {/* Title First */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{projects[2].title}</h3>
            <p className="text-[#0F4C5C] font-medium text-sm mb-3">{projects[2].subtitle}</p>
            
            {/* Highlight below subtitle */}
            {projects[2].highlight && (
              <div className="mb-4">
                <div className="text-2xl md:text-3xl font-bold text-[#0F4C5C]">{projects[2].highlight}</div>
                <div className="text-slate-500 text-sm">{projects[2].highlightLabel}</div>
              </div>
            )}
            
            <p className="text-slate-600 text-sm mb-4">{projects[2].description}</p>
            
            {/* Before/After Slider */}
            <div className="mb-4">
              <ImageCompareSlider
                beforeImage={projects[2].beforeImage!}
                afterImage={projects[2].afterImage!}
                beforeLabel="Original"
                afterLabel="Enhanced"
              />
              <p className="text-center text-xs text-slate-400 mt-2">Drag to compare</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projects[2].tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
