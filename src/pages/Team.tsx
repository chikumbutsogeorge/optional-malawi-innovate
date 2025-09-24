import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Linkedin, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// Import team images
import elijahSande from '@/assets/team/elijah-sande.jpg';
import elishaSande from '@/assets/team/elisha-sande.jpg';
import ruthSande from '@/assets/team/ruth-sande.jpg';
import ruthGuta from '@/assets/team/ruth-guta.jpg';
import bridgetteeKachingwe from '@/assets/team/bridgettee-kachingwe.jpg';
import josiahSande from '@/assets/team/josiah-sande.jpg';
import joanaChizenga from '@/assets/team/joana-chizenga.jpg';
import shiellahChizenga from '@/assets/team/shiellah-chizenga.jpg';

// Bento Card Component
const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${className} relative overflow-hidden rounded-3xl bg-gradient-to-br from-background/80 via-background/90 to-background/80 shadow-xl backdrop-blur-sm border border-primary/10 group hover:border-primary/20 hover:shadow-primary/10 hover:bg-gradient-to-br hover:from-primary/5 hover:via-secondary/5 hover:to-primary/5 transition-all duration-500`}
    >
      {children}
    </motion.div>
  );
};

const Team = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const teamMembers = [
    {
      name: 'Elijah Jack Sande',
      position: 'Director',
      image: elijahSande,
      description: 'Co-founder and visionary leader with extensive experience in business development and strategic planning.',
      email: 'elijah@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Elisha Jack Sande',
      position: 'Director',
      image: elishaSande,
      description: 'Co-founder focused on operational excellence and business growth across all sectors.',
      email: 'elisha@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Ruth Sande',
      position: 'Operations & Admin Manager',
      image: ruthSande,
      description: 'Experienced operations manager ensuring smooth day-to-day business operations and administrative excellence.',
      email: 'ruth.sande@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Ruth Guta',
      position: 'Assistant Operations & Admin Manager',
      image: ruthGuta,
      description: 'Supporting operations and administration with attention to detail and commitment to efficiency.',
      email: 'ruth.guta@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Bridgettee C. Kachingwe',
      position: 'Finance Manager',
      image: bridgetteeKachingwe,
      description: 'Financial expert managing company finances, budgeting, and financial planning across all sectors.',
      email: 'bridgettee@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Josiah Sande',
      position: 'Business Development Manager',
      image: josiahSande,
      description: 'Driving business growth and development initiatives, identifying new opportunities and partnerships.',
      email: 'josiah@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Joana Chizenga',
      position: 'Marketing & Logistics Manager',
      image: joanaChizenga,
      description: 'Leading marketing strategies and logistics coordination to ensure effective service delivery.',
      email: 'joana@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Shiellah Chizenga',
      position: 'Legal & Compliance Manager',
      image: shiellahChizenga,
      description: 'Ensuring legal compliance and managing regulatory requirements across all business operations.',
      email: 'shiellah@optionalgroupofcompaniesltd.com'
    }
  ];

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-hero py-20 relative overflow-hidden"
          style={{ opacity: heroOpacity }}
        >
          <Parallax translateY={[-30, 30]} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20" />
          </Parallax>
          <Parallax translateY={[-10, 10]} className="absolute inset-0">
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              style={{
                background: "radial-gradient(circle at center, white 0.5px, transparent 0.5px)",
                backgroundSize: "24px 24px"
              }}
            />
          </Parallax>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Management Team
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Meet the dedicated professionals who drive our vision forward and ensure 
                excellence in everything we do.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Grid Section */}
        <motion.section 
          className="py-20 relative overflow-hidden"
          style={{ opacity: contentOpacity }}
        >
          <Parallax translateY={[20, -20]} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
          </Parallax>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A dedicated group of professionals committed to excellence and innovation.
              </p>
            </motion.div>

            {/* Team Bento Grid: use auto-rows-min so each grid row adapts to content height */}
            <div className="grid grid-cols-12 auto-rows-min gap-6">
              {teamMembers.map((member, index) => {
                const isDirector = index < 2;
                return (
                  <BentoCard
                    key={index}
                    className={`${isDirector ? 'col-span-12 md:col-span-6' : 'col-span-12 md:col-span-4'}`}
                    delay={index * 0.1}
                  >
                    <motion.div 
                      className="p-6 flex flex-col items-center text-center"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className="relative mb-6"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </motion.div>

                      <div className="flex-grow space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                          <p className="text-secondary font-medium">{member.position}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{member.description}</p>
                        
                        <div className="flex justify-center space-x-4 mt-4">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:${member.email}`}
                            className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-colors"
                          >
                            <Mail className="h-5 w-5 text-primary" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-primary" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </BentoCard>
                );
              })}
            </div>
          </div>
        </motion.section>

        <Parallax translateY={[0, -20]}>
          <Footer />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Team;