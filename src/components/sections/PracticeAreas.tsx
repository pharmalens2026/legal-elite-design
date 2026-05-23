import React from "react";
import { motion } from "framer-motion";
import { Gavel, Briefcase, Home, ShieldCheck, Heart, Scale, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS } from "../../lib/constants";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const iconMap: Record<string, any> = {
  Gavel,
  Briefcase,
  Home,
  ShieldCheck,
  Heart,
  Scale,
};

const PracticeAreas = () => {
  return (
    <section className="py-32 bg-white relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-0 text-[15rem] font-serif font-bold text-gray-50 select-none pointer-events-none z-0 hidden lg:block uppercase">
        Expertise
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
                Specialized Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              Core Areas of <span className="italic">Legal Mastery</span>
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Delivering authoritative legal solutions with a focus on commercial excellence, 
              property law, and strategic litigation for the modern Kenyan landscape.
            </p>
          </div>
          <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none px-10 py-7 font-bold uppercase text-[10px] tracking-widest">
            <Link to="/practice-areas">Explore All Services</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = iconMap[area.icon] || Scale;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-12 bg-white border-r border-b border-gray-100 hover:bg-black transition-all duration-700 cursor-default"
              >
                <div className="mb-10 text-secondary transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <Icon size={48} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-6 group-hover:text-white transition-colors duration-500">
                  {area.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 transition-colors duration-500 leading-relaxed font-light mb-8">
                  {area.description}
                </p>
                <Link 
                  to="/practice-areas" 
                  className="flex items-center gap-3 text-secondary font-bold text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;