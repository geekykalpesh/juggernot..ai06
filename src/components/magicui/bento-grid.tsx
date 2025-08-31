import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1",
      // Light theme styles
      "bg-[#FFFFFF] border border-[#F3F4F6] shadow-lg hover:shadow-xl",
      // Dark theme styles  
      "dark:bg-[#18181B] dark:border-[#27272A] dark:shadow-white/5 dark:hover:shadow-white/10",
      className
    )}
    {...props}
  >
    {/* Background Content */}
    <div className="absolute inset-0 text-[#27272A] dark:text-[#FAFAFA]">
      {background}
    </div>

    {/* Content */}
    <div className="relative flex flex-col justify-between h-full p-6 z-10">
      {/* Icon and Title Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-center w-16 h-16 bg-[#F3F4F6] dark:bg-[#1C1C1F] rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <Icon className="w-8 h-8 text-[#27272A] dark:text-[#FAFAFA]" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-[#27272A] dark:text-[#FAFAFA] leading-tight">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            {description}
          </p>
        </div>
      </div>

      {/* CTA Button - Uncomment if needed */}
      {/* <div className="mt-6">
        <button className="inline-flex items-center justify-center px-8 py-4 bg-[#18181B] dark:bg-[#27272A] text-[#FAFAFA] rounded-xl font-semibold hover:shadow-lg transition-all duration-200 group/cta">
          {cta}
          <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/cta:translate-x-1 transition-transform duration-200" />
        </button>
      </div> */}
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-[#F3F4F6]/50 dark:bg-[#FAFAFA]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    
    {/* Bottom border accent */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#18181B] dark:bg-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export { BentoCard, BentoGrid };
