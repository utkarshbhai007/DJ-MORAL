import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "DJ Moral Gallery - Live Performance Photos & Videos | Gujarat DJ";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'View DJ Moral\'s live performance gallery - Photos and videos from weddings, corporate events, clubs, and festivals across Gujarat and India.');

    if (location.pathname !== '/gallery') {
      console.log('Redirecting to correct gallery path');
      navigate('/gallery', { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white selection:text-black antialiased relative">
      <Navbar />

      {/* PERSISTENT INDUSTRIAL COMPONENT BACKPLANE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <main className="pt-24 bg-transparent relative z-10">
        <Gallery />
      </main>

      {/* SYSTEM ARCHIVE TRACK FOOTER */}
      <Footer />
    </div>
  );
};

export default GalleryPage;