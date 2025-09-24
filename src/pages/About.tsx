import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-hero py-20 relative overflow-hidden">
          <Parallax translateY={[-30, 30]}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
            </div>
          </Parallax>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Optional Group
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A proudly Malawian-owned company committed to creating sustainable solutions 
                and making a positive impact on our communities.
              </p>
            </motion.div>
          </div>
        </motion.section>

      {/* Company Story */}
      <motion.section 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  Optional Group of Companies Ltd is a proudly Malawian-owned company established on 
                  19th July 2021 and officially registered on 20th August 2021 with the Registrar 
                  of Companies in Malawi.
                </p>
                <p className="mb-6">
                  The company was founded by Elijah Jack Sande and Elisha Jack Sande after thorough 
                  research on the pressing needs of Malawians in their daily lives. We recognized 
                  the gaps in various sectors and committed ourselves to providing innovative solutions.
                </p>
                <p>
                  We operate across six (6) core sectors, providing diverse services tailored to meet 
                  the evolving needs of individuals, businesses, and communities throughout Malawi.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-6">
              <Parallax translateY={[-15, 15]}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">2021</div>
                    <div className="text-muted-foreground">Year Founded</div>
                  </CardContent>
                </Card>
              </Parallax>
              <Parallax translateY={[15, -15]}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">6</div>
                    <div className="text-muted-foreground">Core Sectors</div>
                  </CardContent>
                </Card>
              </Parallax>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Parallax translateY={[-10, 10]}>
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide innovative and sustainable solutions that meet the evolving needs of our customers, 
                      while upholding our commitment to quality, integrity, and social responsibility. We strive to 
                      create value for stakeholders, drive growth and profitability, and make a positive impact on 
                      the communities in which we operate.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Parallax>

            <Parallax translateY={[10, -10]}>
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mr-4">
                        <Eye className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating a sustainable future through innovation, collaboration, and responsible business practices. 
                      We envision a Malawi where businesses can thrive while contributing to the development and 
                      prosperity of our communities and nation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Parallax>
          </motion.div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decision-making and define who we are as an organization.
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new ideas, technologies, and approaches to solve problems and create value.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and ethical practices at all times.'
              },
              {
                title: 'Quality',
                description: 'We are committed to delivering excellence in every service and solution we provide.'
              },
              {
                title: 'Social Responsibility',
                description: 'We strive to make a positive impact on the communities where we operate.'
              }
            ].map((value, index) => (
              <Parallax key={index} translateY={[index % 2 === 0 ? -10 : 10, index % 2 === 0 ? 10 : -10]}>
                <motion.div 
                  variants={fadeInUp}
                  className="text-center hover:transform hover:scale-105 transition-transform duration-300">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </Parallax>
            ))}
          </motion.div>
        </div>
      </motion.section>

        </motion.div>
        <Parallax translateY={[0, -20]}>
          <Footer />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default About;