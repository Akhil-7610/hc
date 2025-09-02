import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"
// import { logo } from "../assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Optional: Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <nav
      className="fixed w-full bg-black text-white top-0 border-b-1 border-gray-500 left-0 z-50 shadow-md transition-colors"
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Logo */}
          <a href="#" className="flex-shrink-0  text-2xl font-bold ">
            {/* <img className="rounded w-30 md:w-40 " src="" alt=""    /> */}
            HC
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className=" font-bold ">
              Home
            </a>
            <a href="#" className=" font-bold ">
              Contact
            </a>
            <a href="#" className=" font-bold ">
              About
            </a>
            <a href="#" className=" font-bold ">
              Services
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-bold  focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="px-4 py-3 space-y-2 flex items-center flex-col">
            <a href="#" onClick={() => setIsOpen(false)} className="block  font-bold ">
              Home
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="block  font-bold ">
              Contact
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="block  font-bold ">
              About
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="block  font-bold ">
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
