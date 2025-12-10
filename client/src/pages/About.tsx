import { Heart, Flame, Users } from 'lucide-react';

/**
 * About Page
 * Rustic Carnival Energy Design: Story-driven narrative with visual hierarchy
 */
export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">Little Jonnys</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            From street food roots to South Coast catering leaders
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Little Jonnys began back in 2015 when Jonny was flipping homemade burgers from a small van and firing rustic pizzas from a quirky trike at local events. Those early days shaped the ethos we still live by: <span className="font-bold text-foreground">real food, real flavour, real service.</span>
              </p>

              <p>
                A chance meeting at a food festival led to Brothers Kitchen, delivering Italian street food to weddings, festivals and even running a Portsmouth pub. After years of catering hog roasts, weddings, wakes, corporate functions, firework nights and buffets across Hampshire and West Sussex, Jonny brought everything back under one roof — Little Jonnys.
              </p>

              <p>
                Today, we offer hog roasts, a wood-fired pizza van, mobile bar hire, canapés, buffets, grazing boards and personal chef services for families and events across the South Coast. It's not just catering — it's the story of passion, craft and a genuine love of feeding people well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Our <span className="text-accent">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: 'Handcrafted Quality',
                description: 'Everything we serve is handcrafted with care. We believe in real ingredients, real techniques, and real flavour.',
              },
              {
                icon: Heart,
                title: 'Genuine Service',
                description: 'Your event is our priority. We listen, we care, and we go the extra mile to make your day unforgettable.',
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'We\'re rooted in the South Coast community. We know our customers, and we take pride in serving them well.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <Icon size={40} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Serving the <span className="text-accent">South Coast</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 text-center mb-8 leading-relaxed">
              We proudly serve customers across:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                <div key={index} className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="font-medium text-foreground">{area}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground/70 mt-8">
              Can't see your area? Get in touch — we may be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why <span className="text-accent">Choose Us</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: 'Years of Experience',
                description: 'Built on street-food roots and over a decade of event catering across Hampshire and West Sussex.',
              },
              {
                title: 'Tailored Solutions',
                description: 'No templates, no stress. We listen to your needs and create a bespoke catering experience for your event.',
              },
              {
                title: 'Professional Team',
                description: 'Experienced, friendly staff who understand the importance of your event and deliver with pride.',
              },
              {
                title: 'Quality Ingredients',
                description: 'We source quality ingredients and prepare everything fresh. Your guests deserve the best.',
              },
              {
                title: 'Flexible & Scalable',
                description: 'From intimate gatherings to large celebrations, we scale our services to match your needs.',
              },
              {
                title: 'Genuine Passion',
                description: 'We genuinely love what we do. Feeding people well and making events memorable is our mission.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-2 bg-accent/20 rounded-lg flex-shrink-0 mt-1">
                  <Flame size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Make Your Event Special
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Get in touch to discuss your catering needs
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
