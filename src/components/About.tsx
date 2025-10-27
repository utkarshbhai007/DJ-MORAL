
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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-dj-electric/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-dj-pink/30 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dj-blue/20 rounded-full blur-[80px] animate-spotlight-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-text-gradient">About DJ Moral</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
          </div>
          <AudioVisualizer className="absolute top-0 left-0 w-24 h-16 opacity-50" barCount={8} />
          <AudioVisualizer className="absolute top-0 right-0 w-24 h-16 opacity-50" barCount={8} />
        </div>

        {/* About content */}
        <div 
          ref={ref} 
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Stats with hover effects */}
          <div className="grid grid-cols-2 gap-6">
            <div 
              className="glass-morphism p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-black hover:to-dj-dark hover:shadow-lg hover:shadow-dj-electric/30 hover:-translate-y-1 group"
              onMouseEnter={() => setActiveCard(0)} 
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-500",
                activeCard === 0 ? "bg-gradient-to-r from-dj-electric to-dj-pink" : "bg-dj-electric/20"
              )}>
                <Calendar className={cn(
                  "w-8 h-8 transition-all duration-500",
                  activeCard === 0 ? "text-white animate-pulse" : "text-dj-electric"
                )} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center group-hover:text-glow">8+ Years</h3>
              <p className="text-white/70 text-center group-hover:text-white text-sm">Professional Experience</p>
            </div>
            
            <div 
              className="glass-morphism p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-black hover:to-dj-dark hover:shadow-lg hover:shadow-dj-pink/30 hover:-translate-y-1 group"
              onMouseEnter={() => setActiveCard(1)} 
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-500",
                activeCard === 1 ? "bg-gradient-to-r from-dj-pink to-dj-electric" : "bg-dj-pink/20"
              )}>
                <Globe className={cn(
                  "w-8 h-8 transition-all duration-500",
                  activeCard === 1 ? "text-white animate-pulse" : "text-dj-pink"
                )} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center group-hover:text-glow leading-tight">Shows</h3>
              <p className="text-white/70 text-center group-hover:text-white text-sm">India & internationally</p>
            </div>
            
            <div 
              className="glass-morphism p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-black hover:to-dj-dark hover:shadow-lg hover:shadow-dj-blue/30 hover:-translate-y-1 group"
              onMouseEnter={() => setActiveCard(2)} 
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-500",
                activeCard === 2 ? "bg-gradient-to-r from-dj-blue to-dj-light" : "bg-dj-blue/20"
              )}>
                <Users className={cn(
                  "w-8 h-8 transition-all duration-500",
                  activeCard === 2 ? "text-white animate-pulse" : "text-dj-blue"
                )} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center group-hover:text-glow leading-tight">Premium Events</h3>
              <p className="text-white/70 text-center group-hover:text-white text-sm">Celebrity & Destination Weddings</p>
            </div>
            
            <div 
              className="glass-morphism p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-black hover:to-dj-dark hover:shadow-lg hover:shadow-dj-light/30 hover:-translate-y-1 group"
              onMouseEnter={() => setActiveCard(3)} 
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-500",
                activeCard === 3 ? "bg-gradient-to-r from-dj-light to-dj-blue" : "bg-dj-light/20"
              )}>
                <Headphones className={cn(
                  "w-8 h-8 transition-all duration-500",
                  activeCard === 3 ? "text-white animate-pulse" : "text-dj-light"
                )} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center group-hover:text-glow">1000+</h3>
              <p className="text-white/70 text-center group-hover:text-white text-sm">Shows Performed</p>
            </div>
          </div>
          
          {/* Bio with social media */}
          <div className="glass-morphism p-8 rounded-3xl relative overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dj-dark/40 to-black/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-dj-electric/20 blur-3xl group-hover:bg-dj-electric/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                DJ Moral stands out as one of the most promising and dynamic DJs hailing from Gujarat, India. Renowned for his electrifying sets and magnetic stage presence, he offers more than just a performance — he delivers an unforgettable experience. Whether it's a high-end club or a luxury destination wedding, DJ Moral knows exactly how to make the night come alive.
              </p>
              
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                His journey began at the age of 19, when he trained in DJing at the prestigious Snixx Academy. Fueled by a deep passion for music, he further honed his craft by studying music production at Singapore Raffles Music College. This strong foundation in both performance and production has enabled him to develop a versatile, signature style that resonates with diverse audiences.
              </p>
              
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                With a growing presence in both national and international scenes, DJ Moral has performed in top cities across India and rocked stages abroad as well. His rise in the music industry has been swift, especially after performing at several high-profile weddings of the elite — including the widely publicized celebrations of Esha Kansara & Siddharth Amit Bhavsar, Navdeep Saini & Swati Asthana, and more.
              </p>
              
              {/* Social media links */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/dj_moral/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://soundcloud.com/dj_moral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transform transition-all duration-300 group"
                >
                  <Music className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span>SoundCloud</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
};

export default About;
