import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiBookOpen, FiStar, FiUsers, FiAward, FiCloud, FiCode, FiCpu, FiLayers, FiBox } from 'react-icons/fi';

const timelineData = [
  {
    type: 'education',
    role: 'B.Tech in Computer Science & Engineering',
    organization: 'Graphic Era University',
    date: '2023 — 2027',
    badge: 'GPA: 9.02',
    icon: <FiBookOpen />,
    description: 'Specialization in AI, Machine Learning & Backend Development. Built multiple production-level architectures. Active in tech community and student leadership roles.',
  },
  {
    type: 'leadership',
    role: 'Class Representative',
    organization: 'Graphic Era University',
    date: '2023 — Present',
    badge: '80+ Students',
    icon: <FiUsers />,
    description: 'Coordinating academic schedules, resolving student concerns, and organizing study groups acting as the primary liaison between students and professors.',
  },
  {
    type: 'leadership',
    role: 'Head Girl',
    organization: 'Army Public School, Bareilly',
    date: 'Completed 2023',
    badge: '3000+ Students',
    icon: <FiStar />,
    description: 'Led the entire student body, organized major sporting and cultural events, managed discipline committees, and developed strong crisis management & public speaking skills.',
  },
];

const certifications = [
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', icon: <FiCloud />, color: 'from-orange-500/20 to-yellow-500/20' },
  { title: 'Meta Back-End Developer', issuer: 'Meta', icon: <FiCode />, color: 'from-blue-500/20 to-cyan-500/20' },
  { title: 'Google AI & Machine Learning', issuer: 'Google', icon: <FiCpu />, color: 'from-green-500/20 to-emerald-500/20' },
  { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', icon: <FiCloud />, color: 'from-blue-400/20 to-indigo-500/20' },
  { title: 'Generative AI Fundamentals', issuer: 'Google Cloud', icon: <FiLayers />, color: 'from-purple-500/20 to-pink-500/20' },
  { title: 'Full-Stack Development', issuer: 'Meta', icon: <FiBox />, color: 'from-indigo-500/20 to-violet-500/20' },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="relative">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="section-title">
          Journey &amp; <span className="gradient-text">Milestones</span>
        </h2>
        <p className="section-subtitle mx-auto">
          A timeline of my academic background, leadership roles, and technical certifications.
        </p>
      </div>

      {/* Main Timeline */}
      <div className="relative max-w-4xl mx-auto mb-24">
        {/* Center Line for Desktop, Left Line for Mobile */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent2 to-transparent opacity-30 md:-translate-x-1/2" />

        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
              i % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-accent z-10 transform -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 shadow-[0_0_15px_rgba(255,77,141,0.5)]" />

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
              <div className="glass-card-hover p-6 md:p-8 relative group">
                <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${item.type === 'education' ? 'from-accent to-accent/50' : 'from-accent2 to-accent/50'} left-0 opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${item.type === 'education' ? 'bg-accent/10 text-accent' : 'bg-accent2/10 text-accent2'} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{item.role}</h3>
                      <p className="text-gray-400 text-sm mt-1 font-medium">{item.organization}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-gray-500">{item.date}</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white">{item.badge}</span>
                </div>

                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
            
            {/* Date display for Desktop Opposite side */}
            <div className={`hidden md:flex w-1/2 flex-col justify-center ${i % 2 === 0 ? 'items-end pr-12 text-right' : 'items-start pl-12 text-left'}`}>
               <span className="text-2xl font-black text-white/10 font-script rotate-[-5deg] pointer-events-none select-none">{item.date.split('—')[0].trim()}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="mt-32 relative">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Technical <span className="gradient-text">Certifications</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex items-center gap-4 p-5 hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} border border-white/10 text-xl text-white group-hover:scale-110 transition-transform shadow-inner`}>
                {cert.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors text-sm md:text-base leading-tight mb-1">{cert.title}</h4>
                <p className="text-xs text-accent font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
