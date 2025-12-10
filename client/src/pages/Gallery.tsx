import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Gallery Page
 * Rustic Carnival Energy Design: Showcase event photos in a masonry grid
 * Features lightbox modal for full-size image viewing
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1544145945-f90425340c7b?auto=format&fit=crop&w=1400&q=80',
      alt: 'Wood-fired pizza oven at an event',
    },
    {
      src: 'https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=1400&q=80',
      alt: 'Outdoor wedding feast',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
      alt: 'Hog roast carving station',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80',
      alt: 'Corporate event catering buffet',
    },
    {
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80',
      alt: 'Charcuterie and grazing board',
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
      alt: 'Table service at a formal dinner',
    },
    {
      src: 'https://images.unsplash.com/photo-1514369118554-e20d93546b30?auto=format&fit=crop&w=1400&q=80',
      alt: 'Cocktails at the mobile bar',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80&sat=-30',
      alt: 'Barbecue service at an outdoor event',
    },
    {
      src: 'https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=1400&q=80&sat=-15',
      alt: 'Garden party setup',
    },
    {
      src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=80',
      alt: 'Rustic desserts display',
    },
    {
      src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
      alt: 'Chef preparing canapés',
    },
    {
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80',
      alt: 'Guests enjoying outdoor dining',
    },
    {
      src: 'https://images.unsplash.com/photo-1463214317779-4e3530c0c1c9?auto=format&fit=crop&w=1400&q=80',
      alt: 'Family-style sharing platters',
    },
    {
      src: 'https://images.unsplash.com/photo-1548365328-8b849a6d3c94?auto=format&fit=crop&w=1400&q=80',
      alt: 'Pizza van serving guests',
    },
    {
      src: 'https://images.unsplash.com/photo-1544145945-77dd08b28e2e?auto=format&fit=crop&w=1400&q=80',
      alt: 'Open fire cooking under lights',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Our Events
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A showcase of the celebrations, weddings, corporate events, and wakes we've catered. 
            From intimate gatherings to large-scale events, see the quality and passion we bring to every occasion.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full size gallery image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-accent hover:bg-accent/80 text-background p-2 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-card py-16 md:py-20 border-t border-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Ready to Create Your Event?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's bring your celebration to life with the same quality and passion you see in these events.
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Book Your Event
          </a>
        </div>
      </section>
    </div>
  );
}
