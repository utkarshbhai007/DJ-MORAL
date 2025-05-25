
import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Instagram, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center group-hover:animate-pulse-glow transition-all">
            <Music className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-glow group-hover:text-gradient transition-all">DJ MORAL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={cn(
              "text-white/80 hover:text-gradient transition-all relative group",
              isActive('/') && "text-gradient"
            )}
          >
            HOME
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-dj-electric to-dj-pink transition-all duration-300",
              isActive('/') ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "text-white/80 hover:text-gradient transition-all relative group",
              isActive('/services') && "text-gradient"
            )}
          >
            SERVICES
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-dj-electric to-dj-pink transition-all duration-300",
              isActive('/services') ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "text-white/80 hover:text-gradient transition-all relative group",
              isActive('/contact') && "text-gradient"
            )}
          >
            CONTACT
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-dj-electric to-dj-pink transition-all duration-300",
              isActive('/contact') ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          <a 
            href="https://soundcloud.com/dj_moral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-dj-electric to-dj-pink px-4 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-dj-purple/30 transition-all group"
          >
            <Play className="w-4 h-4 group-hover:animate-pulse" /> LISTEN
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col items-center gap-8 p-8">
            <Link 
              to="/" 
              className="text-white text-2xl font-medium hover:text-gradient" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className="text-white text-2xl font-medium hover:text-gradient" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-2xl font-medium hover:text-gradient" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <div className="flex gap-6 mt-8">
              <a 
                href="https://soundcloud.com/dj_moral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Music className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/dj_moral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-dj-electric to-dj-pink flex items-center justify-center hover:scale-110 transition-transform"
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
