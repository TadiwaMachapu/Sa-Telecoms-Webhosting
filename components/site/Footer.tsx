"use client";

import { Facebook, Twitter, Linkedin, Instagram, Smartphone, Download } from "lucide-react";
import { footerContent } from "@/data/webHostingContent";

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer>
      <div className="bg-gradient-to-br from-accent-blue via-blue-700 to-accent-blue py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="container-custom relative z-10">
          <div className="glass-effect rounded-3xl p-10 md:p-12 border-2 border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-white text-center lg:text-left">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-accent-yellow/20 text-accent-yellow rounded-full text-xs font-bold uppercase tracking-wide border border-accent-yellow/30">
                    Mobile App
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-3">
                  {footerContent.yipBanner.title}
                </h3>
                <p className="text-xl text-blue-100">{footerContent.yipBanner.subtitle}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-yellow rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 w-40 h-48 flex items-center justify-center border-2 border-white/20">
                    <Smartphone className="w-20 h-20 text-white animate-float" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href={footerContent.yipBanner.appStoreUrl}
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-sm flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    App Store
                  </a>
                  <a
                    href={footerContent.yipBanner.playStoreUrl}
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-sm flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-dark text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {footerContent.columns.map((column, idx) => (
              <div key={column.title} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <h4 className="text-xl font-bold mb-6 gradient-text">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 text-base hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold gradient-text mb-2">SA Telecoms</p>
              <p className="text-gray-400">{footerContent.copyright}</p>
            </div>
            <div className="flex items-center gap-3">
              {footerContent.socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="w-12 h-12 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
