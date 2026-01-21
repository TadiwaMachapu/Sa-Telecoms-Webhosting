import TopBar from "@/components/site/TopBar";
import Navbar from "@/components/site/Navbar";
import HeroWebHosting from "@/components/sections/HeroWebHosting";
import HowItWorks from "@/components/sections/HowItWorks";
import KeyFeatures from "@/components/sections/KeyFeatures";
import WebsiteDesignBlock from "@/components/sections/WebsiteDesignBlock";
import PricingOptions from "@/components/sections/PricingOptions";
import Footer from "@/components/site/Footer";
import FloatingWidgets from "@/components/site/FloatingWidgets";

export default function WebHostingPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroWebHosting />
      <HowItWorks />
      <KeyFeatures />
      <WebsiteDesignBlock />
      <PricingOptions />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
