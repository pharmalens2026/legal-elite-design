import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../lib/constants";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.architecture}
          alt="Omar Amina Legal Headquarters"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-10">
              <div className="h-16 w-[1px] bg-secondary"></div>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">
              Commanding <span className="text-secondary">Justice</span>. <br />
              Delivering <span className="italic">Excellence</span>.
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Join the elite institutions and individuals who trust Omar Amina & Company Advocates 
              to navigate their most complex legal challenges with precision and authority.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-primary hover:bg-white hover:text-primary text-[10px] font-bold px-12 py-8 rounded-none uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Secure Your Consultation
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <div className="h-[1px] w-12 bg-white/10 hidden sm:block"></div>
              <a 
                href="tel:+254717839922" 
                className="text-white/70 hover:text-secondary text-[10px] font-bold uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-secondary pb-1"
              >
                Speak with an Advocate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute inset-10 border border-white/5 pointer-events-none -z-0"></div>
    </section>
  );
};

export default CTA;