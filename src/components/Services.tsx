
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Music2, Users, Glasses, PartyPopper, Mic } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  color: string;
}

const ServiceCard = ({ icon, title, description, delay, inView, isActive, onHover, onLeave, color }: ServiceCardProps) => {
  return (
    <div 
      className={`relative rounded-2xl p-6 transition-all duration-700 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        isActive ? 'scale-105 z-10' : 'hover:scale-102'
      }`}
      style={{ 
        transitionDelay: `${delay * 100}ms`,
        background: isActive ? `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, ${color}22 100%)` : 'rgba(0,0,0,0.6)',
        boxShadow: isActive ? `0 10px 30px -5px ${color}66` : '',
        backdropFilter: 'blur(10px)',
        border: isActive ? `1px solid ${color}66` : '1px solid rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isActive && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -inset-[10px] opacity-30" style={{ 
            background: `radial-gradient(circle at 50% 50%, ${color}99, transparent 70%)`,
            filter: 'blur(20px)',
          }}></div>
        </div>
      )}
      
      <div className={cn(
        "flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-700",
        isActive ? "bg-gradient-to-r animate-pulse" : "bg-white/5"
      )}
      style={{ 
        backgroundImage: isActive ? `linear-gradient(45deg, ${color}, ${color}99)` : ''
      }}
      >
        {icon}
      </div>
      
      <h3 className={cn(
        "text-xl font-bold mb-3 text-center transition-all duration-500",
        isActive ? "text-white text-glow" : "text-white"
      )}>{title}</h3>
      
      <p className={cn(
        "text-center transition-all duration-500",
        isActive ? "text-white/90" : "text-white/70"
      )}>{description}</p>
      
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <AudioVisualizer barCount={8} className="h-4" />
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Music2 className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Club Events",
      description: "High-energy DJ sets perfectly curated for clubs and nightlife venues.",
      color: "#8B5CF6" // dj-electric
    },
    {
      icon: <Users className="w-8 h-8 text-dj-pink group-hover:text-white transition-all duration-300" />,
      title: "Private Parties",
      description: "Customized music experiences for exclusive and private celebrations.",
      color: "#D946EF" // dj-pink
    },
    {
      icon: <Glasses className="w-8 h-8 text-dj-blue group-hover:text-white transition-all duration-300" />,
      title: "Wedding Events",
      description: "Memorable A-list wedding performances with personalized playlists.",
      color: "#0EA5E9" // dj-blue
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-dj-light group-hover:text-white transition-all duration-300" />,
      title: "Corporate Events",
      description: "Professional DJ services for corporate gatherings and product launches.",
      color: "#D6BCFA" // dj-light
    },
    {
      icon: <Mic className="w-8 h-8 text-white group-hover:text-white transition-all duration-300" />,
      title: "Collaborative Sets",
      description: "Enhanced performances with saxophonists, percussionists, vocalists & more.",
      color: "#F472B6" // pink-400
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-dj-electric/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-dj-pink/20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Services</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From Bollywood to EDM, Punjabi to Techno, DJ Moral masters every genre to create the perfect vibe for any event.
          </p>
        </div>

        {/* Audio visualizer */}
        <div className="mb-20 relative">
          <AudioVisualizer barCount={32} className="mx-auto h-32" />
          
          {/* Spotlight effect */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-dj-electric/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        {/* Services grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index + 1}
              inView={inView}
              isActive={activeService === index}
              onHover={() => setActiveService(index)}
              onLeave={() => setActiveService(null)}
              color={service.color}
            />
          ))}
        </div>

        {/* Genres */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Music Genres</h3>
          
          <div className="relative min-h-[120px]">
            <div className="flex flex-wrap justify-center gap-4">
              {['Bollywood', 'Punjabi', 'EDM', 'Techno', 'Hip Hop', 'Commercial', 'House', 'Remixes'].map((genre, index) => (
                <span 
                  key={index}
                  className={`px-6 py-3 rounded-full text-white transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${(index + 1) * 150}ms`,
                    background: `linear-gradient(45deg, rgba(139, 92, 246, ${0.7 - (index * 0.05)}), rgba(217, 70, 239, ${0.7 - (index * 0.05)}))`,
                    boxShadow: `0 4px 20px -2px rgba(139, 92, 246, ${0.3 - (index * 0.03)})`,
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>
            
            {/* Background effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-dj-electric/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Services;
