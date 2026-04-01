import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-sun-charcoal">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-sun-charcoal/30 via-transparent to-sun-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-radial from-sun-orange/10 via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Pulsing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="glass-light px-4 py-1.5 rounded-full flex items-center gap-2 border-sun-orange/30 shadow-lg shadow-sun-orange/10"
          >
            <div className="w-2 h-2 rounded-full bg-sun-orange animate-pulse" />
            <span className="text-white font-sans text-xs font-semibold tracking-wider uppercase">
              500+ Volunteers Nationwide
            </span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <div className="text-center mb-8 max-w-5xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-white font-serif font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-2"
          >
            Empowering Youth.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-sun-orange font-serif italic font-medium text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight"
          >
            Transforming India.
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/80 font-sans text-base sm:text-lg md:text-xl mb-10 tracking-wide text-center max-w-md md:max-w-2xl mx-auto"
        >
          By students. For students. For <span className="text-white font-medium">Bharat</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(231, 111, 40, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-sun-orange text-white px-10 py-4 rounded-full font-sans font-bold flex items-center gap-2 text-lg shadow-xl shadow-sun-orange/20 group"
          >
            Join as Volunteer 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            onClick={() => {
              const worksSection = document.getElementById('works');
              if (worksSection) {
                worksSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="glass-light border-white/20 text-white px-10 py-4 rounded-full font-sans font-bold flex items-center gap-2 text-lg backdrop-blur-md"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-sun-orange/80 to-transparent" />
        <span className="text-white/40 font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
