import { Check, Star, Zap } from "lucide-react";
import { pricingContent } from "@/data/webHostingContent";

export default function PricingOptions() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional web hosting that fits your budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative glass-effect rounded-3xl p-10 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-6 right-6">
                <div className="bg-accent-yellow text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                  {pricingContent.card.title}
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  {pricingContent.card.subtitle}
                </p>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-6xl font-extrabold gradient-text">
                    {pricingContent.card.price}
                  </span>
                  <span className="text-gray-500 text-xl font-semibold">
                    {pricingContent.card.unit}
                  </span>
                </div>
              </div>
            
              <div className="border-t border-gray-200 pt-8 mb-8">
                <ul className="space-y-5">
                  {pricingContent.card.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            
              <a
                href={pricingContent.card.ctaHref}
                className="btn-primary w-full text-center block text-lg group/btn"
              >
                <span className="flex items-center justify-center gap-2">
                  {pricingContent.card.ctaText}
                  <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                {pricingContent.rightSide.heading}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                {pricingContent.rightSide.subheading}
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {pricingContent.rightSide.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Add-Ons Available
              </h4>
              {pricingContent.rightSide.addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {addOn.title}
                      </h5>
                      <p className="text-gray-600 text-lg leading-relaxed">{addOn.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
