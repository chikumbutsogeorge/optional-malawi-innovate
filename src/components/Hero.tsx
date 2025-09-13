import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10 opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Creating a{' '}
              <span className="text-secondary">Sustainable Future</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Through innovation, collaboration, and responsible business practices. 
              Optional Group of Companies Ltd provides diverse services across six core sectors.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>Proudly Malawian-owned</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>6 Core Sectors</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>Innovative Solutions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-white/80">Core Sectors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2021</div>
                  <div className="text-white/80">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-white/80">Malawian Owned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-white/80">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;