"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Admissions
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the Primegate family. Start your child's journey to excellence today.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Admission Steps</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Obtain Application Form", desc: "Forms can be obtained from the school premises or downloaded online." },
                { step: "02", title: "Submit Documents", desc: "Submit the completed form along with required documents (birth certificate, past results, passport photos)." },
                { step: "03", title: "Entrance Assessment", desc: "Prospective students will take a standard assessment test to determine appropriate placement." },
                { step: "04", title: "Interview", desc: "Successful candidates and their parents will be invited for a brief interview with the academic board." },
                { step: "05", title: "Admission Offer", desc: "An offer letter is issued upon successful completion of all steps." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-4xl font-bold text-accent/30">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-gray-600 mb-8">Take the first step towards giving your child a world-class education.</p>
            <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 mx-auto hover:-translate-y-1">
              Apply Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
