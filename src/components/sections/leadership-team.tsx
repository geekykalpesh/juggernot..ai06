import { 
  PersonIcon, 
  StarFilledIcon, 
  CheckIcon, 
  GlobeIcon, 
  GearIcon, 
  TargetIcon 
} from "@radix-ui/react-icons";

export function LeadershipTeam() {
  const expertise = [
    {
      icon: GlobeIcon,
      title: "Digital Transformation Expertise",
      description: "Led $500M+ conglomerate transformation",
    },
    {
      icon: GearIcon,
      title: "AI Implementation Experience", 
      description: "Deployed AI across retail, healthcare, logistics",
    },
    {
      icon: CheckIcon,
      title: "Regional Knowledge",
      description: "Deep understanding of UAE market and regulations",
    },
    {
      icon: StarFilledIcon,
      title: "Technical Excellence",
      description: "Certified experts across major enterprise platforms",
    },
    {
      icon: TargetIcon,
      title: "Results Focus",
      description: "Track record of delivering measurable ROI",
    }
  ];

  return (
    <section className="w-full py-12 bg-[#FFFFFF] dark:bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-4 shadow-lg">
            <PersonIcon className="w-4 h-4 mr-2" />
            Leadership Team
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#27272A] dark:text-[#FAFAFA] mb-4">
            Led by Transformation Veterans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings deep expertise in enterprise transformation and cutting-edge AI implementation.
          </p>
        </div>

        {/* Leadership Highlights - Compact Design */}
        <div className="mb-10">
          <div className="bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-2xl border border-[#F3F4F6] dark:border-[#27272A] p-6 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left: Key Achievement */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-20 h-20 bg-[#27272A] dark:bg-[#FAFAFA] rounded-xl">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#FAFAFA] dark:text-[#27272A]">$500M+</div>
                    <div className="text-xs font-semibold text-[#FAFAFA] dark:text-[#27272A]">VALUE</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-2">
                    Proven Leadership at Scale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Successfully led transformation initiatives worth over $500 million in the region.
                  </p>
                </div>
              </div>

              {/* Right: Compact Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "50+", label: "Enterprise Projects" },
                  { value: "3", label: "Industry Sectors" },
                  { value: "100%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-[#FFFFFF] dark:bg-[#18181B] rounded-lg border border-[#F3F4F6] dark:border-[#27272A]">
                    <div className="text-2xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {expertise.slice(0, 3).map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg">
                <item.icon className="w-6 h-6 text-[#FAFAFA] dark:text-[#27272A]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Expertise - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {expertise.slice(3).map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg">
                <item.icon className="w-6 h-6 text-[#FAFAFA] dark:text-[#27272A]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            <StarFilledIcon className="w-5 h-5 mr-2" />
            Meet Our Leadership Team
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Trusted by Dubai's leading enterprises for strategic transformation
          </p>
        </div>
      </div>
    </section>
  );
}
