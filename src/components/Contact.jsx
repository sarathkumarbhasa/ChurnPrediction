import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, MapPin, Phone, Send, ArrowUp } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState('idle') // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-48 bg-sun-cream relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sun-green/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h2 className="text-sun-green font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-8 md:mb-12">
              Let's <span className="text-sun-orange italic">Talk</span>.
            </h2>
            
            <div className="space-y-6 md:space-y-10 mb-12 md:mb-16">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-sun-orange/10 flex items-center justify-center text-sun-orange shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sun-green text-base md:text-lg mb-1 uppercase tracking-widest">Email Us</h4>
                  <p className="text-sun-green/60 text-lg md:text-xl break-all">connect@sun-ngo.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-sun-orange/10 flex items-center justify-center text-sun-orange shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sun-green text-base md:text-lg mb-1 uppercase tracking-widest">Visit Us</h4>
                  <p className="text-sun-green/60 text-lg md:text-xl">124, Youth Plaza, New Delhi, Bharat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-sun-orange/10 flex items-center justify-center text-sun-orange shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sun-green text-base md:text-lg mb-1 uppercase tracking-widest">Call Us</h4>
                  <p className="text-sun-green/60 text-lg md:text-xl">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-auto hidden lg:block">
              <p className="font-serif text-3xl italic text-sun-green/40">
                Join the movement. Be the change.
              </p>
            </div>
          </motion.div>

          {/* Right: Premium Dark Green Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-sun-green/95 border border-white/10 p-6 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl backdrop-blur-2xl"
          >
            <h3 className="text-white font-serif text-2xl md:text-4xl font-bold mb-8 md:mb-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-sun-orange flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </span>
              Volunteer Registration
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Select Domain</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white appearance-none cursor-pointer">
                    <option className="bg-sun-green text-white">Education & Literacy</option>
                    <option className="bg-sun-green text-white">Environment & Sustainability</option>
                    <option className="bg-sun-green text-white">Health & Wellness</option>
                    <option className="bg-sun-green text-white">Digital Advocacy</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                    <ArrowUp className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Why do you want to join?</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your passion..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={formState !== 'idle'}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(231, 111, 40, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-sans font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-500 ${
                  formState === 'success'
                    ? 'bg-sun-green border border-white/20 text-white'
                    : 'bg-sun-orange text-white'
                }`}
              >
                {formState === 'idle' && (
                  <>Apply to Join Movement <Send className="w-5 h-5" /></>
                )}
                {formState === 'sending' && (
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {formState === 'success' && (
                  <>Welcome to the SUN! <Check className="w-5 h-5 md:w-6 md:h-6" /></>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
