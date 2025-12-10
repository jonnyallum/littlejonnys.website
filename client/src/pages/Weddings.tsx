import { Heart, CheckCircle } from 'lucide-react';

/**
 * Weddings Page
 * Rustic Carnival Energy Design: Romantic yet celebratory, showcasing wedding-specific services
 */
export default function Weddings() {
  const weddingServices = [
    {
      title: 'Wedding Hog Roasts',
      description: 'A rustic showpiece with crisp crackling and rich, slow-roasted flavour — perfect for relaxed weddings and outdoor venues.',
    },
    {
      title: 'Wedding Pizza Van',
      description: 'Fun, fast and delicious. Ideal for evening food, festival weddings and keeping the dance floor fuelled.',
    },
    {
      title: 'Wedding Canapés, Buffets & Grazing Tables',
      description: 'Beautifully presented food that encourages guests to mingle and enjoy themselves.',
    },
    {
      title: 'Wedding Bar Hire',
      description: 'Cocktails, fizz, spirits and beer served by a friendly, professional bar team. Fully stocked, fully staffed.',
    },
  ];

  const whyChoose = [
    'Friendly, experienced wedding caterers',
    'Menus tailored to your vision',
    'No fuss, no pretension — just great food',
    'Smooth communication and clear pricing',
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
            Wedding Catering by <span className="text-accent">Little Jonnys</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your wedding deserves food that feels personal, exciting and unforgettable. Whether you're planning a barn celebration, marquee wedding or festival-style event, we tailor every detail around your day.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-card border-b border-accent/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/80 mb-6">
            Serving couples across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Portsmouth',
              'Emsworth',
              'Chichester',
              'Arundel',
              'Worthing',
              'Hayling Island',
              'Westbourne',
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

      {/* Wedding Catering Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">
            Wedding Catering That <span className="text-accent">Fits Your Day</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we have the perfect catering solution for your wedding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingServices.map((service, index) => (
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
            Why Couples <span className="text-accent">Choose Us</span>
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
              Your wedding food should feel effortless. That's exactly what we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              A <span className="text-accent">Personal Touch</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              We understand that every wedding is unique. That's why we work closely with you to understand your vision, your guests, and your preferences. Whether you want a rustic hog roast, elegant canapés, or a fun pizza van for evening food, we'll create a menu and experience that feels authentically yours.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From initial consultation to the final toast, we're here to make sure your wedding catering is as special as your day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Plan Your Wedding Menu
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your wedding catering and get a tailored quote.
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
