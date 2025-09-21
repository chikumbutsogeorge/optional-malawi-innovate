import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShape = () => (
  <motion.div
    initial={{ rotate: 0, scale: 0.8 }}
    animate={{ 
      rotate: 360,
      scale: [0.8, 1.1, 0.8],
    }}
    transition={{
      rotate: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      },
      scale: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    className="absolute w-full h-full"
  >
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.1)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.05)' }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.2,13.5,77.8,27,68.4,38.4C59,49.8,47.6,59.1,34.7,66.5C21.8,73.9,7.3,79.4,-7.2,79.1C-21.7,78.8,-43.5,72.7,-58.1,61.1C-72.8,49.5,-80.4,32.4,-83.7,14.4C-87,-3.6,-86,-22.5,-77.9,-37.2C-69.8,-51.9,-54.5,-62.4,-39.8,-69.1C-25,-75.8,-10.7,-78.7,2.9,-83.4C16.5,-88.1,32.9,-94.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  </motion.div>
);

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <AnimatedShape />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
      />
    </div>
  );
};
