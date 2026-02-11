import React, { useMemo, useState } from "react";
import { FaThLarge, FaListUl, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import CourseProductCard from "../components/CourseCard";
import QuickViewPopup from "../components/QuickViewPopup"; // create it like earlier

const COURSES = [
  {
    id: "ca",
    category: "CA",
    title: "Chartered Accountant (CA)",
    subtitle: "Full Courses / Batches",
    price: 2375,
    oldPrice: 2999,
    brand: "ESCAPE NORMIE",
    code: "CA-COURSE-001",
    stock: 97,
    image: "/courses/ca.webp",
    desc:
      "Complete CA learning path with recorded lectures, notes, and mock tests.",
  },
  {
    id: "cs",
    category: "CS",
    title: "Company Secretary (CS)",
    subtitle: "Full Courses / Batches",
    price: 1999,
    oldPrice: 2499,
    brand: "ESCAPE NORMIE",
    code: "CS-COURSE-002",
    stock: 72,
    image: "/courses/cs.webp",
    desc: "CS batches with updated syllabus, practice & mentor support.",
  },
  {
    id: "cma",
    category: "CMA",
    title: "Cost Management Accountant (CMA)",
    subtitle: "Full Courses / Batches",
    price: 2599,
    oldPrice: 3499,
    brand: "ESCAPE NORMIE",
    code: "CMA-COURSE-003",
    stock: 54,
    image: "/courses/cma.webp",
    desc: "CMA courses designed with exam-focused learning and notes.",
  },
  {
    id: "cuet",
    category: "CUET",
    title: "CUET 2024-25",
    subtitle: "Test Series / Classes",
    price: 1499,
    oldPrice: 1999,
    brand: "ESCAPE NORMIE",
    code: "CUET-COURSE-004",
    stock: 120,
    image: "/courses/cma.webp",
    desc: "CUET preparation with mock tests, classes, and practice sheets.",
  },
];

const CATEGORIES = [
  "All",
  "CA",
  "CS",
  "CMA",
  "CUET",
  "Fast Track Courses",
  "Combos",
];

export default function Courses() {
  const navigate = useNavigate();

  const [view, setView] = useState("grid");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // ✅ quick view popup state
  const [quickOpen, setQuickOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchQuery =
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(query.toLowerCase());

      const matchCategory = category === "All" ? true : c.category === category;

      return matchQuery && matchCategory;
    });
  }, [query, category]);

  const openQuickView = (course) => {
    setSelectedCourse(course);
    setQuickOpen(true);
  };

  const openDetails = (course) => {
    navigate(`/course/${course.id}`); // ✅ detail page route
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src="/hero/bg.png"
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <h1 className="text-3xl font-bold text-white">All Courses</h1>
          <p className="mt-2 text-sm text-white/80">
            Home <span className="mx-2">/</span> All Courses
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-12">
        {/* Left Sidebar */}
        <aside className="md:col-span-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">COURSES</h2>
            <div className="mt-4 space-y-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    category === cat
                      ? "bg-yellow-400 font-semibold text-black"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <section className="md:col-span-9">
          {/* Search + Toggle */}
          <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-md">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            {/* Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  view === "grid"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaThLarge />
              </button>
              <button
                onClick={() => setView("list")}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  view === "list"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaListUl />
              </button>
            </div>
          </div>

          {/* Courses Display */}
          <div className="mt-6">
            {filtered.length === 0 ? (
              <div className="rounded-xl border bg-white p-10 text-center text-gray-700 shadow-sm">
                No courses found.
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((course) => (
                  <CourseProductCard
                    key={course.id}
                    course={course}
                    onQuickView={openQuickView}
                    onOpenDetail={openDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((course) => (
                  <CourseRow
                    key={course.id}
                    course={course}
                    onQuickView={openQuickView}
                    onView={openDetails}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ✅ QuickView Popup */}
      <QuickViewPopup
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        course={selectedCourse}
      />
    </div>
  );
}

/* ✅ LIST ROW */
function CourseRow({ course, onView, onQuickView }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full rounded-lg object-cover sm:h-24 sm:w-28"
      />

      <div className="flex-1">
        <p className="text-xs font-semibold text-yellow-600">{course.category}</p>
        <h3 className="mt-1 text-lg font-bold text-gray-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{course.subtitle}</p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
        <p className="text-lg font-bold text-gray-900">
          ₹{course.price.toLocaleString("en-IN")}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onQuickView(course)}
            className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            Quick View
          </button>
          <button
            onClick={() => onView(course)}
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
