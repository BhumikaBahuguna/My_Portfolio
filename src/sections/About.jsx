import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiZap, FiTarget, FiCode, FiTrendingUp, FiCpu } from 'react-icons/fi';

const strengths = [
  { icon: <FiTarget />, title: 'Problem Solving' },
  { icon: <FiTrendingUp />, title: 'Agile Learner' },
  { icon: <FiCode />, title: 'Full-Stack Dev' },
  { icon: <FiZap />, title: 'Ownership' },
  { icon: <FiCpu />, title: 'AI Integration' },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="relative">
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none mix-blend-screen" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 relative z-10">
        
        {/* Left visually rich area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="relative">
            {/* Script overlay */}
            <h3 className="absolute -top-10 -left-6 text-5xl md:text-7xl font-script text-white/5 transform -rotate-6 z-0 select-none">
              Behind the code
            </h3>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10 leading-tight">
              More than just <br />
              <span className="gradient-text text-transparent bg-clip-text">Syntax.</span>
            </h2>

            <div className="glass-card p-8 relative z-10 overflow-hidden group">
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-gray-300 leading-relaxed text-lg font-light mb-6">
                I’m a Computer Science engineer driven by a relentless curiosity for how things work under the hood. For me, development isn’t just about writing logic—it’s about architecting solutions that scale and adapting to new paradigms.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Specializing in <span className="font-semibold text-white">Full-Stack Development, ML Pipelines, and AI Integration</span>, I’ve built systems spanning 
                from highly accurate GenAI summarizers to microservice ecommerce backends. 
                <span className="block mt-4 italic text-accent font-medium">I don’t just learn frameworks; I solve problems.</span>
              </p>
            </div>
            
            {/* Script Accent Floating */}
            <motion.div 
              animate={{ y: [-5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: 'reverse' }}
              className="absolute -bottom-8 right-10 text-3xl text-accent2 font-script z-20 transform rotate-[-5deg]"
            >
              Building the future.
            </motion.div>
          </div>
        </motion.div>

        {/* Right Data / Strengths Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Technical Identity</h3>
            <p className="text-gray-400 font-light">My core strengths and what I bring to the table.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-5 flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(255,77,141,0.1)] group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,77,141,0.2)]">
                  {s.icon}
                </div>
                <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">{s.title}</span>
              </motion.div>
            ))}
            
            {/* Highlighted Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-5 flex flex-col justify-center sm:col-span-2 sm:row-span-2 bg-gradient-to-br from-accent/20 to-accent2/10 border-accent/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="text-4xl lg:text-5xl font-black text-white mb-2 leading-none">4+</div>
              <div className="font-medium text-gray-200 text-lg">Production Ready</div>
              <div className="text-sm text-gray-400 font-light">Projects deployed &amp; scaled</div>
              <div className="absolute bottom-4 right-5 text-6xl text-white/5 font-black z-0">💼</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </SectionWrapper>
  );
};

export default About;
