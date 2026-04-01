import React, { Suspense, lazy, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const StatsBand = lazy(() => import('./components/StatsBand'))
const About = lazy(() => import('./components/About'))
const Works = lazy(() => import('./components/Works'))
const Team = lazy(() => import('./components/Team'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[100] w-12 h-12 md:w-14 md:h-14 bg-sun-orange text-white rounded-full flex items-center justify-center shadow-2xl shadow-sun-orange/40 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <main className="bg-sun-cream min-h-screen selection:bg-sun-orange selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-sun-cream"><div className="w-12 h-12 border-4 border-sun-orange border-t-transparent rounded-full animate-spin"></div></div>}>
        <StatsBand />
        <About />
        <Works />
        <Team />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </main>
  )
}

export default App
