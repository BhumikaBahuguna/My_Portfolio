import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent2/20 rounded-full blur-3xl animate-float animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Bhumika</span>
            <br />
            <span className="gradient-text">Bahuguna</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 text-balance">
            B.Tech CSE Student • AI &amp; GenAI Enthusiast • ML &amp; Backend Developer
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">
            Building scalable, AI-driven systems with Python, FastAPI, React &amp; modern cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary flex items-center gap-2 cursor-pointer">
                View Projects
                <FiArrowDown className="text-lg" />
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="btn-outline cursor-pointer">Contact Me</button>
            </Link>
            <a href="/resume.pdf" download className="btn-outline">
              Download Resume ↓
            </a>
          </div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
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
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-lg"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
