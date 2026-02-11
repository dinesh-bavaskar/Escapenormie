import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })

    const addHover = () => setHover(true)
    const removeHover = () => setHover(false)

    window.addEventListener("mousemove", move)

    document.querySelectorAll("button, a").forEach(el => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      document.querySelectorAll("button, a").forEach(el => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-yellow-400 rounded-full pointer-events-none"
        style={{ zIndex: 999999 }}
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 35 }}
      />

      {/* OUTER RING */}
      <motion.div
        className="fixed top-0 left-0 border border-yellow-400/70 rounded-full pointer-events-none"
        style={{ zIndex: 999998 }}
        animate={{
          x: pos.x - (hover ? 28 : 18),
          y: pos.y - (hover ? 28 : 18),
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          opacity: hover ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </>
  )
}
