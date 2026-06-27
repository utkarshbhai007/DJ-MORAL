import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headphones, Calendar, Globe, Users, Instagram, Music, Volume2, Sliders, Zap, Compass, Activity } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';
import { cn } from '@/lib/utils';

// Web Audio API Synthesizer Context
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Synth sounds using Web Audio API
const playKick = (ctx: AudioContext) => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.setValueAtTime(150, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
  
  gain.gain.setValueAtTime(1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.3);
};

const playSnare = (ctx: AudioContext) => {
  const bufferSize = ctx.sampleRate * 0.2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 1000;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.5, ctx.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, ctx.currentTime);
  oscGain.gain.setValueAtTime(0.5, ctx.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);

  noise.start(ctx.currentTime);
  osc.start(ctx.currentTime);
  noise.stop(ctx.currentTime + 0.18);
  osc.stop(ctx.currentTime + 0.08);
};

const playHiHat = (ctx: AudioContext) => {
  const bufferSize = ctx.sampleRate * 0.04;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 8000;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(ctx.currentTime);
  source.stop(ctx.currentTime + 0.04);
};

const playScratch = (ctx: AudioContext) => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1300;
  filter.Q.value = 4;

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.setValueAtTime(120, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(750, ctx.currentTime + 0.08);
  osc.frequency.linearRampToValueAtTime(180, ctx.currentTime + 0.16);
  osc.frequency.linearRampToValueAtTime(550, ctx.currentTime + 0.22);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.23);
};

const playRiser = (ctx: AudioContext) => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(180, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.5);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.setValueAtTime(130, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(650, ctx.currentTime + 0.5);

  gain.gain.setValueAtTime(0.01, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.5);
};

