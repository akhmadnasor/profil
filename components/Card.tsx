import React from 'react';
import { ExternalLink, Eye, Trophy, Award, ArrowUpRight, FileCheck2 } from 'lucide-react';
import { PortfolioItem, ExperienceItem, AwardItem, CertificateItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative bg-white rounded-2xl border-2 border-stone-200 flex flex-col justify-between overflow-hidden transition-all duration-200 cursor-pointer
        shadow-[0_6px_0_0_#d6d3d1,0_12px_24px_-4px_rgba(28,25,23,0.06)] 
        hover:shadow-[0_10px_0_0_#a8a29e,0_20px_30px_-6px_rgba(28,25,23,0.1)] 
        hover:border-emerald-700 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_#d6d3d1]
        ${item.isHighlighted ? 'ring-1 ring-emerald-100' : ''}
      `}
    >
      {/* Subtle 3D Top Accent Line */}
      <div className={`h-1.5 w-full ${item.isHighlighted ? 'bg-gradient-to-r from-emerald-800 via-teal-600 to-amber-500' : 'bg-stone-200 group-hover:bg-emerald-700 transition-colors'}`}></div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Row: 3D Tactile Icon Box + Category/Logo */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3.5">
            {/* 3D Tactile Icon Box */}
            <div className={`
              w-12 h-12 rounded-2xl border-2 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-2
              ${item.isHighlighted 
                ? 'bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b]' 
                : 'bg-gradient-to-br from-stone-50 to-stone-200/80 text-emerald-900 border-stone-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_4px_0_0_#d6d3d1] group-hover:border-emerald-700 group-hover:text-emerald-800'}
            `}>
              <Icon className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-emerald-800 uppercase tracking-wider text-[10px]">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-[10px] font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug mt-0.5 flex items-center gap-1 flex-wrap">
                <span>{item.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-700 shrink-0" />
              </h3>
            </div>
          </div>

          {/* Optional Official 3D Logo Badge */}
          {item.logoUrl && (
            <img 
              src={item.logoUrl} 
              alt={item.title} 
              className="h-8 w-auto object-contain shrink-0 hidden sm:block"
            />
          )}
        </div>

        {/* Minimalist Impact Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Responsive Features List (Non-truncated) */}
        {item.features && item.features.length > 0 && (
          <div className="mt-auto pt-3.5 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-medium">
            {item.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span className="break-words">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom 3D Action Footer */}
      <div className="px-5 sm:px-6 py-3.5 bg-stone-50/80 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-800 group-hover:bg-emerald-900 text-white font-bold rounded-lg shadow-[0_3px_0_0_#064e3b] group-hover:shadow-[0_2px_0_0_#064e3b] group-hover:translate-y-[1px] transition-all text-xs shrink-0">
          <span>Buka</span>
          <span>→</span>
        </span>

        <span className="text-stone-500 font-mono text-[11px] break-all">
          {item.link.replace('https://', '').replace(/\/$/, '')}
        </span>
      </div>
    </a>
  );
};

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => (
  <div className="p-4 sm:p-5 bg-white rounded-2xl border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4] hover:border-emerald-700 transition-all">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
      <h3 className="text-sm sm:text-base font-extrabold text-stone-900 leading-snug">
        {item.role}
      </h3>
      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 bg-stone-100 text-stone-600 rounded-md border border-stone-200 w-fit shrink-0">
        {item.period}
      </span>
    </div>
    
    <div className="text-xs font-bold text-emerald-800 mb-2.5 flex flex-wrap items-center gap-1.5">
      <span>{item.institution}</span>
      {item.tag && (
        <>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-500 font-medium">{item.tag}</span>
        </>
      )}
    </div>
    
    <ul className="space-y-1.5">
      {item.description.map((desc, idx) => (
        <li key={idx} className="flex items-start text-xs text-stone-600 leading-relaxed">
          <span className="mr-2 text-emerald-600 font-bold">•</span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface AwardCardProps {
  item: AwardItem;
}

export const AwardCard: React.FC<AwardCardProps> = ({ item }) => {
  const isSpecial = item.isSpecial;
  const Icon = isSpecial ? Trophy : Award;

  return (
    <a
      href={item.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group block p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer
        ${isSpecial 
          ? 'bg-[#0f241e] text-white border-[#1b4338] shadow-[0_5px_0_0_#071612] hover:shadow-[0_7px_0_0_#071612] hover:-translate-y-1' 
          : 'bg-white text-stone-900 border-stone-200 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:border-emerald-700 hover:-translate-y-1'}
      `}
    >
      <div className="flex items-start gap-3.5">
        {/* 3D Icon Box inside Award */}
        <div className={`
          w-11 h-11 rounded-xl border-2 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105
          ${isSpecial
            ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 border-amber-300 shadow-[0_3px_0_0_#78350f]'
            : 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-[0_3px_0_0_#a7f3d0]'}
        `}>
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[11px] font-mono font-bold ${isSpecial ? 'text-amber-400' : 'text-stone-500'}`}>
                {item.year}
              </span>
              {item.highlightText && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                  isSpecial ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-700' : 'bg-emerald-50 text-emerald-800'
                }`}>
                  {item.highlightText}
                </span>
              )}
            </div>
            <ExternalLink className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ${isSpecial ? 'text-amber-300' : 'text-stone-400'}`} />
          </div>

          <h4 className={`text-sm sm:text-base font-extrabold leading-snug ${isSpecial ? 'text-white' : 'text-stone-900 group-hover:text-emerald-800'}`}>
            {item.title}
          </h4>
          <div className={`text-xs font-medium mt-0.5 ${isSpecial ? 'text-stone-300' : 'text-stone-500'}`}>
            {item.issuer}
          </div>

          {item.description && (
            <p className={`text-xs leading-relaxed mt-2 ${isSpecial ? 'text-stone-300/90' : 'text-stone-600'}`}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

interface CertificateCardProps {
  item: CertificateItem;
  onClick: (item: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ item, onClick }) => (
  <a
    href={item.link.replace('/preview', '/view')}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.preventDefault();
      onClick(item);
    }}
    className="bg-white p-4 rounded-xl border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:border-emerald-600 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer group flex items-start justify-between gap-3"
  >
    <div className="flex items-start gap-3">
      {/* 3D Icon Box */}
      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 border-2 border-emerald-200 shadow-[0_2px_0_0_#a7f3d0] flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-950 transition-colors mt-0.5">
        <FileCheck2 className="w-4 h-4" />
      </div>
      <div>
        <h4 className="font-bold text-stone-800 text-xs sm:text-sm leading-snug group-hover:text-emerald-800 transition-colors">
          {item.title}
        </h4>
        <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{item.issuer}</p>
      </div>
    </div>
    <div className="text-stone-400 group-hover:text-emerald-800 transition-colors shrink-0 mt-1">
      <Eye className="w-4 h-4" />
    </div>
  </a>
);
