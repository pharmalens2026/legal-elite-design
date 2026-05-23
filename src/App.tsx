import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Home from "./pages/Home";
import { useEffect } from "react";
import { CONTACT_INFO } from "./lib/constants";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder Pages
const AboutPage = () => <div className="pt-32 pb-24 container mx-auto px-4"><h1 className="text-5xl font-serif mb-8 text-primary">About Us</h1><p className="text-lg text-gray-600 max-w-4xl">Omar Amina & Company Advocates is a full-service law firm located in Nairobi, Kenya. Our firm is built on a foundation of integrity, expertise, and a relentless pursuit of justice for our clients. We specialize in corporate law, litigation, and real estate, serving a diverse range of clients from individuals to multinational corporations.</p></div>;
const PracticeAreasPage = () => <div className="pt-32 pb-24 container mx-auto px-4"><h1 className="text-5xl font-serif mb-8 text-primary">Practice Areas</h1><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[ "Litigation", "Corporate Law", "Real Estate", "Employment", "Family Law", "Tax Law", "Intellectual Property", "Banking & Finance", "Arbitration" ].map(area => (
  <div key={area} className="p-8 border border-gray-100 bg-white shadow-sm"><h3 className="text-2xl font-serif text-secondary mb-4">{area}</h3><p className="text-gray-600">Specialized legal services tailored to your specific needs in {area.toLowerCase()}.</p></div>
))}</div></div>;
const TeamPage = () => <div className="pt-32 pb-24 container mx-auto px-4"><h1 className="text-5xl font-serif mb-8 text-primary">Our Team</h1><p className="text-lg text-gray-600">Our advocates are leaders in their respective fields, bringing decades of combined experience to every case.</p></div>;
const InsightsPage = () => <div className="pt-32 pb-24 container mx-auto px-4"><h1 className="text-5xl font-serif mb-8 text-primary">Legal Insights</h1><p className="text-lg text-gray-600">Stay informed with the latest legal developments in Kenya and across the region.</p></div>;
const ContactPage = () => <div className="pt-32 pb-24 container mx-auto px-4"><h1 className="text-5xl font-serif mb-8 text-primary">Contact Us</h1><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="bg-primary p-12 text-white">
    <h2 className="text-3xl font-serif mb-6 text-secondary">Get in Touch</h2>
    <div className="space-y-6">
      <div><h4 className="font-bold text-secondary mb-1">Office Location</h4><p>{CONTACT_INFO.address}</p></div>
      <div><h4 className="font-bold text-secondary mb-1">Phone Number</h4><p>{CONTACT_INFO.phone}</p></div>
      <div><h4 className="font-bold text-secondary mb-1">Email Address</h4><p>{CONTACT_INFO.email}</p></div>
    </div>
  </div>
  <div className="bg-gray-50 p-12">
    <h2 className="text-3xl font-serif mb-6 text-primary">Book a Consultation</h2>
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
      <input type="text" placeholder="Full Name" className="w-full p-4 border border-gray-200" required />
      <input type="email" placeholder="Email Address" className="w-full p-4 border border-gray-200" required />
      <input type="tel" placeholder="Phone Number" className="w-full p-4 border border-gray-200" />
      <select className="w-full p-4 border border-gray-200">
        <option>Select Practice Area</option>
        <option>Litigation</option>
        <option>Corporate Law</option>
        <option>Real Estate</option>
      </select>
      <textarea placeholder="Message" className="w-full p-4 border border-gray-200 h-32"></textarea>
      <button className="bg-secondary text-primary font-bold py-4 px-8 w-full hover:bg-secondary/90 transition-colors uppercase tracking-widest">Send Message</button>
    </form>
  </div>
</div></div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;