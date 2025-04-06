'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TestimonialCardProps {
  avatar: ReactNode
  name: string
  role: string
  testimonial: string
  delay?: number
}

export function TestimonialCard({ avatar, name, role, testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial}</p>
    </motion.div>
  )
}
