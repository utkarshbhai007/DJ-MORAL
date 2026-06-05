import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headphones, Calendar, Globe, Users, Instagram, Music } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';
import { cn } from '@/lib/utils';

/* ── animated counter hook ── */
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const stats = [
  {
    id: 'EXP_01',
    icon: Calendar,
    value: 8,
    suffix: '+',
    label: 'Years',
    sub: 'Professional Experience',
    accent: 'from-white/20 to-white/5',
    glow: 'shadow-[0_0_40px_rgba(255,255,255,0.06)]',
  },
  {
    id: 'LOC_02',
    icon: Globe,
    value: null,
    textValue: 'GLOBAL',
    sub: 'India & Internationally',
    accent: 'from-white/20 to-white/5',
    glow: 'shadow-[0_0_40px_rgba(255,255,255,0.06)]',
  },
  {
    id: 'VEN_03',
    icon: Users,
    value: null,
    textValue: 'PREMIUM',
    sub: 'Celebrity & Destination',
    accent: 'from-white/20 to-white/5',
    glow: 'shadow-[0_0_40px_rgba(255,255,255,0.06)]',
  },
  {
    id: 'MAT_04',
    icon: Headphones,
    value: 100,
    suffix: '+',
    label: 'Shows',
    sub: 'Performed Worldwide',
    accent: 'from-white/20 to-white/5',
    glow: 'shadow-[0_0_40px_rgba(255,255,255,0.06)]',
  },
];

interface StatCardProps {
  stat: typeof stats[number];
  index: number;
  inView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;
  const count = useCounter(stat.value ?? 0, 1400, inView && stat.value !== null);

  return (
    <div
      className={cn(
        'relative group flex flex-col justify-between p-6 sm:p-8 h-[200px] sm:h-[230px] overflow-hidden cursor-crosshair transition-all duration-500',
        'bg-[#0a0a0a] border border-white/[0.07]',
        hovered
          ? 'border-white/30 bg-[#111]'
          : '',
        stat.glow,
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* animated gradient top-edge accent */}
      <div
        className={cn(
          'absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-white via-white/60 to-transparent transition-all duration-700',
          hovered ? 'w-full' : 'w-0',
        )}
      />

      {/* subtle inner glow on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-white/[0.03] opacity-0 transition-opacity duration-500',
          hovered ? 'opacity-100' : '',
        )}
      />

      {/* top row */}
      <div className="flex justify-between items-start relative z-10">
        <div
          className={cn(
            'p-2 border transition-all duration-500',
            hovered
              ? 'border-white/30 bg-white text-black'
              : 'border-white/10 bg-white/5 text-zinc-500',
          )}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <span
          className={cn(
            'font-mono text-[8px] tracking-[0.3em] uppercase transition-colors duration-300',
            hovered ? 'text-white/50' : 'text-zinc-700',
          )}
        >
          {stat.id}
        </span>
      </div>

      {/* bottom value */}
      <div className="relative z-10">
        {stat.value !== null ? (
          <h3
            className={cn(
              'font-black tracking-tighter uppercase transition-colors duration-300 leading-none',
              'text-4xl sm:text-5xl',
              hovered ? 'text-white' : 'text-white/90',
            )}
          >
            {count}
            {stat.suffix}
            {stat.label && (
              <span className="text-lg sm:text-xl font-mono font-normal ml-1 text-zinc-400">
                {stat.label}
              </span>
            )}
          </h3>
        ) : (
          <h3
            className={cn(
              'font-black tracking-tighter uppercase transition-colors duration-300 leading-none',
              'text-3xl sm:text-4xl',
              hovered ? 'text-white' : 'text-white/90',
            )}
          >
            {stat.textValue}
          </h3>
        )}
        <p
          className={cn(
            'font-mono text-[9px] sm:text-[10px] uppercase tracking-widest mt-2 transition-colors duration-300',
            hovered ? 'text-zinc-300' : 'text-zinc-600',
          )}
        >
          {stat.sub}
        </p>
      </div>

      {/* corner tick marks */}
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/10 transition-colors duration-300 group-hover:border-white/30" />
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/10 transition-colors duration-300 group-hover:border-white/30" />
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      className="py-28 md:py-36 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none"
    >
      {/* grid backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* header */}
        <div className="w-full flex flex-col items-start border-b border-white/10 pb-10 mb-16 relative">
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-3">// INTEL FILE 01</p>
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            THE ARCHITECT.
          </h2>
          <div className="absolute right-0 bottom-4 opacity-20 hidden md:block">
            <AudioVisualizer barCount={12} active={true} />
          </div>
        </div>

        {/* main grid */}
        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start transition-all duration-1000 transform',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          )}
        >
          {/* stat cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2">
            {stats.map((s, i) => (
              <StatCard key={s.id} stat={s} index={i} inView={inView} />
            ))}
          </div>

          {/* bio panel */}
          <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-8 md:p-12 relative">
            <span className="absolute top-4 right-4 font-mono text-[9px] text-zinc-600">MANIFESTO // LOG</span>

            <div className="space-y-5 text-zinc-400 font-sans text-sm md:text-[15px] leading-relaxed font-light">
              <p>
                <span className="text-white font-bold tracking-tight">DJ Moral</span> stands out as one of the most
                promising and dynamic DJs hailing from Gujarat, India. Renowned for his electrifying sets and magnetic
                stage presence, he offers more than just a performance — he delivers an unforgettable experience.
                Whether it's a high-end club or a luxury destination wedding, DJ Moral knows exactly how to make the
                night come alive.
              </p>
              <p>
                His journey began at the age of 19, when he trained in DJing at the prestigious Snixx Academy. Fueled
                by a deep passion for music, he further honed his craft by studying music production at Singapore
                Raffles Music College. This strong foundation has enabled him to develop a versatile, signature style
                that resonates with diverse audiences.
              </p>
              <p>
                With a growing presence in both national and international scenes, DJ Moral has performed in top cities
                across India and rocked stages abroad — including high-profile weddings of the elite such as
                Esha Kansara & Siddharth Amit Bhavsar, Navdeep Saini & Swati Asthana, and many more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-10 pt-8 border-t border-white/10">
              <a
                href="https://www.instagram.com/dj_moral/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 active:scale-95 transition-all duration-200 w-full"
              >
                <Instagram className="w-4 h-4 stroke-[2.5] shrink-0" />
                Instagram
              </a>
              <a
                href="https://soundcloud.com/dj_moral"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-transparent border border-white/15 text-white px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-white/40 hover:bg-white/5 active:scale-95 transition-all duration-200 w-full"
              >
                <Music className="w-4 h-4 shrink-0" />
                Soundcloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;