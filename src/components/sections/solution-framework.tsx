import { 
  CheckIcon, 
  StackIcon, 
  RocketIcon, 
  GearIcon,
  LayersIcon,
  LightningBoltIcon,
  Component2Icon,
  StarFilledIcon
} from "@radix-ui/react-icons";

export function SolutionFramework() {
  const steps = [
    {
      id: 1,
      title: "Unify Your Data Foundation",
      subtitle: "Transform Data Silos into AI-Ready Assets",
      icon: StackIcon,
      features: [
        "Centralize enterprise systems",
        "Single source of truth",
        "AI-ready governance",
        "Real-time analytics"
      ],
      outcome: "Clean, accessible data that powers intelligent decision-making"
    },
    {
      id: 2,
      title: "Deploy AI Copilots at Scale",
      subtitle: "Make Every Employee 10x More Productive",
      icon: RocketIcon,
      features: [
        "Department-specific AI assistants",
        "Automated workflows",
        "Intelligent task delegation",
        "Real-time insights"
      ],
      outcome: "AI becomes reliable copilot for your entire workforce"
    },
    {
      id: 3,
      title: "Build Your AI Operating System",
      subtitle: "Create Agent-Human Collaboration Platform",
      icon: GearIcon,
      features: [
        "Enterprise AI platform",
        "Scalable architecture",
        "Human-AI workflow optimization",
        "Self-improving system"
      ],
      outcome: "Sustainable competitive advantage through evolving AI ecosystem"
    }
  ];

  return (
    <section className="w-full py-8 bg-[#F3F4F6] dark:bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-[#27272A] dark:bg-[#1C1C1F] text-[#FAFAFA] rounded-full text-sm font-semibold mb-4 shadow-lg">
            <StarFilledIcon className="w-4 h-4 mr-2" />
            Proven AI Framework
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-3">
            The Juggernaut Method: 3 Steps to AI Excellence
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Our proven methodology transforms enterprises in 18 months, not 3-5 years
          </p>
        </div>

        {/* Three Steps - Clean Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="group relative bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-2xl border border-[#F3F4F6] dark:border-[#27272A] p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number Badge - Always visible white background */}
                <div className="absolute -top-4 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#F3F4F6] dark:border-[#1C1C1F] z-10">
                  <span className="text-[#27272A] font-bold text-xl">{step.id}</span>
                </div>

                {/* Icon - Your brand colors only */}
                <div className="flex items-center justify-center w-20 h-20 bg-[#27272A] dark:bg-[#FAFAFA] rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-10 h-10 text-[#FAFAFA] dark:text-[#27272A]" />
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#27272A] dark:text-[#FAFAFA] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 text-left">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#F3F4F6] dark:hover:bg-[#27272A] transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-3 h-3 text-[#FAFAFA] dark:text-[#27272A]" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome Box */}
                  <div className="bg-[#F3F4F6] dark:bg-[#27272A] rounded-xl p-4 border-l-4 border-l-[#27272A] dark:border-l-[#FAFAFA]">
                    <div className="flex items-center mb-2">
                      <LightningBoltIcon className="w-4 h-4 text-[#27272A] dark:text-[#FAFAFA] mr-2" />
                      <p className="text-sm font-bold text-[#27272A] dark:text-[#FAFAFA]">
                        Expected Outcome
                      </p>
                    </div>
                    <p className="text-[#27272A] dark:text-[#FAFAFA] text-sm leading-relaxed font-medium">
                      {step.outcome}
                    </p>
                  </div>
                </div>

                {/* Simple hover border - no color overlay */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#27272A]/30 dark:group-hover:border-[#FAFAFA]/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="flex justify-center items-center space-x-8 mb-10">
          <div className="flex items-center space-x-3 px-6 py-3 bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-full border border-[#F3F4F6] dark:border-[#27272A] shadow-lg">
            <LayersIcon className="w-5 h-5 text-[#27272A] dark:text-[#FAFAFA]" />
            <span className="text-sm font-semibold text-[#27272A] dark:text-[#FAFAFA]">Integrated Process</span>
          </div>
          <div className="w-16 h-1 bg-[#27272A] dark:bg-[#FAFAFA] rounded-full"></div>
          <div className="flex items-center space-x-3 px-6 py-3 bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-full border border-[#F3F4F6] dark:border-[#27272A] shadow-lg">
            <Component2Icon className="w-5 h-5 text-[#27272A] dark:text-[#FAFAFA]" />
            <span className="text-sm font-semibold text-[#27272A] dark:text-[#FAFAFA]">18-Month Timeline</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#27272A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#27272A] rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            <RocketIcon className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            Start Your AI Transformation
            <LightningBoltIcon className="w-5 h-5 ml-3 group-hover:animate-pulse" />
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Join 50+ enterprises that transformed with our methodology
          </p>
        </div>
      </div>
    </section>
  );
}
