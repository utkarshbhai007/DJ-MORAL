
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headphones, Calendar, Globe, Users } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About DJ Moral</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dj-electric to-dj-pink mx-auto"></div>
        </div>

        {/* About content */}
        <div 
          ref={ref} 
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-morphism p-6 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dj-electric/20 mb-4 mx-auto">
                <Calendar className="w-8 h-8 text-dj-electric" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center">6+ Years</h3>
              <p className="text-white/70 text-center">Professional Experience</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dj-pink/20 mb-4 mx-auto">
                <Headphones className="w-8 h-8 text-dj-pink" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center">1000+</h3>
              <p className="text-white/70 text-center">Shows Performed</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dj-blue/20 mb-4 mx-auto">
                <Globe className="w-8 h-8 text-dj-blue" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center">Multiple</h3>
              <p className="text-white/70 text-center">Cities & Countries</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dj-light/20 mb-4 mx-auto">
                <Users className="w-8 h-8 text-dj-light" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center">A-List</h3>
              <p className="text-white/70 text-center">Wedding Events</p>
            </div>
          </div>
          
          {/* Bio */}
          <div className="glass-morphism p-8 rounded-3xl">
            <p className="text-white/90 mb-6 leading-relaxed">
              DJ Moral is an Indian music producer and disk jockey from Ahmedabad, Gujarat. His rise in the music industry has been meteoric, having performed at several A-list weddings of the elite that have been widely publicized like Esha Kansara & Siddharth Amit Bhavsar, Navdeep Saini & Swati Asthana, and many more.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              With a career spanning over six years, Moral has mastered various genres including Bollywood, Punjabi, EDM, Techno, and Hip Hop. His journey includes not only thrilling club performances and private events but also unique experiences like spinning tracks on chartered flights.
            </p>
            <p className="text-white/90 leading-relaxed">
              He collaborates with talented performers including saxophonists, percussionists, vocalists, emcees, and dhol players to create unforgettable musical experiences.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-dj-electric/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 rounded-full bg-dj-pink/10 blur-3xl" />
    </section>
  );
};

export default About;
