import { CheckCircle, Briefcase } from 'lucide-react';

/**
 * Corporate Page
 * Rustic Carnival Energy Design: Professional yet warm, emphasizing reliability and scalability
 */
export default function Corporate() {
  const corporateServices = [
    {
      title: 'Corporate Buffets',
      description: 'Fresh, varied menus for meetings, training sessions and office lunches.',
    },
    {
      title: 'Corporate Pizza Van',
      description: 'High-volume, fast service — perfect for staff appreciation days and open evenings.',
    },
    {
      title: 'Corporate Hog Roasts',
      description: 'A bold, high-impact option for outdoor company events and celebrations.',
    },
    {
      title: 'Grazing Boards & Canapés',
      description: 'Ideal for networking, client evenings and receptions.',
    },
    {
      title: 'Mobile Bar Hire',
      description: 'Staff parties, awards nights, seasonal celebrations — fully stocked and staffed.',
    },
  ];

  const whyChoose = [
    'Punctual and reliable',
    'Scalable to 20–500+ guests',
    'Professional presentation without the stiffness',
    'Clear invoicing and PO support',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <Briefcase size={40} className="text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Corporate Catering for <span className="text-accent">Business Events</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Professional, reliable and built for workplace timelines. Little Jonnys delivers catering for meetings, staff lunches, open days, launch events, conferences and company celebrations.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-card border-b border-accent/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/80 mb-6">
            Serving businesses across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Portsmouth',
              'Chichester',
              'Worthing',
              'Arundel',
              'Emsworth',
              'Hayling Island',
              'Havant',
              'Leigh Park',
              'Southampton',
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
            Catering Made for <span className="text-accent">Business</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            From intimate team lunches to large-scale company celebrations, we deliver professional catering that keeps your event running smoothly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why Businesses <span className="text-accent">Choose Us</span>
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
              Food your team will actually enjoy — delivered without disrupting your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-8">
              Scalable to Your <span className="text-accent">Needs</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Whether you're hosting a team of 20 or a company celebration for 500+, we have the capacity and expertise to deliver. Our flexible approach means we can adapt our services to fit your specific requirements, timeline and budget.
              </p>

              <p>
                We work with you from initial planning through to delivery, ensuring clear communication, transparent pricing and professional service throughout.
              </p>

              <p>
                We handle the catering logistics so you can focus on your business and your team.
              </p>
            </div>

            <div className="mt-12 p-8 bg-accent/10 rounded-xl border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-foreground mb-4">Quick Booking Process</h3>
              <ol className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span>Tell us about your event, date, venue and guest count</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span>We'll prepare a tailored quote and menu options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span>Confirm your booking and we'll handle the rest</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan Your Corporate Event
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your corporate catering needs and get a tailored quote.
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
