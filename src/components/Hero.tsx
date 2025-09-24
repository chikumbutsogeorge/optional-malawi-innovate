import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { AnimatedBackground } from './AnimatedBackground';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const [{ blur }, api] = useSpring(() => ({
    from: { blur: 0 },
    to: { blur: 20 },
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollPercent = window.scrollY / window.innerHeight;
      api.start({ blur: Math.min(20, scrollPercent * 40) });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <ParallaxProvider>
      <section ref={containerRef} className="relative min-h-screen bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Progressive Blur Background */}
        <animated.div 
          style={{
            backdropFilter: blur.to(b => `blur(${b}px)`),
            WebkitBackdropFilter: blur.to(b => `blur(${b}px)`)
          }}
          className="absolute inset-0 bg-black/10" 
        />
        
        {/* Parallax Background */}
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" 
          />
        </Parallax>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
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


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

            {/* Visual Element - Bento Grid */}
            <div className="relative perspective-1000">
            <motion.div 
              variants={fadeIn('up')}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 p-2 sm:p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Large Stat Box */}
              <motion.div 
              className="col-span-1 sm:col-span-2 row-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                backdropFilter: "blur(20px)",
              }}
              transition={{
                layout: { type: "spring", stiffness: 200, damping: 20 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.2, rotate: 15 }}
              />
              <motion.div 
                className="h-full flex flex-col justify-center items-center relative z-10"
                whileHover={{ y: -5 }}
              >
                <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-2 relative"
                >
                <span className="relative z-10">6</span>
                <motion.div
                  className="absolute inset-0 bg-secondary/20 rounded-full blur-xl -z-10"
                  animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                  }}
                />
                </motion.div>
                <div className="text-white/80 text-base sm:text-lg">Core Sectors</div>
              </motion.div>
              </motion.div>
              
              {/* Year Box */}
              <motion.div 
              className="col-span-1 sm:col-span-2 row-span-1 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 group relative overflow-hidden"
              whileHover={{ 
                y: -5,
                backdropFilter: "blur(8px)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <div className="flex justify-between items-center relative z-10">
                <motion.span 
                className="text-white/80 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                >
                Established
                </motion.span>
                <motion.span 
                className="text-xl sm:text-2xl font-bold text-white"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
                >
                2021
                </motion.span>
              </div>
              </motion.div>
              
              {/* Ownership Box */}
              <motion.div 
              className="col-span-1 row-span-2 bg-secondary/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-secondary/20 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div 
                className="h-full flex flex-col justify-center items-center relative z-10"
                whileHover={{ y: -3 }}
              >
                <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white"
                whileHover={{ scale: 1.1 }}
                >
                100%
                </motion.div>
                <motion.div 
                className="text-white/80 text-xs sm:text-sm text-center"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                >
                Malawian Owned
                </motion.div>
              </motion.div>
              </motion.div>
              
              {/* Team Box */}
              <motion.div 
              className="col-span-1 row-span-2 bg-primary/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-primary/20 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotateY: -15,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div 
                className="h-full flex flex-col justify-center items-center relative z-10"
                whileHover={{ y: -3 }}
              >
                <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white relative"
                whileHover={{ scale: 1.1 }}
                >
                <span>8</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-lg -z-10"
                  animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                  }}
                />
                </motion.div>
                <motion.div 
                className="text-white/80 text-xs sm:text-sm text-center"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                >
                Team Members
                </motion.div>
              </motion.div>
              </motion.div>
            </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
    </ParallaxProvider>
  );
};

export default Hero;