
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact DJ Moral - Book Best DJ in Gujarat | DJ Booking";
    
    // Add meta description for contact page
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact DJ Moral for bookings - Gujarat\'s top DJ available for weddings, corporate events, clubs. Get quote for professional DJ services across India.');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 bg-black">
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-white/50 text-sm bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} DJ MORAL. All rights reserved.</p>
          <p className="mt-2 text-xs text-white/30">Experience the Ultimate Mix</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
