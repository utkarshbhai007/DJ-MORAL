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

    if (location.pathname.includes('gallery')) {
      console.log('Redirecting gallery access to correct path');
      navigate('/gallery', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-[#030303] text-white select-none relative">

      {/* 1. INTERNAL HARD HARDWARE MATRIX GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* 2. INDUSTRIAL ALIGNMENT INTERFACE PANEL */}
      <div className="relative z-10 w-full max-w-xl border border-white/10 bg-[#090909] p-8 md:p-12 rounded-none flex flex-col items-start">

        {/* System telemetry headers */}
        <span className="absolute top-3 left-4 font-mono text-[8px] text-red-500 tracking-[0.4em] uppercase font-bold">// PAGE NOT FOUND</span>
        <span className="absolute bottom-3 right-4 font-mono text-[8px] text-zinc-700">CODE::ERR_404</span>

        {/* Macro Brutalist Header Error Output */}
        <h1 className="font-sans text-7xl md:text-[6vw] font-black tracking-tighter leading-none text-white italic uppercase select-none mb-4">
          ERROR 404.
        </h1>

        <p className="font-mono text-xs uppercase text-zinc-400 tracking-widest leading-relaxed mb-12 border-b border-white/5 pb-4 w-full">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* STARK HIGH-CONTRAST DATA ACTION LINKS */}
        <div className="space-y-2 w-full font-mono text-[11px] font-bold tracking-widest uppercase">
          <a
            href="/"
            className="flex items-center justify-between border border-white/10 bg-[#ffffff] text-black p-4 w-full hover:bg-zinc-200 transition-colors rounded-none"
          >
            <span>RETURN TO HOME</span>
            <span>[ HOME ]</span>
          </a>

          <a
            href="/gallery"
            className="flex items-center justify-between border border-white/10 bg-zinc-900 text-white p-4 w-full hover:bg-zinc-800 transition-colors rounded-none"
          >
            <span>VIEW GALLERY</span>
            <span>[ GALLERY ]</span>
          </a>
        </div>

        {/* Terminal diagnostic metrics track */}
        <div className="mt-12 pt-6 border-t border-white/5 w-full font-mono text-[9px] text-zinc-600 tracking-wider flex justify-between uppercase">
          <span>PATH // {location.pathname}</span>
          <span className="text-red-500/70">STATUS: FAILED</span>
        </div>

      </div>

    </div>
  );
};

export default NotFound;