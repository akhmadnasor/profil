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
      <div className="flex items-center gap-4 mb-10 group">
        {Icon && (
          <div className="hidden md:flex p-3 bg-white text-primary-500 rounded-xl shadow-sm border border-slate-100 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-md transition-all duration-300 print:hidden">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight group-hover:text-primary-600 transition-colors flex items-center gap-3">
          <span className="md:hidden">
            {Icon && <Icon className="w-6 h-6 inline-block text-primary-500" />}
          </span>
          {title}
        </h2>
        <div className="h-1 flex-grow bg-primary-100 rounded-full overflow-hidden print:hidden">
          <div className="h-full w-20 bg-primary-500 rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;