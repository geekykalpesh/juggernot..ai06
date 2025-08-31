import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  ArrowRightIcon,
  // ClockIcon,
  StarFilledIcon,
  CheckIcon,
  LockClosedIcon,
  // RocketIcon,
  // LayersIcon,
  // Component1Icon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

export function BentoDemo() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "⚡ Speed Without Compromise",
      description: "18-month transformation vs. 3-5 years industry standard. Fast enterprise results with proven methodologies.",
      background: (
        <div className="absolute inset-0">
          <div className="absolute top-2 right-2 opacity-20">
            <div className="text-5xl font-black text-[#27272A] dark:text-[#FAFAFA]">18</div>
            <div className="text-xs font-bold text-center -mt-1 text-[#27272A] dark:text-[#FAFAFA]">MONTHS</div>
          </div>
          <div className="absolute bottom-2 left-2 opacity-15">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-1 mb-1">
                <div className={`h-0.5 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full`} style={{width: `${30 - i * 8}px`}}></div>
                <ArrowRightIcon className="w-2 h-2 text-[#27272A] dark:text-[#FAFAFA]" />
              </div>
            ))}
          </div>
        </div>
      ),
      className: "lg:col-span-2",
    },
    {
      Icon: InputIcon,
      name: "💰 Proven ROI",
      description: "5-7x returns demonstrated. Cost-effective excellence without consulting premium.",
      background: (
        <div className="absolute inset-0">
          <div className="absolute top-2 right-2 opacity-20">
            <div className="text-4xl font-black text-[#27272A] dark:text-[#FAFAFA]">5-7x</div>
          </div>
          <div className="absolute bottom-2 left-2 flex items-end space-x-1 opacity-15">
            {[15, 25, 35, 45].map((height, i) => (
              <div key={i} className="bg-[#27272A] dark:bg-[#FAFAFA] rounded-t w-1" style={{height: `${height}px`}}></div>
            ))}
          </div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: GlobeIcon,
      name: "🎯 Crisis-Tested Leadership",
      description: "Survived global crisis transformation. Proven approach in challenging times.",
      background: (
        <div className="absolute inset-0">
          <div className="absolute top-2 right-2 opacity-20">
            <LockClosedIcon className="w-8 h-8 text-[#27272A] dark:text-[#FAFAFA]" />
          </div>
          <div className="absolute bottom-2 left-2 opacity-15">
            <div className="text-xs font-bold text-[#27272A] dark:text-[#FAFAFA]">2020</div>
            <div className="text-xs text-[#27272A] dark:text-[#FAFAFA]">TESTED</div>
          </div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: CalendarIcon,
      name: "🏆 Complete AI Team",
      description: "No need to hire 70+ specialists. We bring the complete AI team ready to deploy.",
      background: (
        <div className="absolute inset-0">
          <div className="absolute top-2 right-2 opacity-20">
            <div className="text-3xl font-black text-[#27272A] dark:text-[#FAFAFA]">70+</div>
          </div>
          <div className="absolute bottom-2 left-2 opacity-15">
            <div className="grid grid-cols-4 gap-0.5">
              {[...Array(8)].map((_, i) => (
                <DotFilledIcon key={i} className="w-1 h-1 text-[#27272A] dark:text-[#FAFAFA]" />
              ))}
            </div>
            <div className="text-xs mt-0.5 font-semibold text-[#27272A] dark:text-[#FAFAFA]">TEAM</div>
          </div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: BellIcon,
      name: "🛡️ UAE Compliance",
      description: "Navigate UAE AI regulations with confidence. Full compliance ensured.",
      background: (
        <div className="absolute inset-0">
          <div className="absolute top-2 right-2 opacity-20 text-center">
            <div className="text-2xl font-black text-[#27272A] dark:text-[#FAFAFA]">UAE</div>
          </div>
          <div className="absolute bottom-2 left-2 opacity-15">
            <div className="space-y-0.5">
              {['AI', 'DIFC', 'ISO'].map((item, i) => (
                <div key={i} className="flex items-center space-x-1">
                  <CheckIcon className="w-2 h-2 text-[#27272A] dark:text-[#FAFAFA]" />
                  <span className="text-xs text-[#27272A] dark:text-[#FAFAFA]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      className: "lg:col-span-1",
    },
  ];

  return (
    <section className="w-full py-8 bg-[#FFFFFF] dark:bg-[#18181B]">
      <div className="w-full max-w-6xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-3 shadow-lg">
            <StarFilledIcon className="w-4 h-4 mr-2" />
            Competitive Advantage
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-2">
            Why Choose Juggernot AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Why Dubai's Leading Enterprises Partner with Juggernot AI
          </p>
        </div>
        
        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative ${feature.className} bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[140px]`}
            >
              {/* Background Content */}
              <div className="absolute inset-0 text-[#27272A] dark:text-[#FAFAFA]">
                {feature.background}
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-between h-full z-10">
                <div className="space-y-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#F3F4F6] dark:bg-[#27272A] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.Icon className="w-5 h-5 text-[#27272A] dark:text-[#FAFAFA]" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#27272A] dark:text-[#FAFAFA] leading-tight mb-1">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-[#F3F4F6]/30 dark:bg-[#FAFAFA]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#27272A] dark:bg-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Compact Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#F3F4F6] dark:border-[#27272A]">
          {[
            { value: "50+", label: "Enterprise Clients" },
            { value: "100%", label: "Success Rate" },
            { value: "20+", label: "Years Experience" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
