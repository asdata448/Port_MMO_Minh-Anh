'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Mail } from './Icons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Võ Thị Minh Anh</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                HR Executive đầy nhiệt huyết, chuyên nghiệp và đam mê phát triển nguồn nhân lực chất lượng cao.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                {['Giới thiệu', 'Học vấn', 'Kỹ năng', 'Kinh nghiệm', 'Dự án', 'Liên hệ'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-rose-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold mb-4">Kết nối</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/minh-anh-v%E1%BB%8D-5508892a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:minhavo.hr@gmail.com"
                  className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Võ Thị Minh Anh. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className={`mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 ${
                showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
              Lên đầu
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
