'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = portfolioData.education;

  const gradients = [
    'from-pink-400 to-rose-400',
    'from-rose-400 to-pink-500',
    'from-pink-500 to-rose-500',
    'from-rose-500 to-pink-400',
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Học vấn</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-300 transform md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`relative z-10 bg-white rounded-2xl shadow-xl p-6 md:p-8 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } card-hover`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-8 ${
                      index % 2 === 0
                        ? 'left-[-2.6rem] md:left-[-2.15rem]'
                        : 'left-[-2.6rem] md:right-[-2.15rem] md:left-auto'
                    } w-5 h-5 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} ring-4 ring-white`}
                  />

                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} text-white text-sm font-semibold mb-4`}>
                    {edu.period}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-rose-500 font-semibold mb-2">
                    {edu.degree} - {edu.major}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>

                  {edu.activities && edu.activities.length > 0 && (
                    <div className="border-t border-pink-100 pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Hoạt động:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {edu.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="text-rose-400 mr-2">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
