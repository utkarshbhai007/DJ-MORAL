
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "DJ MORAL - Services";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20 bg-black">
        <Services />
      </div>
      
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

export default ServicesPage;
