import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Award } from "lucide-react";
import { Button } from "../ui/button";
import { IMAGES } from "../../lib/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Omar Amina & Company Advocates"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-secondary"></div>
              <span className="text-[11px] font-bold tracking-[0.4em] text-secondary uppercase">
                Lead Advocate Omar Amina
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Strategic Legal Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary">Built on Trust</span> <br />
              <span className="italic font-light">& Excellence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light">
              Providing corporate, commercial, litigation, and property legal services tailored to modern businesses and individuals in Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-primary hover:bg-white hover:text-primary text-xs font-bold px-10 py-8 rounded-none transition-all duration-500 uppercase tracking-widest shadow-xl"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white hover:text-primary text-xs font-bold px-10 py-8 rounded-none transition-all duration-500 uppercase tracking-widest backdrop-blur-sm"
              >
                <Link to="/contact">Speak to an Advocate</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20 pt-10 border-t border-white/10"
          >
            {[
              { icon: ShieldCheck, title: "Infallible Protection" },
              { icon: Scale, title: "Strategic Litigation" },
              { icon: Award, title: "Distinguished Authority" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-secondary/10 border border-secondary/20 transition-all duration-500 group-hover:bg-secondary group-hover:text-primary">
                  <item.icon className="text-secondary group-hover:text-primary" size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-secondary transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 right-12 text-white/30 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] rotate-90 mb-8">Discover</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;