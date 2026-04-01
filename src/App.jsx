import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const StatsBand = lazy(() => import('./components/StatsBand'))
const About = lazy(() => import('./components/About'))
const Works = lazy(() => import('./components/Works'))
const Team = lazy(() => import('./components/Team'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

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
    </main>
  )
}

export default App
