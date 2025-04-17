
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  // Mock gallery images (replace with actual images)
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1642623187443-315a39e03782?w=800&auto=format&fit=crop",
      alt: "DJ Moral performing at a club",
    },
    {
      src: "https://images.unsplash.com/photo-1571266028243-d220c6a7e262?w=800&auto=format&fit=crop",
      alt: "Wedding performance",
    },
    {
      src: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&auto=format&fit=crop",
      alt: "Festival stage",
    },
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop",
      alt: "DJ equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1574966739987-66ddc7b9a83c?w=800&auto=format&fit=crop",
      alt: "Concert crowd",
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop",
      alt: "DJ performance",
    }
  ];

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
  };

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Performance Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Glimpses of DJ Moral's electrifying performances across various venues and events.
          </p>
        </div>

        {/* Gallery grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="h-full w-full group relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white/90 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handlePrevious}
            className="absolute left-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt} 
              className="max-h-[80vh] mx-auto"
            />
            <p className="text-white/80 text-center mt-4">{galleryImages[selectedImage].alt}</p>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
