import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Music from '@/components/Music';
import Footer from '@/components/Footer';

const MusicPage = () => {
  useEffect(() => {
    document.title = "DJ Moral Music - Listen to Custom Remixes & Mixtapes | Gujarat DJ";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Stream custom remixes and sets by DJ Moral. Listen to exclusive Bollywood mashups, Punjabi beats, techno grooves and progressive electronic club anthems.');
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white selection:text-black antialiased relative">
      <Navbar />

      {/* SYSTEM BACKPLANE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <main className="pt-24 bg-transparent relative z-10">
        <Music />
      </main>

      <Footer />
    </div>
  );
};

export default MusicPage;
