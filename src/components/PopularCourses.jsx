
const courses = [
  {
    title: "CA Foundation",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    price: "₹999",
  },
  {
    title: "CS Executive",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    price: "₹1299",
  },
  {
    title: "CMA Intermediate",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    price: "₹1199",
  },
  {
    title: "Interview Mastery",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    price: "₹499",
  },
]

export default function PopularCourses() {
  return (
   <section className="pt-10 pb-20 px-10 bg-white">

      <h2 className="text-4xl font-bold text-yellow-500 mb-12">
        Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {courses.map((c, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white"
          >
            <img src={c.img} alt={c.title} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-blue-600 font-bold mt-2">{c.price}</p>

              <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
