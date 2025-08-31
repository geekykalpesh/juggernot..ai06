import { 
  CrossCircledIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  LockClosedIcon,
  PersonIcon,
  StarFilledIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";

export function ProblemSection() {
  const problems = [
    {
      icon: PersonIcon,
      title: "The Talent Crisis",
      stat: "90%",
      description: "UAE enterprises struggle to find qualified AI professionals. Engineers command AED 300K-600K, demand grows 60% faster than supply.",
      severity: "Critical"
    },
    {
      icon: CrossCircledIcon,
      title: "Legacy System Complexity", 
      stat: "42%",
      description: "Organizations lack quality data for AI customization. Legacy systems weren't designed for AI workloads.",
      severity: "High"
    },
    {
      icon: LockClosedIcon,
      title: "Regulatory Uncertainty",
      stat: "24%", 
      description: "Projects stall due to UAE compliance concerns. Bias penalties reach AED 1M+ with imprisonment risk.",
      severity: "Critical"
    },
    {
      icon: ClockIcon,
      title: "Timeline Overruns",
      stat: "67%",
      description: "Never reach full production deployment. Average enterprise AI projects take 3-5 years.",
      severity: "High"
    }
  ];

  return (
    <section className="w-full py-8 bg-[#F3F4F6] dark:bg-[#18181B] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(39,39,42,0.1)_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_20%_80%,_rgba(250,250,250,0.1)_1px,_transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-full text-sm font-semibold mb-3 shadow-lg">
            <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
            Critical Industry Challenge
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-2">
            Why Enterprise AI Projects Fail in Dubai
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            The harsh reality of AI transformation in the UAE market
          </p>
        </div>

        {/* Ultra-Compact Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Compact Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-5 h-5 text-[#FAFAFA] dark:text-[#27272A]" />
                </div>
                
                <div className="px-2 py-1 bg-[#27272A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#27272A] text-xs font-bold rounded">
                  {problem.severity}
                </div>
              </div>

              {/* Title & Stat in One Line */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-[#27272A] dark:text-[#FAFAFA]">
                  {problem.title}
                </h3>
                <div className="text-2xl font-black text-[#27272A] dark:text-[#FAFAFA]">
                  {problem.stat}
                </div>
              </div>

              {/* Compact Description */}
              <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                {problem.description}
              </p>

              {/* Background Number */}
              <div className="absolute top-2 right-2 opacity-5 dark:opacity-10 -z-10">
                <div className="text-4xl font-black text-[#27272A] dark:text-[#FAFAFA]">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#27272A]/20 dark:group-hover:border-[#FAFAFA]/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Compact Impact Summary */}
        <div className="bg-[#FFFFFF] dark:bg-[#1C1C1F] rounded-xl border border-[#F3F4F6] dark:border-[#27272A] p-6 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-[#27272A] dark:bg-[#FAFAFA] rounded-lg mb-3 mx-auto">
              <ExclamationTriangleIcon className="w-6 h-6 text-[#FAFAFA] dark:text-[#27272A]" />
            </div>
            
            <h3 className="text-xl font-semibold text-[#27272A] dark:text-[#FAFAFA] mb-2">
              The Cost of Failure
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Failed AI projects cost UAE enterprises an average of <strong>AED 2.5M</strong> per attempt, with 73% experiencing major setbacks.
            </p>

            {/* Inline Key Stats */}
            <div className="flex justify-center items-center gap-6 text-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#27272A] dark:text-[#FAFAFA]">3-5</div>
                <div className="text-gray-600 dark:text-gray-400">Years Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#27272A] dark:text-[#FAFAFA]">2.5M</div>
                <div className="text-gray-600 dark:text-gray-400">AED Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#27272A] dark:text-[#FAFAFA]">73%</div>
                <div className="text-gray-600 dark:text-gray-400">Setbacks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Solution Teaser */}
        <div className="text-center bg-[#27272A] dark:bg-[#1C1C1F] rounded-xl p-6 text-[#FAFAFA]">
          <h3 className="text-xl font-semibold mb-2">
            Sound familiar? You&apos;re not alone.
          </h3>
          <p className="text-sm opacity-90 mb-4 max-w-xl mx-auto leading-relaxed">
            But there&apos;s a better way. Our proven methodology addresses every challenge with measurable results.
          </p>
          
          <button className="inline-flex items-center justify-center px-5 py-2 bg-[#FAFAFA] text-[#27272A] rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-sm">
            <StarFilledIcon className="w-4 h-4 mr-2" />
            Discover Our Solution
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
