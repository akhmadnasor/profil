import React from 'react';
import { ExternalLink, Calendar, Eye, FileText, CheckCircle2, Trophy, Award, ArrowUpRight } from 'lucide-react';
import { PortfolioItem, ExperienceItem, AwardItem, CertificateItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => (
  <div className={`
    group relative bg-white rounded-2xl border-2 border-stone-200 flex flex-col justify-between overflow-hidden transition-all duration-200
    shadow-[0_6px_0_0_#e7e5e4,0_12px_24px_-4px_rgba(28,25,23,0.05)] 
    hover:shadow-[0_10px_0_0_#d6d3d1,0_20px_30px_-6px_rgba(28,25,23,0.09)] 
    hover:-translate-y-1.5 
    ${item.isHighlighted ? 'border-stone-300 ring-1 ring-emerald-100' : ''}
  `}>
    {/* Subtle 3D Top Accent Line */}
    <div className={`h-1.5 w-full ${item.isHighlighted ? 'bg-gradient-to-r from-emerald-800 via-teal-600 to-amber-500' : 'bg-stone-200'}`}></div>

    <div className="p-6 md:p-7 flex-1 flex flex-col">
      {/* Category & Badge */}
      <div className="flex items-center justify-between gap-3 mb-3 text-xs text-stone-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-800 uppercase tracking-wider text-[11px]">{item.category}</span>
          {item.badge && (
            <>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-600 font-medium">{item.badge}</span>
            </>
          )}
        </div>
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-1 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          title="Buka Langsung"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-extrabold text-stone-900 mb-2 leading-snug">
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-emerald-800 transition-colors inline-flex items-center gap-1 group/title"
        >
          <span>{item.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-emerald-700" />
        </a>
      </h3>

      {/* Description */}
      <p className="text-stone-600 text-sm leading-relaxed mb-5">
        {item.description}
      </p>

      {/* Features List */}
      {item.features && item.features.length > 0 && (
        <div className="mt-auto pt-4 border-t border-stone-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-600">
            {item.features.map((feat, idx) => (
              <div key={idx} className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 shrink-0"></span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Bottom 3D Action Footer */}
    <div className="px-6 md:px-7 py-3.5 bg-stone-50/70 border-t border-stone-200/80 flex items-center justify-between text-xs">
      {/* 3D "Buka" Button */}
      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold rounded-lg shadow-[0_3px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] active:shadow-none hover:translate-y-[1px] active:translate-y-[3px] transition-all text-xs"
      >
        <span>Buka</span>
        <span>→</span>
      </a>

      {/* URL indicator */}
      <span className="text-stone-400 font-mono text-[11px] truncate max-w-[170px] select-all">
        {item.link.replace('https://', '')}
      </span>
    </div>
  </div>
);

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => (
  <div className="relative pl-6 md:pl-8 border-l-2 border-stone-200 pb-8 last:pb-0 group">
    {/* Clean 3D Minimalist Dot */}
    <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-stone-400 group-hover:border-emerald-800 group-hover:bg-emerald-800 shadow-[0_2px_0_0_#d6d3d1] transition-all"></div>
    
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
          {item.role}
        </h3>
        <div className="text-xs font-mono text-stone-500 font-medium">
          {item.period}
        </div>
      </div>
      
      <div className="text-xs font-semibold text-emerald-800 mb-3 flex items-center gap-2">
        <span>{item.institution}</span>
        {item.tag && (
          <>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">{item.tag}</span>
          </>
        )}
      </div>
      
      <ul className="space-y-1.5">
        {item.description.map((desc, idx) => (
          <li key={idx} className="flex items-start text-xs sm:text-sm text-stone-600 leading-relaxed">
            <span className="mr-2 text-stone-300">•</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface AwardCardProps {
  item: AwardItem;
}

export const AwardCard: React.FC<AwardCardProps> = ({ item }) => {
  const isSpecial = item.isSpecial;

  return (
    <div className={`
      p-5 md:p-6 rounded-2xl border-2 transition-all duration-200
      ${isSpecial 
        ? 'bg-[#0f241e] text-white border-[#173a31] shadow-[0_5px_0_0_#071612] hover:shadow-[0_7px_0_0_#071612] hover:-translate-y-0.5' 
        : 'bg-white text-stone-900 border-stone-200 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:-translate-y-0.5'}
    `}>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-mono font-bold ${isSpecial ? 'text-amber-400' : 'text-stone-500'}`}>
              {item.year}
            </span>
            {item.highlightText && (
              <>
                <span aria-hidden="true" className="text-stone-500">·</span>
                <span className={`text-xs font-semibold ${isSpecial ? 'text-emerald-300' : 'text-emerald-800'}`}>
                  {item.highlightText}
                </span>
              </>
            )}
          </div>
          <h4 className={`text-base md:text-lg font-bold ${isSpecial ? 'text-white' : 'text-stone-900'}`}>
            {item.title}
          </h4>
        </div>
        <span className={`text-xs ${isSpecial ? 'text-stone-300' : 'text-stone-500'} shrink-0 font-medium`}>
          {item.issuer}
        </span>
      </div>

      {item.description && (
        <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${isSpecial ? 'text-stone-300' : 'text-stone-600'}`}>
          {item.description}
        </p>
      )}
    </div>
  );
};

interface CertificateCardProps {
  item: CertificateItem;
  onClick: (item: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ item, onClick }) => (
  <div 
    onClick={() => onClick(item)}
    className="bg-white p-4 rounded-xl border-2 border-stone-200 shadow-[0_3px_0_0_#e7e5e4] hover:shadow-[0_5px_0_0_#d6d3d1] hover:border-emerald-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer group flex items-center justify-between gap-3"
  >
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-stone-800 text-xs sm:text-sm truncate group-hover:text-emerald-800 transition-colors">
        {item.title}
      </h4>
      <p className="text-[11px] text-stone-400 truncate mt-0.5">{item.issuer}</p>
    </div>
    <div className="text-stone-300 group-hover:text-emerald-700 transition-colors shrink-0">
      <Eye className="w-4 h-4" />
    </div>
  </div>
);
