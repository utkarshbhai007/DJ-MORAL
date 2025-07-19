import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    // FormSubmit will handle the actual submission
    // The timeout is just for UX feedback
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const functionTypes = [
    "After Party (Cocktail)",
    "Carnival", 
    "College Gigs",
    "Commercial Events",
    "Haldi Ceremony",
    "Mehndi Function",
    "Sangeet Night"
  ];

  const timeSlots = [
    "Morning",
    "Evening", 
    "Full Day"
  ];

  const soundRequirements = [
    "With Sound System",
    "Without Sound System"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Book DJ Moral</h2>
          <p className="text-xl text-gray-300">Ready to make your event unforgettable? Get in touch!</p>
        </div>
        
        <Card className="bg-black/50 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              Event Booking Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/djmoral.booking@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New DJ Booking Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-sm font-medium">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-white text-sm font-medium">Phone *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm font-medium">Email *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-white text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Event Date *
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="bg-gray-800/50 border-gray-600 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="city" className="text-white text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Event city"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="function_type" className="text-white text-sm font-medium">Function Type *</label>
                <Select name="function_type" required>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select function type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {functionTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="time_slot" className="text-white text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time Slot *
                  </label>
                  <Select name="time_slot" required>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="text-white hover:bg-gray-700">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="sound_requirements" className="text-white text-sm font-medium">Sound Requirements *</label>
                  <Select name="sound_requirements" required>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Sound system needs" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {soundRequirements.map((req) => (
                        <SelectItem key={req} value={req} className="text-white hover:bg-gray-700">
                          {req}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="venue_name" className="text-white text-sm font-medium">Venue Name</label>
                <Input
                  id="venue_name"
                  name="venue_name"
                  type="text"
                  placeholder="Event venue name"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="additional_details" className="text-white text-sm font-medium">Additional Details</label>
                <Textarea
                  id="additional_details"
                  name="additional_details"
                  placeholder="Any special requirements, guest count, or other details..."
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Book Now"}
              </Button>
              
              <p className="text-sm text-gray-400 text-center">
                We'll get back to you within 24 hours with availability and pricing details.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;