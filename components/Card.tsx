import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { PortfolioItem, ExperienceItem, AwardItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => (
  <a 
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden h-full flex flex-col"
  >
    <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600 w-full"></div>
    <div className="p-7 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold px-3 py-1 bg-primary-50 text-primary-600 rounded-full border border-primary-100">
          {item.category}
        </span>
        <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-primary-50 transition-colors">
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="mt-auto text-primary-500 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
        Kunjungi Project <span className="ml-1">→</span>
      </div>
    </div>
  </a>
);

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => (
  <div className="relative pl-10 border-l-[3px] border-primary-100 last:border-0 pb-12 last:pb-0 group">
    {/* Timeline Dot */}
    <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-white border-[5px] border-primary-400 group-hover:border-primary-600 group-hover:scale-110 transition-all shadow-sm z-10"></div>
    
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 relative">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary-700 transition-colors">{item.role}</h3>
        <div className="flex items-center text-xs font-semibold px-2.5 py-1 bg-primary-50 text-primary-600 rounded-md w-fit mt-2 sm:mt-0">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          {item.period}
        </div>
      </div>
      
      <div className="text-primary-600 font-medium mb-4 text-sm flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>
        {item.institution}
      </div>
      
      <ul className="space-y-3">
        {item.description.map((desc, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-600 leading-relaxed">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0 group-hover:bg-primary-400 transition-colors"></span>
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
  <div className="flex items-start bg-white p-5 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group">
    <div className="flex-shrink-0 mr-5">
      <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-200">
        <span className="font-bold text-lg">#{item.id}</span>
      </div>
    </div>
    <div>
      <h4 className="font-bold text-slate-800 text-lg group-hover:text-primary-700 transition-colors">{item.title}</h4>
      <div className="text-sm text-primary-600 font-medium mb-1">{item.issuer}</div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.year}</div>
      {item.description && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <p className="text-sm text-slate-600 italic">
            "{item.description}"
          </p>
        </div>
      )}
    </div>
  </div>
);