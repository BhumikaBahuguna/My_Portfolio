import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiStar, FiUsers } from 'react-icons/fi';

const leadershipData = [
  {
    role: 'Head Girl',
    organization: 'Army Public School, Bareilly',
    scale: '3,000+ students',
    description:
      'Led the entire student body, organized school events, managed discipline committees, and served as the primary student representative to the administration.',
    highlights: [
      'Managed a student body of 3,000+',
      'Organized inter-school competitions & cultural events',
      'Developed leadership & public speaking skills',
      'Represented students in school governance',
    ],
  },
  {
    role: 'Class Representative',
    organization: 'Graphic Era University',
    scale: '80+ students',
    description:
      'Acted as the bridge between students and faculty, coordinating academic schedules, resolving student concerns, and fostering a productive learning environment.',
    highlights: [
      'Coordinated for a batch of 80+ students',
      'Liaison between students and professors',
      'Organized study groups & academic resources',
      'Resolved student issues proactively',
    ],
  },
];

const Leadership = () => {
  return (
    <SectionWrapper id="leadership">
      <div className="mb-12">
        <h2 className="section-title">
          Leadership & <span className="gradient-text">Impact</span>
        </h2>
        <p className="section-subtitle">
          Positions where I led, managed, and created impact at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent text-xl shrink-0">
                {i === 0 ? <FiStar /> : <FiUsers />}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-accent">{item.organization}</p>
              </div>
            </div>

            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent2/10 text-accent2 border border-accent2/20">
              {item.scale}
            </div>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.description}</p>

            <ul className="space-y-2">
              {item.highlights.map((h, j) => (
                <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                  <span className="text-accent mt-0.5">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Leadership;
