"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Rocket, Microscope, Palette, Calculator, Monitor } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Academics"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent-light">Academics</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-blue-100 max-w-2xl mx-auto">
            A harmonious blend of British and Nigerian curricula, tailored for global excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-20" id="early-years">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video">
                <Image src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Early Years" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Years (EYFS + Montessori)</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our Early Years foundation integrates the British EYFS and Montessori methods. We provide a nurturing environment that encourages curiosity, independence, and foundational learning through play and structured activities.
              </p>
            </div>
          </motion.div>

          <motion.div id="primary" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video">
                <Image src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Primary School" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Primary School</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Primary curriculum bridges Nigerian educational standards with British core subjects. We emphasize literacy, numeracy, and character development, preparing students for higher academic challenges.
              </p>
            </div>
          </motion.div>

          <motion.div id="secondary" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video">
                <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Secondary School" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Secondary School (Cambridge Aligned)</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our secondary education is Cambridge-aligned, providing rigorous academic preparation for IGCSEs and local examinations. We foster critical thinking, leadership, and global awareness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white" id="steam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">STEAM Integration</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Preparing students for the future with our comprehensive Science, Technology, Engineering, Arts, and Mathematics program.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Science", icon: <Microscope size={32} />, color: "bg-blue-50 text-blue-500 border-blue-100" },
              { name: "Technology", icon: <Monitor size={32} />, color: "bg-indigo-50 text-indigo-500 border-indigo-100" },
              { name: "Engineering", icon: <Rocket size={32} />, color: "bg-amber-50 text-amber-500 border-amber-100" },
              { name: "Arts", icon: <Palette size={32} />, color: "bg-pink-50 text-pink-500 border-pink-100" },
              { name: "Mathematics", icon: <Calculator size={32} />, color: "bg-emerald-50 text-emerald-500 border-emerald-100" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300 ${item.color}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
