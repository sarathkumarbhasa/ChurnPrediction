import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const TeamMember = ({ name, role, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-light bg-white/50 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-xl border border-white/20 hover:border-sun-orange/30 transition-all group"
    >
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden p-1.5 border-2 border-sun-orange/20 group-hover:border-sun-orange transition-colors duration-500">
        <img 
          src={image} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" 
        />
      </div>
      <h3 className="text-sun-green font-serif text-2xl font-bold mb-2">{name}</h3>
      <p className="text-sun-orange font-sans text-sm font-bold uppercase tracking-widest mb-6">{role}</p>
      
      <div className="flex gap-4 mt-auto">
        {[Linkedin, Twitter, Github].map((Icon, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -3, color: "#E76F28" }}
            className="text-sun-green/40 hover:text-sun-orange transition-colors"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

const Team = () => {
  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & President",
      image: "https://i.pravatar.cc/300?u=arjun"
    },
    {
      name: "Priya Patel",
      role: "Operations Head",
      image: "https://i.pravatar.cc/300?u=priya"
    },
    {
      name: "Rahul Verma",
      role: "Technology Lead",
      image: "https://i.pravatar.cc/300?u=rahul"
    },
    {
      name: "Ananya Iyer",
      role: "Community Director",
      image: "https://i.pravatar.cc/300?u=ananya"
    }
  ]

  return (
    <section id="team" className="py-24 md:py-48 bg-sun-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sun-green font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            The <span className="text-sun-orange italic">Heart</span> of SUN.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sun-green/60 font-sans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Meet the visionaries and leaders driving our mission forward across Bharat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
