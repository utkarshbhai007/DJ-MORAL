
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "DJ Moral - Music Producer & DJ";
  }, []);

  return (
    <div className="min-h-screen bg-dj-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-white/50 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} DJ Moral. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
