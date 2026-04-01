import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, Heart, Leaf } from 'lucide-react'

const WorkCard = ({ icon: Icon, title, category, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-sun-green/20 border border-white/10 p-10 flex flex-col justify-end"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-sun-green via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Ghost Icon */}
      <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
        <Icon className="w-40 h-40 text-white" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex px-4 py-1.5 rounded-full bg-sun-orange text-white font-sans text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-sun-orange/20">
          {category}
        </div>
        <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-white/60 font-sans text-lg mb-8 line-clamp-3 group-hover:text-white/90 transition-colors">
          {description}
        </p>
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sun-orange font-bold font-sans uppercase tracking-widest text-sm"
        >
          View Impact <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  )
}

const Works = () => {
  const works = [
    {
      icon: GraduationCap,
      category: "Education",
      title: "Vidya Deep Project",
      description: "Providing quality education and digital literacy to children in underserved rural areas of Bharat."
    },
    {
      icon: Leaf,
      category: "Environment",
      title: "Green Campus",
      description: "A nationwide student-led initiative to transform university campuses into zero-waste ecosystems."
    },
    {
      icon: Heart,
      category: "Health",
      title: "Sanjeevani Care",
      description: "Organizing blood donation drives and mental health awareness workshops across 12 cities."
    }
  ]

  return (
    <section id="works" className="relative py-24 md:py-48 bg-sun-charcoal overflow-hidden">
      {/* Ghost Text Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="text-[10rem] sm:text-[15rem] md:text-[25rem] font-serif font-bold text-white/[0.02] leading-none uppercase">
          Impact
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-white font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Our <span className="text-sun-orange italic">Work</span>.
            </h2>
            <p className="text-white/60 font-sans text-xl md:text-2xl leading-relaxed max-w-2xl">
              We focus on areas where youth energy can create the most immediate and sustainable impact across the nation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex shrink-0"
          >
            <button className="glass-light bg-white/5 border border-white/10 text-white w-full sm:w-auto px-10 py-5 rounded-2xl font-sans font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              Explore All Projects <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
