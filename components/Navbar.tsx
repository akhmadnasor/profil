import React from 'react';
import { MessageCircle, Layers, FolderCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO, BISMA_EVIDENCE_FOLDER_URL } from '../constants';

interface NavbarProps {
  activePage: 1 | 2;
  onSelectPage: (page: 1 | 2) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onSelectPage }) => {
  const handlePageChange = (page: 1 | 2) => {
    onSelectPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b-2 border-stone-200/90 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Zone 1: Brand with 3D Icon Box */}
        <button 
          onClick={() => handlePageChange(1)}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] group-hover:-translate-y-0.5 group-active:translate-y-0.5 group-active:shadow-none transition-all flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-extrabold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
              Akhmad Nasor, S.Pd., M.Pd.
            </div>
            <div className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase">
              "NGALAH BAROKAH"
            </div>
          </div>
        </button>

        {/* Zone 2: 2-Page 3D Switcher Tabs (Full Responsive Text) */}
        <nav className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl border border-stone-300/80 w-full sm:w-auto justify-center">
          <button
            onClick={() => handlePageChange(1)}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
              activePage === 1
                ? 'bg-emerald-800 text-white shadow-[0_2px_0_0_#064e3b] -translate-y-[1px]'
                : 'text-stone-700 hover:text-stone-950 hover:bg-white/70'
            }`}
          >
            <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
              activePage === 1 ? 'bg-emerald-700 text-amber-300' : 'bg-white text-emerald-800 border border-stone-300'
            }`}>
              <Layers className="w-3 h-3" />
            </span>
            <span>Halaman 1: Profil & Inovasi</span>
          </button>

          <button
            onClick={() => handlePageChange(2)}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
              activePage === 2
                ? 'bg-emerald-800 text-white shadow-[0_2px_0_0_#064e3b] -translate-y-[1px]'
                : 'text-stone-700 hover:text-stone-950 hover:bg-white/70'
            }`}
          >
            <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
              activePage === 2 ? 'bg-emerald-700 text-amber-300' : 'bg-white text-amber-700 border border-stone-300'
            }`}>
              <FolderCheck className="w-3 h-3" />
            </span>
            <span>Halaman 2: Bukti AGP & CV</span>
          </button>
        </nav>

        {/* Zone 3: Direct Action Links with 3D Icon Boxes */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={BISMA_EVIDENCE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Buka Folder Bukti Dukung AGP di Google Drive"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 bg-white border-2 border-stone-300 rounded-xl shadow-[0_3px_0_0_#d6d3d1] hover:shadow-[0_2px_0_0_#d6d3d1] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            <FolderCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Drive AGP</span>
          </a>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 border-2 border-emerald-950 rounded-xl shadow-[0_3px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
