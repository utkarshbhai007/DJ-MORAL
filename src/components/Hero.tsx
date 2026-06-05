import React, { useEffect, useState, useRef } from 'react';
import AudioVisualizer from './AudioVisualizer';
import ShaderBackground from './ShaderBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) - 0.5;
        const y = ((e.clientY - top) / height) - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen relative overflow-hidden flex flex-col justify-end p-6 md:p-12 pb-24 bg-[#030303] select-none"
    >
      {/* 1. BRUTALIST AMBIENT TEXTURE LAYERS */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/8bcd7a2b-5c66-47a3-9f8e-8295fa0216f7.png"
          alt="DJ Moral Live Performance"
          className="w-full h-full object-cover object-center grayscale contrast-[1.3] brightness-[0.3]"
        />
        <ShaderBackground />
        {/* Stark Shadow Blocks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]"></div>

        {/* Custom Industrial CSS Scanline / Noise Layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>\")",
          }}
        ></div>

        {/* Fine Technical Grid Matrix overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
      </div>

      {/* 2. DYNAMIC SEARCHLIGHT INTERACTION FRAMEWORK */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Calculated Industrial Flash Highlight Area */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] mix-blend-screen"
          style={{
            left: `calc(50% + ${mousePosition.x * 120}px)`,
            top: `calc(50% + ${mousePosition.y * 120}px)`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        ></div>

        {/* Framing Coordinates */}
        <div className="absolute top-24 left-8 font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase hidden sm:block">
          [ FREQUENCY SYSTEM // ACTIVE ]
        </div>
        <div className="absolute top-24 right-8 font-mono text-[10px] text-zinc-500 tracking-widest hidden sm:block">
          AHD // 23.0225° N, 72.5714° E
        </div>
      </div>

      {/* 3. ASYMMETRICAL STORY CONTENT LAYOUT */}
      <div className="w-full max-w-7xl mx-auto relative z-20 px-4">
        <div className={`w-full flex flex-col items-start text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

          {/* Subheading Badge - Monospace Architecture Style */}
          <h2 className="font-mono text-xs font-bold text-zinc-400 tracking-[0.4em] uppercase mb-6 border-b border-zinc-800 pb-2 w-full md:max-w-md">
            // {`INDIA'S PREMIER DJ & MUSIC PRODUCER`}
          </h2>

          {/* Macro Brutalist Headline Frame */}
          <h1 className="font-sans text-6xl sm:text-[10vw] lg:text-[13vw] font-black tracking-tighter leading-[0.8] text-white uppercase italic select-none mb-12">
            DJ MORAL
          </h1>

          {/* Bottom Control Deck: Equalizes Content & Visualizer */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/10 pt-8 mt-4">

            {/* Visualizer Position Block */}
            <div className="relative w-full md:max-w-xs group">
              <div className="absolute -top-6 left-0 font-mono text-[9px] tracking-widest text-zinc-600 uppercase">
                实时音频频谱 // LIVE OSCILLOSCOPE MONITOR
              </div>
              <AudioVisualizer barCount={32} className="opacity-40 group-hover:opacity-100 transition-opacity duration-500" active={true} />
            </div>

            {/* Kinetic Scrolling Indicator Vector */}
            <div className="font-mono text-[10px] text-zinc-400 tracking-[0.3em] uppercase flex items-center gap-3 animate-pulse">
              SCANNED AUDIO MATRIX <span className="text-white font-black">[ ▼ ]</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;