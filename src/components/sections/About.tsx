import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { IMAGES } from "../../lib/constants";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    "Firm Background & Excellence",
    "Principled Legal Philosophy",
    "Unwavering Commitment to Clients",
    "Bespoke Client-Centered Approach",
    "Specialized Corporate Expertise",
  ];

  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Portrait */}
            <div className="relative z-10 border-[12px] border-white/5 overflow-hidden">
              <img
                src={IMAGES.meeting}
                alt="Omar Amina & Company Advocates Office"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Signature Floating Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-6 lg:-right-10 bg-secondary p-8 md:p-12 text-primary z-20 max-w-xs shadow-2xl"
            >
              <Quote className="mb-6 opacity-30" size={40} />
              <p className="text-xl font-serif italic font-medium leading-relaxed mb-6">
                "Our commitment to excellence is the foundation of every legal solution we provide."
              </p>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Omar Amina</h4>
                <p className="text-[10px] uppercase tracking-tighter opacity-70">Managing Partner</p>
              </div>
            </motion.div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-secondary/20 -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
                Founded on Excellence
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              A Tradition of <br />
              <span className="text-secondary">Legal Integrity</span>
            </h2>
            
            <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
              Omar Amina & Company Advocates stands as a pillar of legal sophistication in Kenya. 
              Our firm is built on a philosophy of legal excellence and transparency, ensuring that 
              every client—from corporate organizations to private individuals—receives top-tier representation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-secondary shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <Button asChild className="bg-white text-primary hover:bg-secondary rounded-none px-10 py-7 group transition-all duration-500">
                <Link to="/about" className="flex items-center gap-3 font-bold uppercase text-[10px] tracking-[0.2em]">
                  Learn Our History
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-[1px] bg-white/10"></div>
                <div>
                  <div className="text-2xl font-serif text-secondary">20+</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Years of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;