import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { fadeIn, staggerContainer } from '@/lib/motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id={id}
      className={`relative w-full mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};
