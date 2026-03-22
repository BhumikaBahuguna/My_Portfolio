import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUpRight, FiSend } from 'react-icons/fi';

const contactLinks = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'bhumikabahuguna8@gmail.com',
    href: 'mailto:bhumikabahuguna8@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 8279334050',
    href: 'tel:+918279334050',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'Bhumika Bahuguna',
    href: 'https://linkedin.com/in/bhumika-bahuguna-6b068a306',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'BhumikaBahuguna',
    href: 'https://github.com/BhumikaBahuguna',
  },
];

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="relative pb-12">
      
      {/* Dynamic background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Main CTA Block */}
      <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 mb-16 text-center relative overflow-hidden group border-white/10 hover:border-accent/30 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="font-script text-3xl md:text-4xl text-accent2 block mb-4 transform -rotate-3">
            What's next?
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF7AA8]">Impactful.</span>
          </h2>

          <p className="text-lg text-gray-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you have a question, a project idea, or just want to connect, my inbox is always open. Let’s engineer the future together.
          </p>

          <a 
            href="mailto:bhumikabahuguna8@gmail.com"
            className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
          >
            Say Hello <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover p-6 flex flex-col items-center justify-center text-center group bg-white/[0.01]"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 text-accent text-2xl mb-4 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,77,141,0)] group-hover:shadow-[0_0_20px_rgba(255,77,141,0.2)]">
              {link.icon}
            </div>
            
            <p className="text-sm font-semibold text-white mb-1 group-hover:text-accent transition-colors">{link.label}</p>
            <p className="text-xs text-gray-500 font-medium truncate w-full px-2">{link.value}</p>
            
            <FiArrowUpRight className="absolute top-4 right-4 text-gray-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-lg group-hover:text-accent" />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-24 text-center pt-8 border-t border-white/[0.05] relative z-10"
      >
        <p className="text-sm text-gray-400 font-light tracking-wide mb-2">
          Designed with <span className="text-accent animate-pulse inline-block">♥</span> &amp; architected by{' '}
          <span className="text-white font-medium hover:text-accent cursor-pointer transition-colors">Bhumika Bahuguna</span>
        </p>
        <p className="text-[10px] text-gray-600 tracking-[0.2em] uppercase font-semibold">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
