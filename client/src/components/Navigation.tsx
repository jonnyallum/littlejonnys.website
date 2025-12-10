import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

/**
 * Navigation Component
 * Rustic Carnival Energy Design: Bold yellow accent, charcoal base, smooth transitions
 * Features responsive mobile menu with smooth animations
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/wakes', label: 'Wakes' },
    { href: '/corporate', label: 'Corporate' },
    { href: '/book', label: 'Book Now' },
  ];

  return (
    <nav className="bg-background text-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-accent text-background font-black flex items-center justify-center shadow-lg">
            LJ
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">Little Jonnys</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Catering Co.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 ml-16">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Social Media Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1APWf2a9Xm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/littlejonnyscatering?igsh=eTZlYnNjbDZ1dmx5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-accent/20 animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="border-t border-accent/20 pt-4 mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/share/1APWf2a9Xm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <Facebook size={20} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/littlejonnyscatering?igsh=eTZlYnNjbDZ1dmx5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
