import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import BlogDetail from "./pages/BlogDetail";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("appLoaded");

    if (!hasLoaded) {
      // 🔥 First load OR refresh
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      // 🔥 Route navigation (no loader)
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && <Navbar />}

      {!loading && (
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      )}


    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
