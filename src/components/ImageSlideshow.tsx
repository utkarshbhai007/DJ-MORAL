
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery images for the slideshow
  const slideshowImages = [
    {
      src: "/lovable-uploads/76af0415-8d26-4a3c-b1c7-073b0789b69e.png",
      alt: "DJ Moral performing with vibrant green and red lighting effects"
    },
    {
      src: "/lovable-uploads/0c497e6b-1154-4caa-b3da-172097c9398b.png",
      alt: "DJ Moral energizing the crowd with blue stage lighting"
    },
    {
      src: "/lovable-uploads/3b285992-85aa-48a0-acb8-b8d189a80b04.png",
      alt: "DJ Moral performing with stunning green lighting and crowd"
    },
    {
      src: "/lovable-uploads/a33d2a3b-3406-422a-a5dc-0643d1f09318.png",
      alt: "DJ Moral in an electrifying blue-lit performance"
    },
    {
      src: "/lovable-uploads/936e9a57-3dcf-480e-98ec-c17e75197021.png",
      alt: "DJ Moral performing in an intimate venue with crowd"
    },
    {
      src: "/lovable-uploads/be65cc36-3c52-47ae-ac8d-0f9a0cfe9903.png",
      alt: "DJ Moral at the decks with dramatic stage lighting"
    },
    {
      src: "/lovable-uploads/d47c4fa3-9f22-4b4e-a7eb-a926b2582c43.png",
      alt: "DJ Moral performing with red LED panels and bokeh effects"
    },
    {
      src: "/lovable-uploads/b58078d5-cef3-498f-9a4f-02ccc5507ea2.png",
      alt: "DJ Moral performing outdoor with blue lighting and trees"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slideshowImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? slideshowImages.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Live Moments
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-xl">
            Experience the energy and atmosphere of DJ Moral's electrifying performances
          </p>
        </div>

        {/* Main slideshow */}
        <div className="max-w-6xl mx-auto relative">
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            {/* Current image */}
            <img
              src={slideshowImages[currentIndex].src}
              alt={slideshowImages[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
            
            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image description */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-lg">{slideshowImages[currentIndex].alt}</p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300",
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-none pb-4">
            {slideshowImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300",
                  index === currentIndex
                    ? "ring-2 ring-purple-600 scale-105"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;
