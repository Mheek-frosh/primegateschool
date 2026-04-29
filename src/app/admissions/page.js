"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Calendar, HelpCircle, Info } from "lucide-react";

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

          {/* Admission Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-3">
                {['Completed Application Form', '2 Passport Photographs', 'Copy of Birth Certificate', 'Last Academic Report (if applicable)', 'Medical Report / Immunization Record'].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Age Requirements</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-800">Creche / Playgroup</span>
                  <span className="text-gray-600">6 Months - 2 Years</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-800">Nursery / EYFS</span>
                  <span className="text-gray-600">3 - 5 Years</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-800">Primary</span>
                  <span className="text-gray-600">6 - 10 Years</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Secondary (JSS 1)</span>
                  <span className="text-gray-600">11+ Years</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <HelpCircle size={32} className="text-accent" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: "Is the entrance exam mandatory for all classes?", a: "Yes, standard assessments are required for Primary and Secondary school applicants to ensure proper placement." },
                { q: "Do you offer boarding facilities?", a: "Currently, Primegate operates as a day school. We provide excellent transport services covering major routes in Abuja." },
                { q: "What is the teacher-to-student ratio?", a: "We maintain a low teacher-to-student ratio of 1:15 in Early Years and 1:20 in Primary and Secondary to ensure personalized attention." }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <Info size={20} className="text-primary shrink-0 mt-1" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 ml-7">{faq.a}</p>
                </div>
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
