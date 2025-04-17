
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Instagram, Music, MapPin, Headphones } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import AudioVisualizer from './AudioVisualizer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCallClick = () => {
    window.location.href = 'tel:+918401430191';
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-dj-dark">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dj-dark via-transparent to-black opacity-90"></div>
      </div>
      
      {/* Electric circles */}
      <div className="absolute top-40 left-20 w-60 h-60 rounded-full bg-dj-electric/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-dj-pink/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-dj-blue/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
      
      {/* Animated equalizer bars */}
      <div className="absolute bottom-0 left-0 w-full h-20 flex items-end justify-center gap-1 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="visualizer-bar"
            style={{ 
              height: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.05}s` 
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with rotating record animation */}
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full border-2 border-dj-electric animate-spin-slow flex items-center justify-center overflow-hidden">
              <div className="w-2 h-2 bg-dj-pink rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 shimmer-text">
            Connect With DJ Moral
          </h2>
          
          <div className="w-36 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto mb-6 relative">
            <div className="absolute -top-1 left-0 w-4 h-4 rounded-full bg-dj-electric animate-pulse"></div>
            <div className="absolute -top-1 right-0 w-4 h-4 rounded-full bg-dj-pink animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Ready to <span className="text-dj-electric font-bold">elevate</span> your event with <span className="text-dj-pink font-bold">electrifying</span> beats?
          </p>
          
          <AudioVisualizer className="mt-6" barCount={12} />
        </div>

        <div 
          ref={ref} 
          className="max-w-6xl mx-auto relative"
        >
          {/* Main contact card with futuristic design */}
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Orbiting element */}
            <div className="absolute z-10 animate-orbit">
              <div className="w-12 h-12 rounded-full border border-dj-electric/50 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-dj-electric" />
              </div>
            </div>
            
            <Card className="neo-blur overflow-hidden rounded-3xl border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="grid md:grid-cols-2 gap-0 relative overflow-hidden">
                {/* Left side - Visual */}
                <div className="relative h-full min-h-[400px] md:min-h-[600px] overflow-hidden group">
                  {/* Interactive hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dj-dark/90 via-black/50 to-transparent z-10 
                                group-hover:opacity-70 transition-opacity duration-700"></div>
                  
                  {/* Background animation */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0,transparent_70%)] animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(217,70,239,0.1)_0,transparent_50%)] animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* DJ image with moving effect */}
                  <img 
                    src="/lovable-uploads/ef960640-856b-43c0-a57d-9f5f90d7ef49.png" 
                    alt="DJ Moral Performing" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  
                  {/* Moving spotlight effect */}
                  <div className="absolute inset-0 z-5 opacity-30 pointer-events-none">
                    <div className="absolute w-full h-full bg-gradient-to-tr from-dj-electric/10 via-transparent to-dj-pink/20 animate-spotlight"></div>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <div className="backdrop-blur-md bg-black/40 p-8 rounded-xl border border-white/5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-4 relative overflow-hidden inline-block">
                        <span className="relative z-10 text-3xl font-bold bg-gradient-to-r from-dj-electric via-white to-dj-pink bg-clip-text text-transparent">DJ MORAL</span>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-dj-electric to-dj-pink"></div>
                      </div>
                      
                      <p className="text-white/90 mb-6 text-xl">Music Producer & Professional DJ</p>
                      
                      <div className="flex space-x-4 mt-4">
                        {/* Social icons with hover animations */}
                        <a 
                          href="https://www.instagram.com/dj_moral/"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-dj-pink border border-white/10 hover:border-dj-pink/50 hover:scale-110 hover:shadow-lg hover:shadow-dj-pink/20 transition-all"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://soundcloud.com/dj_moral"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-dj-electric border border-white/10 hover:border-dj-electric/50 hover:scale-110 hover:shadow-lg hover:shadow-dj-electric/20 transition-all"
                        >
                          <Music className="w-5 h-5" />
                        </a>
                        <a 
                          href="tel:+918401430191" 
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-dj-blue border border-white/10 hover:border-dj-blue/50 hover:scale-110 hover:shadow-lg hover:shadow-dj-blue/20 transition-all"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Contact info + CTA button */}
                <div className="p-8 md:p-12 backdrop-blur-lg bg-gradient-to-br from-black/90 via-black/80 to-dj-dark/90 flex flex-col relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-60 h-60 bg-dj-electric/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-dj-pink/10 rounded-full blur-3xl"></div>
                  </div>
                  
                  {/* Contact grid pattern */}
                  <div className="absolute inset-0 z-0 opacity-5">
                    <div className="absolute inset-0" style={{ 
                      backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', 
                      backgroundSize: '20px 20px' 
                    }}></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-10 relative z-10">
                    Get In Touch
                    <div className="mt-2 h-[3px] w-20 bg-gradient-to-r from-dj-electric to-dj-pink"></div>
                  </h3>
                  
                  <div className="space-y-8 mb-10 relative z-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-morphism group-hover:bg-gradient-to-br group-hover:from-dj-electric/20 group-hover:to-dj-electric/5 flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-all duration-300">
                        <Phone className="w-6 h-6 text-dj-electric" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1 group-hover:text-dj-electric transition-colors">Phone</h4>
                        <a href="tel:+918401430191" className="text-white/70 hover:text-white text-lg transition-colors">
                          +91 84014 30191
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-morphism group-hover:bg-gradient-to-br group-hover:from-dj-pink/20 group-hover:to-dj-pink/5 flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-all duration-300">
                        <Mail className="w-6 h-6 text-dj-pink" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1 group-hover:text-dj-pink transition-colors">Email</h4>
                        <a href="mailto:contact@djmoral.com" className="text-white/70 hover:text-white text-lg transition-colors">
                          contact@djmoral.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-morphism group-hover:bg-gradient-to-br group-hover:from-dj-blue/20 group-hover:to-dj-blue/5 flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-dj-blue" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1 group-hover:text-dj-blue transition-colors">Location</h4>
                        <p className="text-white/70 text-lg">
                          Ahmedabad, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Us Button - Futuristic CTA */}
                  <div className="mt-auto relative z-10">
                    <Button 
                      onClick={handleCallClick}
                      className="w-full h-20 text-xl font-bold relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-dj-electric via-dj-purple to-dj-pink group-hover:bg-[length:200%_100%] transition-all duration-700"></span>
                      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,white_0,transparent_100%)]"></span>
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <Phone className="w-8 h-8 group-hover:animate-pulse" /> 
                        <span className="tracking-wider">CONTACT DJ MORAL</span>
                      </span>
                    </Button>
                    <p className="text-white/50 text-center mt-4 text-sm flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-dj-electric animate-pulse"></span>
                      Touch to call directly
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border border-dj-electric/30 animate-spin-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-dj-pink/30 animate-spin-slow" style={{ animationDuration: '25s' }}></div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-8 rounded-full bg-gradient-to-b from-dj-electric to-transparent"
                  style={{ opacity: 0.7 - i * 0.15 }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sound wave footer */}
        <div className="mt-20 relative w-full h-14 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0">
              <path 
                fill="rgba(139, 92, 246, 0.2)" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-slow"
              ></path>
              <path 
                fill="rgba(217, 70, 239, 0.2)" 
                fillOpacity="1" 
                d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,149.3C672,171,768,213,864,202.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-slow"
                style={{ animationDelay: '0.2s' }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
