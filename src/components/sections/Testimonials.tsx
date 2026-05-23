import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Omar Amina & Company Advocates provided exceptional representation during our corporate restructuring. Their attention to detail and strategic foresight were invaluable in navigating complex Kenyan regulations.",
      author: "David Kamau",
      position: "CEO, TechFrontier Ltd",
    },
    {
      text: "Professional, efficient, and highly effective. They handled our multi-million dollar real estate conveyancing with such precision that the entire process was seamless.",
      author: "Mercy Mwangi",
      position: "Real Estate Investor",
    },
    {
      text: "The most authoritative litigation team I have worked with in Nairobi. They are sharp, impeccably prepared, and truly command the courtroom.",
      author: "Robert Otieno",
      position: "Managing Director, Rift Valley Logistics",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-secondary"></div>
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
              Client Commendations
            </span>
            <div className="h-[1px] w-8 bg-secondary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">
            Trusted by <span className="italic">Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-100">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-16 relative border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors duration-500 group"
            >
              <div className="flex text-secondary mb-10 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              
              <Quote className="text-secondary/10 mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2" size={48} strokeWidth={1} />
              
              <p className="text-gray-500 text-lg mb-12 leading-[1.8] font-light italic">
                "{t.text}"
              </p>
              
              <div className="mt-auto pt-8 border-t border-gray-50">
                <h4 className="font-serif text-xl text-primary font-bold mb-1">{t.author}</h4>
                <p className="text-secondary text-[9px] font-bold uppercase tracking-[0.2em]">{t.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;