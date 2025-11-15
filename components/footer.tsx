"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950/80 to-slate-900/90 backdrop-blur-sm border-t border-cyan-500/20 py-12 px-4 md:px-8">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Contact Us
            </h5>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" />
                <p className="text-sm leading-relaxed">
                  Indian Institute of Technology<br />
                  (Banaras Hindu University)<br />
                  Varanasi, India<br />
                  PIN: 221005
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:ecell@iitbhu.ac.in" className="text-sm hover:text-cyan-400 transition-colors">
                  ecell@iitbhu.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <p className="text-sm">+91 9120787959</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Important
            </h5>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Home</Link></li>
                <li><Link href="/events" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Events</Link></li>
                <li><a href="https://medium.com/ecelliitbhu/feature/home" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Blogs</a></li>
                <li><a href="https://bit.ly/build-with-us-ecell" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Initiatives</a></li>
                <li><Link href="/gallery" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Gallery</Link></li>
              </ul>

              <ul className="space-y-2">
                <li><Link href="/who_we_are" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Who we are?</Link></li>
                <li><Link href="" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">How E-Cell works</Link></li>
                <li><Link href="/team" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Meet the team</Link></li>
                <li><a href="https://tiiciitbhu.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">I-3 F</a></li>
                <li><Link href="/contacts" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Stay Updated
            </h5>
            <iframe
              src="https://ecelliitbhu.substack.com/embed"
              className="w-full h-[190px] rounded-lg border border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
              scrolling="no"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-8 border-t border-cyan-500/20">
          <a href="https://www.linkedin.com/company/ecelliitbhu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>

          <a href="https://www.instagram.com/ecelliitbhu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <Instagram className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>

          <a href="https://www.facebook.com/ecelliitvaranasi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <Facebook className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>

          <a href="https://twitter.com/ecelliitbhu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <Twitter className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>

          <a href="https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <Youtube className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>

          <a href="https://discord.com/invite/EPm5mfbCKP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            <FaDiscord className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-cyan-500/20">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} E-Cell IIT BHU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
