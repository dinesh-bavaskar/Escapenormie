import { motion } from "framer-motion"

const deals = [
  {
    title: "CA Final Fast Track",
    price: "₹4,999",
    faculty: "CA Ramesh Sir",
  },
  {
    title: "CS Executive Crash Course",
    price: "₹3,999",
    faculty: "CS Neha Ma'am",
  },
  {
    title: "CMA Inter Group 1",
    price: "₹2,999",
    faculty: "CMA Rahul Sir",
  },
  {
    title: "Interview Mastery Program",
    price: "₹999",
    faculty: "HR Expert Panel",
  },
  {
    title: "Study Abroad Guidance",
    price: "₹1,499",
    faculty: "International Counselors",
  },
]

// duplicate for infinite scroll illusion
const sliderDeals = [...deals, ...deals]

export default function TopDeals() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      {/* Heading + Button */}
      <div className="flex items-center justify-between mb-8 px-10">
        <h2 className="text-3xl font-bold">
          Top Deals This Week 🔥
        </h2>
<button className="px-5 py-2 border border-yellow-400 text-yellow-600 rounded-md text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
  All Courses
</button>


      </div>

      <motion.div
        className="flex gap-6 px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {sliderDeals.map((d, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white shadow rounded-xl p-5 border hover:shadow-xl transition"
          >
            <h3 className="font-semibold mb-2">{d.title}</h3>
            <p className="text-sm text-gray-600">Faculty: {d.faculty}</p>
            <p className="text-yellow-600 font-bold mt-2">{d.price}</p>

            <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded text-sm font-medium">
              Enroll Now
            </button>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
