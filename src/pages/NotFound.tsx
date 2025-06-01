
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // If user is trying to access gallery with wrong path, redirect them
    if (location.pathname.includes('gallery')) {
      console.log('Redirecting gallery access to correct path');
      navigate('/gallery', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/80 mb-4">Oops! Page not found</p>
        <div className="space-y-2">
          <a href="/" className="block text-dj-electric hover:text-dj-pink underline transition-colors">
            Return to Home
          </a>
          <a href="/gallery" className="block text-dj-electric hover:text-dj-pink underline transition-colors">
            Visit Gallery
          </a>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Attempted to access: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
