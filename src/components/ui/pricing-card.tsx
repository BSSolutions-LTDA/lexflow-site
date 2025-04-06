'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PricingCardProps {
  title: string
  subtitle: string
  price: string
  features: string[]
  buttonText: string
  buttonAction: () => void
  isPopular?: boolean
  delay?: number
}

export function PricingCard({ 
  title, 
  subtitle, 
  price, 
  features, 
  buttonText, 
  buttonAction, 
  isPopular = false,
  delay = 0 
}: PricingCardProps) {
  return (
    <motion.div
      className={`p-8 rounded-lg shadow-md ${isPopular ? 'border-2 border-blue-500 relative' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
          POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <p className="text-4xl font-bold mb-6">{price}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={buttonAction}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-800'
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  )
}
