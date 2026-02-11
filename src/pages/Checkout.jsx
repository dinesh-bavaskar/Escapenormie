import React, { useEffect, useMemo, useState } from "react";
import { getCart, removeFromCart, updateQty, cartTotal } from "../store/cart";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const subtotal = useMemo(() => cartTotal(), [cart]);

  const handleRemove = (id) => {
    const updated = removeFromCart(id);
    setCart(updated);
  };

  const handleQty = (id, qty) => {
    const updated = updateQty(id, qty);
    setCart(updated);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="text-sm text-gray-600">
          Home / <span className="text-yellow-600">Shopping Cart</span> / Checkout
        </p>
        <hr className="mt-4" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-16 md:grid-cols-12">
        {/* LEFT - FORMS */}
        <section className="md:col-span-7">
          {/* Account */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">Account</h2>

            <div className="mt-6 flex flex-wrap gap-8 text-lg">
              <label className="flex items-center gap-2">
                <input type="radio" name="acc" />
                Login
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="acc" defaultChecked />
                Register Account
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="acc" />
                Guest Checkout
              </label>
            </div>
          </div>

          {/* Personal Details */}
          <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Personal Details
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input label="First Name *" placeholder="First Name" />
              <Input label="Last Name *" placeholder="Last Name" />
              <Input label="E-Mail *" placeholder="E-Mail" />
              <Input label="Telephone *" placeholder="Telephone" />
              <Input label="Password *" placeholder="Password" type="password" />
            </div>
          </div>

          {/* Billing Address */}
          <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">Billing Address</h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Select label="Your Counselor (if any)" />
              <Select label="Select Attempt *" />
              <Input label="Company" placeholder="Company" />
              <Input label="Address 1 *" placeholder="Address 1" />
              <Input label="Address 2" placeholder="Address 2" />
              <Input label="City" placeholder="City" />
              <Input label="Post Code *" placeholder="Post Code" />
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-6 rounded-xl border bg-white shadow-sm">
            <div className="flex items-center justify-between bg-gray-100 px-6 py-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Use Coupon Code
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  placeholder="Enter your coupon here"
                  className="h-12 flex-1 rounded-md border px-4 outline-none focus:border-yellow-400"
                />
                <button className="h-12 rounded-xl bg-yellow-400 px-8 font-semibold text-black shadow hover:opacity-90">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Please select the preferred payment method to use on this order.
            </h2>

            <div className="mt-5 space-y-4 text-lg">
              <label className="flex items-center gap-3">
                <input type="radio" name="pay" defaultChecked />
                Pay Securely using UPI and Cards
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="pay" />
                Razorpay (UPI, Cards, Wallets, Netbanking)
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="pay" />
                CCavenue
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="pay" />
                Bank Transfer
              </label>
            </div>

            <div className="mt-6">
              <p className="text-xl font-semibold text-gray-800">
                Add Comments About Your Order
              </p>
              <textarea
                className="mt-3 w-full rounded-md border p-4 outline-none focus:border-yellow-400"
                rows={5}
              />
            </div>

            <div className="mt-6 space-y-3 text-lg">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                I wish to subscribe to the newsletter.
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" />
                I have read and agree to the{" "}
                <span className="text-yellow-600 underline">Privacy Policy</span>
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                I have read and agree to the{" "}
                <span className="text-yellow-600 underline">
                  Terms & Conditions
                </span>
              </label>

              <p className="text-sm text-gray-600">
                <span className="text-red-600">*</span> Fields are required
              </p>
            </div>

            <button className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 text-xl font-semibold text-black shadow-lg hover:opacity-90">
              Continue ➜
            </button>
          </div>
        </section>

        {/* RIGHT - CART SUMMARY */}
        <aside className="md:col-span-5">
          <div className="rounded-xl border bg-white shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-12 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
              <div className="col-span-2">IMAGE</div>
              <div className="col-span-5">PRODUCT NAME</div>
              <div className="col-span-2 text-center">QTY</div>
              <div className="col-span-3 text-right">TOTAL</div>
            </div>

            {/* items */}
            {cart.length === 0 ? (
              <div className="p-6 text-center text-gray-600">
                Cart is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-start border-b px-4 py-4"
                >
                  <div className="col-span-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 rounded border object-cover"
                    />
                  </div>

                  <div className="col-span-5">
                    <p className="font-semibold text-yellow-700 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      Model: {item.code || "COURSE-MODEL"}
                    </p>
                  </div>

                  <div className="col-span-2 flex flex-col items-center gap-2">
                    <input
                      value={item.qty}
                      onChange={(e) =>
                        handleQty(item.id, Number(e.target.value || 1))
                      }
                      className="h-10 w-14 rounded border text-center outline-none"
                      type="number"
                      min={1}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleQty(item.id, item.qty)}
                        className="h-10 w-10 rounded-full bg-yellow-400 font-bold text-black shadow"
                        title="Update"
                      >
                        ↻
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="h-10 w-10 rounded bg-red-500 font-bold text-white shadow"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="col-span-3 text-right font-semibold text-gray-900">
                    Rs. {(item.price * item.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              ))
            )}

            {/* totals */}
            <div className="p-4">
              <div className="flex items-center justify-between border bg-gray-50 px-4 py-4 text-lg">
                <span>Sub-Total:</span>
                <span className="font-semibold">
                  Rs. {subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border bg-gray-50 px-4 py-4 text-lg">
                <span>Total:</span>
                <span className="font-semibold">
                  Rs. {subtotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-md border px-4 text-lg outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <select className="mt-2 h-12 w-full rounded-md border px-4 text-lg outline-none focus:border-yellow-400">
        <option>--- Please Select ---</option>
        <option>May 2027</option>
        <option>Jan 2028 (+Rs. 5,000)</option>
        <option>Sep 2026 (+Rs. 4,000)</option>
      </select>
    </div>
  );
}
