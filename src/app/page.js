"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Globe, Users, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful school campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:items-start items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeIn} className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent-light font-medium text-sm mb-6 backdrop-blur-md">
              Welcome to Primegate International Academy
            </motion.span>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Nurturing Excellence for a <span className="text-accent-light">Global Future</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Empowering students through a world-class blend of British and Nigerian curricula, preparing them for the 21st-century workplace in Lokogoma, Abuja.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/admissions" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Explore Campus
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-dark text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-3xl font-bold text-accent-light mb-1">10+</p>
                <p className="text-sm">Years of Educational Excellence since 2014</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeIn} className="text-sm font-bold text-accent tracking-wider uppercase mb-2">About Primegate</motion.h2>
              <motion.h3 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                An Internationally Acclaimed Institution
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-600 mb-6 text-lg leading-relaxed">
                Located in the heart of Lokogoma, Abuja, Primegate International Academy focuses on nurturing all-round development through practical learning and modern technology.
              </motion.p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Practical learning driven by technology",
                  "Preparation for the 21st-century workplace",
                  "Instilling excellence, integrity, and global relevance"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeIn}>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors group">
                  Discover Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">Our Academics</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dual Curriculum Approach</h3>
            <p className="text-gray-600 text-lg">We offer a robust blend of the British and Nigerian curricula to ensure our students are globally competitive yet locally relevant.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Years",
                desc: "EYFS & Montessori framework providing a solid foundation for lifelong learning.",
                icon: <Users size={32} />,
                color: "bg-blue-50 text-blue-600",
                img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Primary School",
                desc: "Engaging, inquiry-based learning developing critical thinking and problem-solving skills.",
                icon: <BookOpen size={32} />,
                color: "bg-amber-50 text-amber-600",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Secondary School",
                desc: "Cambridge aligned curriculum preparing students for outstanding IGCSE results.",
                icon: <Globe size={32} />,
                color: "bg-emerald-50 text-emerald-600",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={program.img} 
                    alt={program.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white ${program.color} shadow-md`}>
                    {program.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-6">{program.desc}</p>
                  <Link href="/academics" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-1">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-accent tracking-wider uppercase mb-2"
            >
              Our Core Values
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              What Drives Us Forward
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Excellence", icon: <Trophy size={28} />, desc: "Striving for the highest standards in all our endeavors." },
              { title: "Integrity", icon: <CheckCircle2 size={28} />, desc: "Upholding strong moral and ethical principles." },
              { title: "Innovation", icon: <Globe size={28} />, desc: "Embracing new ideas and creative problem-solving." },
              { title: "Community", icon: <Users size={28} />, desc: "Fostering a supportive and inclusive environment." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities Preview */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Campus Facilities"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">World-Class Facilities</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Designed for Modern Learning</h3>
              <p className="text-gray-300 text-lg mb-8">
                Our campus provides a safe, stimulating, and technologically advanced environment where students can discover their passions and reach their full potential.
              </p>
              <ul className="space-y-4 mb-8">
                {['State-of-the-art Science & ICT Labs', 'Modern Library & Resource Center', 'Spacious Sports Complex', 'Creative Arts Studios'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/facilities" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-bold transition-all">
                Tour Our Campus <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lab" width={300} height={400} className="rounded-2xl object-cover h-64 w-full" />
              <Image src="https://images.unsplash.com/photo-1546410531-bea5acadb6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sports" width={300} height={400} className="rounded-2xl object-cover h-64 w-full mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-bold text-accent tracking-wider uppercase mb-2">Stay Updated</motion.h2>
              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</motion.h3>
            </div>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors group">
              View All Events <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: "Oct 15", month: "2026", title: "Open Day & Campus Tour", desc: "Prospective parents are invited to tour our state-of-the-art facilities." },
              { date: "Nov 02", month: "2026", title: "Inter-House Sports", desc: "Annual sports competition fostering teamwork and physical excellence." },
              { date: "Dec 10", month: "2026", title: "End of Year Exhibition", desc: "Showcasing students' creative projects and academic achievements." }
            ].map((event, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent">
                <div className="text-accent font-bold mb-4">
                  <span className="text-3xl block">{event.date.split(' ')[1]}</span>
                  <span className="uppercase text-sm tracking-wider">{event.date.split(' ')[0]} {event.month}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-bold text-accent tracking-wider uppercase mb-2">Testimonials</motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-gray-900">What Parents Say</motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "Primegate has completely transformed my child's approach to learning. The blend of Nigerian and British curricula is fantastic, and the teachers are incredibly supportive.", author: "Mrs. Adebayo", role: "Parent of Year 5 Student" },
              { text: "The facilities here are unmatched in Abuja. My son loves the ICT labs, and the emphasis on holistic development means he's growing academically and socially.", author: "Mr. Okafor", role: "Parent of JSS 2 Student" }
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="text-accent/20 absolute top-4 left-6 text-6xl font-serif">"</div>
                <p className="text-gray-700 text-lg mb-6 relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">{testimonial.author[0]}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape Your Child's Future?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join the Primegate family and give your child the foundation they need to succeed in a globalized world.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                Begin Application
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
                Schedule a Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
