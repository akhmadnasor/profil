import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, className = "", children }) => {
  return (
    <section id={id} className={`py-12 md:py-20 scroll-mt-8 ${className}`}>
      <div className="flex items-center gap-5 mb-10 group relative">
        {Icon && (
          <div className="hidden md:flex relative shrink-0">
            <div className="absolute inset-0 bg-primary-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full print:hidden"></div>
            <div className="relative p-3.5 bg-gradient-to-br from-white to-primary-50 text-primary-600 rounded-2xl shadow-sm border border-primary-100 group-hover:scale-110 group-hover:shadow-primary-200 group-hover:shadow-lg transition-all duration-300 print:shadow-none print:border-slate-200">
              <Icon className="w-7 h-7" />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight group-hover:text-primary-700 transition-colors flex items-center gap-3">
            <span className="md:hidden p-2 bg-primary-50 rounded-lg text-primary-600 shrink-0">
              {Icon && <Icon className="w-6 h-6 inline-block" />}
            </span>
            <span>{title}</span>
          </h2>
          <div className="h-1.5 mt-3 w-24 bg-gradient-to-r from-primary-400 to-primary-200 rounded-full group-hover:w-full transition-all duration-700 ease-out print:hidden"></div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;