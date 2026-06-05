import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Instagram, Music, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import AudioVisualizer from './AudioVisualizer';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCallClick = () => {
    window.location.href = 'tel:+918401430191';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:djmoral.booking@gmail.com';
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none">

      {/* 1. INTERNAL HARD BACKGROUND SYSTEM GRID */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* SECTION HEADER TRACK */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-12 mb-20 gap-6">
          <div>
            <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4">// MODULE 05 // ENDPOINT_SYNC</p>
            <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
              CONNECT.
            </h2>
          </div>

          <div className="opacity-40 hidden md:block">
            <AudioVisualizer barCount={16} active={true} />
          </div>
        </div>

        <div
          ref={ref}
          className="max-w-6xl mx-auto relative"
        >
          {/* HARDWARE BRUTALIST GRID PANEL CONTAINER */}
          <div
            className={cn(
              "transition-all duration-1000 transform border border-white/10 bg-[#090909] rounded-none overflow-hidden",
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">

              {/* Left Column: Heavy Contrast Visual Frame */}
              <div className="relative h-full min-h-[400px] md:min-h-[600px] overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>

                {/* Structural Image Rendering */}
                <img
                  src="/lovable-uploads/ef960640-856b-43c0-a57d-9f5f90d7ef49.png"
                  alt="DJ Moral Performing"
                  className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.2] brightness-[0.4] scale-[1.01] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Visual Content Data Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="bg-black/80 border border-white/5 p-6 rounded-none space-y-4">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">// RADAR_COMMUNITY_SYNC</span>

                    {/* High-Contrast Social Link Block */}
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://www.instagram.com/dj_moral/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-[#ffffff] text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-none"
                      >
                        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><rect width='20' height='20' x='2' y='2' rx='5' ry='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' x2='17.51' y1='6.5' y2='6.5'/></svg>" alt="" />
                        <span>Instagram</span>
                      </a>

                      <a
                        href="https://soundcloud.com/dj_moral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-none"
                      >
                        <Music className="w-3.5 h-3.5 text-zinc-400" />
                        <span>SoundCloud</span>
                      </a>

                      <a
                        href="https://youtube.com/@dj_moral?si=GK3WszSphtCm33F8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-none"
                      >
                        <Youtube className="w-3.5 h-3.5 text-zinc-400" />
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Channels & Form Actions */}
              <div className="p-8 md:p-12 bg-[#090909] flex flex-col justify-between relative">

                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white italic mb-12">
                    GET IN TOUCH.
                  </h3>

                  {/* Parameter Track Entries */}
                  <div className="space-y-4">

                    {/* Line 1 */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-widest">COMMS_PHONE</span>
                          <a href="tel:+918401430191" className="text-zinc-300 font-mono text-xs tracking-wider uppercase group-hover:text-white transition-colors">
                            +91 84014 30191
                          </a>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-700 hidden sm:inline">[ CH_01 ]</span>
                    </div>

                    {/* Line 2 */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 group cursor-pointer" onClick={handleEmailClick}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-widest">COMMS_EMAIL</span>
                          <span className="text-zinc-300 font-mono text-xs tracking-wider uppercase group-hover:text-white transition-colors">
                            djmoral.booking@gmail.com
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-700 hidden sm:inline">[ CH_02 ]</span>
                    </div>

                    {/* Line 3 */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-widest">COORDINATES</span>
                          <p className="text-zinc-300 font-mono text-xs tracking-wider uppercase group-hover:text-white transition-colors">
                            Ahmedabad, Gujarat, India
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-700 hidden sm:inline">[ CH_03 ]</span>
                    </div>

                  </div>
                </div>

                {/* Authoritative System Action Button */}
                <div className="mt-12 space-y-3">
                  <Button
                    onClick={handleCallClick}
                    className="w-full h-16 bg-[#ffffff] text-black font-mono text-xs font-black tracking-[0.2em] rounded-none hover:bg-zinc-200 active:scale-[0.99] transition-all uppercase italic"
                  >
                    <Phone className="w-4 h-4 mr-2 stroke-[2.5]" />
                    INITIALIZE SECURE CALL
                  </Button>
                  <p className="font-mono text-[9px] text-zinc-600 tracking-widest text-center uppercase">
                    // Touch to establish direct cellular tracking loop.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;