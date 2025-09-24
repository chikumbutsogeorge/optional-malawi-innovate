import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${className} relative overflow-hidden rounded-3xl bg-gradient-to-b from-background/90 to-background p-6 shadow-lg backdrop-blur-sm border border-primary/10 group hover:border-primary/20 hover:shadow-primary/5 transition-all duration-500`}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  const servicesY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const valuesY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const ctaY = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const valuesOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

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
      <main>
        {/* Services Section */}
        <motion.section 
        className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/50"
        style={{ y: servicesY, opacity: servicesOpacity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4444ff08_1px,transparent_1px),linear-gradient(to_bottom,#4444ff08_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We operate across six diverse sectors, providing innovative solutions 
              that meet the evolving needs of our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isWide = index === 0 || index === 3;
              const isTall = index === 2 || index === 5;
              
              return (
                <BentoCard
                  key={index}
                  className={`
                    ${isWide ? 'col-span-12 md:col-span-8' : isTall ? 'col-span-12 md:col-span-4 md:row-span-2' : 'col-span-12 md:col-span-4'}
                    group cursor-pointer
                  `}
                  delay={index * 0.1}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className={`h-6 w-6 ${service.color}`} />
                      </motion.div>
                      <motion.div
                        className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <motion.div 
                      className="mt-auto flex items-center text-primary font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </BentoCard>
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
        </motion.section>

        {/* Values Section */}
        <motion.section 
        className="py-20 relative"
        style={{ y: valuesY, opacity: valuesOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment 
              to excellence and social responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <BentoCard
                  key={index}
                  className="col-span-12 md:col-span-4"
                  delay={index * 0.2}
                >
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-secondary to-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="h-8 w-8 text-white drop-shadow-md" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </BentoCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ y: ctaY, opacity: ctaOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          style={{
            background: "radial-gradient(circle at center, white 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect solution for your needs. 
              Contact our team today to learn more about our services.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 backdrop-blur-sm shadow-lg shadow-black/20 border-2 border-white/20"
                >
                  <Link to="/contact">
                    Contact Us Today
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm shadow-lg shadow-black/20"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;