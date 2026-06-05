import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-12 px-6 relative z-10 select-none">
      
      {/* 1. STRUCTURAL BACKGROUND SYSTEM MESH */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* 2. TOP GRID BLOCK: TELEMETRY DIRECTION NETWORKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Column A: Core Brand Matrix */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-sans text-2xl font-black tracking-tighter text-white uppercase italic">
                DJ MORAL
              </span>
            </Link>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider leading-relaxed max-w-sm">
              India's premier sonic architect and electronic music producer. 
              Engineering raw frequencies and industrial sensory environments across elite corporate platforms, clubs, and heritage destination events.
            </p>
          </div>

          {/* Column B: Internal System Vectors */}
          <div className="md:col-span-3 space-y-4 font-mono text-[11px] font-bold tracking-widest uppercase">
            <p className="text-zinc-600 text-[10px] tracking-[0.3em] font-normal">// SYSTEM VECTORS</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-zinc-400 hover:text-white hover:underline underline-offset-4 decoration-2 transition-colors w-fit">01_BASE // HOME</Link>
              <Link to="/services" className="text-zinc-400 hover:text-white hover:underline underline-offset-4 decoration-2 transition-colors w-fit">02_CAP // SERVICES</Link>
              <Link to="/gallery" className="text-zinc-400 hover:text-white hover:underline underline-offset-4 decoration-2 transition-colors w-fit">03_VIS // GALLERY</Link>
              <Link to="/contact" className="text-zinc-400 hover:text-white hover:underline underline-offset-4 decoration-2 transition-colors w-fit">04_CON // CONTACT</Link>
            </div>
          </div>

          {/* Column C: Transmission Endpoints */}
          <div className="md:col-span-3 space-y-4 font-mono text-[11px] font-bold tracking-widest uppercase">
            <p className="text-zinc-600 text-[10px] tracking-[0.3em] font-normal">// TRANSMISSION</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://www.instagram.com/dj_moral/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors w-fit">
                <Instagram className="w-3.5 h-3.5 stroke-[2.5]" /> INSTAGRAM
              </a>
              <a href="https://soundcloud.com/dj_moral" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors w-fit">
                <span className="text-[10px] font-bold tracking-normal">☁</span> SOUNDCLOUD
              </a>
              <a href="https://youtube.com/@dj_moral" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors w-fit">
                <Youtube className="w-3.5 h-3.5" /> YOUTUBE
              </a>
            </div>
          </div>

          {/* Column D: Hard Reset Anchor */}
          <div className="md:col-span-1 flex md:justify-end">
            <button 
              onClick={scrollToTop}
              className="border border-white/10 p-3 bg-[#090909] text-zinc-500 hover:text-white hover:border-white transition-all rounded-none group active:scale-95"
              aria-label="Return to top coordinates"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* 3. CORE BASELINE TRACK: INSTITUTIONAL SYSTEM LOGS */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest uppercase text-zinc-600">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center md:text-left">
            <span>© {new Date().getFullYear()} DJ MORAL ARCHIVE FRAMEWORK</span>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <span>COORDINATES // 23.0225° N, 72.5714° E</span>
          </div>

          <div className="text-center md:text-right flex items-center gap-2 group">
            <span className="text-zinc-700 font-light text-[9px] tracking-normal">ARCHITECTURE ASSEMBLED BY</span>
            <a 
              href="https://www.udaanworks.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 font-black group-hover:text-white transition-colors tracking-widest"
            >
              UDAAN WORKS
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
