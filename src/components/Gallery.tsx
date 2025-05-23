
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Music, Play, Pause } from 'lucide-react';
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

  // Updated gallery with new performance images
  const galleryImages = [
    {
      src: "/lovable-uploads/76af0415-8d26-4a3c-b1c7-073b0789b69e.png",
      alt: "DJ Moral performing with vibrant green and red lighting effects",
      category: "Live Performance"
    },
    {
      src: "/lovable-uploads/0c497e6b-1154-4caa-b3da-172097c9398b.png",
      alt: "DJ Moral energizing the crowd with blue stage lighting",
      category: "Club Event"
    },
    {
      src: "/lovable-uploads/3b285992-85aa-48a0-acb8-b8d189a80b04.png",
      alt: "DJ Moral performing with stunning green lighting and crowd",
      category: "Live Performance"
    },
    {
      src: "/lovable-uploads/a33d2a3b-3406-422a-a5dc-0643d1f09318.png",
      alt: "DJ Moral in an electrifying blue-lit performance",
      category: "Festival"
    },
    {
      src: "/lovable-uploads/936e9a57-3dcf-480e-98ec-c17e75197021.png",
      alt: "DJ Moral performing in an intimate venue with crowd",
      category: "Private Event"
    },
    {
      src: "/lovable-uploads/be65cc36-3c52-47ae-ac8d-0f9a0cfe9903.png",
      alt: "DJ Moral at the decks with dramatic stage lighting",
      category: "Club Event"
    },
    {
      src: "/lovable-uploads/d47c4fa3-9f22-4b4e-a7eb-a926b2582c43.png",
      alt: "DJ Moral performing with red LED panels and bokeh effects",
      category: "Festival"
    },
    {
      src: "/lovable-uploads/b58078d5-cef3-498f-9a4f-02ccc5507ea2.png",
      alt: "DJ Moral performing outdoor with blue lighting and trees",
      category: "Outdoor Event"
    },
    {
      src: "/lovable-uploads/5752b1a1-fb0d-4d84-9a5a-986bfb48ca7a.png",
      alt: "DJ Moral performing with crowd and orange LED backdrop",
      category: "Club Event"
    },
    {
      src: "/lovable-uploads/f19c8ec3-be92-4e64-8ff6-0758710164ed.png",
      alt: "DJ Moral performing with stunning bokeh lighting effects",
      category: "Live Performance"
    },
    {
      src: "/lovable-uploads/8c1a15ed-1a11-4fc6-a005-f73a769f60c2.png",
      alt: "DJ Moral energizing the crowd with red geometric lighting",
      category: "Festival"
    },
    {
      src: "/lovable-uploads/3cd1f07c-4122-4b24-aa0c-372b5d626ac9.png",
      alt: "DJ Moral performing with intense red lighting and bokeh",
      category: "Club Event"
    },
    {
      src: "/lovable-uploads/7acc4be9-43b1-47e2-bedc-4239604eafb5.png",
      alt: "DJ Moral in the zone with blue stage lighting",
      category: "Live Performance"
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

  // Enhanced colors for gallery items
  const colors = [
    'from-purple-600 to-blue-600', 'from-pink-600 to-red-600', 'from-blue-600 to-cyan-600', 
    'from-red-600 to-yellow-600', 'from-emerald-600 to-cyan-600', 'from-pink-600 to-purple-600',
    'from-orange-600 to-red-600', 'from-indigo-600 to-purple-600', 'from-green-600 to-blue-600',
    'from-yellow-600 to-orange-600', 'from-cyan-600 to-blue-600', 'from-violet-600 to-pink-600',
    'from-teal-600 to-green-600'
  ];

  const categories = ['All', 'Live Performance', 'Club Event', 'Festival', 'Private Event', 'Outdoor Event'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl moving-gradient opacity-15"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-dj-electric/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-dj-pink/15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/3 w-72 h-72 rounded-full bg-dj-blue/20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text">Performance Gallery</h2>
          <div className="w-40 h-3 bg-gradient-to-r from-dj-electric via-dj-pink to-dj-blue mx-auto mb-8 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/40 animate-pulse-slow"></div>
          </div>
          <p className="text-white/90 max-w-3xl mx-auto text-xl leading-relaxed">
            Experience the electrifying energy of DJ Moral's performances across various venues, festivals, and exclusive events.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-500 text-sm font-medium",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-dj-electric to-dj-pink text-white shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                )}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured hero image with enhanced style */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-700"
            style={{ 
              boxShadow: "0 25px 80px -15px rgba(139, 92, 246, 0.6), 0 0 50px rgba(217, 70, 239, 0.3)" 
            }}
          >
            <img 
              src={filteredImages[activeIndex % filteredImages.length]?.src} 
              alt={filteredImages[activeIndex % filteredImages.length]?.alt} 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
            
            {/* Enhanced overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-dj-electric/80 text-white text-sm rounded-full mb-3">
                    {filteredImages[activeIndex % filteredImages.length]?.category}
                  </span>
                  <p className="text-white/90 text-lg">{filteredImages[activeIndex % filteredImages.length]?.alt}</p>
                </div>
                
                <button 
                  className="p-4 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all duration-300 group"
                  onClick={() => setAutoPlay(!autoPlay)}
                >
                  {autoPlay ? (
                    <Pause className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Enhanced navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {filteredImages.map((_, index) => (
                <button 
                  key={index} 
                  className={cn(
                    "transition-all duration-500",
                    index === (activeIndex % filteredImages.length) 
                      ? "w-8 h-3 bg-dj-electric rounded-full" 
                      : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
                  )}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoPlay(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced gallery grid */}
        <div ref={ref} className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {filteredImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
                  <div 
                    className={cn(
                      "gallery-item relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 transform hover:-translate-y-2",
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square group relative overflow-hidden">
                      {/* Enhanced gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-60 transition-all duration-700 z-10",
                        colors[index % colors.length]
                      )}></div>
                      
                      {/* Image with enhanced effects */}
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                      />
                      
                      {/* Enhanced category badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full border border-white/20">
                          {image.category}
                        </span>
                      </div>
                      
                      {/* Enhanced hover content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 z-20">
                        <div>
                          <p className="text-white text-sm leading-relaxed">{image.alt}</p>
                          <div className="mt-3 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-dj-electric rounded-full animate-pulse"></div>
                            <span className="text-dj-light text-xs">Click to view</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-black/40 border-white/20 hover:bg-black/80 text-white backdrop-blur-md" />
            <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-black/40 border-white/20 hover:bg-black/80 text-white backdrop-blur-md" />
          </Carousel>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10"
          >
            <X className="w-7 h-7" />
          </button>
          
          <button 
            onClick={handlePrevious}
            className="absolute left-6 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] relative">
            <img 
              src={filteredImages[selectedImage]?.src} 
              alt={filteredImages[selectedImage]?.alt} 
              className="max-h-[85vh] mx-auto rounded-2xl shadow-2xl"
              style={{ boxShadow: "0 25px 80px -15px rgba(139, 92, 246, 0.8)" }}
            />
            <div className="text-center mt-6 space-y-2">
              <span className="inline-block px-4 py-2 bg-dj-electric/80 text-white text-sm rounded-full">
                {filteredImages[selectedImage]?.category}
              </span>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{filteredImages[selectedImage]?.alt}</p>
            </div>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-6 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
