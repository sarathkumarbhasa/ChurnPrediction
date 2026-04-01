import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Mail, MapPin, Phone, Send, ArrowUp, Sparkles, Heart, Users, Globe } from 'lucide-react'

const SuccessOverlay = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center p-6 md:p-10"
    >
      <div className="absolute inset-0 bg-sun-green/95 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem]" />
      
      <div className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-sun-orange rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-sun-orange/40"
        >
          <Check className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </motion.div>

        <div className="space-y-4">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white font-serif text-3xl md:text-5xl font-bold"
          >
            Welcome to <span className="text-sun-orange italic">the Movement</span>.
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 font-sans text-base md:text-lg max-w-md mx-auto leading-relaxed"
          >
            Your passion has found its purpose. We've received your application and will reach out shortly to begin our journey together.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 text-sun-orange/40"
        >
          <Heart className="w-6 h-6 animate-pulse" />
          <Users className="w-6 h-6 animate-pulse delay-75" />
          <Globe className="w-6 h-6 animate-pulse delay-150" />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={onReset}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-sans text-sm font-bold uppercase tracking-widest transition-all"
        >
          Got it
        </motion.button>
      </div>

      {/* Particle Effects */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0,
            opacity: 1 
          }}
          animate={{ 
            x: (Math.random() - 0.5) * 400, 
            y: (Math.random() - 0.5) * 400,
            scale: [0, 1.5, 0],
            opacity: 0 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: i * 0.1,
            ease: "easeOut"
          }}
          className="absolute left-1/2 top-1/2 w-2 h-2 bg-sun-orange rounded-full"
        />
      ))}
    </motion.div>
  )
}

const Contact = () => {
  const [formState, setFormState] = useState('idle') // idle, sending, success
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    domain: 'Education & Literacy',
    reason: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    
    try {
      const response = await fetch('http://localhost:5000/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState('success')
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          domain: 'Education & Literacy',
          reason: ''
        })
        // Reset form after 5 seconds
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        throw new Error('Failed to register')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setFormState('idle')
      alert('There was an error with your registration. Please try again.')
    }
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
            className="relative glass bg-sun-green/95 border border-white/10 p-6 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <AnimatePresence>
              {formState === 'success' && (
                <SuccessOverlay onReset={() => setFormState('idle')} />
              )}
            </AnimatePresence>

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
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Select Domain</label>
                  <div className="relative">
                    <select 
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-sun-orange focus:bg-white/10 transition-all font-sans text-sm md:text-base text-white appearance-none cursor-pointer"
                    >
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
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 ml-4">Why do you want to join?</label>
                <textarea
                  required
                  rows="4"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
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
