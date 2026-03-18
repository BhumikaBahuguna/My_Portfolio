import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: 'Real-Time Notes Summarization',
    tag: 'MLOps',
    tech: ['Python', 'FastAPI', 'NLP', 'OCR', 'Docker', 'AWS'],
    description:
      'An end-to-end ML pipeline that extracts text from handwritten/printed notes using OCR and generates concise summaries using NLP transformers.',
    features: ['ML pipeline with 90% accuracy', '60% latency reduction', 'OCR + NLP integration', 'Dockerized deployment on AWS'],
    impact: '90% summarization accuracy · 60% latency reduction',
    github: 'https://github.com/BhumikaBahuguna/Notes_Summarizer',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Productivity Manager',
    tag: 'SaaS',
    tech: ['React', 'Supabase', 'PostgreSQL', 'PWA'],
    description:
      'A full-featured SaaS productivity app with Eisenhower Matrix prioritization, analytics dashboard, and offline-first PWA support.',
    features: ['Eisenhower Matrix task system', 'Real-time analytics', 'PWA with offline support', 'Supabase auth & database'],
    impact: 'Complete task management with analytics',
    github: 'https://github.com/BhumikaBahuguna/FinishIt',
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    title: 'E-Commerce Backend',
    tag: 'Microservices',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker'],
    description:
      'Scalable microservices architecture for e-commerce with 15+ RESTful APIs, Redis caching, and Kubernetes orchestration.',
    features: ['15+ RESTful APIs', 'Redis caching layer', 'Kubernetes orchestration', '40% faster response times'],
    impact: '1K+ users supported · 40% faster responses',
    github: 'https://github.com/BhumikaBahuguna/Scalable-Ecommerce',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Temporal Banking DBMS',
    tag: 'Database',
    tech: ['PostgreSQL', 'SQL', 'Triggers', 'Analytics'],
    description:
      'A temporal database management system for banking transactions with time-travel queries and optimized analytics.',
    features: ['Time-travel queries', 'SQL triggers & procedures', 'Transaction versioning', 'Optimized analytics'],
    impact: 'Advanced temporal querying for financial data',
    github: 'https://github.com/BhumikaBahuguna/Temporal-DBMS-Banking-Transaction',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Production-level applications showcasing full-stack, ML, and backend expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="glass-card group overflow-hidden"
          >
            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />

            <div className="p-6">
              {/* Title row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-2">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <FiGithub className="text-lg" />
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {project.features.map((f, j) => (
                  <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                    <span className="text-accent mt-0.5">▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Impact badge */}
              <div className="mb-4 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10 text-sm text-accent">
                ⚡ {project.impact}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {t}
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

export default Projects;
