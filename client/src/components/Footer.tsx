import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Rustic Carnival Energy Design: Charcoal background with golden accents
 * Displays contact info, social links, and service areas
 */
export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 md:py-16 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Little Jonnys</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Award-winning catering across the South Coast. From wood-fired pizzas to legendary hog roasts, we deliver unforgettable events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#hog-roast" className="hover:text-accent transition-colors">Hog Roasts</a></li>
              <li><a href="/services#pizza" className="hover:text-accent transition-colors">Wood-Fired Pizza</a></li>
              <li><a href="/services#bar" className="hover:text-accent transition-colors">Mobile Bar</a></li>
              <li><a href="/services#catering" className="hover:text-accent transition-colors">Catering & Buffets</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Service Areas</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Portsmouth, Emsworth, Westbourne, Chichester, Arundel, Worthing, Hayling Island, Leigh Park, Hampshire & West Sussex
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:07723959178" className="hover:text-accent transition-colors">07723 959178</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@littlejonnys.co.uk" className="hover:text-accent transition-colors">info@littlejonnys.co.uk</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground/60 mb-4 md:mb-0">
            © 2024 Little Jonnys Catering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/littlejonnyscatering?igsh=eTZlYnNjbDZ1dmx5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/share/1APWf2a9Xm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
