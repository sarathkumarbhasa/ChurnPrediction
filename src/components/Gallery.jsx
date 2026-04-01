import React, { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

const GalleryItem = motion(forwardRef(({ image, title, category, description, index, onClick, ...props }, ref) => {
  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1 }
  }

  return (
    <div
      ref={ref}
      {...props}
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-sun-green/10 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Mobile Hint - Visible only on mobile */}
      <div 
        className="absolute bottom-4 right-4 md:hidden bg-sun-orange text-white p-3 rounded-full shadow-lg z-10"
        aria-label="View details"
      >
        <Maximize2 className="w-5 h-5" />
      </div>

      <motion.div 
        initial="initial"
        whileHover="hover"
        className="absolute inset-0 bg-gradient-to-t from-sun-green/95 via-sun-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
      >
        <motion.span
          variants={contentVariants}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sun-orange font-sans text-xs font-bold uppercase tracking-widest mb-2"
        >
          {category}
        </motion.span>
        <motion.h3
          variants={contentVariants}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white font-serif text-2xl font-bold mb-3"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={contentVariants}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-white/80 font-sans text-sm mb-6 line-clamp-4 leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          variants={contentVariants}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div 
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-sun-orange hover:border-sun-orange transition-all"
            aria-label={`View details of ${title}`}
          >
            <Maximize2 className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}))

const GalleryModal = ({ item, onClose }) => {
  if (!item) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-sun-charcoal/80 backdrop-blur-xl"
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl bg-sun-cream rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-sun-charcoal/10 backdrop-blur-md flex items-center justify-center text-sun-charcoal hover:bg-sun-orange hover:text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-[4/5] md:aspect-auto h-[300px] md:h-full">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="text-sun-orange font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-4 inline-block">
            {item.category}
          </span>
          <h2 className="text-sun-green font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {item.title}
          </h2>
          <p className="text-sun-green/70 font-sans text-base md:text-lg leading-relaxed mb-8">
            {item.description}
          </p>
          <div className="mt-auto pt-8 border-t border-sun-green/10">
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-sun-green text-white rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-sun-orange transition-all duration-300 shadow-lg shadow-sun-green/20"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  
  const filters = ['All', 'Events', 'Education', 'Cleanliness', 'Community']
  
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
    { 
      image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800', 
      title: 'Urban Food Distribution', 
      category: 'Community',
      description: 'Ensuring no one goes hungry. Our daily distribution drive serves over 200 meals to the needy in Delhi.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800', 
      title: 'School Building Initiative', 
      category: 'Education',
      description: 'Laying the bricks for a better tomorrow. We helped reconstruct two primary schools in rural Bihar.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800', 
      title: 'Student Leadership Camp', 
      category: 'Events',
      description: 'A 3-day intensive workshop focused on developing soft skills and national pride among university students.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', 
      title: 'Tech for Good Hackathon', 
      category: 'Community',
      description: 'Students coding solutions for local municipal problems, from waste tracking to traffic management.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800', 
      title: 'Mental Health Awareness', 
      category: 'Events',
      description: 'Breaking the stigma. Workshops held across 10 universities to support student mental wellness.'
    },
    { 
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800', 
      title: 'Green Campus Drive', 
      category: 'Cleanliness',
      description: 'Planting over 5000 saplings across college campuses to create sustainable green lungs in our cities.'
    },
  ]

  const filteredItems = activeFilter === 'All' ? items : items.filter(i => i.category === activeFilter)

  return (
    <section id="gallery" className="py-24 md:py-48 bg-sun-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sun-green font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Moments <span className="text-sun-orange italic">That Matter</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sun-green/60 font-sans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16"
          >
            A visual journey through our impacts, from the heart of our cities to the soul of our villages.
          </motion.p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 md:mt-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-8 py-2 md:py-2.5 rounded-full font-sans text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <GalleryItem 
                key={item.title} 
                {...item} 
                index={index}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                layout
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <GalleryModal 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
