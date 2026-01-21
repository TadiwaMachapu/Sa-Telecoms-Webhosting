import { websiteDesignBlockContent } from "@/data/webHostingContent";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function WebsiteDesignBlock() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-yellow/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 texture-subtle-lines"></div>
      <div className="absolute inset-0 texture-noise"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main card with solid background */}
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-yellow px-5 py-2.5 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
                {websiteDesignBlockContent.label}
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
              {websiteDesignBlockContent.title}
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
              {websiteDesignBlockContent.description}
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-start gap-3 bg-gray-50 rounded-2xl p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                  <div className="text-sm font-semibold text-gray-600">Custom Design</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-50 rounded-2xl p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">Monthly</div>
                  <div className="text-sm font-semibold text-gray-600">Updates Included</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-50 rounded-2xl p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">R299</div>
                  <div className="text-sm font-semibold text-gray-600">Starting Price</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href={websiteDesignBlockContent.buttonHref}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <span>{websiteDesignBlockContent.buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                View Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
