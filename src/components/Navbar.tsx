import React, { useEffect, useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

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
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 select-none',
        isScrolled
          ? 'py-4 bg-[#050505]/95 backdrop-blur-md border-b border-white/10'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* EXACT ORIGINAL LOGO IMAGE PRESERVED */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/lovable-uploads/d79a8e6f-167c-43c5-a5c6-81983abe8000.png"
            alt="DJ Moral Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:animate-pulse-glow transition-all"
          />
        </Link>

        {/* DESKTOP NAV: HARD TELEMETRY BRUTALIST LINKS */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] font-bold tracking-[0.25em]">
          <Link
            to="/"
            className={cn(
              "transition-colors relative py-1",
              isActive('/') ? "text-white underline underline-offset-4 decoration-2" : "text-zinc-500 hover:text-white"
            )}
          >
            HOME
          </Link>
          <Link
            to="/music"
            className={cn(
              "transition-colors relative py-1",
              isActive('/music') ? "text-white underline underline-offset-4 decoration-2" : "text-zinc-500 hover:text-white"
            )}
          >
            MUSIC
          </Link>
          <Link
            to="/services"
            className={cn(
              "transition-colors relative py-1",
              isActive('/services') ? "text-white underline underline-offset-4 decoration-2" : "text-zinc-500 hover:text-white"
            )}
          >
            SERVICES
          </Link>
          <Link
            to="/gallery"
            className={cn(
              "transition-colors relative py-1",
              isActive('/gallery') ? "text-white underline underline-offset-4 decoration-2" : "text-zinc-500 hover:text-white"
            )}
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            className={cn(
              "transition-colors relative py-1",
              isActive('/contact') ? "text-white underline underline-offset-4 decoration-2" : "text-zinc-500 hover:text-white"
            )}
          >
            CONTACT
          </Link>

          {/* STARK STRETCHED ACTION BUTTON */}
          <a
            href="https://soundcloud.com/dj_moral"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ffffff] text-black px-5 py-2.5 rounded-none font-sans text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            <Play className="w-3 h-3 fill-black stroke-none" /> LISTEN.STREAM
          </a>
        </nav>

        {/* MOBILE MENU SYSTEM TOGGLE */}
        <button
          className="md:hidden text-white p-2 z-50 relative rounded-none border border-transparent active:border-white/20 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN INDUSTRIAL OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-40 pt-32 px-6 flex flex-col justify-between pb-12 animate-none md:hidden">

          {/* Hardware grid simulation layer */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <nav className="flex flex-col items-start gap-6 relative z-10">
            <span className="font-mono text-[9px] text-zinc-600 tracking-[0.4em] mb-4">// NAVIGATION MENU</span>
            <Link
              to="/"
              className={cn(
                "text-4xl font-black tracking-tighter uppercase italic transition-all",
                isActive('/') ? "text-white pl-2 border-l-2 border-white" : "text-zinc-700"
              )}
            >
              HOME
            </Link>
            <Link
              to="/music"
              className={cn(
                "text-4xl font-black tracking-tighter uppercase italic transition-all",
                isActive('/music') ? "text-white pl-2 border-l-2 border-white" : "text-zinc-700"
              )}
            >
              MUSIC
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-4xl font-black tracking-tighter uppercase italic transition-all",
                isActive('/services') ? "text-white pl-2 border-l-2 border-white" : "text-zinc-700"
              )}
            >
              SERVICES
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-4xl font-black tracking-tighter uppercase italic transition-all",
                isActive('/gallery') ? "text-white pl-2 border-l-2 border-white" : "text-zinc-700"
              )}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-4xl font-black tracking-tighter uppercase italic transition-all",
                isActive('/contact') ? "text-white pl-2 border-l-2 border-white" : "text-zinc-700"
              )}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Footer System Blocks */}
          <div className="relative z-10 w-full space-y-4 border-t border-white/10 pt-8">
            <a
              href="https://soundcloud.com/dj_moral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#ffffff] text-black w-full py-4 font-sans text-xs font-black uppercase tracking-widest italic"
            >
              <Play className="w-3 h-3 fill-black stroke-none" /> LISTEN ON SOUNDCLOUD
            </a>
            <div className="flex justify-between items-center font-mono text-[9px] text-zinc-600 tracking-widest uppercase">
              <span>DJ MORAL // AHMEDABAD</span>
              <span>©2026</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;