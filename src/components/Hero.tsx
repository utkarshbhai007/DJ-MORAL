
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Music, Instagram, Play } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

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
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 bg-black"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Interactive spotlight */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-dj-electric/30 to-dj-pink/30 blur-3xl"
        style={{ 
          left: `calc(50% + ${mousePosition.x * 100}px)`, 
          top: `calc(50% + ${mousePosition.y * 100}px)`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.4,
          transition: 'left 0.2s ease-out, top 0.2s ease-out'
        }}
      ></div>

      {/* Animated particles */}
      <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-dj-electric/50 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-32 w-12 h-12 rounded-full bg-dj-pink/30 animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-40 left-40 w-6 h-6 rounded-full bg-dj-blue/30 animate-float" style={{ animationDelay: '0.8s' }} />

      {/* Main content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        {/* Main hero content */}
        <div className={`w-full text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center justify-center">
            {/* Main headings with animation */}
            <h1 className="text-8xl md:text-[150px] lg:text-[200px] font-bold tracking-tighter leading-none animate-neon-flash">
              <span className="text-gradient">DJ MORAL</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-white/70 mt-4 max-w-xl mx-auto">
              INDIA'S PREMIER DJ & MUSIC PRODUCER
            </h2>
            
            {/* Audio visualizer effect */}
            <div className="mt-8">
              <AudioVisualizer barCount={20} className="mb-8" />
            </div>
            
            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-5 justify-center">
              <a 
                href="#about" 
                className="group relative px-10 py-4 bg-transparent overflow-hidden"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-dj-electric to-dj-pink group-hover:w-full transition-all duration-300 ease-out"></div>
                <span className="relative text-white font-medium text-lg group-hover:text-black transition-colors duration-300 ease-out z-10">EXPLORE</span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-10 py-4 bg-gradient-to-r from-dj-electric to-dj-pink text-white font-medium text-lg hover:shadow-lg hover:shadow-dj-pink/30 transition-all overflow-hidden"
              >
                <span className="relative z-10 group-hover:animate-pulse transition-all">BOOK NOW</span>
                <div className="absolute inset-0 w-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </a>
              
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300 ease-out"></div>
                <span className="relative z-10 text-white font-medium text-lg flex items-center gap-2">
                  <Play className="w-5 h-5" /> LISTEN
                </span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="mt-12 flex gap-8 justify-center">
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <Music className="w-8 h-8" />
              </a>
              <a 
                href="https://www.instagram.com/dj_moral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/70 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
