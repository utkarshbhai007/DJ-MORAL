
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Wait for fade-out animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative">
        {/* Main spinning logo */}
        <img 
          src="/lovable-uploads/992718ef-f41d-4440-8401-9113fc6f0aaf.png"
          alt="DJ Moral Logo"
          className="w-32 h-32 object-contain animate-spin"
          style={{ animationDuration: '2s' }}
        />
        
        {/* Glowing effect */}
        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-dj-electric/30 to-dj-pink/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* Outer ring */}
        <div className="absolute -inset-8 border-2 border-dj-electric/20 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-lg tracking-wider animate-pulse">LOADING...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
