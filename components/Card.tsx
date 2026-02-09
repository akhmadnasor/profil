import React from 'react';
import { ExternalLink, Calendar, MapPin, Eye, FileText, ChevronRight } from 'lucide-react';
import { PortfolioItem, ExperienceItem, AwardItem, CertificateItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => (
  <a 
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden h-full flex flex-col print:break-inside-avoid print:border-slate-300 print:shadow-none"
  >
    <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600 w-full print:bg-primary-600"></div>
    <div className="p-7 flex-grow flex flex-col print:p-4">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold px-3 py-1 bg-primary-50 text-primary-600 rounded-full border border-primary-100 print:border-slate-300 print:bg-transparent print:text-black">
          {item.category}
        </span>
        <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-primary-50 transition-colors print:hidden">
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors print:text-black">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4 print:text-black">
        {item.description}
      </p>
      <div className="mt-auto text-primary-500 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 print:opacity-100 print:translate-y-0 print:text-blue-700">
        <span className="print:hidden">Kunjungi Project</span>
        <span className="hidden print:inline text-xs underline">{item.link}</span>
        <span className="ml-1 print:hidden">→</span>
      </div>
    </div>
  </a>
);

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => (
  <div className="relative pl-10 border-l-[3px] border-primary-100 last:border-0 pb-12 last:pb-0 group print:break-inside-avoid print:pb-6 print:border-l-2 print:border-slate-300">
    {/* Timeline Dot */}
    <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-white border-[5px] border-primary-400 group-hover:border-primary-600 group-hover:scale-110 transition-all shadow-sm z-10 print:border-black print:bg-black print:w-4 print:h-4 print:-left-[9px]"></div>
    
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 relative print:shadow-none print:border-slate-300 print:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary-700 transition-colors print:text-black">{item.role}</h3>
        <div className="flex items-center text-xs font-semibold px-2.5 py-1 bg-primary-50 text-primary-600 rounded-md w-fit mt-2 sm:mt-0 print:bg-transparent print:text-black print:p-0 print:border print:border-slate-300 print:px-2">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          {item.period}
        </div>
      </div>
      
      <div className="text-primary-600 font-medium mb-4 text-sm flex items-center print:text-black print:font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2 print:hidden"></span>
        {item.institution}
      </div>
      
      <ul className="space-y-3 print:space-y-1">
        {item.description.map((desc, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-600 leading-relaxed print:text-black">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0 group-hover:bg-primary-400 transition-colors print:bg-black"></span>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface AwardCardProps {
  item: AwardItem;
}

export const AwardCard: React.FC<AwardCardProps> = ({ item }) => (
  <div className="flex items-start bg-white p-5 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group print:break-inside-avoid print:shadow-none print:border-slate-300 print:p-3">
    <div className="flex-shrink-0 mr-5">
      <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-200 print:bg-slate-100 print:text-black print:border print:border-slate-200">
        <span className="font-bold text-lg">#{item.id}</span>
      </div>
    </div>
    <div>
      <h4 className="font-bold text-slate-800 text-lg group-hover:text-primary-700 transition-colors print:text-black">{item.title}</h4>
      <div className="text-sm text-primary-600 font-medium mb-1 print:text-black">{item.issuer}</div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider print:text-slate-600">{item.year}</div>
      {item.description && (
        <div className="mt-3 pt-3 border-t border-slate-100 print:border-slate-200">
          <p className="text-sm text-slate-600 italic print:text-black">
            "{item.description}"
          </p>
        </div>
      )}
    </div>
  </div>
);

interface CertificateCardProps {
  item: CertificateItem;
  onClick: (item: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ item, onClick }) => (
  <div 
    onClick={() => onClick(item)}
    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center gap-4 print:break-inside-avoid print:border-slate-300"
  >
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0 print:hidden">
      <FileText className="w-6 h-6" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight group-hover:text-primary-700 transition-colors truncate print:text-black">
        {item.title}
      </h4>
      <p className="text-xs text-slate-500 mt-1 truncate print:text-black">{item.issuer}</p>
    </div>
    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors print:hidden">
      <Eye className="w-4 h-4" />
    </div>
  </div>
);