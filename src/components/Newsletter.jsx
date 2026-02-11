export default function Newsletter() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-xl font-semibold mb-6">
          Subscribe to our newsletter
        </h2>

        {/* Card */}
        <div className="relative bg-white shadow-lg border rounded-lg p-8 max-w-3xl mx-auto">
          {/* Top border (airmail style) */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 rounded-t-lg"></div>

          <p className="text-gray-600 mb-6 mt-4">
            Subscribe now and receive weekly newsletter with educational
            materials, new courses, interesting posts, popular books and much
            more!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-3 rounded w-full md:w-2/3 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 font-semibold rounded transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
