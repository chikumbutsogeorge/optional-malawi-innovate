import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
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
      className={`${className} relative overflow-hidden rounded-3xl bg-gradient-to-br from-background/80 via-background/90 to-background/80 p-6 shadow-xl backdrop-blur-sm border border-primary/10 group hover:border-primary/20 hover:shadow-primary/10 hover:bg-gradient-to-br hover:from-primary/5 hover:via-secondary/5 hover:to-primary/5 transition-all duration-500`}
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
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <main className="relative">
        {/* Services Section */}
        <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ opacity: servicesOpacity }}
      >
        <Parallax 
          translateY={[20, -20]} 
          className="absolute inset-0 bg-gradient-to-b from-background to-background/50" 
        />
        <Parallax
          translateY={[-10, 10]}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4444ff08_1px,transparent_1px),linear-gradient(to_bottom,#4444ff08_1px,transparent_1px)] bg-[size:44px_44px]"
        />
        <Parallax
          translateY={[5, -5]}
          scale={[0.8, 1.2]}
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-primary/5"
        />
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

          <Parallax translateY={[0, -20]} className="relative z-10">
            <div className="grid grid-cols-12 gap-4">
              {services.map((service, index) => {
              const IconComponent = service.icon;
              // New layout pattern for bento grid
              const isLarge = index === 0;
              const isMedium = index === 1 || index === 4;
              const isVertical = index === 2 || index === 5;
              const isHorizontal = index === 3;
              
              return (
                <BentoCard
                  key={index}
                  className={`
                    ${isLarge ? 'col-span-12 md:col-span-8 md:row-span-2' : ''}
                    ${isMedium ? 'col-span-12 md:col-span-4 md:row-span-1' : ''}
                    ${isVertical ? 'col-span-12 md:col-span-4 md:row-span-2' : ''}
                    ${isHorizontal ? 'col-span-12 md:col-span-8 md:row-span-1' : ''}
                    ${(!isLarge && !isMedium && !isVertical && !isHorizontal) ? 'col-span-12 md:col-span-4 md:row-span-1' : ''}
                    min-h-[200px] group cursor-pointer
                  `}
                  delay={index * 0.1}
                >
                  <motion.div 
                    className="h-full flex flex-col justify-between p-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent className={`h-6 w-6 ${service.color} drop-shadow-glow`} />
                        </motion.div>
                        <motion.div
                          className="h-8 w-8 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground/90">{service.description}</p>
                      </div>
                    </div>
                    <motion.div 
                      className="flex items-center text-primary font-medium mt-4 group-hover:text-secondary transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span>Learn more</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </BentoCard>
              );
              })}
            </div>

            <div className="text-center mt-12">
              <Parallax translateY={[0, -30]} scale={[0.95, 1.05]}>
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-primary">
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Parallax>
            </div>
          </Parallax>
        </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ opacity: valuesOpacity }}
      >
        <Parallax translateY={[-30, 30]} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
        </Parallax>
        <Parallax translateY={[15, -15]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5" />
        </Parallax>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Parallax translateY={[0, -20]} className="relative z-10">
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
          </Parallax>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ opacity: ctaOpacity }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0">
          <Parallax translateY={[-40, 40]}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
          </Parallax>
          <Parallax translateY={[20, -20]} scale={[0.8, 1.2]}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10" />
          </Parallax>
          <Parallax translateY={[-10, 10]}>
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px"
          }}
        />
          </Parallax>
          <Parallax translateY={[0, -30]}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          </Parallax>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
          >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
          className="bg-gradient-primary hover:shadow-primary"
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
          className="border-primary hover:bg-primary/10"
            >
          <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </motion.div>
          </motion.div>
        </div>
      </motion.section>
      </main>

      <Parallax translateY={[0, -20]}>
        <Footer />
      </Parallax>
    </div>
  </ParallaxProvider>
  );
};

export default Home;