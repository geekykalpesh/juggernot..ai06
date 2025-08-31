import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
// import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SolutionFramework } from "@/components/sections/solution-framework";
import { AIStrategySession } from "@/components/sections/ai-transformation-cta";
import { ClientSuccessMetrics } from "@/components/sections/client-success-metrics";
import { LeadershipTeam } from "@/components/sections/leadership-team";
import { OurProcess } from "@/components/sections/our-process";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BentoDemo } from "@/components/sections/BentoFiveGrid";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* />
      <CompanyShowcase />
      <BentoSection />
      */}
      <HeroSection />
      <ProblemSection />
      <SolutionFramework />
      <FeatureSection />
      <BentoDemo/>
      <OurProcess />
      <IndustriesWeServe />
      <LeadershipTeam />
      <ClientSuccessMetrics />
      <QuoteSection />
      {/* <GrowthSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      
  
    */}

      <AIStrategySession />
      <FooterSection />
    </main>
  );
}
