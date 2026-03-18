import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiZap, FiTarget, FiCode, FiTrendingUp, FiCpu } from 'react-icons/fi';

/* ─── Data ─── */
const beliefs = [
  'I solve problems, not just write code',
  'Consistency beats intensity',
  'Learn by building',
  'Comfortable with discomfort',
  'Focus on fundamentals',
  'Clarity over complexity',
  'Ownership of growth',
  'Rejections = feedback',
  'Communication matters',
  'Build personal brand',
  'Impact > perfection',
  'Think like an engineer',
];

const strengths = [
  { icon: <FiTarget />, title: 'Problem-solving mindset' },
  { icon: <FiTrendingUp />, title: 'Learning agility' },
  { icon: <FiCode />, title: 'Practical development' },
  { icon: <FiZap />, title: 'Ownership & consistency' },
  { icon: <FiCpu />, title: 'AI & backend interest' },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      {/* Header */}
      <div className="mb-12">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          A passionate CS student building intelligent, production-ready systems.
        </p>
      </div>

      {/* Bio */}
      <div className="glass-card p-6 md:p-8 mb-12">
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          Computer Science student with a strong foundation in software development, data structures,
          and backend engineering — passionate about building AI-driven and scalable systems.
          Experienced in <span className="text-accent font-medium">Python, C++, JavaScript, FastAPI, React.js,
          microservices, and REST APIs</span>. Built ML-powered applications (NLP, OCR, Transformers) and
          scalable backend systems using Docker, Kubernetes, Redis, and PostgreSQL. Interested in
          <span className="text-accent2 font-medium"> AI, Generative AI, LLMs, prompt engineering,
          and product development</span>. Focused on building efficient, intelligent, production-ready systems.
        </p>
      </div>

      {/* Strengths */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <FiZap className="text-accent" /> Core Strengths
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-5 flex flex-col items-center text-center gap-3"
            >
              <span className="text-2xl text-accent">{s.icon}</span>
              <span className="text-sm text-gray-300">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Beliefs */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">💡 My Beliefs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-4 border-l-2 border-accent/50 hover:border-accent transition-colors"
            >
              <p className="text-gray-300 text-sm italic">"{belief}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