const playLaser = (ctx: AudioContext) => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.setValueAtTime(1500, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.16);

  gain.gain.setValueAtTime(0.35, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.16);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.16);
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [activeTab, setActiveTab] = useState<'profile' | 'sampler'>('profile');
  const [waveActivity, setWaveActivity] = useState(0);
  const [lastTriggeredPad, setLastTriggeredPad] = useState<number | null>(null);
  
  // States for visualizer cards
  const [vuLevels, setVuLevels] = useState<{l: number[], r: number[]}>({
    l: [0, 0, 0, 0, 0, 0, 0, 0],
    r: [0, 0, 0, 0, 0, 0, 0, 0]
  });

  // Track hovers
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // VU Meter live ticks
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      const genLevels = (isHighHovered: boolean) => {
        // If hovered, give higher levels
        const threshold = isHighHovered ? 0.25 : 0.45;
        return Array.from({ length: 8 }, () => Math.random() > threshold ? 1 : 0);
      };
      setVuLevels({
        l: genLevels(hoveredCard === 2),
        r: genLevels(hoveredCard === 2)
      });
    }, 100);
    return () => clearInterval(interval);
  }, [inView, hoveredCard]);

  // Decays the oscilloscope wave activity
  useEffect(() => {
    if (waveActivity <= 0) return;
    const interval = setInterval(() => {
      setWaveActivity((prev) => Math.max(0, prev - 0.35));
    }, 16);
    return () => clearInterval(interval);
  }, [waveActivity]);

  // Generates oscillating SVG wave path
  const generateWavePath = () => {
    const points = 60;
    const pathParts = [];
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * 100;
      const amp = waveActivity > 0 ? waveActivity * 4.5 : 1.2;
      const freq = waveActivity > 0 ? 10 : 3;
      const angle = (i / points) * Math.PI * freq + (Date.now() / 120);
      const envelope = Math.sin((i / points) * Math.PI); // Dampen edges
      const y = 50 + Math.sin(angle) * amp * envelope * (waveActivity > 0 ? (Math.random() * 0.35 + 0.8) : 1);
      pathParts.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return pathParts.join(' ');
  };

  const handlePadClick = (index: number, playFn: (ctx: AudioContext) => void) => {
    try {
      const ctx = getAudioContext();
      playFn(ctx);
      setWaveActivity(10);
      setLastTriggeredPad(index);
      setTimeout(() => setLastTriggeredPad(null), 150);
    } catch (e) {
      console.warn("Web Audio API error:", e);
    }
  };

  const samplerPads = [
    { id: 'PAD_01', name: 'KICK BEAT', shortcut: 'A-1', play: playKick, color: 'text-dj-blue hover:text-white border-dj-blue/40 hover:border-dj-blue bg-dj-blue/5 hover:bg-dj-blue/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]' },
    { id: 'PAD_02', name: 'SNARE SNAP', shortcut: 'A-2', play: playSnare, color: 'text-dj-pink hover:text-white border-dj-pink/40 hover:border-dj-pink bg-dj-pink/5 hover:bg-dj-pink/20 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]' },
    { id: 'PAD_03', name: 'HI-HAT CHIP', shortcut: 'B-1', play: playHiHat, color: 'text-emerald-400 hover:text-white border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' },
    { id: 'PAD_04', name: 'DJ SCRATCH', shortcut: 'B-2', play: playScratch, color: 'text-amber-400 hover:text-white border-amber-500/30 hover:border-amber-400 bg-amber-500/5 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]' },
    { id: 'PAD_05', name: 'SYNTH RISER', shortcut: 'C-1', play: playRiser, color: 'text-dj-light hover:text-white border-dj-light/30 hover:border-dj-light bg-dj-light/5 hover:bg-dj-light/20 hover:shadow-[0_0_20px_rgba(214,188,250,0.3)]' },
    { id: 'PAD_06', name: 'LASER FX', shortcut: 'C-2', play: playLaser, color: 'text-purple-400 hover:text-white border-purple-500/30 hover:border-purple-400 bg-purple-500/5 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
  ];

  return (
    <section
      id="about"
      className="py-28 md:py-36 relative overflow-hidden bg-[#020202] border-t border-white/[0.06] select-none"
    >
      {/* grid backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-dj-purple/[0.015] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* header */}
        <div className="w-full flex flex-col items-start border-b border-white/[0.08] pb-10 mb-16 relative">
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            ARTIST.
          </h2>
          <div className="absolute right-0 bottom-4 opacity-30 hidden md:block">
            <AudioVisualizer barCount={16} active={true} />
          </div>
        </div>

        {/* main grid */}
        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-1000 transform',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          )}
        >
          {/* STAT DECK (ANIMATED TEXT) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-10">
            <div className="group transition-all duration-500 hover:translate-x-4">
              <h3 className="font-sans text-5xl md:text-6xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                8+ <span className="text-xl md:text-2xl text-dj-blue">Years</span>
              </h3>
              <p className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2">Professional Experience</p>
            </div>
            
            <div className="group transition-all duration-500 hover:translate-x-4">
              <h3 className="font-sans text-5xl md:text-6xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                GLOBAL
              </h3>
              <p className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2">India & Internationally</p>
            </div>

            <div className="group transition-all duration-500 hover:translate-x-4">
              <h3 className="font-sans text-4xl md:text-5xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                DYNAMICS
              </h3>
              <p className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2">Premium & Celebrity Shows</p>
            </div>

            <div className="group transition-all duration-500 hover:translate-x-4">
              <h3 className="font-sans text-5xl md:text-6xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                1000+ <span className="text-xl md:text-2xl text-dj-pink">Shows</span>
              </h3>
              <p className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2">Performed Worldwide</p>
            </div>
          </div>

          {/* CYBER TERMINAL TAB COMPONENT (Bio & Sampler) */}
          <div className="lg:col-span-7 bg-[#050505] border border-white/[0.08] p-6 md:p-8 relative flex flex-col justify-between min-h-[496px] overflow-hidden">
            {/* Holographic scanner top layer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_97%,rgba(139,92,246,0.03)_97%)] bg-[size:100%_25px] pointer-events-none" />

            {/* Header / Tabs */}
            <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6 relative z-10">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={cn(
                    "px-4 py-2 font-mono text-xs font-bold tracking-widest border transition-all duration-300",
                    activeTab === 'profile' 
                      ? "border-dj-electric text-white bg-dj-electric/5 shadow-[0_0_15px_rgba(139,92,246,0.1)]" 
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  BIOGRAPHY
                </button>
                <button
                  onClick={() => setActiveTab('sampler')}
                  className={cn(
                    "px-4 py-2 font-mono text-xs font-bold tracking-widest border transition-all duration-300 flex items-center gap-2",
                    activeTab === 'sampler' 
                      ? "border-dj-pink text-white bg-dj-pink/5 shadow-[0_0_15px_rgba(217,70,239,0.1)]" 
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  <Activity className={cn("w-3.5 h-3.5", activeTab === 'sampler' && "text-dj-pink animate-pulse")} />
                  LIVE SAMPLER
                </button>
              </div>
              <span className="font-mono text-[9px] text-zinc-600 tracking-wider hidden sm:block">STATUS: ONLINE</span>
            </div>

            {/* TAB CONTENT: PROFILE LOG */}
            {activeTab === 'profile' && (
              <div className="space-y-6 text-zinc-400 font-sans text-sm leading-relaxed font-light relative z-10 flex-grow">
                {/* Horizontal scanline laser */}
                <div className="absolute left-0 right-0 h-[1.5px] bg-dj-electric/25 shadow-[0_0_8px_rgba(139,92,246,0.6)] pointer-events-none animate-[bounce_6s_infinite_linear]" />

                <p>
                  <span className="text-white font-bold tracking-tight bg-white/5 border border-white/10 px-1.5 py-0.5 mr-1 font-mono text-xs uppercase">BIO OVERVIEW</span>{' '}
                  <span className="text-white font-black tracking-tight">DJ Moral</span> stands out as one of the most
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
            )}

            {/* TAB CONTENT: LIVE SAMPLER */}
            {activeTab === 'sampler' && (
              <div className="flex-grow flex flex-col justify-between relative z-10 animate-fade-in">
                
                {/* Oscilloscope Visualizer Box */}
                <div className="bg-black/60 border border-white/[0.06] p-4 h-24 mb-6 rounded flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500 z-10">
                    <span>AUDIO_WAVEFORM_STREAM</span>
                    <span className="text-dj-pink animate-pulse">ACTIVE</span>
                  </div>
                  
                  {/* SVG Wave */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d={generateWavePath()} 
                      fill="transparent" 
                      stroke="url(#synthGradient)" 
                      strokeWidth="1.2"
                      className="transition-all duration-75"
                    />
                    <defs>
                      <linearGradient id="synthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#D946EF" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="flex justify-between items-center text-[7px] font-mono text-zinc-600 z-10 mt-auto">
                    <span>RANGE: 20Hz - 22kHz</span>
                    <span>GAIN: {waveActivity > 0 ? "PEAK" : "RESTING"}</span>
                  </div>
                </div>

                {/* MPC Pad Grid */}
                <div className="grid grid-cols-3 gap-2 flex-grow mb-6">
                  {samplerPads.map((pad, idx) => (
                    <button
                      key={pad.id}
                      onClick={() => handlePadClick(idx, pad.play)}
                      className={cn(
                        "h-[76px] sm:h-[86px] rounded border p-3 flex flex-col justify-between text-left transition-all duration-150 active:scale-95",
                        pad.color,
                        lastTriggeredPad === idx && "scale-95 bg-white text-black border-white shadow-[0_0_25px_#fff]"
                      )}
                    >
                      <div className="flex justify-between items-start w-full text-[8px] font-mono text-zinc-500">
                        <span>{pad.id}</span>
                        <span>{pad.shortcut}</span>
                      </div>
                      <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider leading-none mt-2">{pad.name}</span>
                    </button>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-zinc-500 text-center mb-1 flex items-center justify-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  TAP PADS ABOVE TO SYNTHESIZE LIVE SOUNDS & EFFECTS
                </div>

              </div>
            )}

            {/* Footer buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-8 pt-6 border-t border-white/[0.08] relative z-10">
              <a
                href="https://www.instagram.com/dj_moral/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 border border-white/10 text-zinc-300 hover:text-white px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-white/30 hover:bg-white/5 active:scale-95 transition-all duration-200 w-full"
              >
                <Instagram className="w-4 h-4 stroke-[2.5] shrink-0 text-dj-pink" />
                Instagram
              </a>
              <a
                href="https://soundcloud.com/dj_moral"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-transparent border border-white/10 text-zinc-300 hover:text-white px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-white/30 hover:bg-white/5 active:scale-95 transition-all duration-200 w-full"
              >
                <Music className="w-4 h-4 shrink-0 text-dj-blue" />
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