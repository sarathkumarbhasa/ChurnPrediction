import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  const displayValue = useTransform(spring, (current) => Math.floor(current))
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  useMotionValueEvent(displayValue, "change", (latest) => {
    setCount(latest)
  })

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-sun-orange">
      {count}{suffix}
    </span>
  )
}

const StatsBand = () => {
  const stats = [
    { label: "Lives Impacted", value: 1200, suffix: "+" },
    { label: "Projects Completed", value: 48, suffix: "" },
    { label: "Active Volunteers", value: 500, suffix: "+" },
    { label: "Cities Reached", value: 12, suffix: "" },
  ]

  return (
    <section className="relative z-20 -mt-10 md:-mt-20 px-4">
      <div className="max-w-7xl mx-auto glass bg-sun-green/90 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-2xl border border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-12 divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-sans text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBand
