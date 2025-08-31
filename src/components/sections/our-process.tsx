import {
  MagnifyingGlassIcon,
  LayersIcon,
  RocketIcon,
  GearIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

export function OurProcess() {
  const phases = [
    {
      phase: "Month 1-3",
      title: "Discovery & Strategy",
      icon: MagnifyingGlassIcon,
      description: "Executive alignment and strategic foundation",
      activities: [
        "Executive alignment workshops",
        "Current state assessment",
        "AI opportunity mapping",
        "Transformation roadmap",
      ],
    },
    {
      phase: "Month 4-9",
      title: "Foundation & Pilots",
      icon: LayersIcon,
      description: "Infrastructure setup and proof of concepts",
      activities: [
        "Data infrastructure setup",
        "Initial AI model development",
        "Pilot deployments",
        "Team training and upskilling",
      ],
    },
    {
      phase: "Month 10-15",
      title: "Scale & Optimize",
      icon: RocketIcon,
      description: "Enterprise-wide deployment and optimization",
      activities: [
        "Enterprise-wide rollout",
        "Advanced AI capabilities",
        "Process automation at scale",
        "Performance optimization",
      ],
    },
    {
      phase: "Month 16-18",
      title: "Sustain & Evolve",
      icon: GearIcon,
      description: "Long-term sustainability and innovation",
      activities: [
        "AI operating system launch",
        "Self-service capabilities",
        "Innovation pipeline establishment",
        "Knowledge transfer completion",
      ],
    },
  ];

  return (
    <section className="w-full py-12 bg-[#FFFFFF] dark:bg-[#18181B]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-4 shadow-lg">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Our Process
          </div>

          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#27272A] dark:text-[#FAFAFA] mb-4">
            From Vision to Value in 18 Months
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A proven methodology that transforms enterprises through strategic
            phases with measurable results
          </p>
        </div>

        {/* Timeline Indicator */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-full">
            <ClockIcon className="w-5 h-5 text-[#27272A] dark:text-[#FAFAFA]" />
            <span className="text-sm font-medium text-[#27272A] dark:text-[#FAFAFA]">
              18-Month Journey
            </span>
          </div>
        </div>

        {/* Process Phases - Vertical Compact Layout */}
        <div className="space-y-4 mb-10">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                {/* Icon & Phase Number */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="w-6 h-6 text-[#FAFAFA] dark:text-[#27272A]" />
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-xs font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                      {phase.phase}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {phase.description}
                      </p>
                    </div>

                    {/* Phase Number */}
                    <div className="text-4xl font-bold text-[#27272A]/10 dark:text-[#FAFAFA]/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Activities - Horizontal Layout */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckIcon className="w-3 h-3 text-[#27272A] dark:text-[#FAFAFA] flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#27272A]/20 dark:group-hover:border-[#FAFAFA]/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Key Milestones - Compact */}
        <div className="bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-4 text-center">
            Key Milestones
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { month: "3", label: "Strategy Complete" },
              { month: "9", label: "First ROI" },
              { month: "18", label: "Full Transform" },
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-[#FAFAFA] dark:text-[#27272A]">
                    {milestone.month}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#27272A] dark:text-[#FAFAFA]">
                  Month {milestone.month}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            <RocketIcon className="w-5 h-5 mr-2" />
            Start Your 18-Month Transformation
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Proven process with measurable milestones every quarter
          </p>
        </div>
      </div>
    </section>
  );
}
