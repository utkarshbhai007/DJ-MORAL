
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Music, Instagram, Play, ExternalLink } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 bg-black"
    >
      {/* Live DJ image background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/8bcd7a2b-5c66-47a3-9f8e-8295fa0216f7.png"
          alt="DJ Moral Live Performance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 z-10">
        {/* Interactive spotlight following mouse */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-dj-electric/40 to-dj-pink/40 blur-3xl"
          style={{ 
            left: `calc(50% + ${mousePosition.x * 150}px)`, 
            top: `calc(60% + ${mousePosition.y * 150}px)`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        ></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-screen bg-gradient-to-b from-dj-electric/70 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-1 h-screen bg-gradient-to-b from-dj-pink/70 via-transparent to-transparent opacity-70 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Moving particles */}
        <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-dj-electric/50 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-32 w-12 h-12 rounded-full bg-dj-pink/30 animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-40 left-40 w-6 h-6 rounded-full bg-dj-blue/30 animate-float" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 z-20 flex flex-col items-center">
        {/* Main hero content */}
        <div className={`w-full text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center justify-center">
            {/* Main headings with animation */}
            <h1 className="text-8xl md:text-[150px] lg:text-[180px] font-bold tracking-tighter leading-none animate-neon-flash drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
              <span className="text-gradient">DJ MORAL</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-white/80 mt-4 max-w-xl mx-auto backdrop-blur-sm py-2 px-4">
              INDIA'S PREMIER DJ & MUSIC PRODUCER
            </h2>
            
            {/* Audio visualizer effect */}
            <div className="mt-8 relative">
              <AudioVisualizer barCount={32} className="mb-8" active={isPlaying} />
              <button 
                onClick={handlePlayClick}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-dj-electric/20 hover:bg-dj-electric/30 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center transition-all group"
              >
                {isPlaying ? (
                  <span className="w-4 h-4 bg-white rounded-sm"></span>
                ) : (
                  <Play size={20} className="text-white ml-1" />
                )}
              </button>
            </div>
            
            {/* CTA buttons */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center">
              <a 
                href="#about" 
                className="group relative px-10 py-5 bg-transparent overflow-hidden border border-white/30 backdrop-blur-md transition-all"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-dj-electric to-dj-pink group-hover:w-full transition-all duration-500 ease-out opacity-80"></div>
                <span className="relative text-white font-medium text-lg group-hover:text-white transition-colors duration-300 ease-out z-10">DISCOVER MY SOUND</span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-10 py-5 bg-gradient-to-r from-dj-electric to-dj-pink text-white font-medium text-lg hover:shadow-lg hover:shadow-dj-pink/30 transition-all overflow-hidden animate-pulse-glow"
              >
                <span className="relative z-10 group-hover:animate-pulse transition-all">BOOK NOW</span>
                <div className="absolute inset-0 w-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-black/50 backdrop-blur-xl border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300 ease-out"></div>
                <span className="relative z-10 text-white font-medium text-lg flex items-center gap-3">
                  <Play className="w-5 h-5" /> LISTEN TO MY MIXES
                </span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="mt-16 flex gap-8 justify-center">
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-125 group"
              >
                <Music className="w-8 h-8 group-hover:animate-pulse" />
              </a>
              <a 
                href="https://www.instagram.com/dj_moral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-125 group"
              >
                <Instagram className="w-8 h-8 group-hover:animate-pulse" />
              </a>
              <a 
                href="https://djmoral.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-125 group"
              >
                <ExternalLink className="w-8 h-8 group-hover:animate-pulse" />
              </a>
            </div>

            {/* Experience tag */}
            <div className="mt-16 py-2 px-6 bg-black/70 backdrop-blur-xl border border-dj-electric/30 inline-block">
              <p className="text-sm text-white/80 uppercase tracking-wider">Experience the ultimate mix</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="p-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10">
          <ArrowDown className="text-white w-6 h-6" />
        </div>
      </div>

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
