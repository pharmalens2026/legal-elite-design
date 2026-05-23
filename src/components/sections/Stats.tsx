import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Cases Handled", value: "1,500+" },
    { label: "Corporate Clients", value: "120+" },
    { label: "Practice Areas", value: "12+" },
  ];

  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative group"
            >
              <div className="text-5xl md:text-6xl font-serif text-secondary mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="absolute right-[-1px] top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/10 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;