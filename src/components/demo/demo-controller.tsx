'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, RotateCcw, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { DemoJourney, DemoStep, getDemoJourneyById } from '@/shared/demo/user-journeys';

interface DemoControllerProps {
  journeyId?: string;
  isActive: boolean;
  onComplete?: () => void;
  onClose?: () => void;
  className?: string;
}

export const DemoController: React.FC<DemoControllerProps> = ({
  journeyId,
  isActive,
  onComplete,
  onClose,
  className,
}) => {
  const [journey, setJourney] = useState<DemoJourney | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (journeyId) {
      const foundJourney = getDemoJourneyById(journeyId);
      setJourney(foundJourney || null);
      setCurrentStepIndex(0);
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [journeyId]);

  useEffect(() => {
    if (!isActive || !journey || !isPlaying || isPaused) return;

    const currentStep = journey.steps[currentStepIndex];
    if (!currentStep) {
      handleComplete();
      return;
    }

    const timer = setTimeout(() => {
      executeStep(currentStep);
    }, currentStep.duration || 1000);

    return () => clearTimeout(timer);
  }, [isActive, journey, currentStepIndex, isPlaying, isPaused]);

  const executeStep = (step: DemoStep) => {
    // Highlight the target element
    if (step.target) {
      highlightElement(step.target);
    }

    // Simulate the action
    switch (step.action) {
      case 'tap':
        simulateTap(step.target);
        break;
      case 'type':
        simulateTyping(step.target, step.data?.message || '');
        break;
      case 'swipe':
        simulateSwipe(step.target);
        break;
      case 'highlight':
        // Already handled above
        break;
      case 'wait':
        // Just wait for the duration
        break;
    }

    // Move to next step
    setTimeout(() => {
      if (currentStepIndex < journey!.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      } else {
        handleComplete();
      }
    }, step.duration || 1000);
  };

  const highlightElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('demo-highlight');
      setTimeout(() => {
        element.classList.remove('demo-highlight');
      }, 2000);
    }
  };

  const simulateTap = (selector?: string) => {
    if (!selector) return;
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      // Add visual feedback
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
        element.style.transform = '';
        element.click();
      }, 150);
    }
  };

  const simulateTyping = (selector?: string, text?: string) => {
    if (!selector || !text) return;
    const element = document.querySelector(selector) as HTMLInputElement;
    if (element) {
      element.focus();
      element.value = '';
      
      // Type character by character
      let i = 0;
      const typeInterval = setInterval(() => {
        element.value += text[i];
        element.dispatchEvent(new Event('input', { bubbles: true }));
        i++;
        if (i >= text.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    }
  };

  const simulateSwipe = (selector?: string) => {
    if (!selector) return;
    const element = document.querySelector(selector);
    if (element) {
      // Simulate swipe animation
      element.classList.add('demo-swipe');
      setTimeout(() => {
        element.classList.remove('demo-swipe');
      }, 500);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleNext = () => {
    if (journey && currentStepIndex < journey.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleComplete = () => {
    setIsPlaying(false);
    setIsPaused(false);
    onComplete?.();
  };

  if (!isActive || !journey) return null;

  const currentStep = journey.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / journey.steps.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className={cn(
          'fixed bottom-4 left-4 right-4 z-50 bg-white rounded-xl shadow-lg border border-gray-200',
          'max-w-md mx-auto',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{journey.title}</h3>
              <p className="text-sm text-gray-600">
                Passo {currentStepIndex + 1} de {journey.steps.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="p-4">
          <h4 className="font-medium text-gray-800 mb-2">
            {currentStep?.title}
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            {currentStep?.description}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={handleRestart}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
              title="Reiniciar"
            >
              <RotateCcw size={20} />
            </button>

            {!isPlaying || isPaused ? (
              <button
                onClick={handlePlay}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                title="Reproduzir"
              >
                <Play size={20} />
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                title="Pausar"
              >
                <Pause size={20} />
              </button>
            )}

            <button
              onClick={handleNext}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
              title="Próximo"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Demo Styles */}
      <style jsx global>{`
        .demo-highlight {
          position: relative;
          z-index: 1000;
        }
        
        .demo-highlight::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: rgba(59, 130, 246, 0.3);
          border: 2px solid #3B82F6;
          border-radius: 8px;
          animation: demo-pulse 1s infinite;
          pointer-events: none;
        }
        
        @keyframes demo-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        
        .demo-swipe {
          transform: translateX(-100px);
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default DemoController;
