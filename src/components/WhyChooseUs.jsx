import { motion } from "framer-motion"

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-3"
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12"
        >
          We turn your confusion into clarity and guide you from where you are
          to where you want to be.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card */}
          {[
            {
              icon: "🏁",
              title: "Highly Experienced",
              text: "Our mentors have personally faced the challenges of choosing the right academic and career paths. Their real-world experience helps them provide practical advice and relatable guidance tailored to each student’s unique journey."
            },
            {
              icon: "📘",
              title: "Quizzes, Questions & Courses",
              text: "Learning with us is interactive and engaging. We use quizzes, questions, and structured courses that build knowledge step-by-step and encourage critical thinking."
            },
            {
              icon: "💬",
              title: "Dedicated Support",
              text: "We offer continuous, personalized support throughout your journey. Whether you need help with career decisions, study abroad processes, or skill-building, our team is always available."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}   // 👈 HOVER ZOOM
              className="bg-white p-10 rounded shadow-md hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            >
              <div className="text-yellow-500 mb-6 text-5xl">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded transition">
            LEARN MORE
          </button>
        </motion.div>

      </div>
    </section>
  )
}
