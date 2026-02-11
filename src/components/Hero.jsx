import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600",
]

const sliderText = [
  "Industry Ready Learning",
  "Skills. Mentors. Success.",
  "Learn. Practice. Achieve.",
  "Career-Focused Education",
  "Learn Smarter, Grow Faster",
]

const title = "ESCAPENORMIE"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % sliderText.length)
    }, 2500)

    return () => {
      clearInterval(imageTimer)
      clearInterval(textTimer)
    }
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden bg-black">
      {/* IMAGE SLIDER */}
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        {/* BADGE */}
        <span className="mb-4 px-4 py-1 text-sm bg-yellow-400 text-black rounded-full font-semibold animate-pulse">
          🚀 Trusted by 10,000+ Students
        </span>

        <p className="uppercase tracking-widest text-sm mb-4 text-gray-200">
          The Future Starts Here
        </p>

        {/* TYPING TITLE */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-3 flex"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* NAMING SLIDER */}
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl font-medium text-yellow-400 mb-6"
          >
            {sliderText[textIndex]}
          </motion.p>
        </AnimatePresence>

        {/* CTA */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition">
          Register Now
        </button>

        {/* STATS */}
        <div className="flex gap-10 mt-10 text-center text-white">
          <div>
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-300">Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-gray-300">Mentors</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-sm text-gray-300">Students</p>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </section>
  )
}
