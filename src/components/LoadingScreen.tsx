import React, { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnd = () => {
    setIsVisible(false);
    setTimeout(onLoadingComplete, 600);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fallbackTimer = setTimeout(handleEnd, 8000);
    video.play().catch(() => handleEnd());

    return () => clearTimeout(fallbackTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 9999;
          background: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.7s ease;
        }
        .loading-video {
          width: 100%;
          height: 100%;
          object-fit: contain;   /* show FULL video — no cropping */
          object-position: center center;
          display: block;
          background: #000;
        }
      `}</style>

      <div
        className="loading-overlay"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <video
          ref={videoRef}
          className="loading-video"
          src="/loading.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={handleEnd}
        />
      </div>
    </>
  );
};

export default LoadingScreen;