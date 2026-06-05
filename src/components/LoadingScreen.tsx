import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [bootStep, setBootStep] = useState(0);

  // Simulated hardware boot sequence strings
  const systemLogs = [
    "CORE::CORE_SYS_INIT_SEQUENCE",
    "OPTICS::LOADING_PHOTON_MATRIX",
    "SONIC::TUNING_OSCILLOSCOPE_32_CH",
    "NETWORK::SYNCING_AHD_COORDINATES",
    "STATUS::SYSTEM_READY_FOR_EXECUTION"
  ];

  useEffect(() => {
    // Dynamic text sequence loop matching the brutalist theme
    const logInterval = setInterval(() => {
      setBootStep((prev) => (prev < systemLogs.length - 1 ? prev + 1 : prev));
    }, 350);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Smooth alpha block fade out
    }, 2000);

    return () => {
      clearInterval(logInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center transition-opacity duration-500 select-none ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* INDUSTRIAL GRID COMPONENT BACKPLATE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* CORE FRAME DESIGN BLOCK */}
      <div className="relative p-12 border border-white/5 bg-[#070707] min-w-[280px] sm:min-w-[340px] flex items-center justify-center">
        <span className="absolute top-2 left-3 font-mono text-[8px] text-zinc-600 tracking-widest uppercase">SYS_INITIALIZE</span>
        <span className="absolute bottom-2 right-3 font-mono text-[8px] text-zinc-700">M_CORE_V2.0</span>

        {/* LOGO FRAME (STAYED CONSTANT) */}
        <div className="relative z-10">
          <img
            src="/lovable-uploads/44b542b7-2988-42c7-9a79-3130c8fff5e9.png"
            alt="DJ Moral Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain filter grayscale contrast-[1.2]"
            style={{
              animation: 'spin 1.5s ease-out 1',
              animationFillMode: 'forwards'
            }}
          />
        </div>
      </div>

      {/* BRUTALIST TELEMETRY DATA FEED TEXT */}
      <div className="absolute bottom-24 left-6 right-6 flex flex-col items-center gap-2">
        <div className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-none animate-ping"></span>
          {systemLogs[bootStep]}
        </div>

        {/* Fine Technical Load Line */}
        <div className="w-48 h-[1px] bg-zinc-900 mt-4 relative overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((bootStep + 1) / systemLogs.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;