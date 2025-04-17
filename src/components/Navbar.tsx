
import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Instagram, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 glass-morphism' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center animate-pulse-glow">
            <Music className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-glow">DJ MORAL</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/80 hover:text-white hover:text-glow transition-all">About</a>
          <a href="#services" className="text-white/80 hover:text-white hover:text-glow transition-all">Services</a>
          <a href="#gallery" className="text-white/80 hover:text-white hover:text-glow transition-all">Gallery</a>
          <a href="#contact" className="text-white/80 hover:text-white hover:text-glow transition-all">Contact</a>
          <a 
            href="https://soundcloud.com/dj_moral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-dj-electric to-dj-pink px-4 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-dj-purple/30 transition-all"
          >
            <Play className="w-4 h-4" /> Listen
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 pt-20 neo-blur animate-fade-in">
          <nav className="flex flex-col items-center gap-8 p-8">
            <a 
              href="#about" 
              className="text-white text-2xl font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white text-2xl font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#gallery" 
              className="text-white text-2xl font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-white text-2xl font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center"
              >
                <Music className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/dj_moral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
