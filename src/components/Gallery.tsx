
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Instagram, Music, Youtube } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images - using local images folder
  // Add your images to public/images/gallery/ folder
  const images = [
    { src: '/images/gallery/image1.jpg', alt: 'DJ Moral Performance 1' },
    { src: '/images/gallery/image2.jpg', alt: 'DJ Moral Performance 2' },
    { src: '/images/gallery/image3.jpg', alt: 'DJ Moral Performance 3' },
    { src: '/images/gallery/image4.jpg', alt: 'DJ Moral Performance 4' },
    { src: '/images/gallery/image5.jpg', alt: 'DJ Moral Performance 5' },
    { src: '/images/gallery/image6.jpg', alt: 'DJ Moral Performance 6' },
    { src: '/images/gallery/image7.jpg', alt: 'DJ Moral Performance 7' },
    { src: '/images/gallery/image8.jpg', alt: 'DJ Moral Performance 8' },
    { src: '/images/gallery/image9.jpg', alt: 'DJ Moral Performance 9' },
    { src: '/images/gallery/image10.jpg', alt: 'DJ Moral Performance 10' },
    { src: '/images/gallery/image11.jpg', alt: 'DJ Moral Performance 11' },
    { src: '/images/gallery/image12.jpg', alt: 'DJ Moral Performance 12' },
    { src: '/images/gallery/image13.jpg', alt: 'DJ Moral Performance 1' },
    { src: '/images/gallery/image14.jpg', alt: 'DJ Moral Performance 2' },
    { src: '/images/gallery/image15.jpg', alt: 'DJ Moral Performance 3' },
    { src: '/images/gallery/image16.jpg', alt: 'DJ Moral Performance 4' },
    { src: '/images/gallery/image17.jpg', alt: 'DJ Moral Performance 5' },
    { src: '/images/gallery/image18.jpg', alt: 'DJ Moral Performance 6' },
    { src: '/images/gallery/image19.jpg', alt: 'DJ Moral Performance 7' },
    { src: '/images/gallery/image20.jpg', alt: 'DJ Moral Performance 8' },
    { src: '/images/gallery/image21.jpg', alt: 'DJ Moral Performance 9' },
    { src: '/images/gallery/image22.jpg', alt: 'DJ Moral Performance 10' },
    { src: '/images/gallery/image23.jpg', alt: 'DJ Moral Performance 11' },
    { src: '/images/gallery/image24.jpg', alt: 'DJ Moral Performance 12' },
    { src: '/images/gallery/image25.jpg', alt: 'DJ Moral Performance 1' },
    { src: '/images/gallery/image26.jpg', alt: 'DJ Moral Performance 2' },
    { src: '/images/gallery/image27.jpg', alt: 'DJ Moral Performance 3' },
    { src: '/images/gallery/image28.jpg', alt: 'DJ Moral Performance 4' },
    { src: '/images/gallery/image29.jpg', alt: 'DJ Moral Performance 5' },
    { src: '/images/gallery/image30.jpg', alt: 'DJ Moral Performance 6' },
    { src: '/images/gallery/image31.jpg', alt: 'DJ Moral Performance 7' },
    { src: '/images/gallery/image32.jpg', alt: 'DJ Moral Performance 8' },
    { src: '/images/gallery/image33.jpg', alt: 'DJ Moral Performance 9' },
  ];

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${(index % 12) * 100}ms`,
              }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  console.log(`Failed to load image: ${image.src}`);
                  // Show placeholder on error
                  e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23333"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23666" font-family="Arial" font-size="16">Image not found</text></svg>';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-dj-electric/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Social media section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Follow for More</h3>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://instagram.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://soundcloud.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Music className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>SoundCloud</span>
            </a>
            
            <a 
              href="https://youtube.com/djmoral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:scale-105 transform transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
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
