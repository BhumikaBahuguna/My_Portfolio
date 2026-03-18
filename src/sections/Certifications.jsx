import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiAward, FiCloud, FiCode, FiCpu, FiLayers, FiBox } from 'react-icons/fi';

const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: <FiCloud />,
    skills: ['Cloud Computing', 'AWS Services', 'Infrastructure'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Meta Back-End Developer',
    issuer: 'Meta',
    icon: <FiCode />,
    skills: ['APIs', 'Databases', 'Django', 'Python'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Google AI & Machine Learning',
    issuer: 'Google',
    icon: <FiCpu />,
    skills: ['TensorFlow', 'ML Models', 'Data Pipelines'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    icon: <FiCloud />,
    skills: ['Azure Services', 'Cloud Architecture', 'DevOps'],
    color: 'from-blue-400/20 to-indigo-500/20',
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Google Cloud',
    icon: <FiLayers />,
    skills: ['LLMs', 'Prompt Engineering', 'GenAI Applications'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Full-Stack Development',
    issuer: 'Meta',
    icon: <FiBox />,
    skills: ['React', 'Node.js', 'REST APIs', 'Databases'],
    color: 'from-indigo-500/20 to-violet-500/20',
  },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <div className="mb-12">
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Industry-recognized certifications validating my cloud, AI, and development skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card group overflow-hidden"
          >
            {/* Gradient header */}
            <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent text-xl shrink-0 group-hover:bg-accent/20 transition-colors">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white leading-tight">{cert.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
