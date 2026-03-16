import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Award, Users, TrendingUp, Code, ChevronDown, ChevronUp, Store } from 'lucide-react';

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const mainProjects = [
    {
      title: 'Farmer–Labour Management Website',
      description: 'Developed a live platform connecting farmers with agricultural laborers. Implemented role-based login, dynamic listings, and database-driven workflows. Actively used by real users in rural areas.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/manojjadhav2004/farmer-labour-project',
      liveUrl: 'https://github.com/manojjadhav2004/farmer-labour-project',
      icon: Users,
      gradient: 'from-green-500 to-emerald-600',
      highlight: 'Live Platform',
    },
    {    
      title: 'Smart Warehouse Temperature Monitoring System',
      description: 'Built an IoT system to monitor real-time temperature in warehouses. Integrated AI-based prediction for future temperature trends. Designed a live dashboard for analytics and alerts.',
      technologies: ['IoT', 'AI', 'Python', 'Arduino', 'Dashboard'],
      githubUrl: 'https://github.com/manojjadhav2004/ESP32-IoT-Warehouse-Monitoring',
      liveUrl: 'https://github.com/manojjadhav2004/ESP32-IoT-Warehouse-Monitoring',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-600',
      highlight: 'IoT + AI',
    },
    {
      title: 'Drone Delivery Project Website',
      description: 'Developed the official project website showcasing autonomous drone delivery system. Project won World Cup (Runner-Up) at Technoxian Competition. Website is live and used for demonstrations and evaluations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      githubUrl: 'https://github.com/manojjadhav2004/aerodrop',
      liveUrl: 'https://aerodrop-2.onrender.com',
      icon: Award,
      gradient: 'from-purple-500 to-pink-600',
      highlight: 'Winner - Technoxian',
    },
    {
      title: 'Swami Samarth Ashram Website',
      description: 'Designed and deployed a dynamic React-based website for an ashram. Includes event updates, schedules, and information sections. Currently live and accessed by devotees and visitors.',
      technologies: ['React', 'JavaScript', 'CSS', 'Web Design'],
      githubUrl: '#',
      liveUrl: 'https://swamisevakarwadi.org/',
      icon: Code,
      gradient: 'from-orange-500 to-red-600',
      highlight: 'Live Website',
    },
    {
      title: 'Sri Balaji Traders – Online Rice Store',
      description:
        'Developed a customized online rice store for local shop owners to showcase rice varieties, prices, and offers. Implemented a WhatsApp-based order flow, AI chatbot for customer queries, and a mobile installable PWA experience. Built an admin dashboard to manage products, offers, and orders.',
      technologies: [
        'React',
        'Vite',
        'JavaScript',
        'Firebase Firestore',
        'Firebase Auth',
        'Clerk',
        'Cloudinary',
        'PWA',
      ],
      githubUrl: 'https://github.com/manojjadhav2004/shop',
      liveUrl: 'https://sri-balaji-traders-1.web.app/',
      icon: Store,
      gradient: 'from-green-500 to-emerald-600',
      highlight: 'E-commerce + PWA',
    },
    {
      title: 'Attendance Calculator App',
      description: 'Built a utility app used by many students to calculate attendance eligibility. Focused on accuracy, ease of use, and real-world usability.',
      technologies: ['Mobile App', 'JavaScript', 'UI/UX'],
      githubUrl: 'https://github.com/manojjadhav2004/Eduplus-Attendance-Helper',
      liveUrl: 'https://drive.google.com/drive/folders/1DsJAoQvN-nWUNT6gjsGhvkQ2Wl0jkAvi',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-purple-600',
      highlight: 'Student Utility',
    },
  ];

  const academicProjects = [
    {
      title: 'Amazon Clone',
      description: 'A full-featured e-commerce clone with shopping cart, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Code,
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Python Quiz Application',
      description: 'Interactive quiz application built with Python featuring multiple question types and score tracking.',
      technologies: ['Python', 'Tkinter', 'Database'],
      githubUrl: 'https://github.com/manojjadhav2004/online-quiz-platform',
      liveUrl: 'https://github.com/manojjadhav2004/online-quiz-platform',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'DBMS Quiz System',
      description: 'Database management system for quiz applications with user management and analytics.',
      technologies: ['MySQL', 'PHP', 'Database Design'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Code,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using natural language processing for interactive conversations.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'AI'],
      githubUrl: '#',
      liveUrl: '#',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Credit Card Fraud Detection System',
      description: 'Machine learning-based system to detect fraudulent credit card transactions in real-time.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'AI'],
      githubUrl: 'https://github.com/manojjadhav2004/credit-card-fraud-detection',
      liveUrl: 'https://github.com/manojjadhav2004/credit-card-fraud-detection',
      icon: TrendingUp,
      gradient: 'from-red-500 to-rose-600',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
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
            Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my work and projects that make a real impact
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {mainProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon and highlight badge */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                    <IconComponent size={24} />
                  </div>
                  {project.highlight && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white shadow-md`}>
                      {project.highlight}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-medium`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {showMore ? (
              <>
                <ChevronUp size={20} />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                More Projects
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Academic Projects */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-8"
              >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Other Academic Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Additional projects from my academic journey
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {academicProjects.map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={project.title}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <div className="flex items-start mb-4 relative z-10">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                          <IconComponent size={24} />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-medium`}
                          >
                            <ExternalLink size={16} />
                            View
                          </motion.a>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full`} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;