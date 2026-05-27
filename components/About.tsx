'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';
import { CalendarDays, Mail, MapPin, Phone } from './Icons';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personal = portfolioData.personal;

  const infoItems = [
    {
      label: 'Ngày sinh',
      value: personal.dob,
      icon: CalendarDays,
      gradient: 'from-pink-400 to-rose-400',
    },
    {
      label: 'Điện thoại',
      value: personal.phone,
      icon: Phone,
      gradient: 'from-rose-400 to-pink-500',
    },
    {
      label: 'Email',
      value: personal.email,
      icon: Mail,
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      label: 'Địa điểm',
      value: personal.location,
      icon: MapPin,
      gradient: 'from-rose-500 to-pink-400',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white/50 backdrop-blur-sm">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Giới thiệu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Profile image area with background */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-1/3 mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/banner.png"
                    alt="Võ Thị Minh Anh"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {personal.name}
                </h3>
                <p className="text-lg sm:text-xl text-rose-500 font-semibold mb-4 sm:mb-6">
                  {personal.title}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 text-left">
                  Tôi là một chuyên gia Nhân sự đầy nhiệt huyết với niềm đam mê mạnh mẽ trong việc
                  xây dựng và phát triển nguồn nhân lực chất lượng cao. Với kiến thức nền tảng từ
                  Đại học Cần Thơ và kinh nghiệm thực tế tại nhiều công ty, tôi luôn sẵn sàng học hỏi
                  vàadapt với môi trường làm việc mới.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                  Mục tiêu của tôi là trở thành một HR Professional xuất sắc, đóng góp vào sự
                  phát triển bền vững của doanh nghiệp thông qua việc thu hút, phát triển và giữ chân
                  nhân tài.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg card-hover"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} text-white flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-gray-800 break-words">{item.value}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
