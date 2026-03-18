import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { GiMusicalNotes } from 'react-icons/gi';

const Hobbies = () => {
  return (
    <SectionWrapper id="hobbies">
      <div className="mb-12">
        <h2 className="section-title">
          Hobbies & <span className="gradient-text">Interests</span>
        </h2>
        <p className="section-subtitle">
          What I enjoy beyond the codebase.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -3 }}
        className="glass-card-hover p-8 max-w-md mx-auto text-center"
      >
        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent text-3xl">
          <GiMusicalNotes />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Dance</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Dance is my creative outlet — a way to express emotions, stay energized, and build
          confidence. It teaches discipline, rhythm, and the ability to think on your feet —
          skills that translate beautifully into engineering and problem-solving.
        </p>
        <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs">
          Creativity & Expression
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Hobbies;
