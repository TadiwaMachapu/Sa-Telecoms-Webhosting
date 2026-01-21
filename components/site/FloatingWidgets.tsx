"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWidgets() {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
  };

  const handlePhoneClick = () => {
    console.log("Phone clicked");
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="group fixed bottom-8 left-8 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-40 animate-pulse-glow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
          1
        </span>
      </button>

      <button
        onClick={handlePhoneClick}
        className="group fixed bottom-32 right-8 bg-gradient-to-br from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-40"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-2xl shadow-2xl z-40 flex items-center gap-3 animate-fade-in-up border-2 border-white/20">
        <div className="relative">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
        </div>
        <span className="text-sm font-bold">We're Online!</span>
      </div>
    </>
  );
}
