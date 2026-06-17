
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { songs } from '@/data/songs';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import LoadingScreen from '@/components/LoadingScreen';
import Footer from '@/components/Footer';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Update page title and meta description
    document.title = "DJ Moral – Best DJ in Gujarat & International Performer | Top Indian DJ";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Moral - Gujarat\'s #1 DJ and international music producer. Book India\'s top DJ for weddings, clubs, corporate events & festivals. Professional DJ services across India and worldwide.');
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!showLoading && (
        <>
          {/* SEO-friendly header with structured content */}
          <header>
            <Navbar />
            <Hero />
          </header>

          {/* Main content with semantic HTML */}
          <main className="bg-black relative z-10">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

            {/* About section with structured content */}
            <section aria-label="About DJ Moral">
              <About />
            </section>

            {/* Featured Music Section */}
            <section aria-label="Featured Releases" className="py-24 border-t border-white/10 relative overflow-hidden bg-[#030303]">
              {/* Backplane Grid */}
              <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 mb-12 gap-4">
                  <div>
                    <p className="font-mono text-[9px] text-zinc-500 tracking-[0.4em] uppercase mb-2">// LATEST RELEASES</p>
                    <h2 className="font-sans text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                      FEATURED TRACKS
                    </h2>
                  </div>
                  <Link
                    to="/music"
                    className="group inline-flex items-center gap-2 border border-white/20 hover:border-white px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-all bg-black"
                  >
                    DISCOVER ALL RELEASES <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {songs.slice(0, 2).map((song, index) => (
                    <Link
                      key={song.id}
                      to={`/music?track=${index}`}
                      className="group border border-white/10 bg-[#080808]/90 hover:border-dj-electric/50 hover:bg-white/[0.02] p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden active:scale-[0.99]"
                    >
                      {/* Industrial corner indicator */}
                      <span className="absolute top-3 right-4 font-mono text-[9px] text-zinc-600 tracking-wider">
                        TRACK_0{index + 1}
                      </span>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[9px] bg-white/10 text-white px-2 py-0.5 tracking-wider uppercase">
                            {song.genre}
                          </span>
                          <span className="font-mono text-[9px] text-zinc-500">{song.duration}</span>
                        </div>
                        
                        <div>
                          <h3 className="font-sans text-2xl font-black uppercase tracking-tight text-white group-hover:text-dj-light transition-colors">
                            {song.title}
                          </h3>
                          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mt-1">
                            {song.artist}
                          </p>
                        </div>

                        <p className="font-sans text-xs text-zinc-400 leading-relaxed uppercase tracking-wide">
                          {song.description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                        <span className="font-mono text-[10px] text-zinc-500 group-hover:text-white transition-colors">
                          // SELECT TO PLAY
                        </span>
                        <div className="p-3 bg-dj-electric/10 text-dj-electric border border-dj-electric/20 group-hover:bg-dj-electric group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                          <Play className="w-4 h-4 fill-current stroke-none" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Booking Form section */}
            <section aria-label="Book DJ Moral">
              <BookingForm />
            </section>

            {/* Hidden SEO content for better indexing */}
            <div className="sr-only">
              <h1>DJ Moral - Premier DJ in Gujarat, India</h1>
              <p>Professional DJ services for weddings, corporate events, clubs, and festivals across Gujarat and India. International music producer with years of experience in electronic music, Bollywood, and fusion genres.</p>
              <h2>Services Offered</h2>
              <ul>
                <li>Wedding DJ Services in Gujarat</li>
                <li>Corporate Event DJ</li>
                <li>Club DJ Performances</li>
                <li>Festival DJ Sets</li>
                <li>Music Production</li>
                <li>Sound System Rental</li>
              </ul>
              <h2>Coverage Areas</h2>
              <p>Serving Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, and all major cities in Gujarat. Also available for events across India and international bookings.</p>
            </div>
          </main>

          {/* Footer with structured data */}
          <Footer />

        </>
      )}
    </div>
  );
};

export default Index;
