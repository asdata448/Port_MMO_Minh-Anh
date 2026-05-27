'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '@/data/portfolio';
import { BriefcaseBusiness, Mail, MapPin, Phone, Send } from './Icons';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personal = portfolioData.personal;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      link: `mailto:${personal.email}`,
      gradient: 'from-pink-400 to-rose-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      link: `tel:${personal.phone}`,
      gradient: 'from-rose-400 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      link: null,
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      icon: BriefcaseBusiness,
      label: 'LinkedIn',
      value: 'Kết nối',
      link: personal.linkedin,
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Liên hệ</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hãy kết nối với tôi để thảo luận về cơ hội hợp tác
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={method.label}
                  href={method.link || undefined}
                  target={method.link ? '_blank' : undefined}
                  rel={method.link ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`bg-white rounded-2xl p-5 sm:p-6 shadow-xl text-center card-hover ${
                    method.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{method.label}</div>
                  <div className="font-semibold text-gray-800 break-words">{method.value}</div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-5 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6 text-center">
              Gửi tin nhắn
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-rose-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-rose-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-rose-400 focus:outline-none transition-colors"
                required
              />
              <textarea
                placeholder="Nội dung tin nhắn..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-rose-400 focus:outline-none transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi tin nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
