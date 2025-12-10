import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

/**
 * NotFound Page
 * 404 error page with navigation back to home
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. Let's get you back to exploring our catering services.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
