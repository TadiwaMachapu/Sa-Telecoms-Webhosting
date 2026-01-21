import { howItWorksContent } from "@/data/webHostingContent";
import { Check, Mail, Palette, Headphones } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-blue/20 rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="card-modern p-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hosting</h3>
                  <p className="text-sm text-gray-600">Reliable & fast</p>
                </div>
                <div className="card-modern p-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm text-gray-600">Professional setup</p>
                </div>
                <div className="card-modern p-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Custom websites</p>
                </div>
                <div className="card-modern p-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
                  <p className="text-sm text-gray-600">24/7 assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                How It Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {howItWorksContent.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {howItWorksContent.description}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">All-in-One Solution</h4>
                  <p className="text-gray-600">Hosting, email, and design in one package</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Hassle-Free Management</h4>
                  <p className="text-gray-600">We handle updates, security, and maintenance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Professional Results</h4>
                  <p className="text-gray-600">Modern, responsive, and optimized websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
