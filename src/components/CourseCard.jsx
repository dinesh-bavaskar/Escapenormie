import React from "react";
import { FaShoppingCart, FaHeart, FaEye, FaSyncAlt } from "react-icons/fa";

export default function CourseProductCard({
  course,
  onQuickView,
  onOpenDetail,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      {/* badge */}
      <div className="absolute left-3 top-3 z-30 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
        New
      </div>

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Hover Toolbar */}
        <div className="absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 justify-center opacity-0 transition group-hover:opacity-100">
          <div className="flex overflow-hidden rounded-md border bg-yellow-400 shadow-md">
            <ActionBtn title="Add to cart" onClick={() => alert("Add to cart")}>
              <FaShoppingCart />
            </ActionBtn>

            <ActionBtn title="Wishlist" onClick={() => alert("Wishlist")}>
              <FaHeart />
            </ActionBtn>

            <ActionBtn title="Quick view" dark onClick={() => onQuickView(course)}>
              <FaEye />
            </ActionBtn>

            <ActionBtn title="Compare" onClick={() => alert("Compare")}>
              <FaSyncAlt />
            </ActionBtn>
          </div>
        </div>

        {/* click overlay for detail */}
        <button
          onClick={() => onOpenDetail(course)}
          className="absolute inset-0 z-10"
          aria-label="Open course detail"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-semibold text-yellow-600">{course.category}</p>

        <h3 className="mt-1 line-clamp-2 text-base font-semibold text-gray-900">
          {course.title}
        </h3>

        <p className="mt-1 text-sm text-gray-600">{course.subtitle}</p>

        <div className="mt-3 flex items-center gap-2 text-lg font-bold text-black">
          ₹{course.price.toLocaleString("en-IN")}
          {course.oldPrice && (
            <span className="text-gray-500 line-through text-base font-medium">
              ₹{course.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* view button */}
        <button
          onClick={() => onOpenDetail(course)}
          className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function ActionBtn({ children, title, onClick, dark }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      title={title}
      className={`flex h-11 w-12 items-center justify-center text-lg transition ${
        dark ? "bg-black text-white" : "text-black hover:bg-white/50"
      }`}
    >
      {children}
    </button>
  );
}
