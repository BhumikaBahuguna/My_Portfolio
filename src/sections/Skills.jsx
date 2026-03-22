import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import {
  SiPython, SiCplusplus, SiJavascript,
  SiPostgresql, SiRedis, SiMysql,
  SiFastapi, SiReact, SiNodedotjs, SiFlask,
  SiDocker, SiKubernetes,
  SiGithub,
} from 'react-icons/si';
import { FiDatabase, FiCpu, FiCode, FiServer, FiTool, FiUsers, FiCoffee, FiCloud } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode />,
    color: 'from-blue-500/20 to-cyan-500/20',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Java', icon: <FiCoffee /> },
      { name: 'SQL', icon: <FiDatabase /> },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FiServer />,
    color: 'from-accent/20 to-accent2/20',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Flask', icon: <SiFlask /> },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FiTool />,
    color: 'from-orange-500/20 to-yellow-500/20',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'AWS', icon: <FiCloud /> },
      { name: 'CI/CD', icon: <SiGithub /> },
    ],
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    color: 'from-emerald-500/20 to-teal-500/20',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'AI / ML',
    icon: <FiCpu />,
    color: 'from-purple-500/20 to-pink-500/20',
    skills: [
      { name: 'NLP Models' },
      { name: 'Transformers' },
      { name: 'OCR Systems' },
      { name: 'MLOps' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FiUsers />,
    color: 'from-gray-500/20 to-slate-500/20',
    skills: [
      { name: 'System Design' },
      { name: 'Problem Solving' },
      { name: 'Agile/Scrum' },
      { name: 'Team Leadership' },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent2/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="mb-16 text-center md:text-left">
        <h2 className="section-title">
          Engineering <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="section-subtitle md:mx-0 mx-auto">
          The technologies and tools I wield to build scalable, intelligent architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card group overflow-hidden"
          >
            {/* Top gradient border accent */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${cat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-accent text-xl group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,77,141,0)] group-hover:shadow-[0_0_20px_rgba(255,77,141,0.2)]">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="skill-badge group/badge">
                    {skill.icon && <span className="text-accent group-hover/badge:text-white transition-colors text-base">{skill.icon}</span>}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subtle card hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
