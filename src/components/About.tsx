import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headphones, Calendar, Globe, Users, Instagram, Music } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none">

      {/* 1. BRUTALIST GRID PATTERN & SHADOW LABELS */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Subtle single white backlight for ambient separation instead of pink/blue orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 2. HEADER: MONOSPACE TRACKER METRICS */}
        <div className="w-full flex flex-col items-start border-b border-white/10 pb-12 mb-20 relative">
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4">// INTEL FILE 01</p>
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            THE ARCHITECT.
          </h2>

          {/* Audio Monitor Anchored Asymmetrically right in header track */}
          <div className="absolute right-0 bottom-4 opacity-20 hidden md:block">
            <AudioVisualizer barCount={12} active={true} />
          </div>
        </div>

        {/* 3. CORE MATRIX STRUCTURE */}
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-1000 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* STATS: SHARP EDGE DATA MODULES */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2 w-full">

            {/* Card 0 */}
            <div
              className={cn(
                "border p-8 flex flex-col justify-between h-[240px] transition-all duration-500 rounded-none cursor-crosshair",
                activeCard === 0
                  ? "bg-[#ffffff] text-black border-white"
                  : "bg-[#090909] border-white/10 text-white"
              )}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex justify-between items-start">
                <Calendar className={cn("w-5 h-5", activeCard === 0 ? "text-black" : "text-zinc-600")} />
                <span className="font-mono text-[9px] opacity-40">EXP_01</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-1">8+ Years</h3>
                <p className={cn("font-mono text-[10px] uppercase tracking-wider", activeCard === 0 ? "text-black/60" : "text-zinc-500")}>
                  Professional Experience
                </p>
              </div>
            </div>

            {/* Card 1 */}
            <div
              className={cn(
                "border p-8 flex flex-col justify-between h-[240px] transition-all duration-500 rounded-none cursor-crosshair",
                activeCard === 1
                  ? "bg-[#ffffff] text-black border-white"
                  : "bg-[#090909] border-white/10 text-white"
              )}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex justify-between items-start">
                <Globe className={cn("w-5 h-5", activeCard === 1 ? "text-black" : "text-zinc-600")} />
                <span className="font-mono text-[9px] opacity-40">LOC_02</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-1">GLOBAL</h3>
                <p className={cn("font-mono text-[10px] uppercase tracking-wider", activeCard === 1 ? "text-black/60" : "text-zinc-500")}>
                  India & Internationally
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={cn(
                "border p-8 flex flex-col justify-between h-[240px] transition-all duration-500 rounded-none cursor-crosshair",
                activeCard === 2
                  ? "bg-[#ffffff] text-black border-white"
                  : "bg-[#090909] border-white/10 text-white"
              )}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex justify-between items-start">
                <Users className={cn("w-5 h-5", activeCard === 2 ? "text-black" : "text-zinc-600")} />
                <span className="font-mono text-[9px] opacity-40">VEN_03</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">PREMIUM</h3>
                <p className={cn("font-mono text-[10px] uppercase tracking-wider", activeCard === 2 ? "text-black/60" : "text-zinc-500")}>
                  Celebrity & Destination
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={cn(
                "border p-8 flex flex-col justify-between h-[240px] transition-all duration-500 rounded-none cursor-crosshair",
                activeCard === 3
                  ? "bg-[#ffffff] text-black border-white"
                  : "bg-[#090909] border-white/10 text-white"
              )}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex justify-between items-start">
                <Headphones className={cn("w-5 h-5", activeCard === 3 ? "text-black" : "text-zinc-600")} />
                <span className="font-mono text-[9px] opacity-40">MAT_04</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-1">1000+</h3>
                <p className={cn("font-mono text-[10px] uppercase tracking-wider", activeCard === 3 ? "text-black/60" : "text-zinc-500")}>
                  Shows Performed
                </p>
              </div>
            </div>

          </div>

          {/* BIO DESCRIPTOR: NO-MARGIN STARK TEXT PANELS */}
          <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-8 md:p-12 rounded-none relative">
            <span className="absolute top-4 right-4 font-mono text-[9px] text-zinc-600">MANIFESTO // LOG</span>

            <div className="space-y-6 text-zinc-400 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>
                <span className="text-white font-bold tracking-tight">DJ Moral</span> stands out as one of the most promising and dynamic DJs hailing from Gujarat, India. Renowned for his electrifying sets and magnetic stage presence, he offers more than just a performance — he delivers an unforgettable experience. Whether it's a high-end club or a luxury destination wedding, DJ Moral knows exactly how to make the night come alive.
              </p>
              <p>
                His journey began at the age of 19, when he trained in DJing at the prestigious Snixx Academy. Fueled by a deep passion for music, he further honed his craft by studying music production at Singapore Raffles Music College. This strong foundation in both performance and production has enabled him to develop a versatile, signature style that resonates with diverse audiences.
              </p>
              <p>
                With a growing presence in both national and international scenes, DJ Moral has performed in top cities across India and rocked stages abroad as well. His rise in the music industry has been swift, especially after performing at several high-profile weddings of the elite — including the widely publicized celebrations of Esha Kansara & Siddharth Amit Bhavsar, Navdeep Saini & Swati Asthana, and more.
              </p>
            </div>

            {/* HIGH CONTRAST INDUSTRIAL ACTION LINKS */}
            <div className="flex flex-col sm:flex-row gap-2 mt-12 pt-8 border-t border-white/10">
              <a
                href="https://www.instagram.com/dj_moral/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#ffffff] text-black p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition duration-300 w-full rounded-none"
              >
                <Instagram className="w-4 h-4 mr-2 stroke-[2.5]" />
                Instagram Framework
              </a>

              <a
                href="https://soundcloud.com/dj_moral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-zinc-900 border border-white/10 text-white p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition duration-300 w-full rounded-none"
              >
                <Music className="w-4 h-4 mr-2" />
                Soundcloud Stream
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;