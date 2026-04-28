import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] relative z-10 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 className="font-bold text-xl leading-tight text-primary">Primegate</h2>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">International Academy</p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Nurturing excellence for a global future. We provide world-class education blending British and Nigerian curricula.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-600 hover:text-accent transition-colors text-sm">Academics</Link></li>
              <li><Link href="/facilities" className="text-gray-600 hover:text-accent transition-colors text-sm">Facilities</Link></li>
              <li><Link href="/admissions" className="text-gray-600 hover:text-accent transition-colors text-sm">Admissions</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-accent transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 relative inline-block">
              Academics
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/academics#early-years" className="text-gray-600 hover:text-accent transition-colors text-sm">Early Years</Link></li>
              <li><Link href="/academics#primary" className="text-gray-600 hover:text-accent transition-colors text-sm">Primary School</Link></li>
              <li><Link href="/academics#secondary" className="text-gray-600 hover:text-accent transition-colors text-sm">Secondary School</Link></li>
              <li><Link href="/academics#steam" className="text-gray-600 hover:text-accent transition-colors text-sm">STEAM Program</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>XF64+QQ3, Lokogoma,<br />Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+234 (0) 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@primegateacademy.edu.ng</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Primegate International Academy. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
