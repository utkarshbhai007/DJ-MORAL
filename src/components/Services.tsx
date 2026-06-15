import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Music2, Users, Glasses, PartyPopper, Instagram, Music, Youtube } from 'lucide-react';
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
}

const ServiceCard = ({ icon, title, description, delay, inView, isActive, onHover, onLeave }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "relative p-8 border transition-all duration-500 rounded-none cursor-crosshair select-none flex flex-col justify-between min-h-[300px]",
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        isActive
          ? 'bg-[#ffffff] text-black border-white'
          : 'bg-[#090909] border-white/10 text-white'
      )}
      style={{ transitionDelay: `${delay * 75}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex justify-between items-start w-full">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 transition-colors duration-500 rounded-none",
          isActive ? "bg-black text-white" : "bg-white/5 text-white"
        )}>
          {React.cloneElement(icon as React.ReactElement, {
            className: cn("w-5 h-5 transition-colors", isActive ? "text-white" : "text-zinc-400")
          })}
        </div>
        <span className="font-mono text-[9px] opacity-30">SERVICE_0{delay}</span>
      </div>

      <div className="mt-12 space-y-3">
        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
          {title}
        </h3>
        <p className={cn(
          "text-xs font-mono uppercase tracking-wider leading-relaxed",
          isActive ? "text-black/70" : "text-zinc-500"
        )}>
          {description}
        </p>
      </div>

      {/* Dynamic Audio Visualizer anchored clean at card bottom baseline */}
      <div className={cn("w-full pt-4 border-t mt-4 transition-colors", isActive ? "border-black/10" : "border-white/5")}>
        <AudioVisualizer barCount={16} className={cn("h-4 w-24 transition-opacity", isActive ? "opacity-100" : "opacity-10")} active={isActive} />
      </div>
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
      icon: <Music2 />,
      title: "Club",
      description: "High-energy DJ sets perfectly curated for clubs and nightlife venues."
    },
    {
      icon: <Glasses />,
      title: "Destination Wedding",
      description: "Memorable A-list wedding performances with personalized playlists."
    },
    {
      icon: <Users />,
      title: "Private Parties",
      description: "Customized music experiences for exclusive and private celebrations."
    },
    {
      icon: <PartyPopper />,
      title: "Corporate Events",
      description: "Professional DJ services for corporate gatherings and product launches."
    },
  ];

  const musicGenres = ['Bollywood', 'Punjabi', 'EDM', 'Techno', 'Hip Hop', 'Commercial', 'House', 'Remixes'];
  const performanceElements = ['SAXOPHONIST', 'PERCUSSIONIST', 'VOCALIST', 'EMCEE', 'DHOL'];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none">

      {/* HARD INTERNAL BACKGROUND LOGISTICS GRID */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* SECTION HEADER TRACK */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-12 mb-20 gap-6">
          <div>
            <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4">// SERVICES</p>
            <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
              WHAT WE DO.
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest max-w-sm leading-relaxed">
            From Bollywood to EDM, Punjabi to Techno, DJ Moral masters every genre to create the perfect vibe for any event.
          </p>
        </div>

        {/* SYSTEM RECAP AUDIO FREQUENCY MONITOR BLOCK */}
        <div className="mb-20 w-full border border-white/10 p-6 bg-[#090909]/60 relative group">
          <span className="absolute top-2 left-4 font-mono text-[8px] text-zinc-600 uppercase tracking-widest">AUDIO VISUALIZER</span>
          <AudioVisualizer barCount={64} className="mx-auto h-24 opacity-30 group-hover:opacity-60 transition-opacity duration-500 w-full" active={true} />
        </div>

        {/* SERVICES SYSTEM INTEGRATION GRID */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
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
            />
          ))}
        </div>

        {/* BRUTALIST SUB-ARRAY ARRAYS LAYER */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-2">

          {/* ELEMENT DECK */}
          <div className="border border-white/10 bg-[#090909] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase mb-4">// PERFORMANCE ADDITIONS</p>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-8">LIVE COLLABORATIVE PERFORMANCES</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {performanceElements.map((element, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest"
                >
                  {element}
                </span>
              ))}
            </div>
          </div>

          {/* GENRE DECK */}
          <div className="border border-white/10 bg-[#090909] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase mb-4">// MUSIC GENRES</p>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">CURATED MUSIC GENRES</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {musicGenres.map((genre, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px] uppercase tracking-widest"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* HIGH CONTRAST SYNDICATE LINKS */}
        <div className="mt-32 border-t border-white/10 pt-16 text-center max-w-xl mx-auto space-y-6">
          <h4 className="font-mono text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">FOLLOW DJ MORAL</h4>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <a
              href="https://www.instagram.com/dj_moral/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#ffffff] text-black p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition duration-300 w-full rounded-none"
            >
              <Instagram className="w-4 h-4 mr-2 stroke-[2.5]" />
              Instagram
            </a>

            <a
              href="https://soundcloud.com/dj_moral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-zinc-900 border border-white/10 text-white p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition duration-300 w-full rounded-none"
            >
              <Music className="w-4 h-4 mr-2" />
              SoundCloud
            </a>

            <a
              href="https://www.youtube.com/@dj_moral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-zinc-900 border border-white/10 text-white p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition duration-300 w-full rounded-none"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;