import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['About', 'Works', 'Team', 'Gallery', 'Contact']

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 px-4 z-50 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-fit"
      >
        <div className="glass mx-auto max-w-5xl px-5 md:px-10 py-3.5 md:py-4 rounded-full flex items-center justify-between md:justify-center gap-x-8 md:gap-x-12 shadow-2xl relative border border-white/10">
          {/* Logo - Properly centered on mobile with the hamburger */}
          <div className="flex items-center shrink-0">
            <span className="text-2xl font-serif font-bold text-white tracking-tighter">
              S<span className="text-sun-orange">U</span>N
            </span>
          </div>

          {/* Nav Links - Desktop Only */}
          <div className="hidden md:flex items-center gap-x-8">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-sans text-[13px] text-white/80 hover:text-sun-orange transition-colors tracking-widest uppercase font-bold"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Join our movement"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-sun-orange text-white px-8 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest shadow-lg shadow-sun-orange/20"
            >
              Join Us
            </motion.button>

            {/* Mobile Toggle - Perfectly aligned on the right */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-sun-orange transition-all active:scale-90"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-sun-green md:hidden flex flex-col"
          >
            {/* Header in Overlay */}
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <span className="text-2xl font-serif font-bold text-white tracking-tighter">
                S<span className="text-sun-orange">U</span>N
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto"
            >
              <div className="w-full max-w-sm space-y-2 text-center py-12">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="group block py-4"
                    >
                      <span className="font-serif text-5xl font-bold text-white group-hover:text-sun-orange transition-all duration-300 block transform group-hover:italic group-hover:translate-x-2">
                        {item}
                      </span>
                    </a>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  className="pt-12"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-sun-orange text-white px-6 py-5 rounded-2xl font-sans text-lg font-bold shadow-xl shadow-sun-orange/20 uppercase tracking-widest"
                  >
                    Join the movement
                  </button>
                  <p className="mt-12 text-white/30 font-sans text-[10px] tracking-[0.4em] uppercase">
                    Student Union for Nation
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
