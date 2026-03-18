import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

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
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Open to opportunities, collaborations, and conversations. Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="glass-card-hover p-5 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 text-accent text-lg shrink-0 group-hover:bg-accent/20 transition-colors">
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{link.label}</p>
              <p className="text-sm text-white truncate">{link.value}</p>
            </div>
            <FiArrowUpRight className="text-gray-600 group-hover:text-accent transition-colors" />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-sm text-gray-600">
          Designed & built by{' '}
          <span className="gradient-text font-medium">Bhumika Bahuguna</span>
        </p>
        <p className="text-xs text-gray-700 mt-1">© 2025 All rights reserved.</p>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
