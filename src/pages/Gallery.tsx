
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "DJ MORAL - Gallery";
    
    // Handle potential routing issues
    if (location.pathname !== '/gallery') {
      console.log('Redirecting to correct gallery path');
      navigate('/gallery', { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20 bg-black">
        <Gallery />
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

export default GalleryPage;
