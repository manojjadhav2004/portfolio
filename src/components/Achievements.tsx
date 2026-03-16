import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Silicon Plains AI Summit – First Prize',
      org: 'MGM University – International Summit on Applied AI',
      year: '2026',
      description:
        ' 1st Prize (₹1.5 Lakh) at the SiWonlicon Plains International AI Summit for developing a Smart Warehouse Monitoring System using AI and IoT. The solution integrates IoT sensors, cloud monitoring, and predictive machine learning to detect environmental risks and prevent spoilage of stored crops.',
      badge: 'AI + IoT Smart Warehouse System',
    },
    {
      title: 'Technoxian World Cup – Runner-Up',
      org: 'Technoxian International Robotics League',
      year: '2024',
      description:
        'Runner-up position in the World Cup for the Drone Delivery project, showcasing autonomous navigation and real-world delivery simulations.',
      badge: 'Drone Delivery Project',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Highlights of my work, competitions, and real-world impact.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/70 dark:border-gray-800/80 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-amber-500/5 pointer-events-none" />

              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg">
                  <Award size={22} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100/80 dark:bg-purple-900/60 text-purple-700 dark:text-purple-200 flex items-center gap-1">
                  <Trophy size={14} />
                  {achievement.year}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-300 mb-3">
                  {achievement.org}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    <Star size={14} className="text-amber-400" />
                    {achievement.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

