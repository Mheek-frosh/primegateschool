"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Laptop, Globe, Award } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About Primegate"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent-light">Primegate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Nurturing excellence and shaping the leaders of tomorrow since 2014.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">Our History</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Educational Excellence</h3>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Established in 2014, Primegate International Academy is a premier private international school located in the serene environment of Lokogoma, Abuja.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We are dedicated to providing a holistic educational experience that caters to the academic, physical, and emotional development of every child, ensuring they are well-prepared for the challenges of a rapidly evolving global landscape.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8 border-t border-gray-200 pt-8">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">2014</p>
                  <p className="text-gray-500 font-medium">Year Established</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-gray-500 font-medium">Commitment to Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-blue-50 rounded-3xl p-10 border border-blue-100 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
                "To be an internationally acclaimed institution nurturing all-round development."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-amber-50 rounded-3xl p-10 border border-amber-100 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Laptop className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Provide practical learning using modern technology.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Prepare students for the 21st-century global workplace.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Instill core values of excellence, integrity, and global relevance.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
