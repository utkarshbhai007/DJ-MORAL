
import React, { useEffect, useRef, useState } from 'react';

interface AudioVisualizerProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioVisualizer = ({ className, barCount = 14, active = true }: AudioVisualizerProps) => {
  const barsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // Generate random heights for bars
    const newHeights = Array.from({ length: barCount }, () => 
      Math.floor(Math.random() * 80) + 20
    );
    setHeights(newHeights);
    
    // Animation setup for bars
    const bars = barsRef.current?.children;
    if (!bars) return;
    
    for (let i = 0; i < bars.length; i++) {
      const bar = bars[i] as HTMLElement;
      const delay = i * 0.05;
      const duration = 0.6 + Math.random() * 0.8;
      
      bar.style.setProperty('--delay', `${delay}s`);
      bar.style.setProperty('--speed', `${duration}s`);
      bar.style.animationPlayState = active ? 'running' : 'paused';
      
      // Set initial height when not active
      if (!active) {
        bar.style.height = '15%';
      } else {
        bar.style.height = '';
      }
    }
  }, [barCount, active]);

  return (
    <div 
      ref={barsRef} 
      className={`audio-visualizer flex items-end justify-center h-24 ${className} transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {heights.map((height, i) => (
        <div
          key={i}
          className={`bar visualizer-bar transition-all duration-300 ${
            active ? 'opacity-100' : 'opacity-40'
          } ${isHovered ? 'scale-y-110' : ''}`}
          style={{
            width: isHovered ? '4px' : '3px',
            marginLeft: isHovered ? '3px' : '2px',
            marginRight: isHovered ? '3px' : '2px',
            backgroundColor: active ? `rgba(${139 + i % 50}, ${92 - i % 40}, ${246 - i % 50}, ${active ? 0.9 : 0.5})` : '',
            height: active ? undefined : '15%',
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
