import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
  const workExperience = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechStart Inc.',
      period: 'June 2023 - Present',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Improved website performance by 40% through code optimization',
        'Participated in code reviews and agile development processes',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: 'January 2022 - May 2023',
      description: [
        'Built custom websites for local businesses using modern web technologies',
        'Managed client relationships and project timelines',
        'Implemented SEO best practices and analytics tracking',
        'Delivered 15+ successful projects with 100% client satisfaction',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Technology',
      period: 'September 2023 - Present',
      description: [
        'Assist students with programming concepts and debugging',
        'Grade assignments and provide constructive feedback',
        'Lead study sessions for data structures and algorithms',
        'Mentored 20+ students in software development best practices',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2023 - 2027 (Expected)',
      gpa: '3.8/4.0',
      courses: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
      ],
    },
    {
      degree: 'Full-Stack Web Development Certificate',
      school: 'CodeAcademy Pro',
      period: '2022',
      achievement: 'Graduated with Distinction',
      courses: [
        'React & Redux',
        'Node.js & Express',
        'Database Design',
        'API Development',
      ],
    },
  ];

  const achievements = [
    'Dean\'s List - Fall 2023, Spring 2024',
    'First Place - University Hackathon 2024',
    'Google Developer Student Club Member',
    'Open Source Contributor - 500+ contributions',
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional experience and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  {(edu.gpa || edu.achievement) && (
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                      {edu.gpa ? `GPA: ${edu.gpa}` : edu.achievement}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <Award className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <Award size={16} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;