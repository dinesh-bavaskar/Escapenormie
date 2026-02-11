import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addToCart } from "../store/cart";

const COURSES = [
  {
    id: "ca",
    category: "CA",
    title: "Chartered Accountant (CA)",
    subtitle: "Full Courses / Batches",
    price: 2375,
    image: "/courses/ca.webp",
    brand: "ESCAPE NORMIE",
    code: "CA-COURSE-001",
    stock: 97,
    desc:
      "Complete CA learning path with recorded lectures, notes, and mock tests. Learn from industry experts and prepare confidently.",
  },
  {
    id: "cs",
    category: "CS",
    title: "Company Secretary (CS)",
    subtitle: "Full Courses / Batches",
    price: 1999,
    image: "/courses/cs.webp",
    brand: "ESCAPE NORMIE",
    code: "CS-COURSE-002",
    stock: 72,
    desc:
      "CS full course batches with structured syllabus, practice questions, and mentor support.",
  },
  {
    id: "cma",
    category: "CMA",
    title: "Cost Management Accountant (CMA)",
    subtitle: "Full Courses / Batches",
    price: 2599,
    image: "/courses/cma.webp",
    brand: "ESCAPE NORMIE",
    code: "CMA-COURSE-003",
    stock: 54,
    desc:
      "CMA courses designed with updated syllabus, practice papers, and exam-focused learning.",
  },
  {
    id: "cuet",
    category: "CUET",
    title: "CUET 2024-25",
    subtitle: "Test Series / Classes",
    price: 1499,
    image: "/courses/cuet.webp",
    brand: "ESCAPE NORMIE",
    code: "CUET-COURSE-004",
    stock: 120,
    desc:
      "CUET preparation program with mock tests, classes, practice sheets and full guidance.",
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ hook inside component

  const course = COURSES.find((c) => c.id === id);

  // ✅ Buy Now uses current course
  const buyNow = () => {
    addToCart(course, 1);
    navigate("/checkout");
  };

  // ✅ Add to cart button
  const addCart = () => {
    addToCart(course, 1);
    alert("Added to cart ✅");
  };

  if (!course) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <Link to="/all-courses" className="mt-4 inline-block text-yellow-600">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* breadcrumb */}
      <p className="text-sm text-gray-600">
        <Link to="/" className="text-yellow-600 font-semibold">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/all-courses" className="text-yellow-600 font-semibold">
          Courses
        </Link>{" "}
        / {course.title}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* image */}
        <div className="overflow-hidden rounded-xl border">
          <img
            src={course.image}
            alt={course.title}
            className="h-[420px] w-full object-cover"
          />
        </div>

        {/* content */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="mt-2 text-gray-600">{course.subtitle}</p>

          <div className="mt-5 space-y-2 text-sm text-gray-700">
            <p>
              <b>Brand:</b>{" "}
              <span className="text-yellow-600 font-semibold">{course.brand}</span>
            </p>
            <p>
              <b>Product Code:</b> {course.code}
            </p>
            <p>
              <b>Availability:</b>{" "}
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">
                {course.stock}
              </span>
            </p>
          </div>

          <div className="mt-6 text-3xl font-bold text-black">
            ₹{course.price.toLocaleString("en-IN")}
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{course.desc}</p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={addCart}
              className="h-12 flex-1 rounded-xl bg-black text-white font-semibold hover:bg-gray-800"
            >
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="h-12 flex-1 rounded-xl bg-yellow-400 text-black font-semibold hover:opacity-90"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
