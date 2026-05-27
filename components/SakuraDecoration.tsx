'use client';

import { useEffect, useRef } from 'react';

interface SakuraPetal {
  id: number;
  left: string;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

interface SakuraDecorationProps {
  petalCount?: number;
  opacity?: number;
}

const generatePetals = (count: number): SakuraPetal[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: 10 + Math.random() * 15,
    animationDelay: Math.random() * 10,
    size: 8 + Math.random() * 12,
  }));
};

export default function SakuraDecoration({ petalCount = 5, opacity = 0.4 }: SakuraDecorationProps) {
  const petalsRef = useRef<SakuraPetal[]>(generatePetals(petalCount));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && containerRef.current) {
      containerRef.current.style.display = 'none';
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {petalsRef.current.map((petal) => (
        <div
          key={petal.id}
          className="absolute sakura-float"
          style={{
            left: petal.left,
            top: '-20px',
            animation: `fall ${petal.animationDuration}s linear ${petal.animationDelay}s infinite`,
            opacity: opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12 2 15 8 15 12C15 16 12 22 12 22C12 22 9 16 9 12C9 8 12 2 12 2Z"
              fill="currentColor"
              className="text-pink-300"
            />
            <path
              d="M12 2C12 2 18 5 20 9C22 13 20 19 18 21C16 23 10 19 8 15C6 11 12 2 12 2Z"
              fill="currentColor"
              className="text-pink-400 opacity-60"
            />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity};
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
