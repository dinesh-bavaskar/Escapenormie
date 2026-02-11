import React from "react";

export default function QuickViewModal({ open, onClose, course }) {
  if (!open || !course) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-lg">
        {/* header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-bold text-gray-900">Quick View</h2>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-sm font-semibold hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div className="grid gap-6 p-5 md:grid-cols-2">
          <img
            src={course.image}
            alt={course.title}
            className="h-60 w-full rounded-lg object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>

            <p className="mt-2 text-sm text-gray-600">{course.desc}</p>

            <div className="mt-4 text-xl font-bold text-black">
              Rs. {course.price.toLocaleString("en-IN")}
              {course.oldPrice && (
                <span className="ml-2 text-gray-500 line-through text-base font-medium">
                  Rs. {course.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <button className="mt-5 w-full rounded-lg bg-black py-3 text-sm font-bold text-white hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
