export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Escape Normie</h2>
            <p className="text-sm leading-relaxed mb-4">
              We help students turn confusion into clarity and build their
              career with mentorship, courses and guidance.
            </p>

            <div className="space-y-2 text-sm">
              <p>📞 7768815151</p>
              <p>✉ admin@escapenormie.com</p>
              <p>
                📍 Office no 3, Vighnaharta Apartment near Matru Hostel,
                Sangamner (422605)
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About", "Blog", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-3 text-sm">
              {["Courses", "Events", "Instagram", "FAQs"].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Registration",
                "Career Guidance",
                "Course Details",
                "Study Abroad",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <div className="flex gap-4 mt-2">
              {["🌐", "📘", "📷", "💼"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Escape Normie. All rights reserved. |
            <span className="hover:text-yellow-400 cursor-pointer ml-2">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:text-yellow-400 cursor-pointer">
              Terms & Conditions
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
