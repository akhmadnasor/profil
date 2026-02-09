import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`py-12 md:py-20 scroll-mt-8 ${className}`}>
      <div className="flex items-center gap-4 mb-10 group">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight group-hover:text-primary-600 transition-colors">{title}</h2>
        <div className="h-1 flex-grow bg-primary-100 rounded-full overflow-hidden">
          <div className="h-full w-20 bg-primary-500 rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;