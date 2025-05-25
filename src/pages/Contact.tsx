
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = "DJ MORAL - Contact";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20 bg-black">
        <Contact />
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

export default ContactPage;
