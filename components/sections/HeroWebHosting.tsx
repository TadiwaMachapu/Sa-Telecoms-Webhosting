import { heroContent } from "@/data/webHostingContent";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function HeroWebHosting() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-accent-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-yellow/5 via-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-grid opacity-50"></div>
      <div className="absolute inset-0 texture-noise"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-8 border border-primary/10">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-bold text-primary">Premium Web Hosting Solutions</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
              {heroContent.title}
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              {heroContent.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              {heroContent.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://sa-telecoms.co.za/" 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                View Features
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">500+ Happy Clients</span>
              </div>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="lg:col-span-5 animate-slide-in-right">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-blue/20 rounded-3xl blur-3xl"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* Pricing highlight */}
                <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 mb-6 text-white">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-semibold opacity-90">Starting from</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold">R299</span>
                    <span className="text-xl font-semibold opacity-90">/month</span>
                  </div>
                  <p className="text-sm mt-3 opacity-90">Fully designed 3-page website included</p>
                </div>
                
                {/* Features list */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Custom Website Design</p>
                      <p className="text-sm text-gray-600">Tailored to your brand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Professional Email Hosting</p>
                      <p className="text-sm text-gray-600">Match your domain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Monthly Updates & Maintenance</p>
                      <p className="text-sm text-gray-600">Always up-to-date</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">SEO Optimization</p>
                      <p className="text-sm text-gray-600">Rank higher on Google</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a 
                    href="https://sa-telecoms.co.za/" 
                    className="block text-center bg-gray-50 hover:bg-gray-100 text-primary font-bold py-3 rounded-xl transition-colors duration-300"
                  >
                    View All Features →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
