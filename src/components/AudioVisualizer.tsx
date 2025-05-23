
import React, { useEffect, useRef, useState } from 'react';

interface AudioVisualizerProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioVisualizer = ({ className, barCount = 14, active = true }: AudioVisualizerProps) => {
  const barsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const bars = barsRef.current?.children;
    if (!bars) return;
    
    for (let i = 0; i < bars.length; i++) {
      const bar = bars[i] as HTMLElement;
      const delay = i * 0.1;
      const duration = 0.6 + Math.random() * 0.6;
      
      bar.style.setProperty('--delay', `${delay}s`);
      bar.style.setProperty('--speed', `${duration}s`);
      bar.style.animationPlayState = active ? 'running' : 'paused';
    }
  }, [barCount, active]);

  return (
    <div 
      ref={barsRef} 
      className={`audio-visualizer flex items-end justify-center h-16 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {[...Array(barCount)].map((_, i) => (
        <div
          key={i}
          className={`bar visualizer-bar h-full transition-all duration-300 ${
            active ? 'opacity-100' : 'opacity-30'
          } ${isHovered ? 'scale-y-110' : ''}`}
          style={{
            width: isHovered ? '3px' : '2px',
            marginLeft: isHovered ? '3px' : '2px',
            marginRight: isHovered ? '3px' : '2px',
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
