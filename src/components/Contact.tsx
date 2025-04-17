
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Instagram, Music, Send, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, useState] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-dj-dark">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-full w-full">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-dj-electric/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-dj-pink/10 blur-3xl" />
          <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full bg-dj-blue/5 blur-3xl" />
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-dj-electric animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-5 h-5 rounded-full bg-dj-pink animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-dj-blue animate-float" style={{ animationDelay: '0.8s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Connect With DJ Moral</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Ready to elevate your event with electrifying beats? Get in touch now and let's create an unforgettable experience!
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Contact card - redesigned with image */}
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="neo-blur overflow-hidden rounded-2xl border-white/5">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Visual */}
                <div className="relative h-full min-h-[300px] md:min-h-[500px] overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dj-dark/80 via-dj-pink/20 to-transparent z-10"></div>
                  
                  {/* DJ image */}
                  <img 
                    src="/lovable-uploads/ef960640-856b-43c0-a57d-9f5f90d7ef49.png" 
                    alt="DJ Moral Performing" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-2">DJ Moral</h3>
                      <p className="text-white/80 mb-4">Music Producer & Professional DJ</p>
                      
                      <div className="flex space-x-3 mt-4">
                        <a 
                          href="https://www.instagram.com/dj_moral/"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-dj-pink/80 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://soundcloud.com/dj_moral"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-dj-electric/80 transition-colors"
                        >
                          <Music className="w-5 h-5" />
                        </a>
                        <a 
                          href="tel:+918401430191" 
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-dj-blue/80 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Contact info + form */}
                <div className="p-8 md:p-12 backdrop-blur-md bg-black/50">
                  <h3 className="text-2xl font-bold text-gradient mb-8">Get In Touch</h3>
                  
                  <div className="space-y-6 mb-8">
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
                        <MapPin className="w-5 h-5 text-dj-blue" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Location</h4>
                        <p className="text-white/70">
                          Ahmedabad, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick contact form */}
                  <div className="mt-8 p-6 rounded-lg bg-black/30 border border-white/5">
                    <h4 className="text-lg font-medium text-white mb-4">Quick Booking Inquiry</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <Input 
                          type="text" 
                          placeholder="Your Name" 
                          className="bg-white/5 border-white/10 focus:border-dj-electric text-white" 
                        />
                      </div>
                      <div>
                        <Input 
                          type="text" 
                          placeholder="Event Date" 
                          className="bg-white/5 border-white/10 focus:border-dj-electric text-white" 
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Tell us about your event..." 
                          className="bg-white/5 border-white/10 focus:border-dj-electric text-white resize-none" 
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-dj-electric to-dj-pink hover:shadow-lg hover:shadow-dj-pink/20 transition-all">
                        <Send className="w-4 h-4 mr-2" /> Send Inquiry
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border border-dj-pink/30 animate-spin-slow"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-dj-electric/30 animate-spin-slow" style={{ animationDuration: '18s' }}></div>
          </div>
          
          {/* Decorative equalizer at the bottom */}
          <div className="mt-16 flex justify-center gap-1">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="visualizer-bar" 
                style={{ 
                  height: `${Math.random() * 40 + 10}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
