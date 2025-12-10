import { Heart, CheckCircle } from 'lucide-react';

/**
 * Wakes Page
 * Rustic Carnival Energy Design: Respectful, supportive tone with focus on comfort and care
 */
export default function Wakes() {
  const wakeServices = [
    {
      title: 'Wake Buffets',
      description: 'Freshly prepared sandwiches, savouries, pastries, salads and sweets — easy for guests to help themselves.',
    },
    {
      title: 'Grazing Boards & Displays',
      description: 'A gentle, visually warm alternative for informal gatherings and village halls.',
    },
    {
      title: 'Warm Food Options',
      description: 'For families wanting something heartier depending on the venue.',
    },
    {
      title: 'Tea, Coffee & Soft Drinks',
      description: 'Setup and service handled quietly and professionally.',
    },
  ];

  const whyChoose = [
    'Respectful and discreet staff',
    'Flexible menus for dietary needs',
    'Clear, calm communication',
    'No upselling — just support',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <Heart size={40} className="text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wake & Funeral <span className="text-accent">Catering</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We understand how difficult it can be to arrange a wake or funeral reception. Our role is to support you quietly and respectfully with comforting food and a smooth, stress-free service.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-card border-b border-accent/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/80 mb-6">
            Providing wake catering across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Portsmouth',
              'Emsworth',
              'Westbourne',
              'Chichester',
              'Arundel',
              'Worthing',
              'Hayling Island',
              'Leigh Park',
              'Hampshire',
              'West Sussex',
            ].map((area, index) => (
              <span key={index} className="px-4 py-2 bg-accent/10 text-foreground rounded-full text-sm font-medium border border-accent/30">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">
            Simple, Comforting Food for a <span className="text-accent">Difficult Day</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            We provide flexible, respectful catering that takes the pressure off during a challenging time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wakeServices.map((service, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            A Service That <span className="text-accent">Supports You</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-lg">{reason}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground/80 mt-12 text-lg leading-relaxed">
              We take care of the food so you can focus on what matters.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-8">
              Our <span className="text-accent">Commitment</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Arranging a wake or funeral reception is never easy. There are so many details to manage, and emotions run high. That's why we're here to help.
              </p>

              <p>
                Our team is trained to work with sensitivity and discretion. We listen to what you need, we're flexible with menus and timings, and we handle everything professionally so you can focus on family and friends.
              </p>

              <p>
                Whether you need a simple tea and sandwiches reception, a warm buffet, or something more substantial, we'll work with you to create a comfortable, welcoming space for your guests.
              </p>

              <p>
                We're here to support you. That's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your wake catering needs. We're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07723959178"
              className="inline-flex items-center justify-center gap-2 bg-card text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-card/90 transition-colors"
            >
              Call: 07723 959178
            </a>
            <a 
              href="mailto:info@littlejonnys.co.uk"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors"
            >
              Email: info@littlejonnys.co.uk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
