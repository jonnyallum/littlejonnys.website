import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ExternalLink, Send } from 'lucide-react';

/**
 * Book Now Page
 * Rustic Carnival Energy Design: Functional booking form with email integration
 */
export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    serviceType: '',
    dietaryRequirements: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Event Booking Inquiry - ${formData.eventType} on ${formData.eventDate}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

EVENT DETAILS:
Event Type: ${formData.eventType}
Date: ${formData.eventDate}
Guest Count: ${formData.guestCount}
Venue: ${formData.venue}
Service Type: ${formData.serviceType}
Dietary Requirements: ${formData.dietaryRequirements || 'None specified'}

MESSAGE:
${formData.message}
    `.trim();

    // Open mailto link
    window.location.href = `mailto:jonny@littlejonnys.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        venue: '',
        serviceType: '',
        dietaryRequirements: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-accent">Event</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Tell us about your event and we'll prepare a tailored quote. We cater across Portsmouth, Emsworth, Chichester, Arundel, Worthing, Hayling Island, Hampshire and West Sussex.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Tell Us About Your <span className="text-accent">Event</span>
            </h2>

            {submitted && (
              <div className="mb-8 p-6 bg-accent/20 border-2 border-accent rounded-lg text-center">
                <p className="text-foreground font-bold text-lg">
                  ✓ Your booking inquiry has been sent to jonny@littlejonnys.co.uk
                </p>
                <p className="text-foreground/80 mt-2">
                  We'll get back to you within 24 hours with a tailored quote.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-accent/20">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-bold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Event Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="07123 456789"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-bold mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select event type...</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Wake/Funeral">Wake or Funeral Reception</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date & Guest Count Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-bold mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-bold mb-2">Guest Count *</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="Approximate number"
                  />
                </div>
              </div>

              {/* Venue & Service Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-bold mb-2">Venue *</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="e.g., The Grand Hotel, Outdoor Garden"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-bold mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select service...</option>
                    <option value="Hog Roast">Hog Roast</option>
                    <option value="Wood-Fired Pizza Van">Wood-Fired Pizza Van</option>
                    <option value="Mobile Bar">Mobile Bar</option>
                    <option value="Buffet">Buffet</option>
                    <option value="Canapés">Canapés</option>
                    <option value="Grazing Board">Grazing Board</option>
                    <option value="Personal Chef">Personal Chef Services</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
              </div>

              {/* Dietary Requirements */}
              <div>
                <label className="block text-foreground font-bold mb-2">Dietary Requirements</label>
                <input
                  type="text"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g., Vegetarian, Vegan, Gluten-free, Allergies"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-foreground font-bold mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background text-foreground border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us anything else about your event - special requests, setup preferences, budget, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                Send Booking Inquiry
              </button>

              <p className="text-foreground/70 text-sm text-center">
                * Required fields. Your inquiry will be sent directly to jonny@littlejonnys.co.uk
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Other Ways to <span className="text-accent">Connect</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-background rounded-xl border border-accent/20 hover:border-accent transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Phone size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Call Us</h3>
              <a 
                href="tel:07723959178"
                className="text-lg text-accent font-bold hover:text-yellow-300 transition-colors"
              >
                07723 959178
              </a>
              <p className="text-foreground/70 mt-4">
                Quick enquiries and bookings
              </p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-background rounded-xl border border-accent/20 hover:border-accent transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Mail size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Email</h3>
              <a 
                href="mailto:jonny@littlejonnys.co.uk"
                className="text-lg text-accent font-bold hover:text-yellow-300 transition-colors break-all"
              >
                jonny@littlejonnys.co.uk
              </a>
              <p className="text-foreground/70 mt-4">
                Detailed event enquiries
              </p>
            </div>

            {/* Service Areas */}
            <div className="text-center p-8 bg-background rounded-xl border border-accent/20 hover:border-accent transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <MapPin size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Service Areas</h3>
              <p className="text-foreground/70">
                South Coast: Portsmouth, Chichester, Worthing, Arundel, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Follow <span className="text-accent">Us</span>
          </h2>

          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://www.instagram.com/littlejonnyscatering?igsh=eTZlYnNjbDZ1dmx5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors font-bold text-lg"
            >
              <Instagram size={28} />
              <span className="hidden sm:inline">@littlejonnyscatering</span>
              <span className="sm:hidden">Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com/share/1APWf2a9Xm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors font-bold text-lg"
            >
              <Facebook size={28} />
              <span className="hidden sm:inline">Little Jonnys Catering</span>
              <span className="sm:hidden">Facebook</span>
            </a>
          </div>

          <p className="text-foreground/80">
            Follow us for event inspiration, menu ideas and special offers
          </p>
        </div>
      </section>
    </div>
  );
}
