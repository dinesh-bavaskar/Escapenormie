import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TopDeals from "../components/TopDeals"
import Events from "../components/Events"
import BlogSection from "../components/BlogSection"
import WhyChooseUs from "../components/WhyChooseUs"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
     

      {/* HERO SLIDER */}
      <Hero />

      {/* WHAT WE OFFER */}
      <section className="py-14 text-center bg-white">
        <h2 className="text-3xl font-bold mb-3">What We Offer</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Professional courses, mentorship, events and career guidance to help
          you move from confusion to clarity.
        </p>
      </section>

      {/* TOP DEALS */}
      <TopDeals />

      {/* EVENTS */}
      <Events />

      {/* BLOG / LATEST NEWS */}
      <BlogSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />
    </>
  )
}
