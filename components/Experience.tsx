'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';
import { ChevronRight, MapPin } from './Icons';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = portfolioData.experience;

  const cardStyles = [
    'border-l-4 border-pink-400',
    'border-l-4 border-rose-400',
    'border-l-4 border-pink-500',
  ];

  return (
    <section id="experience" className="py-14 sm:py-20 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Kinh nghiệm làm việc</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 ${cardStyles[index % cardStyles.length]} card-hover`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white text-xs font-semibold mb-3">
                    {exp.period}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-base sm:text-lg text-rose-500 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    {exp.location}
                  </p>
                </div>
              </div>

              <div className="border-t border-pink-100 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Responsibilities:
                </p>
                <ul className="space-y-2 text-sm sm:text-base">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start text-gray-600">
                      <ChevronRight className="w-4 h-4 text-rose-400 mr-2 mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
