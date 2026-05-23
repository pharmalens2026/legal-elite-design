import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Share2 } from "lucide-react";
import { IMAGES } from "../../lib/constants";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The 2024 Corporate Compliance Guide for Kenyan Businesses",
      excerpt: "Navigating the evolving regulatory landscape in Kenya is critical for corporate success. Our latest insights cover the key compliance shifts for the upcoming year.",
      date: "Jan 15, 2024",
      category: "Corporate Law",
      author: "Omar Amina",
      image: IMAGES.insights
    },
    {
      title: "Real Estate Investment: A Legal Perspective on Property Acquisition",
      excerpt: "Understanding the complexities of conveyancing and land acquisition in Nairobi's rapid development zones. Essential legal due diligence for investors.",
      date: "Feb 02, 2024",
      category: "Real Estate",
      author: "Zainab Ali",
      image: IMAGES.realEstate
    },
    {
      title: "Commercial Dispute Resolution: Strategies for Efficient Litigation",
      excerpt: "Minimizing business disruption through strategic litigation and alternative dispute resolution methods in the East African court systems.",
      date: "Mar 10, 2024",
      category: "Litigation",
      author: "Omar Amina",
      image: IMAGES.architecture
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
                Legal Intelligence
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mt-4 mb-2">
              Legal <span className="italic">Perspectives</span> & Insights
            </h2>
            <p className="text-gray-500 font-light mt-4">Staying at the forefront of the legal landscape through dedicated research and expert analysis for our clients.</p>
          </div>
          <Link 
            to="/insights" 
            className="group flex items-center gap-4 text-primary font-bold uppercase text-[10px] tracking-[0.3em] hover:text-secondary transition-colors"
          >
            View All Articles
            <div className="p-3 border border-primary/10 group-hover:border-secondary transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col h-full bg-white border border-gray-100 hover:border-secondary/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-primary text-secondary text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2">
                  {post.category}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-6 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} className="text-secondary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={12} className="text-secondary" />
                    {post.author}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 mb-10 text-sm font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-gray-50 flex justify-between items-center">
                  <Link 
                    to="/insights" 
                    className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group/link"
                  >
                    Read Insight
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <button className="text-gray-300 hover:text-secondary transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;