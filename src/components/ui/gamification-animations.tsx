'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, Trophy, Zap, Plus } from 'lucide-react';
import { cn } from '@/utils/cn';

interface PointsEarnedAnimationProps {
  points: number;
  isVisible: boolean;
  onComplete?: () => void;
  className?: string;
}

export const PointsEarnedAnimation: React.FC<PointsEarnedAnimationProps> = ({
  points,
  isVisible,
  onComplete,
  className,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1, 1],
            y: [0, -20, -40, -80]
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 2,
            times: [0, 0.2, 0.8, 1],
            ease: "easeOut"
          }}
          className={cn(
            'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50',
            'pointer-events-none',
            className
          )}
        >
          <div className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
            <Plus size={20} />
            <span className="font-bold text-lg">{points}</span>
            <span className="text-sm">pontos</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface LevelUpCelebrationProps {
  level: number;
  isVisible: boolean;
  onComplete?: () => void;
  className?: string;
}

export const LevelUpCelebration: React.FC<LevelUpCelebrationProps> = ({
  level,
  isVisible,
  onComplete,
  className,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  const confettiPieces = Array.from({ length: 20 }, (_, i) => i);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
            className
          )}
        >
          {/* Confetti */}
          {showConfetti && confettiPieces.map((piece) => (
            <motion.div
              key={piece}
              initial={{
                opacity: 1,
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: 360,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][
                  Math.floor(Math.random() * 5)
                ],
              }}
            />
          ))}

          {/* Level Up Modal */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-sm mx-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="mb-4"
            >
              <Trophy size={64} className="text-yellow-500 mx-auto" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Parabéns!
            </h2>
            
            <p className="text-gray-600 mb-4">
              Você alcançou o nível
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="text-4xl font-bold text-blue-600 mb-4"
            >
              {level}
            </motion.div>
            
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star size={20} className="text-yellow-500 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface StreakAnimationProps {
  streak: number;
  isVisible: boolean;
  onComplete?: () => void;
  className?: string;
}

export const StreakAnimation: React.FC<StreakAnimationProps> = ({
  streak,
  isVisible,
  onComplete,
  className,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", damping: 15, stiffness: 300 }}
          className={cn(
            'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50',
            'pointer-events-none',
            className
          )}
        >
          <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.8,
                repeat: 2
              }}
              className="mb-2"
            >
              <Flame size={48} className="mx-auto text-yellow-300" />
            </motion.div>
            
            <div className="text-lg font-bold">
              {streak} dias seguidos!
            </div>
            
            <div className="text-sm opacity-90">
              Continue assim! 🔥
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AchievementUnlockProps {
  achievement: {
    id: string;
    title: string;
    description: string;
    icon: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
  };
  isVisible: boolean;
  onComplete?: () => void;
  className?: string;
}

export const AchievementUnlock: React.FC<AchievementUnlockProps> = ({
  achievement,
  isVisible,
  onComplete,
  className,
}) => {
  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-blue-400 to-blue-600',
    epic: 'from-purple-400 to-purple-600',
    legendary: 'from-yellow-400 to-orange-500',
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
            className
          )}
        >
          <motion.div
            initial={{ scale: 0, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: -100 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className={cn(
              'bg-gradient-to-br text-white rounded-2xl p-6 text-center shadow-2xl max-w-sm mx-4',
              rarityColors[achievement.rarity]
            )}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 1,
                repeat: 1
              }}
              className="mb-4"
            >
              <div className="text-6xl">{achievement.icon}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Conquista Desbloqueada!
              </h3>
              
              <h4 className="text-lg font-semibold mb-2">
                {achievement.title}
              </h4>
              
              <p className="text-sm opacity-90">
                {achievement.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="mt-4"
            >
              <Zap size={24} className="mx-auto text-yellow-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
