import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiBookOpen } from 'react-icons/fi';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Graphic Era University',
    gpa: '9.02',
    period: '2023 - 2027',
    highlights: [
      'Specialization in AI, ML & Backend Development',
      'Built 4+ production-level projects',
      'Active in leadership & extracurriculars',
    ],
  },
  {
    degree: 'High School Education',
    institution: 'Army Public School, Bareilly',
    period: 'Completed 2023',
    highlights: [
      'Head Girl — led a student body of 3000+',
      'Strong academic foundation',
      'Developed leadership & communication skills',
    ],
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="mb-12">
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          Academic journey that shaped my technical foundation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative mb-12 md:w-1/2 ${
              i % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
            } pl-12 md:pl-0`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-6 w-3 h-3 bg-accent rounded-full border-2 border-dark-900 left-[10px] md:left-auto ${
                i % 2 === 0 ? 'md:right-[-6px]' : 'md:left-[-6px]'
              }`}
            />

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent text-lg shrink-0">
                  <FiBookOpen />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-accent">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-gray-400">{edu.period}</span>
                {edu.gpa && (
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
