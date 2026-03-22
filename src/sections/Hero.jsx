import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] bg-accent2/20 rounded-full blur-[130px] mix-blend-screen"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 shadow-[0_4px_20px_rgba(255,77,141,0.1)] hover:border-accent/40 transition-colors"
            >
              <span className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,77,141,0.8)] animate-pulse" />
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Available for impact</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Bhumika <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent2 to-[#FF7AA8] drop-shadow-[0_0_20px_rgba(255,77,141,0.3)]">
                Bahuguna.
              </span>
            </h1>

            {/* Tagline / Subtext */}
            <h2 className="text-2xl sm:text-3xl font-script text-accent2 mb-6 transform -rotate-2 origin-left">
              Artificial Intelligence &amp; Backend Engineering
            </h2>

            <p className="text-lg text-gray-400 max-w-xl mb-12 font-light leading-relaxed">
              I architect intelligent, scalable systems. Bridging the gap between raw data and high-performance applications with <span className="font-semibold text-white">Python, React, &amp; Cloud Infra.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 relative z-20">
              <Link to="projects" smooth duration={500} offset={-80}>
                <button className="btn-primary flex items-center gap-3 group">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </Link>
              <Link to="contact" smooth duration={500} offset={-80}>
                <button className="btn-outline">Let's Talk</button>
              </Link>
            </div>
            
            {/* Socials */}
            <div className="mt-12 flex items-center gap-5">
              {[
                { icon: <FiGithub />, href: 'https://github.com/BhumikaBahuguna', label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/bhumika-bahuguna-6b068a306', label: 'LinkedIn' },
                { icon: <FiMail />, href: 'mailto:bhumikabahuguna8@gmail.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(255,77,141,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 hidden lg:flex justify-center relative"
          >
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-15, 15] }} 
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
              className="absolute top-[10%] left-[5%] glass-card px-5 py-3 rounded-2xl border-accent/30 shadow-[0_0_30px_rgba(255,77,141,0.2)] z-20"
            >
              <span className="font-semibold text-white tracking-wide text-sm">🧠 ML Engineer</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10] }} 
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse', delay: 1 }}
              className="absolute bottom-[20%] right-[5%] glass-card px-5 py-3 rounded-2xl border-accent2/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] z-20"
            >
              <span className="font-semibold text-white tracking-wide text-sm">⚙️ Backend Dev</span>
            </motion.div>

            {/* Main Abstract Shape - Glassmorphism Sphere with rings */}
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/5 shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite] shadow-[0_0_40px_rgba(255,77,141,0.1)]" />
              
              <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-dark-800 to-dark-600 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(255,77,141,0.2)] flex items-center justify-center backdrop-blur-3xl overflow-hidden relative">
                {/* Inner glowing orb */}
                <div className="absolute w-full h-full bg-gradient-to-b from-accent/20 to-transparent blur-2xl" />
                <span className="font-script text-5xl text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10 rotate-[-10deg]">Hello World</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer group flex flex-col items-center">
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden flex justify-center">
            <motion.div
              animate={{ y: [-48, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_10px_rgba(255,77,141,0.8)]"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
