import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Our Team", path: "/team" },
    { name: "Legal Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const practiceAreas = [
    "Corporate Law",
    "Litigation",
    "Real Estate",
    "Employment Law",
    "Family Law",
    "Taxation",
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10">
              <img src={IMAGES.logo} alt="Omar Amina & Co" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-10 font-light">
              A premium African law firm dedicated to providing strategic legal solutions 
              and unwavering representation. Built on a foundation of integrity, 
              excellence, and authority.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-10">Quick Navigation</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-10">Expertise</h4>
            <ul className="space-y-4">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link 
                    to="/practice-areas" 
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-10">Headquarters</h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm font-light">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm font-light">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm font-light">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            &copy; {currentYear} Omar Amina & Company Advocates. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;