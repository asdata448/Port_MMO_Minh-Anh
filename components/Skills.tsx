'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = portfolioData.skills;

  return (
    <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Kỹ năng</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center text-white mr-3">
                💻
              </span>
              Kỹ năng chuyên môn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.technical.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-xl p-4 shadow-md card-hover"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-rose-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center text-white mr-3">
                🤝
              </span>
              Kỹ năng mềm
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.soft.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 text-center card-hover"
                >
                  <div className="text-3xl mb-2">
                    {index === 0 ? '💬' :
                     index === 1 ? '🧩' :
                     index === 2 ? '🔄' :
                     index === 3 ? '👥' :
                     index === 4 ? '⏰' : '🎤'}
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">{skill.name}</div>
                  <div className="text-xs text-rose-500 mt-1">{skill.level}%</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white mr-3">
                🌐
              </span>
              Ngôn ngữ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between card-hover"
                >
                  <span className="font-semibold text-gray-800">{lang.name}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-pink-100 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-rose-500">{lang.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          {skills.tools && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white mr-3">
                  📱
                </span>
                Công cụ & Nền tảng
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full text-sm font-semibold card-hover"
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
