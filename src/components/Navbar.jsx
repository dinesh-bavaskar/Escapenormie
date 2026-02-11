import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 text-gray-900 shadow-lg backdrop-blur border-b"
          : "bg-transparent text-yellow"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide flex items-center gap-2"
        >
          <span className="text-yellow-400">en</span>
          <span className={`${scrolled ? "text-gray-900" : "text-white"}`}>
            EscapeNormie
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/courses">All Courses</NavItem>
          {/* <NavItem to="/checkout">Checkout</NavItem> */}
          {/* <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem> */}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
              scrolled
                ? "bg-yellow-400 text-black hover:opacity-90"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            Cart / Checkout
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ✅ Animated underline NavLink */
function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative pb-2 transition duration-300 ${
          isActive ? "text-yellow-500" : "hover:text-yellow-400"
        }`
      }
    >
      {children}

      {/* underline hover animation */}
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
    </NavLink>
  );
}
