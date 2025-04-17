
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Instagram, Music } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-dj-dark">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-dj-electric/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-dj-pink/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Ready to elevate your event with DJ Moral's electric performance? Reach out now!
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Contact card */}
          <div 
            className={`glass-morphism rounded-3xl overflow-hidden transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-5">
              {/* Contact image */}
              <div className="md:col-span-2 bg-gradient-to-br from-dj-electric to-dj-pink p-8 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/e7d7a442-1398-4dd2-a199-192310cf9a4f.png" 
                    alt="DJ Moral Contact" 
                    className="max-w-[200px] mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">DJ Moral</h3>
                  <p className="text-white/80">Music Producer & DJ</p>
                </div>
              </div>

              {/* Contact info */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dj-electric/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-dj-electric" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <a href="tel:+918401430191" className="text-white/70 hover:text-white transition-colors">
                        +91 84014 30191
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dj-pink/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-dj-pink" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:contact@djmoral.com" className="text-white/70 hover:text-white transition-colors">
                        contact@djmoral.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dj-blue/20 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-dj-blue" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/dj_moral/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        @dj_moral
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dj-light/20 flex items-center justify-center shrink-0">
                      <Music className="w-5 h-5 text-dj-light" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">SoundCloud</h4>
                      <a 
                        href="https://soundcloud.com/dj_moral" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        soundcloud.com/dj_moral
                      </a>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-8">
                  <a 
                    href="tel:+918401430191" 
                    className="block w-full py-3 text-center bg-gradient-to-r from-dj-electric to-dj-pink text-white font-medium rounded-xl hover:shadow-lg hover:shadow-dj-pink/30 transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
