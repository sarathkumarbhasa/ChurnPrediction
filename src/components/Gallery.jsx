import React, { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GalleryItem = motion(forwardRef(({ image, title, category, description, index, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`w-full bg-sun-cream rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] overflow-hidden group">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
        <span className="text-sun-orange font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-4 inline-block">
          {category}
        </span>
        <h2 className="text-sun-green font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-sun-green/70 font-sans text-base md:text-xl leading-relaxed mb-8 md:mb-12">
          {description}
        </p>
        <div className="mt-auto pt-6 md:pt-8 border-t border-sun-green/10">
          <button 
            className="px-8 py-3 bg-sun-green text-white rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-sun-orange transition-all duration-300 shadow-xl shadow-sun-green/20 w-fit"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}))

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Events', 'Education', 'Cleanliness']
  
  const items = [
    { 
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800', 
      title: 'Village Education Drive', 
      category: 'Education',
      description: 'Bringing digital literacy and fundamental education to children in the remote villages of Rajasthan.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800', 
      title: 'National Youth Summit', 
      category: 'Events',
      description: 'A grand gathering of over 1000 student leaders discussing the future of social entrepreneurship in Bharat.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?q=80&w=800', 
      title: 'River Cleaning Project', 
      category: 'Cleanliness',
      description: 'Our weekend warrior team successfully removed 2 tons of waste from the banks of the Yamuna river.'
    },
  ]

  const filteredItems = activeFilter === 'All' ? items : items.filter(i => i.category === activeFilter)

  return (
    <section id="gallery" className="py-24 md:py-40 bg-sun-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sun-green font-serif text-5xl md:text-8xl font-bold mb-6 leading-tight"
          >
            Moments <span className="text-sun-orange italic">That Matter</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sun-green/60 font-sans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            A visual journey through our impacts, from the heart of our cities to the soul of our villages.
          </motion.p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 sm:px-8 py-2 md:py-2.5 rounded-full font-sans text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-sun-orange text-white shadow-lg shadow-sun-orange/30'
                    : 'glass-light text-sun-green/60 hover:text-sun-green border border-sun-green/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="flex flex-col gap-12 md:gap-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <GalleryItem 
                key={item.title} 
                {...item} 
                index={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                layout
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
