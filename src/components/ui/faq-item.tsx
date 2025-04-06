'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  delay?: number
}

export function FaqItem({ question, answer, isOpen, toggleOpen, delay = 0 }: FaqItemProps) {
  return (
    <motion.div
      className="border-b border-gray-200 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-3 pb-1 text-gray-600">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}
