"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/data/webHostingContent";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="glass-effect text-gray-900 sticky top-0 z-50 shadow-2xl">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
              {navLinks.logo}
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`px-5 py-3 text-sm font-bold tracking-wide hover:text-primary transition-all duration-300 flex items-center gap-1.5 rounded-xl relative group ${
                    item.active ? "text-primary bg-primary/5" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                  {item.active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full"></span>}
                </a>
                
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-2xl overflow-hidden animate-fade-in-up">
                    {item.dropdown.map((dropItem, idx) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-6 py-4 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-300 text-sm font-semibold border-b border-gray-100 last:border-0 hover:pl-8"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.ctaButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={
                  button.variant === "primary"
                    ? "btn-primary text-sm"
                    : "btn-secondary text-sm"
                }
              >
                {button.label}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden text-gray-900 p-3 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 mt-2 animate-fade-in-up">
            <div className="flex flex-col space-y-1 mt-4">
              {navLinks.menuItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className={`block px-5 py-3 text-sm font-bold hover:text-primary transition-all duration-300 rounded-xl ${
                        item.active ? "text-primary bg-primary/5" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="px-4 py-3 hover:bg-gray-100 rounded-xl transition-colors"
                        aria-label={`Toggle ${item.label} dropdown`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && openDropdown === item.label && (
                    <div className="pl-8 space-y-1 mt-2 animate-fade-in-up">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block px-5 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-all duration-300 font-semibold"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col gap-3 px-4 pt-6 border-t border-gray-200 mt-4">
                {navLinks.ctaButtons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    className={
                      button.variant === "primary"
                        ? "btn-primary text-sm text-center"
                        : "btn-secondary text-sm text-center"
                    }
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
