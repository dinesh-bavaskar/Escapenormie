const news = [
  {
    title: "How to Successfully Prepare for Studying Abroad",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    date: "January 5, 2026"
  },
  {
    title: "The Rise of Online Learning: How Virtual Education is Shaping the Future",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "January 7, 2026"
  },
  {
    title: "The Ultimate Guide to Choosing the Right Career Path After 12th Grade",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "January 9, 2026"
  }
]

export default function LatestNews() {
  return (
    <section className="bg-gradient-to-r from-[#2b1b14] to-[#3a2217] py-20 px-10 text-white">
      <h2 className="text-3xl font-bold mb-10">Latest News</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((n, i) => (
          <div
            key={i}
            className="bg-black/40 rounded-xl overflow-hidden hover:-translate-y-1 transition"
          >
            <img src={n.img} className="h-48 w-full object-cover" />

            <div className="p-5">
              <p className="text-sm text-gray-300 mb-2">{n.date}</p>
              <h3 className="font-semibold">{n.title}</h3>

              <button className="mt-4 text-yellow-400 text-sm">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
