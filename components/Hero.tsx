'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SakuraDecoration from './SakuraDecoration';
import { BriefcaseBusiness, Mail } from './Icons';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32"
      style={{
        backgroundImage: 'url("https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/fc9f34cd-bfc5-4f44-9fe1-eac09356a008/605d679867504bd8bfb2257e099cc4a6.pdf")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/95 via-rose-50/90 to-cream-50/95" />

      <SakuraDecoration petalCount={8} opacity={0.5} />

      <div ref={ref} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="relative inline-block">
                <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 sm:ring-8 ring-white shadow-2xl mx-auto">
                  <img
                    src="/banner.png"
                    alt="Võ Thị Minh Anh"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 -m-2 opacity-20 blur-xl" />
              </div>
            </motion.div>

            <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-rose-400 mb-3 sm:mb-4">
              Xin chào, tôi là
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="gradient-text">Võ Thị Minh Anh</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-5 sm:mb-8">
              HR Executive
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Đam mê con người, nhiệt huyết với nghề nhân sự - Đồng hành cùng doanh nghiệp phát triển bền vững
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
              {[
                { label: 'Năm kinh nghiệm', value: '1+' },
                { label: 'Dự án đã tham gia', value: '10+' },
                { label: 'Chứng chỉ', value: '2' },
                { label: 'Khách hàng hài lòng', value: '95%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg card-hover"
                >
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${
                    index === 0 ? 'from-rose-400 to-pink-500' :
                    index === 1 ? 'from-pink-400 to-rose-500' :
                    index === 2 ? 'from-rose-500 to-pink-400' :
                    'from-pink-500 to-rose-400'
                  } bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Liên hệ với tôi
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-rose-500 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-rose-200 flex items-center justify-center gap-2"
              >
                <BriefcaseBusiness className="w-5 h-5" />
                Xem dự án
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
