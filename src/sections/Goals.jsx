import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiTarget, FiTrendingUp } from 'react-icons/fi';

const shortTermGoals = [
  'Strengthen DSA & system design skills',
  'Build 2–3 more impactful projects',
  'Land a Software Engineering role',
  'Improve communication & presentation',
  'Maintain daily discipline & consistency',
];

const longTermGoals = [
  'Become an expert full-stack / backend engineer',
  'Move into technical leadership',
  'Create products that solve real-world problems',
  'Achieve financial independence',
  'Contribute to the open-source & tech community',
];

const Goals = () => {
  return (
    <SectionWrapper id="goals">
      <div className="mb-12">
        <h2 className="section-title">
          My <span className="gradient-text">Goals</span>
        </h2>
        <p className="section-subtitle">
          Where I'm headed — short-term milestones and long-term vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Short-term */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent text-lg">
              <FiTarget />
            </div>
            <h3 className="text-lg font-semibold text-white">Short-Term Goals</h3>
          </div>

          <ul className="space-y-3">
            {shortTermGoals.map((g, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {g}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Long-term */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent2/10 text-accent2 text-lg">
              <FiTrendingUp />
            </div>
            <h3 className="text-lg font-semibold text-white">Long-Term Goals</h3>
          </div>

          <ul className="space-y-3">
            {longTermGoals.map((g, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
                {g}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Goals;
