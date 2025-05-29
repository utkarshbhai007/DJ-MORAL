
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
    }, 2000); // Show for 2 seconds (enough for one spin)

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative">
        {/* Main spinning logo - single spin animation */}
        <img 
          src="/lovable-uploads/44b542b7-2988-42c7-9a79-3130c8fff5e9.png"
          alt="DJ Moral Logo"
          className="w-32 h-32 object-contain"
          style={{ 
            animation: 'spin 1.5s ease-out 1',
            animationFillMode: 'forwards'
          }}
        />
        
        {/* Glowing effect */}
        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-dj-electric/30 to-dj-pink/30 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-lg tracking-wider animate-pulse">LOADING...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
