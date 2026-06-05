import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact DJ Moral - Book Best DJ in Gujarat | DJ Booking";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact DJ Moral for bookings - Gujarat\'s top DJ available for weddings, corporate events, clubs. Get quote for professional DJ services across India.');
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white selection:text-black antialiased relative">
      <Navbar />

      {/* PERSISTENT STRUCTURAL BACKPLANE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <main className="pt-24 bg-transparent relative z-10">
        <Contact />
      </main>

      {/* HARD STARK SYSTEM FOOTER */}
      <Footer />
    </div>
  );
};

export default ContactPage;