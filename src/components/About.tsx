import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'B.Tech. Computer Science',
      institution: 'Sanjiavani colledge of engineering, Kopargaon',
      description: 'Savitribai Phule Pune University, CGPA: 8.0',

    },
    {
      year: '2023',
      title: 'HSC (Science)',
      institution: 'Swami mukanand jr. college, yeola',
      description: 'Savitribai Phule Pune University, Percentage: 72%',
    },
    {
      year: '2021',
      title: 'SSC ',
      institution: 'Atma Malik English Medium School, Purnagaon',
      description: 'Savitribai Phule Pune University, Percentage: 90%',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              I’m a Computer Science student who believes in shipping, not just studying. 
              I’m a vibe coder in the real sense—I use AI as a creative and technical partner to think faster, code smarter, and build better systems. From AI-assisted coding and prompt engineering to integrating predictions into IoT dashboards, I focus on turning ideas into live, usable products.
              I don’t copy-paste from AI; I direct it....!!
               My workflow blends strong DSA fundamentals with AI-driven development to move from concept to deployment quickly and cleanly.
              </p>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education Timeline
            </h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;