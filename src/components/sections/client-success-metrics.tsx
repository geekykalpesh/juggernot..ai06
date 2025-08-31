import { TriangleUpIcon, ClockIcon, CrossCircledIcon, RocketIcon } from "@radix-ui/react-icons";

export function ClientSuccessMetrics() {
  const metrics = [
    {
      category: "Operational Excellence",
      icon: CrossCircledIcon,
      items: [
        { metric: "60-80%", description: "manual process reduction" },
        { metric: "45-70%", description: "faster decisions" },
        { metric: "30-50%", description: "resource optimization" },
        { metric: "25-40%", description: "cost reduction" }
      ]
    },
    {
      category: "Revenue Growth",
      icon: TriangleUpIcon,
      items: [
        { metric: "20-35%", description: "conversion increase" },
        { metric: "40-60%", description: "retention improvement" },
        { metric: "15-25%", description: "order value growth" },
        { metric: "5-7x", description: "ROI within 24 months" }
      ]
    },
    {
      category: "Innovation Velocity",
      icon: RocketIcon,
      items: [
        { metric: "3x", description: "faster development" },
        { metric: "50%", description: "time-to-market cut" },
        { metric: "2x", description: "successful innovations" },
        { metric: "80%", description: "experiment velocity" }
      ]
    }
  ];

  return (
    <section className="w-full py-8 bg-[#F3F4F6] dark:bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-3 shadow-lg">
            <span className="w-2 h-2 bg-[#FAFAFA] rounded-full mr-2 animate-pulse"></span>
            Measurable Results
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-2">
            Measurable Impact Across Every Dimension
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Transform your enterprise with data-driven results that speak for themselves
          </p>
        </div>

        {/* Ultra-Compact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {metrics.map((category, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-lg border border-[#F3F4F6] dark:border-[#27272A] p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Compact Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-5 h-5 text-[#FAFAFA] dark:text-[#27272A]" />
                </div>
                <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                  {category.category}
                </h3>
              </div>

              {/* Compact Metrics List */}
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-[#27272A] dark:text-[#FAFAFA]">
                        {item.metric}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-xs font-medium leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#27272A]/10 dark:group-hover:border-[#FAFAFA]/10 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#27272A] dark:bg-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Statement */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm">
            <ClockIcon className="w-4 h-4 mr-2" />
            Results achieved within 18-24 months
          </div>
        </div>
      </div>
    </section>
  );
}
