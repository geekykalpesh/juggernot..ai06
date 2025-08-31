import { Button } from "@/components/ui/button";
import { CalendarIcon, DownloadIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export function AIStrategySession() {
  return (
    <section className="w-full py-8 bg-[#FFFFFF] dark:bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-3">
            Ready to Lead Dubai's AI Revolution?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Join elite enterprises transforming with AI in record time
          </p>
        </div>

        {/* Ultra-Compact CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Primary CTA - Compact */}
          <div className="group bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-lg border border-[#F3F4F6] dark:border-[#27272A] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-6 w-12 h-1 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full -mt-0.5"></div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-[#FAFAFA] dark:text-[#27272A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                    Schedule Your C-Suite AI Strategy Session
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Transform your enterprise in 18 months
                  </p>
                </div>
              </div>

              {/* Compact List */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  "AI opportunity assessment",
                  "ROI projection & roadmap",
                  "Quick win identification",
                  "Investment timeline"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
                    <span className="text-[#27272A] dark:text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="w-full bg-[#27272A] dark:bg-[#FAFAFA] hover:bg-[#27272A]/90 dark:hover:bg-[#FAFAFA]/90 text-[#FAFAFA] dark:text-[#27272A] py-3 text-sm font-semibold rounded-lg transition-all duration-200">
                  Schedule Strategy Session
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                  Limited Q1 2025 slots
                </p>
              </div>
            </div>
          </div>

          {/* Secondary CTA - Compact */}
          <div className="group bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-lg border border-[#F3F4F6] dark:border-[#27272A] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-6 w-12 h-1 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full -mt-0.5"></div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg flex items-center justify-center">
                  <DownloadIcon className="w-5 h-5 text-[#FAFAFA] dark:text-[#27272A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                    Download Enterprise AI Guide
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Instant access to comprehensive guide
                  </p>
                </div>
              </div>

              {/* Compact List */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Dubai AI readiness assessment",
                  "3-step transformation framework",
                  "WIG case study insights",
                  "ROI calculation methods"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
                    <span className="text-[#27272A] dark:text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="w-full bg-[#FFFFFF] dark:bg-[#1C1C1F] hover:bg-[#F3F4F6] dark:hover:bg-[#27272A] text-[#27272A] dark:text-[#FAFAFA] border-2 border-[#27272A] dark:border-[#FAFAFA] py-3 text-sm font-semibold rounded-lg transition-all duration-200">
                  Download Guide Now
                  <DownloadIcon className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                  Join 50+ enterprise leaders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
              <span>20+ years experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
              <span>UAE AI Charter Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
