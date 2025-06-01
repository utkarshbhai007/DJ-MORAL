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

  // Gallery images - updated paths for hosted environment
  const images = [
    { src: 'C:\Users\ASUS\Desktop\dj moral\IMG_1244.JPG', alt: 'DJ Moral Performance 1' },
    { src: './lovable-uploads/1afc50c1-c65b-419b-924e-96a79595b387.png', alt: 'DJ Moral Performance 2' },
    { src: './lovable-uploads/2819bdff-e87b-4cb8-8be5-a1c58b9cb0a8.png', alt: 'DJ Moral Performance 3' },
    { src: './lovable-uploads/28a6f700-4344-4d3f-aac9-7dbf0e282195.png', alt: 'DJ Moral Performance 4' },
    { src: './lovable-uploads/3b285992-85aa-48a0-acb8-b8d189a80b04.png', alt: 'DJ Moral Performance 5' },
    { src: './lovable-uploads/3cd1f07c-4122-4b24-aa0c-372b5d626ac9.png', alt: 'DJ Moral Performance 6' },
    { src: './lovable-uploads/44b542b7-2988-42c7-9a79-3130c8fff5e9.png', alt: 'DJ Moral Performance 7' },
    { src: './lovable-uploads/45e127e4-48bc-418f-ac6a-8eed3946cff4.png', alt: 'DJ Moral Performance 8' },
    { src: './lovable-uploads/4840f89e-d480-4e6b-a646-7525afe45cf0.png', alt: 'DJ Moral Performance 9' },
    { src: './lovable-uploads/507df730-5cc3-4735-9b2a-b58c5d2b885b.png', alt: 'DJ Moral Performance 10' },
    { src: './lovable-uploads/538ecef5-4f0c-47f3-9c21-491e6d34b9c5.png', alt: 'DJ Moral Performance 11' },
    { src: './lovable-uploads/5752b1a1-fb0d-4d84-9a5a-986bfb48ca7a.png', alt: 'DJ Moral Performance 12' },
    { src: './lovable-uploads/58fea17e-97c1-4186-be10-97ac632d8a02.png', alt: 'DJ Moral Performance 13' },
    { src: './lovable-uploads/67d23abf-baec-40ea-a7fb-8ca68e165939.png', alt: 'DJ Moral Performance 14' },
    { src: './lovable-uploads/6d363468-141d-4d07-8f1d-7e8595cd7bb1.png', alt: 'DJ Moral Performance 15' },
    { src: './lovable-uploads/76af0415-8d26-4a3c-b1c7-073b0789b69e.png', alt: 'DJ Moral Performance 16' },
    { src: './lovable-uploads/7acc4be9-43b1-47e2-bedc-4239604eafb5.png', alt: 'DJ Moral Performance 17' },
    { src: './lovable-uploads/7adb2c5d-9afd-4c68-a816-4fe1c27ab289.png', alt: 'DJ Moral Performance 18' },
    { src: './lovable-uploads/81178b25-e7e3-49d2-a95b-c7b804ba4723.png', alt: 'DJ Moral Performance 19' },
    { src: './lovable-uploads/81e068c7-fa75-4f64-9a34-07329bb56a93.png', alt: 'DJ Moral Performance 20' },
    { src: './lovable-uploads/8bcd7a2b-5c66-47a3-9f8e-8295fa0216f7.png', alt: 'DJ Moral Performance 21' },
    { src: './lovable-uploads/8c1a15ed-1a11-4fc6-a005-f73a769f60c2.png', alt: 'DJ Moral Performance 22' },
    { src: './lovable-uploads/936e9a57-3dcf-480e-98ec-c17e75197021.png', alt: 'DJ Moral Performance 23' },
    { src: './lovable-uploads/992718ef-f41d-4440-8401-9113fc6f0aaf.png', alt: 'DJ Moral Performance 24' },
    { src: './lovable-uploads/a33d2a3b-3406-422a-a5dc-0643d1f09318.png', alt: 'DJ Moral Performance 25' },
    { src: './lovable-uploads/b58078d5-cef3-498f-9a4f-02ccc5507ea2.png', alt: 'DJ Moral Performance 26' },
    { src: './lovable-uploads/be65cc36-3c52-47ae-ac8d-0f9a0cfe9903.png', alt: 'DJ Moral Performance 27' },
    { src: './lovable-uploads/c01189cc-56b5-4e93-8e2e-968c79a9fde0.png', alt: 'DJ Moral Performance 28' },
    { src: './lovable-uploads/c01703da-283a-438b-9bb7-6ef5871a2144.png', alt: 'DJ Moral Performance 29' },
    { src: './lovable-uploads/d47c4fa3-9f22-4b4e-a7eb-a926b2582c43.png', alt: 'DJ Moral Performance 30' },
    { src: './lovable-uploads/d79a8e6f-167c-43c5-a5c6-81983abe8000.png', alt: 'DJ Moral Performance 31' },
    { src: './lovable-uploads/d9427ed8-f358-497d-9aef-7811958d6871.png', alt: 'DJ Moral Performance 32' },
    { src: './lovable-uploads/e1c73b86-33ce-4c0e-bacd-3b0afe2d107d.png', alt: 'DJ Moral Performance 33' },
    { src: './lovable-uploads/e7d7a442-1398-4dd2-a199-192310cf9a4f.png', alt: 'DJ Moral Performance 34' },
    { src: './lovable-uploads/ef960640-856b-43c0-a57d-9f5f90d7ef49.png', alt: 'DJ Moral Performance 35' },
    { src: './lovable-uploads/f19c8ec3-be92-4e64-8ff6-0758710164ed.png', alt: 'DJ Moral Performance 36' },
    { src: './lovable-uploads/f532b663-19dc-4634-b3a4-7edb7d620f64.png', alt: 'DJ Moral Performance 37' },
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
