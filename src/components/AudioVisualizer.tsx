
import React, { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioVisualizer = ({ className, barCount = 14, active = true }: AudioVisualizerProps) => {
  const barsRef = useRef<HTMLDivElement>(null);

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
    <div ref={barsRef} className={`audio-visualizer flex items-end justify-center h-16 ${className}`}>
      {[...Array(barCount)].map((_, i) => (
        <div
          key={i}
          className={`bar visualizer-bar h-full transition-all duration-300 ${
            active ? 'opacity-100' : 'opacity-30'
          }`}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
