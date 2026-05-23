import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight, Twitter } from "lucide-react";
import { TEAM } from "../../lib/constants";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
                Leadership & Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-primary">
              Distinguished <span className="italic">Partners</span>
            </h2>
          </div>
          <Button asChild variant="link" className="text-primary hover:text-secondary font-bold uppercase text-[10px] tracking-widest group p-0">
            <Link to="/team" className="flex items-center gap-2">
              Our Full Legal Team
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group flex flex-col lg:flex-row gap-10 bg-white shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700 p-6"
            >
              <div className="w-full lg:w-[45%] h-[450px] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <div className="w-full lg:w-[55%] py-4 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-serif text-primary mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-xs font-serif mb-2">{member.qualifications}</p>
                  <div className="h-[2px] w-12 bg-secondary mb-4"></div>
                  <p className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px]">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed font-light text-sm italic">
                  "{member.bio}"
                </p>
                
                <div className="mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-[9px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-6 mt-auto pt-6 border-t border-gray-50">
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <Mail size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;