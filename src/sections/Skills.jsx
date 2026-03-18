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
    skills: [
      { name: 'Python', icon: <SiPython />, level: 90 },
      { name: 'C++', icon: <SiCplusplus />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
      { name: 'Java', icon: <FiCoffee />, level: 70 },
      { name: 'SQL', icon: <FiDatabase />, level: 85 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FiServer />,
    skills: [
      { name: 'FastAPI', icon: <SiFastapi />, level: 88 },
      { name: 'React.js', icon: <SiReact />, level: 80 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 75 },
      { name: 'Flask', icon: <SiFlask />, level: 70 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FiTool />,
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 85 },
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 75 },
      { name: 'AWS', icon: <FiCloud />, level: 72 },
      { name: 'CI/CD', icon: <SiGithub />, level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
      { name: 'Redis', icon: <SiRedis />, level: 78 },
      { name: 'MySQL', icon: <SiMysql />, level: 75 },
    ],
  },
  {
    title: 'AI / ML',
    icon: <FiCpu />,
    skills: [
      { name: 'NLP', level: 82 },
      { name: 'Transformers', level: 78 },
      { name: 'OCR', level: 80 },
      { name: 'MLOps', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FiUsers />,
    skills: [
      { name: 'Communication', level: 90 },
      { name: 'Analytical Thinking', level: 88 },
      { name: 'Adaptability', level: 85 },
      { name: 'Teamwork', level: 88 },
      { name: 'Discipline', level: 92 },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build production-ready systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl text-accent">{cat.icon}</span>
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      {skill.icon && <span className="text-accent">{skill.icon}</span>}
                      {skill.name}
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.1, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
