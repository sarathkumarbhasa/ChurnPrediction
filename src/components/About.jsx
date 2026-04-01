import React from 'react'
import { motion } from 'framer-motion'
import { Quote, ArrowUp } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-4 bg-sun-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Quote & Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative px-2 md:px-0 text-left"
        >
          <Quote className="absolute -top-12 -left-8 md:-top-16 md:-left-12 w-20 h-20 md:w-32 md:h-32 text-sun-orange/10 fill-sun-orange/10" />
          <h2 className="text-sun-green font-serif text-5xl md:text-8xl font-bold leading-[1.1] mb-10">
            Driving change <br />
            <span className="text-sun-orange italic">through youth energy.</span>
          </h2>
          <div className="relative pl-10 border-l-2 border-sun-orange/30">
            <blockquote className="text-sun-green/80 font-serif italic text-2xl md:text-4xl leading-relaxed mb-10">
              "The youth of today are not just the future; they are the power of now. At SUN, we channel this raw potential into national transformation."
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-sun-orange" />
              <span className="font-sans text-sun-green font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Our Mission</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glassmorphic Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:pl-10 mt-12 md:mt-0"
        >
          <div className="absolute -inset-6 bg-sun-green/5 rounded-[3rem] -rotate-2 hidden lg:block" />
          <div className="relative glass bg-sun-green/95 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/10">
            <h3 className="text-white font-serif text-3xl md:text-5xl font-bold mb-8">Who We Are</h3>
            <div className="space-y-6">
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed">
                Student Union for Nation (SUN) is more than an NGO; it's a movement. Born in the heart of universities, we bring together passionate students from across Bharat to solve real-world problems.
              </p>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed">
                From rural education to urban sustainability, our projects are designed, managed, and executed by students who believe in the power of collective action.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 w-full sm:w-auto bg-sun-orange text-white px-10 py-5 rounded-2xl font-sans font-bold shadow-xl shadow-sun-orange/20 transition-all flex items-center justify-center gap-4"
            >
              Learn More <ArrowUp className="w-4 h-4 rotate-45" />
            </motion.button>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sun-orange/20 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
