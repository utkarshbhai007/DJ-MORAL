
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Music } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // DJ performance images
  const galleryImages = [
    {
      src: "/lovable-uploads/2819bdff-e87b-4cb8-8be5-a1c58b9cb0a8.png",
      alt: "DJ Moral performing at a club with purple lighting",
    },
    {
      src: "/lovable-uploads/c01703da-283a-438b-9bb7-6ef5871a2144.png",
      alt: "DJ Moral in white shirt performing with red lighting",
    },
    {
      src: "/lovable-uploads/e1c73b86-33ce-4c0e-bacd-3b0afe2d107d.png",
      alt: "DJ Moral energizing the crowd with his hands up",
    },
    {
      src: "/lovable-uploads/c01189cc-56b5-4e93-8e2e-968c79a9fde0.png",
      alt: "DJ Moral engaging with the dance floor crowd",
    },
    {
      src: "/lovable-uploads/4840f89e-d480-4e6b-a646-7525afe45cf0.png",
      alt: "DJ Moral performing at a large crowded venue with blue lights",
    },
    {
      src: "/lovable-uploads/81178b25-e7e3-49d2-a95b-c7b804ba4723.png",
      alt: "DJ Moral silhouette with red lighting effects",
    },
    {
      src: "/lovable-uploads/81e068c7-fa75-4f64-9a34-07329bb56a93.png",
      alt: "DJ Moral performing with visually stunning LED panels",
    }
  ];

  useEffect(() => {
    // Auto rotate through images when autoPlay is enabled
    let interval: NodeJS.Timeout | null = null;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % galleryImages.length);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, galleryImages.length]);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
  };

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
  };

  // Colors for gallery items
  const colors = ['from-purple-600 to-blue-600', 'from-pink-600 to-red-600', 'from-blue-600 to-cyan-600', 
                  'from-red-600 to-yellow-600', 'from-emerald-600 to-cyan-600', 'from-pink-600 to-purple-600'];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl moving-gradient opacity-10"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-dj-electric/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-dj-pink/15 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Performance Gallery</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Glimpses of DJ Moral's electrifying performances across various venues and events.
          </p>
        </div>

        {/* Featured image with carousel */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            style={{ boxShadow: "0 20px 70px -20px rgba(139, 92, 246, 0.5)" }}
          >
            <img 
              src={galleryImages[activeIndex].src} 
              alt={galleryImages[activeIndex].alt} 
              className="w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            
            {/* Play/pause button */}
            <button 
              className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all duration-300"
              onClick={() => setAutoPlay(!autoPlay)}
            >
              {autoPlay ? (
                <span className="block w-3 h-3 bg-white"></span>
              ) : (
                <Music className="w-5 h-5" />
              )}
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-white scale-125" : "bg-white/40"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoPlay(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery grid with creative layout */}
        <div ref={ref} className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 lg:basis-1/3 md:basis-1/2">
                  <div 
                    className={cn(
                      "gallery-item relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500",
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-dj-dark/70 to-black/50 z-10 opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                      
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 z-20">
                        <p className="text-white/90 text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-black/30 border-white/10 hover:bg-black/70 text-white" />
            <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-black/30 border-white/10 hover:bg-black/70 text-white" />
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-all duration-300 hover:bg-black/80"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handlePrevious}
            className="absolute left-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-all duration-300 hover:bg-black/80"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt} 
              className="max-h-[80vh] mx-auto rounded-lg shadow-2xl"
              style={{ boxShadow: "0 20px 70px -20px rgba(139, 92, 246, 0.5)" }}
            />
            <p className="text-white/80 text-center mt-4">{galleryImages[selectedImage].alt}</p>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-all duration-300 hover:bg-black/80"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
