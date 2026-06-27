import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Instagram, Music, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: '50px',
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const images = [
    { src: '/images/gallery/image1.jpg', alt: 'DJ Moral Performance 1' },
    { src: '/images/gallery/image2.jpg', alt: 'DJ Moral Performance 2' },
    { src: '/images/gallery/image3.jpg', alt: 'DJ Moral Performance 3' },
    { src: '/images/gallery/image5.jpg', alt: 'DJ Moral Performance 5' },
    { src: '/images/gallery/image6.jpg', alt: 'DJ Moral Performance 6' },
    { src: '/images/gallery/image7.jpg', alt: 'DJ Moral Performance 7' },
    { src: '/images/gallery/image8.jpg', alt: 'DJ Moral Performance 8' },
    { src: '/images/gallery/image9.jpg', alt: 'DJ Moral Performance 9' },
    { src: '/images/gallery/image10.jpg', alt: 'DJ Moral Performance 10' },
    { src: '/images/gallery/image11.jpg', alt: 'DJ Moral Performance 11' },
    { src: '/images/gallery/image12.jpg', alt: 'DJ Moral Performance 12' },
    { src: '/images/gallery/image13.jpg', alt: 'DJ Moral Performance 13' },
    { src: '/images/gallery/image14.jpg', alt: 'DJ Moral Performance 14' },
    { src: '/images/gallery/image15.jpg', alt: 'DJ Moral Performance 15' },
    { src: '/images/gallery/image16.jpg', alt: 'DJ Moral Performance 16' },
    { src: '/images/gallery/image17.jpg', alt: 'DJ Moral Performance 17' },
    { src: '/images/gallery/image18.jpg', alt: 'DJ Moral Performance 18' },
    { src: '/images/gallery/image19.jpg', alt: 'DJ Moral Performance 19' },
    { src: '/images/gallery/image20.jpg', alt: 'DJ Moral Performance 20' },
    { src: '/images/gallery/image21.jpg', alt: 'DJ Moral Performance 21' },
    { src: '/images/gallery/image22.jpg', alt: 'DJ Moral Performance 22' },
    { src: '/images/gallery/image23.jpg', alt: 'DJ Moral Performance 23' },
    { src: '/images/gallery/image24.jpg', alt: 'DJ Moral Performance 24' },
    { src: '/images/gallery/image25.jpg', alt: 'DJ Moral Performance 25' },
    { src: '/images/gallery/image26.jpg', alt: 'DJ Moral Performance 26' },
    { src: '/images/gallery/image30.jpg', alt: 'DJ Moral Performance 30' },
    { src: '/images/gallery/image31.jpg', alt: 'DJ Moral Performance 31' },
    { src: '/images/gallery/image32.jpg', alt: 'DJ Moral Performance 32' },
  ];

  const handleImageError = (index: number) => {
    console.log(`Failed to load image at index ${index}: ${images[index].src}`);
    setFailedImages(prev => new Set([...prev, index]));
  };

  const handleImageLoad = (index: number) => {
    console.log(`Successfully loaded image at index ${index}: ${images[index].src}`);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/10 select-none">

      {/* INTERNAL MONITOR GRID METRICS */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HARDWARE INTERFACE SECTION HEADER */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-12 mb-20 gap-6">
          <div>
            <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4">// GALLERY</p>
            <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
              THE CAPTURES.
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest max-w-sm leading-relaxed">
            Experience the energy and excitement of DJ Moral's performances through these captivating moments.
          </p>
        </div>

        {/* BRUTALIST ASYMMETRICAL IMAGE PLATFORM GRID */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative aspect-square overflow-hidden bg-[#090909] border border-white/5 rounded-none cursor-crosshair transition-all duration-700",
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: `${(index % 8) * 40}ms`,
              }}
              onClick={() => setSelectedImage(index)}
            >
              {!failedImages.has(index) ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-[1.1] brightness-[0.85] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 group-active:scale-98"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  style={{ minHeight: '150px' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center min-h-[150px] border border-dashed border-white/10">
                  <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">LOADING IMAGE</span>
                </div>
              )}

              {/* STARK BRUTALIST DATA OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <span className="font-mono text-[8px] text-white/40 tracking-widest self-end">IMAGE_0{index + 1}</span>
                <div>
                  <p className="text-white font-mono text-[10px] uppercase tracking-wider truncate">{image.alt}</p>
                </div>
              </div>

              {/* HARD SHUTTER FLASH OVERLAY ON CLICK/TOUCH */}
              <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-10 transition-opacity duration-100"></div>
            </div>
          ))}
        </div>

        {/* HIGH CONTRAST FOOTER RADAR LINKS */}
        <div className="mt-32 border-t border-white/10 pt-16 text-center max-w-xl mx-auto space-y-6">
          <h4 className="font-mono text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">FOLLOW DJ MORAL</h4>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <a
              href="https://www.instagram.com/dj_moral/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#ffffff] text-black p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition duration-300 w-full rounded-none"
            >
              <Instagram className="w-4 h-4 mr-2 stroke-[2.5]" />
              Instagram
            </a>

            <a
              href="https://soundcloud.com/dj_moral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-zinc-900 border border-white/10 text-white p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition duration-300 w-full rounded-none"
            >
              <Music className="w-4 h-4 mr-2" />
              SoundCloud
            </a>

            <a
              href="https://www.youtube.com/@dj_moral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-zinc-900 border border-white/10 text-white p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition duration-300 w-full rounded-none"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* HARDWARE-INSPIRED SYSTEM LIGHTBOX */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-6">

          {/* Lightbox Header Telemetry */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4 w-full">
            <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
              PREVIEW // IMAGE_0{selectedImage + 1}
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="font-mono text-[10px] text-white hover:text-zinc-400 border border-white/20 px-3 py-1 bg-black/40 uppercase tracking-widest transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" /> CLOSE
            </button>
          </div>

          {/* Image Engine Box */}
          <div className="relative w-full h-full flex items-center justify-center py-4">
            {/* Nav Left */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 p-3 border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors rounded-none z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Nav Right */}
            <button
              onClick={handleNext}
              className="absolute right-2 p-3 border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors rounded-none z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Structural Grayscale Unfiltered Image Output */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain filter contrast-[1.05] rounded-none border border-white/5"
              style={{
                maxHeight: 'calc(100vh - 160px)',
                maxWidth: 'calc(100vw - 40px)'
              }}
            />
          </div>

          {/* Lightbox Footer Status Line */}
          <div className="flex justify-between items-center border-t border-white/10 pt-4 w-full font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
            <div>META: {images[selectedImage].alt}</div>
            <div className="bg-white/10 text-white px-3 py-1">
              IMAGE {selectedImage + 1} OF {images.length}
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default Gallery;