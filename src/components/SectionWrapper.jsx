import { motion } from 'framer-motion';

/* Wraps each section with fade+slide-up animation triggered when it scrolls into view */
const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`section-padding max-w-7xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
