
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Music, Instagram } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 hero-gradient"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-dj-electric/20 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-dj-pink/20 blur-3xl" />
        </div>
      </div>

      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full bg-dj-electric/50 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-dj-pink/50 animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-dj-blue/50 animate-float" style={{ animationDelay: '0.8s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-light text-white/90 mb-2">Experience The Beat With</h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 shimmer-text">DJ MORAL</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
            India's Top DJ: Elevating Events with Over 1000 Shows Across Global Stages
          </p>
          
          {/* Animated audio visualizer */}
          <AudioVisualizer className="mb-8" />
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink text-white font-medium hover:shadow-lg hover:shadow-dj-pink/30 transition-all flex items-center justify-center gap-2"
            >
              Book Now
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Learn More
            </a>
          </div>
          
          {/* Social links */}
          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <a 
              href="https://soundcloud.com/dj_moral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all flex items-center gap-2"
            >
              <Music className="w-5 h-5" /> SoundCloud
            </a>
            <a 
              href="https://www.instagram.com/dj_moral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-dj-purple to-dj-electric p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="/lovable-uploads/7adb2c5d-9afd-4c68-a816-4fe1c27ab289.png" 
                  alt="DJ Moral" 
                  className="w-full h-full object-cover object-center scale-[1.15] translate-y-5"
                />
              </div>
            </div>
            
            {/* Animated rotating disc */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-dj-electric bg-black/50 animate-spin-slow flex items-center justify-center overflow-hidden">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <div className="absolute inset-0 rounded-full border-t-2 border-dj-pink"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/70 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;

