
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "DJ Services - Wedding DJ, Corporate Events | DJ Moral Gujarat";

    // Add meta description for services page
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional DJ services by DJ Moral - Wedding DJ, Corporate Events, Club Nights, Festival Performances in Gujarat. Premium sound systems and lighting available.');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 bg-black">
        <Services />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
