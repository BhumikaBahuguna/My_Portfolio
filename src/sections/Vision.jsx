import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiBriefcase, FiHeart, FiGlobe, FiSun } from 'react-icons/fi';

const visionCards = [
  {
    icon: <FiBriefcase />,
    title: 'Career',
    text: 'Work on scalable, AI-driven systems at innovative companies that push technological boundaries.',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
  },
  {
    icon: <FiHeart />,
    title: 'Lifestyle',
    text: 'Maintain a balanced, growth-oriented life — disciplined routines, continuous learning, healthy habits.',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
  },
  {
    icon: <FiGlobe />,
    title: 'Impact',
    text: 'Solve real-world problems through technology, creating products that make a meaningful difference.',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
  },
  {
    icon: <FiSun />,
    title: 'Inspiration',
    text: 'Embrace a growth mindset and continuous learning — inspiring others through work and actions.',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
  },
];

const Vision = () => {
  return (
    <SectionWrapper id="vision">
      <div className="mb-12">
        <h2 className="section-title">
          Vision <span className="gradient-text">Board</span>
        </h2>
        <p className="section-subtitle">
          The future I'm building — one step at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {visionCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className={`glass-card p-6 ${card.border} hover:border-opacity-50 transition-all duration-300`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white text-xl mb-4`}>
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-card p-8 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent2/5 to-accent/5" />
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed max-w-3xl mx-auto">
            "I am building a future where I grow as a skilled engineer and create meaningful
            impact through technology."
          </p>
          <p className="mt-4 text-sm text-accent">— Bhumika Bahuguna</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Vision;
