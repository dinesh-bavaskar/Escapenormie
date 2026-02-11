const events = [
  {
    date: "30",
    month: "December",
    title: "Career Clarity Workshop",
    desc: "Interactive session helping students discover strengths, explore career paths, and create a clear roadmap for the future."
  },
  {
    date: "23",
    month: "December",
    title: "Study Abroad Simplified",
    desc: "An informative session covering country selection, course options, SOP/LOR tips, and visa guidance."
  }
]

export default function Events() {
  return (
   <section className="bg-black text-white py-20 px-10 mb-24">

      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold">Events</h2>
          <p className="text-gray-400 text-sm">
            Upcoming educational events to feed your mind
          </p>
        </div>

        <button className="border border-white px-4 py-2 text-sm">
          View All
        </button>
      </div>

      {events.map((e, i) => (
        <div
          key={i}
          className="flex gap-8 border-t border-gray-700 py-8"
        >
          <div className="text-center">
            <p className="text-3xl font-bold">{e.date}</p>
            <p className="text-sm text-gray-400">{e.month}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
            <p className="text-gray-400 text-sm">{e.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
