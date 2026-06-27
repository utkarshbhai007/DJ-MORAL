import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, AlertTriangle, Disc } from 'lucide-react';
import { Song, songs } from '@/data/songs';
import { cn } from '@/lib/utils';

const Music = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState<{ message: string; file: string } | null>(null);
  const [autoPlayOnMount, setAutoPlayOnMount] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  const currentTrack = songs[currentTrackIndex];

  // Read query parameters for autoplay
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackParam = params.get('track');
    if (trackParam !== null) {
      const idx = parseInt(trackParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < songs.length) {
        setCurrentTrackIndex(idx);
        setAutoPlayOnMount(true);
      }
    }
  }, []);

  // Initialize Audio Element
  useEffect(() => {
    const audio = new Audio();
    audio.src = currentTrack.url;
    audio.volume = volume;
    audioRef.current = audio;

    // Event listeners
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setAudioError(null);
    };

    const onEnded = () => {
      handleNext();
    };

    const onError = () => {
      // Audio load error (usually 404 because files aren't copied yet)
      setAudioError({
        message: "Audio track could not be loaded. Verify the file is placed in your public folder.",
        file: currentTrack.url
      });
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    if (autoPlayOnMount) {
      setAutoPlayOnMount(false);
      setTimeout(() => {
        initWebAudio();
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.warn("Autoplay blocked:", err);
        });
      }, 300);
    }

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentTrackIndex]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Initialize Web Audio API on first interaction
      initWebAudio();

      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(null);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
          setAudioError({
            message: "Playback failed. Ensure the audio file is in the public folder.",
            file: currentTrack.url
          });
          setIsPlaying(false);
        });
    }
  };

  // Init Web Audio Analyzer
  const initWebAudio = () => {
    if (audioContextRef.current || !audioRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;

      // Connect source node
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
      sourceNodeRef.current = source;

      // Start drawing loop
      drawVisualizer();
    } catch (e) {
      console.warn("Web Audio API is not fully supported or restricted by browser rules. Using fallback rendering.", e);
    }
  };

  // Canvas visualizer rendering loop
  const drawVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      if (!canvas || !analyser) return;

      animationRef.current = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      // Clear canvas
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const percent = dataArray[i] / 255;
        // height increases based on volume percentage and frequency power
        const barHeight = percent * canvas.height * 0.85;

        // Gradient from Purple to Blue to Pink
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        gradient.addColorStop(0, '#8B5CF6'); // purple
        gradient.addColorStop(0.5, '#0EA5E9'); // blue
        gradient.addColorStop(1, '#D946EF'); // pink

        ctx.fillStyle = gradient;
        
        // Draw rounder brutalist columns
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    };

    render();
  };

  // Handle Track Selection
  const selectTrack = (index: number) => {
    if (index === currentTrackIndex) {
      togglePlay();
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    setAudioError(null);
    setCurrentTrackIndex(index);
    setIsPlaying(false);
    setCurrentTime(0);

    // Auto-play the new track after state registers (we do this inside a timeout or useEffect check)
    setTimeout(() => {
      if (audioRef.current) {
        initWebAudio();
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Auto-play failed:", err);
            setAudioError({
              message: "Audio track missing. Please place the MP3 file in the public folder.",
              file: songs[index].url
            });
          });
      }
    }, 100);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % songs.length;
    selectTrack(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentTrackIndex === 0 ? songs.length - 1 : currentTrackIndex - 1;
    selectTrack(prevIndex);
  };

  // Handle Scrubber/Time seek
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
    }
    setIsMuted(val === 0);
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  // Format time (MM:SS)
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Setup CSS-based fallback drawing inside canvas if Web Audio is inactive or doesn't have focus
  useEffect(() => {
    if (canvasRef.current && (!audioContextRef.current || !isPlaying)) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw static/pulsing aesthetic wave when not playing
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        const sliceWidth = canvas.width / 40;
        for (let i = 0; i <= 40; i++) {
          const x = i * sliceWidth;
          const y = canvas.height / 2 + Math.sin(i * 0.4) * 10 * (isPlaying ? 2 : 0.5);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  return (
    <section id="music-player" className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none">
      
      {/* GRID BACKPLANE */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="w-full border-b border-white/10 pb-12 mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            MUSIC.
          </h2>
        </div>

        {/* INDUSTRIAL WORKSPACE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: ACTIVE DECK & CANVAS VISUALIZER (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* CANVAS RASTER SPECTRUM BOX */}
            <div className="relative border border-white/10 p-6 bg-[#080808]/90 overflow-hidden flex flex-col justify-between h-[180px]">
              <div className="flex justify-between items-center w-full z-10">
                <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase">// SPECTRUM ANALYZER</span>
                <span className="font-mono text-[8px] text-dj-electric tracking-widest uppercase">
                  {isPlaying ? "LIVE FEED ACTIVE" : "SIGNAL STANDBY"}
                </span>
              </div>
              
              <canvas 
                ref={canvasRef} 
                width={600} 
                height={100} 
                className="w-full h-24 bg-transparent mt-2 block"
              />
            </div>

            {/* DECK PLAYER BLOCK */}
            <div className="border border-white/10 bg-[#080808]/90 p-8 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
              
              {/* SPINNING VINYL STYLING */}
              <div className="relative w-40 h-40 shrink-0 select-none flex items-center justify-center">
                <div className={cn(
                  "absolute inset-0 rounded-full bg-zinc-950 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center transition-transform",
                  isPlaying ? "animate-spin-slow" : ""
                )}>
                  {/* vinyl ridges */}
                  <div className="w-36 h-36 rounded-full border border-zinc-800/80 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border border-zinc-900 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-zinc-800 flex items-center justify-center bg-gradient-to-tr from-dj-electric/20 to-dj-pink/20">
                        <Disc className="w-10 h-10 text-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Center pin spindle pin */}
                <div className="absolute w-3 h-3 rounded-full bg-black border border-white/30 z-10 shadow-inner"></div>
              </div>

              {/* TRACK CONTROLLER INFO */}
              <div className="flex-1 w-full flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[9px] bg-white/10 text-white px-2 py-0.5 tracking-wider uppercase">
                      {currentTrack.genre}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase">
                      TRACK_0{currentTrackIndex + 1}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl font-black uppercase text-white tracking-tight mb-1">
                    {currentTrack.title}
                  </h3>
                  <p className="font-mono text-xs text-dj-light font-medium tracking-wide">
                    {currentTrack.artist}
                  </p>
                </div>

                {/* SLIDER PROGRESS SCRUBBER */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[9px] text-zinc-500 tracking-wider">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration || currentTime)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleTimeChange}
                    className="w-full h-1 bg-zinc-900 rounded-none appearance-none cursor-pointer accent-white hover:accent-dj-electric transition-all focus:outline-none"
                    style={{
                      background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${(currentTime / (duration || 1)) * 100}%, #18181b ${(currentTime / (duration || 1)) * 100}%, #18181b 100%)`
                    }}
                  />
                </div>

                {/* PLAYBACK DIALS CONTROLLER */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    {/* Previous Button */}
                    <button 
                      onClick={handlePrev}
                      className="p-2 border border-white/10 hover:border-white text-zinc-400 hover:text-white transition-all bg-black active:scale-95"
                      aria-label="Previous Track"
                    >
                      <SkipBack className="w-4 h-4 fill-current stroke-none" />
                    </button>

                    {/* Master Play Button */}
                    <button 
                      onClick={togglePlay}
                      className={cn(
                        "p-3.5 border transition-all active:scale-95",
                        isPlaying 
                          ? "bg-white text-black border-white hover:bg-zinc-200" 
                          : "bg-dj-electric text-white border-dj-electric hover:bg-dj-electric/90 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      )}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current stroke-none" /> : <Play className="w-4 h-4 fill-current stroke-none" />}
                    </button>

                    {/* Next Button */}
                    <button 
                      onClick={handleNext}
                      className="p-2 border border-white/10 hover:border-white text-zinc-400 hover:text-white transition-all bg-black active:scale-95"
                      aria-label="Next Track"
                    >
                      <SkipForward className="w-4 h-4 fill-current stroke-none" />
                    </button>
                  </div>

                  {/* Volume Slider Panel */}
                  <div className="flex items-center gap-2 max-w-[120px] sm:max-w-[140px] w-full">
                    <button 
                      onClick={toggleMute}
                      className="text-zinc-500 hover:text-white transition-colors p-1"
                      aria-label="Toggle Mute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-1 bg-zinc-900 rounded-none appearance-none cursor-pointer accent-white hover:accent-dj-electric focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${(isMuted ? 0 : volume) * 100}%, #18181b ${(isMuted ? 0 : volume) * 100}%, #18181b 100%)`
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* DESCRIPTION PANEL */}
            <div className="border border-white/10 bg-[#080808]/90 p-6">
              <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase">// METADATA DISCLOSURE</span>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-3 uppercase tracking-wide">
                {currentTrack.description}
              </p>
            </div>

            {/* GRACEFUL FILE ABSENCE INTERRUPT PANEL */}
            {audioError && (
              <div className="border border-red-500/30 bg-red-950/20 p-6 flex gap-4 items-start animate-fade-in">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest">// OFFLINE DISRUPT DETECTED</h4>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                    Audio stream file <code className="bg-red-950/40 text-red-300 px-1 py-0.5 font-mono text-[11px] font-bold">{audioError.file}</code> was not found in the local public repository.
                  </p>
                  <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                    To connect this track, drop your custom MP3 file named <code className="text-zinc-400 font-mono font-bold">song{currentTrackIndex + 1}.mp3</code> directly into <code className="text-zinc-400 font-mono font-bold">/public/songs/</code> inside your project folder.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT PANEL: TRACK LIST CONTROLLER (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* SELECTION LIST */}
            <div className="border border-white/10 bg-[#080808]/90 p-4 flex flex-col gap-1.5">
              <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase px-3 py-1 mb-2">// TRACK INDEX</span>
              
              {songs.map((song, index) => {
                const isCurrent = index === currentTrackIndex;
                return (
                  <button
                    key={song.id}
                    onClick={() => selectTrack(index)}
                    className={cn(
                      "w-full text-left p-3.5 flex items-center justify-between border transition-all duration-300 rounded-none group active:scale-[0.99]",
                      isCurrent
                        ? "bg-white/5 border-dj-electric/60 hover:bg-white/10"
                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                    )}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Grid number with indicator */}
                      <span className={cn(
                        "font-mono text-[10px] font-bold tracking-wider shrink-0 transition-colors",
                        isCurrent ? "text-dj-pink" : "text-zinc-600 group-hover:text-zinc-400"
                      )}>
                        0{index + 1}
                      </span>
                      
                      <div className="min-w-0">
                        <h4 className={cn(
                          "font-sans text-sm font-bold uppercase tracking-tight truncate transition-colors",
                          isCurrent ? "text-white" : "text-zinc-400 group-hover:text-white"
                        )}>
                          {song.title}
                        </h4>
                        <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {/* Active Indicator or Static Genre */}
                      {isCurrent && isPlaying ? (
                        /* CSS micro visualizer animation */
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 bg-dj-pink animate-wave h-3" style={{ animationDelay: '0.1s' }}></span>
                          <span className="w-0.5 bg-dj-electric animate-wave h-2.5" style={{ animationDelay: '0.3s' }}></span>
                          <span className="w-0.5 bg-dj-blue animate-wave h-3" style={{ animationDelay: '0.5s' }}></span>
                        </div>
                      ) : (
                        <span className={cn(
                          "font-mono text-[9px] border px-2 py-0.5 transition-colors uppercase tracking-widest",
                          isCurrent 
                            ? "border-dj-pink/40 text-dj-pink bg-dj-pink/5" 
                            : "border-white/5 text-zinc-500 group-hover:border-white/10 group-hover:text-zinc-400"
                        )}>
                          {song.genre.split(" ")[0]}
                        </span>
                      )}

                      <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400">
                        {song.duration}
                      </span>
                    </div>

                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Music;
