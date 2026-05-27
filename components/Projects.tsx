'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink } from './Icons';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = portfolioData.projects;

  const gradients = [
    'from-pink-400 to-rose-400',
    'from-rose-400 to-pink-500',
    'from-pink-500 to-rose-500',
    'from-rose-500 to-pink-400',
    'from-pink-400 to-rose-500',
    'from-rose-400 to-pink-400',
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-white/50 backdrop-blur-sm">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Dự án nổi bật</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden card-hover group"
            >
              {/* Project header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]}`} />

              <div className="p-5 sm:p-6">
                {/* Project link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} text-white text-xs font-semibold mb-3`}>
                    {project.period}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 pr-10 sm:pr-0 group-hover:text-rose-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-rose-500 font-semibold mb-1">
                    {project.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {project.organization}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
