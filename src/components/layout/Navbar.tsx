import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../../lib/constants";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Our Team", path: "/team" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === "/";
  const showBackground = !isHome || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showBackground ? "bg-black/95 backdrop-blur-md shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-primary/50 text-white/80 py-1.5 px-4 text-[10px] uppercase tracking-[0.2em] flex justify-between items-center hidden md:flex border-b border-white/10'}`}>
        <div className="flex gap-8 container mx-auto px-8">
          <span className="flex items-center gap-2">
            <Phone size={10} className="text-secondary" /> {CONTACT_INFO.phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={10} className="text-secondary" /> {CONTACT_INFO.email}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Re-integrated */}
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <img 
            src={IMAGES.logo} 
            alt="Omar Amina & Company Advocates" 
            className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative group ${
                isActive(link.path)
                  ? "text-secondary"
                  : "text-white hover:text-secondary"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Button
            asChild
            className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold rounded-none px-6 text-[10px] uppercase tracking-widest transition-all duration-300"
          >
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-secondary" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black border-t border-white/10 shadow-2xl py-24 px-6 animate-in slide-in-from-top duration-500 z-40">
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold uppercase tracking-widest p-2 ${
                  isActive(link.path) ? "text-secondary" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-secondary text-primary hover:bg-white w-full max-w-xs rounded-none py-6 font-bold uppercase tracking-widest mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;