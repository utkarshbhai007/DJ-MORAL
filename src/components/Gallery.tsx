
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
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

  // Updated gallery with all performance images
  const galleryImages = [
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
    },
    {
      src: "/lovable-uploads/5752b1a1-fb0d-4d84-9a5a-986bfb48ca7a.png",
      alt: "DJ Moral performing with crowd and orange LED backdrop"
    },
    {
      src: "/lovable-uploads/f19c8ec3-be92-4e64-8ff6-0758710164ed.png",
      alt: "DJ Moral performing with stunning bokeh lighting effects"
    },
    {
      src: "/lovable-uploads/8c1a15ed-1a11-4fc6-a005-f73a769f60c2.png",
      alt: "DJ Moral energizing the crowd with red geometric lighting"
    },
    {
      src: "/lovable-uploads/3cd1f07c-4122-4b24-aa0c-372b5d626ac9.png",
      alt: "DJ Moral performing with intense red lighting and bokeh"
    },
    {
      src: "/lovable-uploads/7acc4be9-43b1-47e2-bedc-4239604eafb5.png",
      alt: "DJ Moral in the zone with blue stage lighting"
    },
    {
      src: "/lovable-uploads/507df730-5cc3-4735-9b2a-b58c5d2b885b.png",
      alt: "DJ Moral performing with hands up and vibrant pink lighting"
    },
    {
      src: "/lovable-uploads/45e127e4-48bc-418f-ac6a-8eed3946cff4.png",
      alt: "DJ Moral energizing the crowd with blue and pink stage lighting"
    },
    {
      src: "/lovable-uploads/1afc50c1-c65b-419b-924e-96a79595b387.png",
      alt: "DJ Moral performing with green lighting and atmospheric effects"
    },
    {
      src: "/lovable-uploads/58fea17e-97c1-4186-be10-97ac632d8a02.png",
      alt: "DJ Moral performing with arms raised in pink stage lighting"
    },
    {
      src: "/lovable-uploads/d9427ed8-f358-497d-9aef-7811958d6871.png",
      alt: "DJ Moral performing with microphone under starry blue lights"
    },
    {
      src: "/lovable-uploads/f532b663-19dc-4634-b3a4-7edb7d620f64.png",
      alt: "DJ Moral performing with microphone in red hoodie under blue lights"
    },
    {
      src: "/lovable-uploads/28a6f700-4344-4d3f-aac9-7dbf0e282195.png",
      alt: "DJ Moral performing intensely under dramatic teal spotlight"
    },
    {
      src: "/lovable-uploads/67d23abf-baec-40ea-a7fb-8ca68e165939.png",
      alt: "DJ Moral performing with microphone in dramatic red smoke effects"
    },
    {
      src: "/lovable-uploads/538ecef5-4f0c-47f3-9c21-491e6d34b9c5.png",
      alt: "DJ Moral performing with arms raised in orange lighting"
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

  // Handle clicking on the lightbox overlay to close it
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  // Enhanced colors for gallery items
  const colors = [
    'from-purple-600 to-blue-600', 'from-pink-600 to-red-600', 'from-blue-600 to-cyan-600', 
    'from-red-600 to-yellow-600', 'from-emerald-600 to-cyan-600', 'from-pink-600 to-purple-600',
    'from-orange-600 to-red-600', 'from-indigo-600 to-purple-600', 'from-green-600 to-blue-600',
    'from-yellow-600 to-orange-600', 'from-cyan-600 to-blue-600', 'from-violet-600 to-pink-600',
    'from-teal-600 to-green-600', 'from-rose-600 to-pink-600', 'from-blue-600 to-indigo-600',
    'from-green-600 to-emerald-600', 'from-purple-600 to-violet-600', 'from-red-600 to-rose-600',
    'from-cyan-600 to-teal-600', 'from-orange-600 to-yellow-600', 'from-indigo-600 to-blue-600',
    'from-pink-600 to-rose-600'
  ];

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
              src={galleryImages[activeIndex % galleryImages.length]?.src} 
              alt={galleryImages[activeIndex % galleryImages.length]?.alt} 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
            
            {/* Enhanced overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-lg">{galleryImages[activeIndex % galleryImages.length]?.alt}</p>
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
              {galleryImages.map((_, index) => (
                <button 
                  key={index} 
                  className={cn(
                    "transition-all duration-500",
                    index === (activeIndex % galleryImages.length) 
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
              {galleryImages.map((image, index) => (
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

      {/* Enhanced Lightbox with overlay click to close */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
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
          
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[selectedImage]?.src} 
              alt={galleryImages[selectedImage]?.alt} 
              className="max-h-[85vh] mx-auto rounded-2xl shadow-2xl"
              style={{ boxShadow: "0 25px 80px -15px rgba(139, 92, 246, 0.8)" }}
            />
            <div className="text-center mt-6 space-y-2">
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{galleryImages[selectedImage]?.alt}</p>
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
