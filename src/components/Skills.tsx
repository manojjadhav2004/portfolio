import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Structures & Algorithms',
      icon: '🧮',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Arrays', level: 90, color: 'bg-blue-500' },
        { name: 'Strings', level: 90, color: 'bg-blue-500' },
        { name: 'Linked Lists', level: 85, color: 'bg-blue-600' },
        { name: 'Stacks', level: 85, color: 'bg-blue-600' },
        { name: 'Queues', level: 85, color: 'bg-blue-600' },
        { name: 'Trees', level: 80, color: 'bg-blue-700' },
        { name: 'Hashing', level: 80, color: 'bg-blue-700' },
        { name: 'Recursion', level: 85, color: 'bg-blue-600' },
        { name: 'Basic DP', level: 75, color: 'bg-indigo-600' },
      ],
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C', level: 85, color: 'bg-gray-600' },
        { name: 'C++', level: 85, color: 'bg-blue-800' },
        { name: 'Java', level: 80, color: 'bg-orange-500' },
        { name: 'Python', level: 85, color: 'bg-yellow-500' },
        { name: 'PHP', level: 75, color: 'bg-purple-600' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'HTML', level: 95, color: 'bg-orange-500' },
        { name: 'CSS', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Bootstrap', level: 85, color: 'bg-purple-600' },
        { name: 'React', level: 85, color: 'bg-cyan-500' },
      ],
    },
    {
      title: 'Mobile & App Development',
      icon: '📱',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React Native', level: 80, color: 'bg-cyan-600' },
        { name: 'Android Development', level: 75, color: 'bg-green-600' },
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      gradient: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
      ],
    },
    {
      title: 'AI & Automation Skills',
      icon: '🤖',
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'AI Prompt Engineering', level: 85, color: 'bg-purple-500' },
        { name: 'AI-assisted Coding', level: 85, color: 'bg-purple-600' },
        { name: 'Predictive Modeling Integration', level: 75, color: 'bg-indigo-500' },
        { name: 'Smart Automation', level: 80, color: 'bg-teal-500' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      gradient: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Git', level: 85, color: 'bg-red-500' },
        { name: 'GitHub', level: 85, color: 'bg-gray-800' },
        { name: 'XAMPP', level: 80, color: 'bg-orange-600' },
        { name: 'Arduino IDE', level: 75, color: 'bg-teal-600' },
        { name: 'Wokwi', level: 70, color: 'bg-blue-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are the technologies and tools I work with
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon and title */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="text-3xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                      zIndex: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className={`
                      px-4 py-2 rounded-full 
                      ${skill.color} 
                      text-white font-semibold text-sm
                      shadow-md hover:shadow-xl
                      cursor-pointer
                      transition-all duration-300
                      border-2 border-transparent
                      hover:border-white/50
                      relative overflow-hidden
                    `}>
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">{skill.name}</span>
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-50 blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;