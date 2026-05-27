'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SakuraDecoration from './SakuraDecoration';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener, { passive: true });
      return () => element.removeEventListener('mousemove', handleMouseMove as EventListener);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-8 ring-white shadow-2xl mx-auto">
                  <img
                    src="E:\MMO\PortJob\Minh_Anh\banner.png"
                    alt="Võ Thị Minh Anh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 -m-2 opacity-20 blur-xl" />
              </div>
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-rose-400 mb-4">
              Xin chào, tôi là
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Võ Thị Minh Anh</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8">
              HR Executive
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Đam mê con người, nhiệt huyết với nghề nhân sự - Đồng hành cùng doanh nghiệp phát triển bền vững
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
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
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg card-hover"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${
                    index === 0 ? 'from-rose-400 to-pink-500' :
                    index === 1 ? 'from-pink-400 to-rose-500' :
                    index === 2 ? 'from-rose-500 to-pink-400' :
                    'from-pink-500 to-rose-400'
                  } bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Liên hệ với tôi
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-rose-500 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-rose-200"
              >
                Xem dự án
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-rose-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
