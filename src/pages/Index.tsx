
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import LoadingScreen from '@/components/LoadingScreen';
import Footer from '@/components/Footer';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Update page title and meta description
    document.title = "DJ Moral – Best DJ in Gujarat & International Performer | Top Indian DJ";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Moral - Gujarat\'s #1 DJ and international music producer. Book India\'s top DJ for weddings, clubs, corporate events & festivals. Professional DJ services across India and worldwide.');
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!showLoading && (
        <>
          {/* SEO-friendly header with structured content */}
          <header>
            <Navbar />
            <Hero />
          </header>

          {/* Main content with semantic HTML */}
          <main className="bg-black relative z-10">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

            {/* About section with structured content */}
            <section aria-label="About DJ Moral">
              <About />
            </section>

            {/* Booking Form section */}
            <section aria-label="Book DJ Moral">
              <BookingForm />
            </section>

            {/* Hidden SEO content for better indexing */}
            <div className="sr-only">
              <h1>DJ Moral - Premier DJ in Gujarat, India</h1>
              <p>Professional DJ services for weddings, corporate events, clubs, and festivals across Gujarat and India. International music producer with years of experience in electronic music, Bollywood, and fusion genres.</p>
              <h2>Services Offered</h2>
              <ul>
                <li>Wedding DJ Services in Gujarat</li>
                <li>Corporate Event DJ</li>
                <li>Club DJ Performances</li>
                <li>Festival DJ Sets</li>
                <li>Music Production</li>
                <li>Sound System Rental</li>
              </ul>
              <h2>Coverage Areas</h2>
              <p>Serving Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, and all major cities in Gujarat. Also available for events across India and international bookings.</p>
            </div>
          </main>

          {/* Footer with structured data */}
          <Footer />

        </>
      )}
    </div>
  );
};

export default Index;
