
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Update page title
    document.title = "DJ MORAL - Music Producer & DJ";
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!showLoading && (
        <>
          <Navbar />
          <Hero />
          
          {/* Content sections with black background */}
          <div className="bg-black relative z-10">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
            <About />
          </div>
          
          {/* Footer */}
          <footer className="py-8 text-center text-white/50 text-sm bg-black border-t border-white/10">
            <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} DJ MORAL. All rights reserved.</p>
              <p className="mt-2 text-xs text-white/30">Experience the Ultimate Mix</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
