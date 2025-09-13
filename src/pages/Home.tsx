import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  Building, 
  Truck, 
  Home as HomeIcon, 
  ShoppingCart,
  ArrowRight,
  Star
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Optional Credit Rescue',
      description: 'Professional debt relief services to help you regain financial freedom.',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Optional Insurance Agency',
      description: 'Comprehensive insurance consultancy for all your protection needs.',
      color: 'text-secondary'
    },
    {
      icon: Building,
      title: 'Optional Financial Services',
      description: 'Reliable money lending services with competitive rates.',
      color: 'text-primary'
    },
    {
      icon: Truck,
      title: 'Optional Transport & Logistics',
      description: 'Efficient transport solutions for goods and passengers.',
      color: 'text-secondary'
    },
    {
      icon: HomeIcon,
      title: 'Optional Properties',
      description: 'Professional property buying, selling, and management services.',
      color: 'text-primary'
    },
    {
      icon: ShoppingCart,
      title: 'Optional Investments',
      description: 'Supply of goods and services tailored to customer needs.',
      color: 'text-secondary'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We embrace cutting-edge solutions and creative thinking.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.'
    },
    {
      icon: Building,
      title: 'Quality',
      description: 'We deliver excellence in every service we provide.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We operate across six diverse sectors, providing innovative solutions 
              that meet the evolving needs of our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-border">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-primary">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment 
              to excellence and social responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect solution for your needs. 
            Contact our team today to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;