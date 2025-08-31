import { 
  Component1Icon,
  PersonIcon,
  GearIcon,
  BarChartIcon,
  CaretRightIcon,
  StarFilledIcon,
  CheckCircledIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";

export function IndustriesWeServe() {
  const industries = [
    {
      emoji: "🛍️",
      title: "Retail & E-commerce",
      icon: Component1Icon,
      solutions: ["Dynamic pricing", "Inventory AI", "Personalization", "Supply automation"],
      achievement: "96% success rate in Dubai retail implementations",
      stats: { value: "96%", label: "Success" }
    },
    {
      emoji: "🏥", 
      title: "Healthcare",
      icon: PersonIcon,
      solutions: ["AI diagnostics", "Care optimization", "Resource allocation", "Health analytics"],
      achievement: "Dubai Health Authority: 9.47M patient records unified",
      stats: { value: "9.47M", label: "Records" }
    },
    {
      emoji: "🏭",
      title: "Manufacturing", 
      icon: GearIcon,
      solutions: ["Predictive maintenance", "Quality control", "Supply optimization", "Planning AI"],
      achievement: "Emirates Global Aluminium: WEF Lighthouse status",
      stats: { value: "WEF", label: "Status" }
    },
    {
      emoji: "🏦",
      title: "Financial Services",
      icon: BarChartIcon, 
      solutions: ["Risk assessment", "Fraud detection", "Customer AI", "Compliance"],
      achievement: "Emirates NBD: 100+ AI models deployed",
      stats: { value: "100+", label: "Models" }
    },
    {
      emoji: "🚚",
      title: "Logistics & Supply Chain",
      icon: CaretRightIcon,
      solutions: ["Route optimization", "Demand forecasting", "Warehouse automation", "Delivery AI"],
      achievement: "Supporting Dubai's vision as global logistics hub",
      stats: { value: "Dubai", label: "Hub" }
    }
  ];

  return (
    <section className="w-full py-8 bg-[#F3F4F6] dark:bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-3">
            <StarFilledIcon className="w-4 h-4 mr-2" />
            Industries We Serve
          </div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-[#27272A] dark:text-[#FAFAFA] mb-2">
            Specialized AI Across Key Sectors
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Industry expertise meets cutting-edge AI for transformative results
          </p>
        </div>

        {/* Ultra-Compact Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-lg border border-[#F3F4F6] dark:border-[#27272A] p-4 hover:shadow-md transition-all duration-300">
              
              {/* Compact Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{industry.emoji}</span>
                  <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                    {industry.title}
                  </h3>
                </div>
                <div className="text-center bg-[#27272A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#27272A] px-2 py-1 rounded text-xs font-bold">
                  {industry.stats.value}
                </div>
              </div>

              {/* Horizontal Solutions */}
              <div className="grid grid-cols-2 gap-1 mb-3">
                {industry.solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <CheckCircledIcon className="w-3 h-3 text-[#27272A] dark:text-[#FAFAFA] flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>

              {/* Compact Achievement */}
              <div className="bg-[#F3F4F6] dark:bg-[#27272A] p-2 rounded flex items-start space-x-2">
                <StarFilledIcon className="w-3 h-3 text-[#27272A] dark:text-[#FAFAFA] flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-[#27272A] dark:text-[#FAFAFA] leading-tight">
                  {industry.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA */}
        <div className="text-center">
          <div className="bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-lg border border-[#F3F4F6] dark:border-[#27272A] p-6">
            <h3 className="text-xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-3">
              Ready to Transform Your Industry?
            </h3>
            
            {/* Inline Industry Icons */}
            <div className="flex justify-center items-center space-x-4 mb-4">
              {industries.map((industry, index) => (
                <span key={index} className="text-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                  {industry.emoji}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center justify-center px-5 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-sm">
              <Component1Icon className="w-4 h-4 mr-2" />
              Explore Solutions
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
