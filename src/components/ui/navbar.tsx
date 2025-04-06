'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

interface NavbarProps {
  logo: ReactNode
  menuItems: {
    label: string
    href: string
  }[]
  ctaButton?: ButtonProps // Make optional
  secondaryButton?: ButtonProps // Add optional secondary button
}

export function Navbar({ logo, menuItems, ctaButton, secondaryButton }: NavbarProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {logo}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {secondaryButton && (
              <motion.button
                onClick={secondaryButton.onClick}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryButton.label}
              </motion.button>
            )}
            {ctaButton && (
              <motion.button
                onClick={ctaButton.onClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaButton.label}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
