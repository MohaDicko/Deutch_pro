'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials({ dict }: { dict: any }) {
  return (
    <section id="temoignages" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6"
          >
            {dict.testimonials.title}
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dict.testimonials.list.map((testimonial: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-8 right-8 text-red-100 w-16 h-16 -z-10 group-hover:text-red-50 transition-colors" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-red-600 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
