import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin } from 'lucide-react';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
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
    <section id="booking" className="py-32 px-6 bg-[#030303] border-t border-white/10 select-none relative z-10">

      {/* BACKGROUND GRAPH GRID ARCHITECTURE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* HEADER TRACK LAYER */}
        <div className="w-full flex flex-col items-start border-b border-white/10 pb-12 mb-16">
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4">// BOOKING FORM</p>
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            BOOK DJ MORAL.
          </h2>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest mt-4">
            Let us know your event details and check availability.
          </p>
        </div>

        {/* HARD MATRIX FORM BOX */}
        <div className="bg-[#080808] border border-white/10 p-8 md:p-12 rounded-none relative">
          <span className="absolute top-4 right-4 font-mono text-[9px] text-zinc-600">INQUIRY FORM</span>

          <form
            action="https://formsubmit.co/djmoral.booking@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Hidden FormSubmit Configurations */}
            <input type="hidden" name="_subject" value="New DJ Booking Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Name *</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="YOUR FULL NAME"
                  className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 h-14 rounded-none focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Phone *</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="YOUR PHONE NUMBER"
                  className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 h-14 rounded-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Email *</label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 h-14 rounded-none focus:border-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="date" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-zinc-600" />
                  Event Date *
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="bg-black border-white/10 text-xs font-mono text-white h-14 rounded-none focus:border-white transition-colors uppercase"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-zinc-600" />
                  City *
                </label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="VENUE LOCATION / CITY"
                  className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 h-14 rounded-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="function_type" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Function Type *</label>
              <Select name="function_type" required>
                <SelectTrigger className="bg-black border-white/10 text-xs font-mono text-zinc-400 h-14 rounded-none focus:border-white transition-colors uppercase">
                  <SelectValue placeholder="SELECT EVENT TYPE" />
                </SelectTrigger>
                <SelectContent className="bg-[#090909] border-white/10 rounded-none">
                  {functionTypes.map((type) => (
                    <SelectItem key={type} value={type} className="text-white hover:bg-white hover:text-black font-mono text-xs uppercase rounded-none transition-colors">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="time_slot" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-zinc-600" />
                  Time Slot *
                </label>
                <Select name="time_slot" required>
                  <SelectTrigger className="bg-black border-white/10 text-xs font-mono text-zinc-400 h-14 rounded-none focus:border-white transition-colors uppercase">
                    <SelectValue placeholder="SELECT TIME SLOT" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#090909] border-white/10 rounded-none">
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot} className="text-white hover:bg-white hover:text-black font-mono text-xs uppercase rounded-none transition-colors">
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="sound_requirements" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Sound Requirements *</label>
                <Select name="sound_requirements" required>
                  <SelectTrigger className="bg-black border-white/10 text-xs font-mono text-zinc-400 h-14 rounded-none focus:border-white transition-colors uppercase">
                    <SelectValue placeholder="SELECT SOUND REQUIREMENTS" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#090909] border-white/10 rounded-none">
                    {soundRequirements.map((req) => (
                      <SelectItem key={req} value={req} className="text-white hover:bg-white hover:text-black font-mono text-xs uppercase rounded-none transition-colors">
                        {req}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="venue_name" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Venue Name</label>
              <Input
                id="venue_name"
                name="venue_name"
                type="text"
                placeholder="VENUE NAME"
                className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 h-14 rounded-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="additional_details" className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">Additional Details</label>
              <Textarea
                id="additional_details"
                name="additional_details"
                placeholder="ENTER ANY ADDITIONAL EVENT DETAILS OR SPECIAL REQUESTS..."
                className="bg-black border-white/10 text-xs font-mono text-white placeholder:text-zinc-700 min-h-[120px] rounded-none focus:border-white transition-colors uppercase resize-none p-4"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ffffff] text-black font-mono text-sm font-black py-6 rounded-none hover:bg-zinc-200 active:scale-[0.99] transition-all uppercase tracking-[0.2em] italic"
            >
              {isSubmitting ? "SUBMITTING REQUEST..." : "SUBMIT INQUIRY"}
            </Button>

            <p className="font-mono text-[9px] text-zinc-600 tracking-widest text-center uppercase">
              // We will get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;