import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-sun-green py-16 md:py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sun-orange/10 blur-[100px] md:blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tighter mb-6 block">
              S<span className="text-sun-orange">U</span>N
            </span>
            <p className="text-white/60 font-sans text-base md:text-lg mb-8 leading-relaxed">
              Empowering the youth of Bharat to drive meaningful social change through collective action and innovative solutions.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, color: "#E76F28" }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-white text-base md:text-lg mb-6 md:mb-8 uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {['About', 'Works', 'Team', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-sun-orange transition-colors font-sans text-base md:text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans font-bold text-white text-base md:text-lg mb-6 md:mb-8 uppercase tracking-[0.2em]">Connect</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="text-white/40 font-sans text-base md:text-lg break-all">connect@sun-ngo.org</li>
              <li className="text-white/40 font-sans text-base md:text-lg">+91 98765 43210</li>
              <li className="text-white/40 font-sans text-base md:text-lg">New Delhi, Bharat</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans font-bold text-white text-base md:text-lg mb-6 md:mb-8 uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-white/40 font-sans text-sm md:text-base mb-6">Stay updated with our latest impacts.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 text-white outline-none focus:border-sun-orange transition-colors font-sans text-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-sun-orange text-white px-4 md:px-6 rounded-full font-sans font-bold text-xs md:text-sm">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/20 font-sans text-[10px] md:text-sm tracking-widest uppercase">
            © 2026 Student Union for Nation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 font-sans text-xs md:text-sm">Made with ❤️ for Bharat</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-light border border-white/10 flex items-center justify-center text-white/60 hover:text-sun-orange transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
