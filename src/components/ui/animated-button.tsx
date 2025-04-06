'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
}

const MotionButton = motion(Button)

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <MotionButton
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionButton>
  )
}
