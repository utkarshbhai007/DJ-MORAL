import React, { useEffect, useState, useRef } from 'react';
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
            
            {/* Audio visualizer effect without play/pause */}
            <div className="mt-8 relative">
              <AudioVisualizer barCount={32} className="mb-8" active={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
