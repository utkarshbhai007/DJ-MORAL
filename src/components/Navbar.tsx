
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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Increased threshold for better mobile behavior
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
          ? 'py-2 md:py-3 bg-black/90 backdrop-blur-lg border-b border-white/10' 
          : 'py-4 md:py-6 bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/lovable-uploads/d79a8e6f-167c-43c5-a5c6-81983abe8000.png"
            alt="DJ Moral Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:animate-pulse-glow transition-all"
          />
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
            to="/gallery" 
            className={cn(
              "text-white/80 hover:text-gradient transition-all relative group",
              isActive('/gallery') && "text-gradient"
            )}
          >
            GALLERY
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-dj-electric to-dj-pink transition-all duration-300",
              isActive('/gallery') ? "w-full" : "w-0 group-hover:w-full"
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
          className="md:hidden text-white p-2 z-50 relative" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20 backdrop-blur-xl animate-fade-in md:hidden">
          <nav className="flex flex-col items-center gap-8 p-8 h-full overflow-y-auto">
            <Link 
              to="/" 
              className={cn(
                "text-white text-2xl font-medium hover:text-gradient transition-all",
                isActive('/') && "text-gradient"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className={cn(
                "text-white text-2xl font-medium hover:text-gradient transition-all",
                isActive('/services') && "text-gradient"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/gallery" 
              className={cn(
                "text-white text-2xl font-medium hover:text-gradient transition-all",
                isActive('/gallery') && "text-gradient"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "text-white text-2xl font-medium hover:text-gradient transition-all",
                isActive('/contact') && "text-gradient"
              )}
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
