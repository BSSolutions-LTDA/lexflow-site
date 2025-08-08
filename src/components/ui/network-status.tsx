'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import useNetworkStatus from '@/utils/hooks/useNetworkStatus';

interface NetworkStatusIndicatorProps {
  className?: string;
  showWhenOnline?: boolean;
  position?: 'top' | 'bottom';
}

export const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({
  className,
  showWhenOnline = false,
  position = 'top',
}) => {
  const { isOnline, isSlowConnection } = useNetworkStatus();
  const [showReconnected, setShowReconnected] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
    } else if (wasOffline && isOnline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  const shouldShow = !isOnline || isSlowConnection || (showWhenOnline && isOnline) || showReconnected;

  if (!shouldShow) return null;

  const getStatusConfig = () => {
    if (!isOnline) {
      return {
        icon: WifiOff,
        text: 'Sem conexão',
        bgColor: 'bg-red-500',
        textColor: 'text-white',
      };
    }
    
    if (showReconnected) {
      return {
        icon: CheckCircle,
        text: 'Reconectado',
        bgColor: 'bg-green-500',
        textColor: 'text-white',
      };
    }
    
    if (isSlowConnection) {
      return {
        icon: AlertTriangle,
        text: 'Conexão lenta',
        bgColor: 'bg-yellow-500',
        textColor: 'text-white',
      };
    }
    
    return {
      icon: Wifi,
      text: 'Online',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
    };
  };

  const { icon: Icon, text, bgColor, textColor } = getStatusConfig();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
        className={cn(
          'fixed left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg',
          position === 'top' ? 'top-4' : 'bottom-4',
          bgColor,
          textColor,
          className
        )}
      >
        <div className="flex items-center space-x-2">
          <Icon size={16} />
          <span className="text-sm font-medium">{text}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

interface OfflineBannerProps {
  className?: string;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({ className }) => {
  const { isOnline } = useNetworkStatus();

  if (isOnline) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className={cn(
        'bg-red-500 text-white px-4 py-3 text-center text-sm font-medium',
        className
      )}
    >
      <div className="flex items-center justify-center space-x-2">
        <WifiOff size={16} />
        <span>Você está offline. Algumas funcionalidades podem estar limitadas.</span>
      </div>
    </motion.div>
  );
};

interface RetryButtonProps {
  onRetry: () => void;
  isRetrying?: boolean;
  className?: string;
}

export const RetryButton: React.FC<RetryButtonProps> = ({
  onRetry,
  isRetrying = false,
  className,
}) => {
  const { isOnline } = useNetworkStatus();

  if (isOnline) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onRetry}
      disabled={isRetrying}
      className={cn(
        'flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg',
        'hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-colors duration-200',
        className
      )}
    >
      <Wifi size={16} />
      <span>{isRetrying ? 'Tentando...' : 'Tentar novamente'}</span>
    </motion.button>
  );
};

export default NetworkStatusIndicator;
