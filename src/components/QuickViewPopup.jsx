import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cart";


export default function QuickViewPopup({ open, onClose, course }) {
  const [qty, setQty] = useState(1);
  const [option, setOption] = useState("");
  const navigate = useNavigate();

const handleBuyNow = () => {
  addToCart(course, qty);
  onClose();
  navigate("/checkout");
};


  useEffect(() => {
    setQty(1);
    setOption("");
  }, [course]);

  if (!open || !course) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-4xl rounded-xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left */}
          <div className="p-6">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={course.image}
                alt={course.title}
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>

          {/* right */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <b>Brand:</b>{" "}
                <span className="text-yellow-600 font-semibold">
                  {course.brand || "ESCAPE NORMIE"}
                </span>
              </p>
              <p>
                <b>Product Code:</b> {course.code || `COURSE-${course.id}`}
              </p>
              <p>
                <b>Availability:</b>{" "}
                <span className="rounded bg-gray-200 px-2 py-1 text-xs">
                  {course.stock || 50}
                </span>
              </p>
            </div>

            <hr className="my-5" />

            <div className="text-3xl font-bold text-black">
              ₹{course.price.toLocaleString("en-IN")}
            </div>

            <div className="mt-5">
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 text-gray-800 outline-none focus:border-yellow-400"
              >
                <option value="">--- Please Select ---</option>
                <option value="Google Drive">Google Drive</option>
                <option value="Online Access">Online Access</option>
              </select>
            </div>

            {/* qty */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-12 w-12 rounded-lg border text-xl font-bold hover:bg-gray-100"
              >
                -
              </button>
              <div className="h-12 w-16 rounded-lg border flex items-center justify-center font-semibold">
                {qty}
              </div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="h-12 w-12 rounded-lg border text-xl font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* buttons */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button className="h-14 rounded-xl bg-[#0b2540] text-white font-bold hover:opacity-90">
                ADD TO CART
              </button>
              <button
  onClick={handleBuyNow}
  className="h-14 rounded-xl bg-yellow-400 text-black font-bold hover:opacity-90"
>
  BUY NOW
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
