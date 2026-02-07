import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/manojjadhav2004',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/manojjadhav376/',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'heymanojjadhav@gmail.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">Jadhav Manoj</h3>
            <p className="text-gray-400 mb-4">Software Engineering Student</p>
            <div className="flex items-center text-gray-400">
         
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jadhav Manoj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;