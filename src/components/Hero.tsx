
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Music, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      {/* Crazy animated background layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/8bcd7a2b-5c66-47a3-9f8e-8295fa0216f7.png"
          alt="DJ Moral Live Performance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)]"></div>
        
        {/* Crazy glitch effect overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-gradient-to-r from-dj-electric/40 via-transparent to-dj-pink/40 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-dj-blue/30 via-transparent to-dj-purple/30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Crazy animated elements */}
      <div className="absolute inset-0 z-10">
        {/* Multiple interactive spotlights */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-dj-electric/50 to-dj-pink/50 blur-3xl animate-pulse"
          style={{ 
            left: `calc(30% + ${mousePosition.x * 200}px)`, 
            top: `calc(40% + ${mousePosition.y * 200}px)`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.5s ease-out, top 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-dj-blue/40 to-dj-purple/40 blur-3xl animate-pulse"
          style={{ 
            left: `calc(70% + ${mousePosition.x * -150}px)`, 
            top: `calc(60% + ${mousePosition.y * -150}px)`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
            animationDelay: '0.5s'
          }}
        ></div>
        
        {/* Crazy light beams */}
        <div className="absolute top-0 left-1/6 w-2 h-screen bg-gradient-to-b from-dj-electric/80 via-dj-pink/60 to-transparent opacity-80 animate-pulse"></div>
        <div className="absolute top-0 left-1/3 w-1 h-screen bg-gradient-to-b from-dj-blue/70 via-transparent to-transparent opacity-70 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-0 right-1/4 w-2 h-screen bg-gradient-to-b from-dj-pink/80 via-dj-purple/60 to-transparent opacity-80 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-0 right-1/6 w-1 h-screen bg-gradient-to-b from-dj-electric/60 via-transparent to-transparent opacity-60 animate-pulse" style={{animationDelay: '2.2s'}}></div>
        
        {/* Crazy floating particles */}
        <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink animate-float opacity-80" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-32 w-16 h-16 rounded-full bg-gradient-to-r from-dj-pink to-dj-blue animate-float opacity-70" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-40 left-40 w-8 h-8 rounded-full bg-gradient-to-r from-dj-blue to-dj-purple animate-float opacity-60" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-r from-dj-purple to-dj-electric animate-float opacity-75" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 rounded-full bg-gradient-to-r from-dj-electric to-dj-blue animate-float opacity-65" style={{ animationDelay: '2.5s' }} />
        
        {/* Rotating rings */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-dj-electric/40 rounded-full animate-spin opacity-60" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-dj-pink/30 rounded-full animate-spin opacity-50" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Enhanced grid overlay with animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 animate-pulse" style={{animationDuration: '4s'}}></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 z-20 flex flex-col items-center">
        {/* Main hero content */}
        <div className={`w-full text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center justify-center">
            {/* Crazy animated main heading */}
            <h1 className="text-8xl md:text-[150px] lg:text-[200px] font-bold tracking-tighter leading-none relative">
              <span className="text-gradient animate-pulse drop-shadow-[0_0_15px_rgba(139,92,246,0.9)]">DJ MORAL</span>
              {/* Glitch effect overlay */}
              <span className="absolute inset-0 text-gradient opacity-30 animate-pulse" style={{
                textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
                animationDelay: '0.1s'
              }}>DJ MORAL</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light text-white/90 mt-6 max-w-xl mx-auto backdrop-blur-sm py-3 px-6 border border-white/20 rounded-full relative overflow-hidden group">
              <span className="relative z-10">INDIA'S PREMIER DJ & MUSIC PRODUCER</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dj-electric/20 via-dj-pink/20 to-dj-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            
            {/* Enhanced audio visualizer */}
            <div className="mt-10 relative">
              <AudioVisualizer barCount={40} className="mb-8" active={true} />
              {/* Glowing base */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-dj-electric to-transparent blur-sm"></div>
            </div>
            
            {/* Crazy CTA button */}
            <div className="mt-16 flex flex-wrap gap-8 justify-center">
              <Link 
                to="/contact"
                className="group relative px-12 py-6 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue text-white font-bold text-xl overflow-hidden rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3 tracking-wider">
                  BOOK NOW
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </span>
                {/* Multiple animated overlays */}
                <div className="absolute inset-0 w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-dj-blue via-dj-purple to-dj-electric opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                {/* Pulsing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              </Link>
            </div>
            
            {/* Enhanced social links */}
            <div className="mt-20 flex gap-8 justify-center">
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-full hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500 overflow-hidden transform hover:scale-110 hover:rotate-2"
              >
                <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></div>
                <span className="relative z-10 text-white font-bold flex items-center gap-3">
                  <Music className="w-6 h-6 group-hover:animate-spin" />
                  SOUNDCLOUD
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </a>
              
              <a 
                href="https://www.instagram.com/dj_moral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-full hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-500 overflow-hidden transform hover:scale-110 hover:-rotate-2"
              >
                <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></div>
                <span className="relative z-10 text-white font-bold flex items-center gap-3">
                  <Instagram className="w-6 h-6 group-hover:animate-bounce" />
                  INSTAGRAM
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Crazy experience tag */}
            <div className="mt-20 relative group">
              <div className="py-4 px-8 bg-black/80 backdrop-blur-xl border-2 border-dj-electric/50 inline-block rounded-full relative overflow-hidden">
                <p className="text-lg text-white font-bold uppercase tracking-widest relative z-10">Experience the ultimate mix</p>
                <div className="absolute inset-0 bg-gradient-to-r from-dj-electric/20 via-dj-pink/20 to-dj-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Animated border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue rounded-full blur opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="p-3 bg-black/50 backdrop-blur-xl rounded-full border-2 border-dj-electric/50 relative overflow-hidden group hover:scale-110 transition-transform duration-300">
          <ArrowDown className="text-white w-8 h-8 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-dj-electric/30 to-dj-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </div>
      </div>

      {/* Enhanced bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      
      {/* Extra crazy effect - floating music notes */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-4xl text-dj-electric/30 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          >
            ♪
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
