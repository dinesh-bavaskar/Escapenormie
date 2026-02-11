import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const blogs = [
  {
    title: "How to Successfully Prepare for Studying Abroad: From Application to Arrival",
    date: "November 16, 2025",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "The Rise of Online Learning: How Virtual Education is Shaping the Future of Students",
    date: "December 2, 2025",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Ultimate Guide to Choosing the Right Career Path After 12th Grade",
    date: "December 20, 2025",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  },
  {
    title: "Top Skills Students Must Learn in 2026 for Career Growth",
    date: "January 5, 2026",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "How to Successfully Prepare for Studying Abroad: From Application to Arrival",
    date: "November 16, 2025",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "The Rise of Online Learning: How Virtual Education is Shaping the Future of Students",
    date: "December 2, 2025",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Ultimate Guide to Choosing the Right Career Path After 12th Grade",
    date: "December 20, 2025",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  },
  {
    title: "Top Skills Students Must Learn in 2026 for Career Growth",
    date: "January 5, 2026",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
]

export default function BlogSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogs.length)
    }, 4200)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 bg-black overflow-hidden text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <p className="text-gray-400">Education news all over the world.</p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative h-[420px] flex items-center justify-center">
        {blogs.map((blog, i) => {
          let position = i - index
          if (position < -2) position += blogs.length
          if (position > 2) position -= blogs.length

          const isCenter = position === 0

          return (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: position * 380, // ✅ now mathematically centered
                opacity: isCenter ? 1 : 0.35,
                filter: isCenter ? "blur(0px)" : "blur(3px)",
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              style={{
                zIndex: isCenter ? 20 : 10,
              }}
            >
              <div
                className="w-[340px] rounded-xl overflow-hidden bg-black shadow-xl"
                style={{
                  boxShadow: isCenter
                    ? "0 0 80px rgba(255, 200, 0, 0.35)"
                    : "none",
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    Escapenormie · {blog.date}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
