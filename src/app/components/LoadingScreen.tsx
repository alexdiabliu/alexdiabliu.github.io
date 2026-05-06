import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import logoSrc from '../../imports/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[var(--cosmos-black)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: Math.random() * 0.3 }}
            animate={{
              opacity: [Math.random() * 0.3, Math.random() * 0.8 + 0.2, Math.random() * 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative"
        initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        animate={
          isTransitioning
            ? {
                scale: 0.05,
                opacity: 0.8,
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
              }
            : { scale: 1, opacity: 1, x: 0, y: 0 }
        }
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="relative w-48 h-48">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="192" height="192" viewBox="0 0 192 192" className="absolute inset-0">
              <circle
                cx="96"
                cy="96"
                r="90"
                fill="none"
                stroke="white"
                strokeWidth="3"
                opacity="0.8"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="192" height="192" viewBox="0 0 192 192" className="absolute inset-0">
              <path
                d="M 96,10 A 86,86 0 0,1 160,60"
                fill="none"
                stroke="#ff0000"
                strokeWidth="4"
                opacity="0.9"
              />
            </svg>
          </motion.div>

          <motion.img
            src={logoSrc}
            alt="Logo"
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
