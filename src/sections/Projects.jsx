import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiGithub, FiArrowUpRight, FiFolder } from 'react-icons/fi';

const projectsData = [
  {
    title: 'Real-Time Notes Summarization',
    tag: 'MLOps Pipeline',
    tech: ['Python', 'FastAPI', 'NLP', 'OCR', 'Docker'],
    description:
      'An end-to-end Machine Learning pipeline that extracts text from handwritten/printed notes using OCR and generates highly-structured summaries via NLP Transformers.',
    github: 'https://github.com/BhumikaBahuguna/Notes_Summarizer',
    color: 'from-[#FF4D8D] to-[#A855F7]', // Pink to Purple
    image: '/images/notes-summarizer.png', // <-- Drop your specific screenshot in public/images/
  },
  {
    title: 'FinishIt: Productivity SaaS',
    tag: 'SaaS App',
    tech: ['React', 'Supabase', 'PostgreSQL', 'PWA'],
    description:
      'A full-featured productivity application leveraging the Eisenhower Matrix for task prioritization, real-time analytics, and offline-first PWA architecture.',
    github: 'https://github.com/BhumikaBahuguna/FinishIt',
    color: 'from-blue-500 to-cyan-400', 
    image: '/images/finishit.png', // <-- Drop your screenshot here
  },
  {
    title: 'Scalable E-Commerce Backend',
    tag: 'Microservices',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes'],
    description:
      'Engineered a robust microservices backend serving 15+ RESTful APIs. Implemented Redis caching to slash response times by 40% globally.',
    github: 'https://github.com/BhumikaBahuguna/Scalable-Ecommerce',
    color: 'from-emerald-400 to-teal-500', 
    image: '/images/ecommerce.png', // <-- Drop your screenshot here
  },
  {
    title: 'Temporal Banking DBMS',
    tag: 'Database Architecture',
    tech: ['PostgreSQL', 'SQL', 'Triggers', 'Data Analytics'],
    description:
      'Architected a temporal database management system capable of time-travel queries, strict versioning, and high-performance financial analytics.',
    github: 'https://github.com/BhumikaBahuguna/Temporal-DBMS-Banking-Transaction',
    color: 'from-orange-500 to-amber-500', 
    image: '/images/temporal-dbms.png', // <-- Drop your screenshot here
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="relative pb-24">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none mix-blend-screen" />

      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Shipped Work</span>
          </h2>
          <p className="section-subtitle">
            A structured look at the systems I've built and scaled.
          </p>
        </div>
        <a 
          href="https://github.com/BhumikaBahuguna" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors group text-sm md:text-base font-medium px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/40 bg-white/[0.02]"
        >
          View Full Archive <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card group flex flex-col h-full bg-dark-800/40 hover:bg-dark-800/80 transition-all duration-500 border-white/[0.05] hover:border-white/20 relative overflow-hidden"
          >
            {/* Top accent gradient border */}
            <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity z-20`} />
            
            {/* Image Thumbnail Container */}
            <div className="w-full h-56 md:h-64 relative overflow-hidden bg-dark-900 border-b border-white/[0.05]">
              {project.image ? (
                <>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      // Fallback if image not found yet
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback container if the image hasn't been added yet */}
                  <div className="absolute inset-0 flex-col items-center justify-center hidden">
                     <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-10`} />
                     <FiFolder className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-600" />
                     <span className="absolute bottom-4 text-xs text-gray-500">Image goes here</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                   <FiFolder className="text-4xl text-gray-600 z-10" />
                </div>
              )}
              
              {/* GitHub overlay button floating on image */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-accent hover:text-white transition-colors text-lg border border-white/10 z-20"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <FiGithub />
              </a>
            </div>

            {/* Internal subtle glow */}
            <div className={`absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl ${project.color} opacity-0 group-hover:opacity-[0.1] blur-[60px] pointer-events-none transition-opacity duration-700`} />

            <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
              
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Bottom Row: Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-gray-500 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] group-hover:border-white/10 transition-colors"
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
