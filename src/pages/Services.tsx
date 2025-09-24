import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  Building, 
  Truck, 
  Home as HomeIcon, 
  ShoppingCart,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      icon: CreditCard,
      title: 'Optional Credit Rescue',
      shortDesc: 'Debt relief services',
      description: 'Our professional debt relief services help individuals and businesses regain their financial freedom. We provide comprehensive debt management solutions, negotiation with creditors, and personalized repayment plans.',
      features: [
        'Debt consolidation and management',
        'Creditor negotiation services',
        'Financial counseling and planning',
        'Personalized repayment strategies'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Optional Insurance Agency',
      shortDesc: 'Insurance consultancy',
      description: 'Comprehensive insurance consultancy services providing expert advice on various insurance products. We help you find the right coverage for your personal and business needs.',
      features: [
        'Life and health insurance consultation',
        'Business insurance solutions',
        'Property and casualty coverage',
        'Insurance claims assistance'
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Building,
      title: 'Optional Financial Services',
      shortDesc: 'Money lending services',
      description: 'Reliable money lending services with competitive rates and flexible terms. We provide various financing solutions to meet your personal and business financial needs.',
      features: [
        'Personal loans and advances',
        'Business financing solutions',
        'Competitive interest rates',
        'Flexible repayment terms'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Truck,
      title: 'Optional Transport & Logistics',
      shortDesc: 'Transport solutions for goods & passengers',
      description: 'Efficient transport solutions for both goods and passengers throughout Malawi. Our logistics network ensures timely and safe delivery of your cargo and comfortable passenger transport.',
      features: [
        'Freight and cargo transport',
        'Passenger transport services',
        'Logistics planning and coordination',
        'Nationwide coverage'
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: HomeIcon,
      title: 'Optional Properties',
      shortDesc: 'Buying, selling, and managing properties',
      description: 'Professional property services including buying, selling, and property management. We help you navigate the real estate market with expert guidance and comprehensive support.',
      features: [
        'Property buying and selling',
        'Property management services',
        'Real estate consultation',
        'Property valuation and assessment'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: ShoppingCart,
      title: 'Optional Investments',
      shortDesc: 'Supply of goods and services tailored to customers',
      description: 'Supply of goods and services tailored to meet specific customer requirements. We connect businesses and individuals with the products and services they need.',
      features: [
        'Customized product sourcing',
        'Service provider connections',
        'Supply chain management',
        'Quality assurance and delivery'
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Sectors
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We provide diverse, innovative solutions across six key sectors to meet 
            the evolving needs of individuals, businesses, and communities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-border h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">
                          {service.shortDesc}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full ${service.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'} mr-3`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can help you achieve your goals. 
              Our team is ready to provide personalized solutions for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                <p className="text-sm text-muted-foreground">
                  +265 998 419 201<br />
                  +265 881 301 364
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us your inquiries</p>
                <p className="text-sm text-muted-foreground">
                  info@optionalgroupofcompaniesltd.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Contact Form</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed message</p>
                <Button asChild className="bg-gradient-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        </motion.div>
        <Parallax translateY={[0, -20]}>
          <Footer />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Services;