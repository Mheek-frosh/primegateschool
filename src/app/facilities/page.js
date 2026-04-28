"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FacilitiesPage() {
  const facilities = [
    { title: "Science Labs", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "State-of-the-art equipment for Physics, Chemistry, and Biology." },
    { title: "ICT Labs", img: "https://images.unsplash.com/photo-1571260899304-42507011ec7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Modern computer labs with high-speed internet and coding resources." },
    { title: "Library", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A vast collection of physical and digital academic resources." },
    { title: "Sports Fields", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Extensive grounds for football, basketball, and athletics." },
    { title: "Art Rooms", img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Creative spaces designed to inspire artistic expression." },
    { title: "Smart Classrooms", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Interactive whiteboards and ergonomic seating for optimal learning." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            World-Class <span className="text-accent-light">Facilities</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-blue-100 max-w-2xl mx-auto">
            Environments designed to inspire learning, creativity, and physical well-being.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg h-80"
              >
                <Image src={fac.img} alt={fac.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{fac.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
