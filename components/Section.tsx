import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, icon: Icon, badge, className = "", children }) => {
  return (
    <section id={id} className={`py-10 md:py-16 scroll-mt-16 ${className}`}>
      <div className="mb-8">
        {badge && (
          <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            {badge}
          </div>
        )}
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2.5 bg-emerald-50/80 text-emerald-800 rounded-xl border-2 border-emerald-100 shadow-[0_2px_0_0_#d1fae5] shrink-0">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
