
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Music2, Users, Glasses, PartyPopper, Mic } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

const ServiceCard = ({ icon, title, description, delay, inView }: ServiceCardProps) => {
  return (
    <div 
      className={`glass-morphism rounded-2xl p-6 transition-all duration-1000 transform hover:scale-105 hover:shadow-lg hover:shadow-dj-electric/20 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dj-electric/20 mb-4 mx-auto 
                     group-hover:bg-gradient-to-r group-hover:from-dj-electric group-hover:to-dj-pink transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-white/70 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Music2 className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Club Events",
      description: "High-energy DJ sets perfectly curated for clubs and nightlife venues."
    },
    {
      icon: <Users className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Private Parties",
      description: "Customized music experiences for exclusive and private celebrations."
    },
    {
      icon: <Glasses className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Wedding Events",
      description: "Memorable A-list wedding performances with personalized playlists."
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Corporate Events",
      description: "Professional DJ services for corporate gatherings and product launches."
    },
    {
      icon: <Mic className="w-8 h-8 text-dj-electric group-hover:text-white transition-all duration-300" />,
      title: "Collaborative Sets",
      description: "Enhanced performances with saxophonists, percussionists, vocalists & more."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-dj-dark to-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black/20 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black/20 opacity-30"></div>
      <div className="absolute top-1/3 right-0 w-32 h-64 bg-dj-electric/30 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-32 h-64 bg-dj-pink/20 rounded-r-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            From Bollywood to EDM, Punjabi to Techno, DJ Moral masters every genre to create the perfect vibe for any event.
          </p>
        </div>

        {/* Audio visualizer */}
        <div className="mb-16">
          <AudioVisualizer barCount={20} className="mx-auto" />
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
            />
          ))}
        </div>

        {/* Genres */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Music Genres</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Bollywood', 'Punjabi', 'EDM', 'Techno', 'Hip Hop', 'Commercial', 'House', 'Remixes'].map((genre, index) => (
              <span 
                key={index}
                className={`px-6 py-3 rounded-full glass-morphism text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-dj-electric hover:to-dj-pink ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
