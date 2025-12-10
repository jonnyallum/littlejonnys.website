import { Link } from 'wouter';
import { ArrowRight, Flame, Pizza, Wine, Utensils, Users, Heart } from 'lucide-react';

/**
 * Home Page
 * Rustic Carnival Energy Design: Bold hero with logo and key services, flowing sections
 * Showcases main services and calls to action
 */
export default function Home() {
  const services = [
    {
      icon: Flame,
      title: 'Hog Roasts',
      description: 'Slow-roasted pork with golden crackling, carved fresh on site with all the trimmings.',
      href: '/services#hog-roast',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
    },
    {
      icon: Pizza,
      title: 'Wood-Fired Pizza',
      description: 'Hand-stretched dough, fresh toppings, wood-fired flavour straight to your event.',
      href: '/services#pizza',
      image: 'https://images.unsplash.com/photo-1548365328-8b849a6d3c94?auto=format&fit=crop&w=1400&q=80',
    },
    {
      icon: Utensils,
      title: 'Catering & Buffets',
      description: 'Elegant canapés, generous buffets, and show-stopping grazing tables.',
      href: '/services#catering',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80',
    },
    {
      icon: Wine,
      title: 'Mobile Bar',
      description: 'Fully stocked bar with cocktails, fizz, spirits and beer served by professionals.',
      href: '/services#bar',
      image: 'https://images.unsplash.com/photo-1514369118554-e20d93546b30?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Logo & Key Services */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1548365328-8b849a6d3c94?auto=format&fit=crop&w=1600&q=80&sat=-8)',
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-accent text-background font-black text-4xl md:text-5xl flex items-center justify-center shadow-2xl animate-fade-in">
                LJ
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground drop-shadow-lg">
                Little Jonnys Catering
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Wedding, Wake & Event Catering
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Award-winning catering across the South Coast. From wood-fired pizzas to legendary hog roasts, we deliver unforgettable events.
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="mt-16 mb-12">
            <p className="text-sm uppercase tracking-widest text-accent font-bold mb-8">Our Signature Services</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { name: 'Hog Roast', icon: Flame },
                { name: 'Mobile Bar', icon: Wine },
                { name: 'Pizza Van', icon: Pizza },
                { name: 'Buffets', icon: Utensils },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="p-6 bg-card rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <div className="flex justify-center mb-4">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2">
              Book Your Event <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="bg-card text-foreground px-6 py-3 rounded-lg font-bold hover:bg-card/80 transition-all duration-300 border border-accent/30 hover:border-accent/60">
              Explore All Services
            </Link>
          </div>

          {/* Service Areas */}
          <div className="mt-16 pt-12 border-t border-accent/20">
            <p className="text-sm text-muted-foreground mb-4">Serving across the South Coast</p>
            <p className="text-foreground font-semibold">
              Portsmouth • Emsworth • Chichester • Arundel • Worthing • Hayling Island • Hampshire • West Sussex
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
              About Little Jonnys
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Little Jonnys began in 2015 when Jonny was flipping homemade burgers from a small van and firing rustic pizzas from a quirky trike at local events. Those early days shaped the ethos we still live by: real food, real flavour, real service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we offer hog roasts, wood-fired pizza vans, mobile bar hire, canapés, buffets, grazing boards and personal chef services for families and events across the South Coast. It's not just catering — it's the story of passion, craft and a genuine love of feeding people well.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Our Catering Services
            </h2>
            <p className="text-xl text-muted-foreground">
              We tailor every menu and setup to your event, venue and guests. No templates. No stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 md:h-96 block">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/40 transition-colors">
                        <Icon size={24} className="text-accent" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/90 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Why Choose Little Jonnys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Handcrafted Food',
                description: 'Everything we serve is handcrafted, full of flavour and designed to make your day run beautifully.',
              },
              {
                icon: Users,
                title: 'Years of Experience',
                description: 'Built on street-food roots and years of event experience across Hampshire and West Sussex.',
              },
              {
                icon: Flame,
                title: 'Real Passion',
                description: 'We genuinely love feeding people well. Your event is our priority, not just another booking.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow border border-accent/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Tell us about your event, date and venue and we'll prepare a tailored quote.
          </p>
          <Link href="/book" className="inline-flex items-center gap-2 bg-card text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-card/90 transition-colors">
            Book Now <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
