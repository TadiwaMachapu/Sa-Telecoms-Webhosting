"use client";

import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { topBarContent } from "@/data/webHostingContent";

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-dark to-gray-900 text-white text-sm py-3 border-b border-gray-800/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                {topBarContent.location}
              </span>
            </div>
            <a
              href={`mailto:${topBarContent.email}`}
              className="flex items-center gap-2 group"
            >
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                {topBarContent.email}
              </span>
            </a>
            <a
              href={`tel:${topBarContent.phone}`}
              className="flex items-center gap-2 group"
            >
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                {topBarContent.phone}
              </span>
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            {topBarContent.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
