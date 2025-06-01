import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Instagram, Music, Youtube } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.05, // Lower threshold for mobile
    triggerOnce: true,
    rootMargin: '50px', // Trigger earlier on mobile
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Gallery images - using local images folder
  // Add your images to public/images/gallery/ folder
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
    <section id="gallery" className="py-24 relative overflow-hidden bg-gradient-to-b from-dj-dark to-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full moving-gradient opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-dj-electric/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-dj-pink/20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Gallery</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Experience the energy and excitement of DJ Moral's performances through these captivating moments.
          </p>
        </div>

        {/* Audio visualizer */}
        <div className="mb-20 relative">
          <AudioVisualizer barCount={32} className="mx-auto h-32" />
          
          {/* Spotlight effect */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-dj-electric/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Gallery grid */}
        <div 
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${(index % 8) * 50}ms`, // Faster animation for mobile
              }}
              onClick={() => setSelectedImage(index)}
            >
              {!failedImages.has(index) ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-active:scale-95"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  style={{
                    imageRendering: 'auto',
                    minHeight: '150px' // Ensure minimum height on mobile
                  }}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-dj-purple to-dj-dark flex items-center justify-center min-h-[150px]">
                  <div className="text-center text-white/60">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm">Loading...</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-white font-medium text-xs sm:text-sm truncate">{image.alt}</p>
                </div>
              </div>
              
              {/* Hover/Touch effect */}
              <div className="absolute inset-0 bg-dj-electric/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Social media section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Follow for More</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <a 
              href="https://instagram.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://soundcloud.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Music className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>SoundCloud</span>
            </a>
            
            <a 
              href="https://youtube.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              style={{
                imageRendering: 'auto',
                maxHeight: 'calc(100vh - 100px)', // Ensure it fits in viewport
                maxWidth: 'calc(100vw - 40px)'
              }}
            />
            
            {/* Image counter */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-black/50 text-white text-xs sm:text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Gallery;
