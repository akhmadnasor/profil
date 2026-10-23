import React, { useState, useEffect } from 'react';
import { 
  X, GraduationCap, Users, Phone, Mail, MapPin,
  Briefcase, Layout, Award, FileText,
  ExternalLink, Trophy, ArrowRight, ArrowLeft,
  FolderCheck, Sparkles, HeartHandshake, Recycle, Eye, CheckCircle2,
  ShieldCheck, TrendingUp, Gamepad2, Play
} from 'lucide-react';
import Navbar from './components/Navbar';
import { PortfolioCard, ExperienceCard, AwardCard, CertificateCard } from './components/Card';
import { 
  CONTACT_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  PORTFOLIO_DATA, 
  AWARDS_DATA, 
  ORGANIZATION_DATA,
  PROFILE_IMAGE_URL,
  CERTIFICATES_DATA,
  GOOGLE_DRIVE_FOLDER,
  BISMA_PLUS_SHOWCASE,
  BISMA_EVIDENCE_DATA,
  BISMA_EVIDENCE_FOLDER_URL,
  GAME_SAMPLES_DATA
} from './constants';
import { CertificateItem, EvidenceItem, GameSampleItem } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameSampleItem | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');
  const [evidenceFilter, setEvidenceFilter] = useState<string>('all');

  // Handle closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
        setSelectedEvidence(null);
        setSelectedGame(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered portfolio
  const filteredPortfolio = PORTFOLIO_DATA.filter(item => {
    if (portfolioFilter === 'all') return true;
    if (portfolioFilter === 'ai') return item.category === 'AI Tool';
    if (portfolioFilter === 'management') return item.category === 'Manajemen Sekolah';
    if (portfolioFilter === 'assessment') return item.category === 'Asesmen & CBT';
    return true;
  });

  // Filtered BISMA+ supporting evidence
  const filteredEvidence = BISMA_EVIDENCE_DATA.filter(item => {
    if (evidenceFilter === 'all') return true;
    return item.category === evidenceFilter;
  });

  const getPillarIcon = (id: string) => {
    if (id === 'ai-powered') return <Sparkles className="w-5 h-5" />;
    if (id === 'character-building') return <HeartHandshake className="w-5 h-5" />;
    return <Recycle className="w-5 h-5" />;
  };

  const switchPage = (page: 1 | 2) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeModalTitle = selectedGame
    ? selectedGame.title
    : selectedCertificate
    ? selectedCertificate.title
    : selectedEvidence?.title;

  const activeModalSubtitle = selectedGame
    ? `${selectedGame.levelBadge} · ${selectedGame.subject}`
    : selectedCertificate
    ? selectedCertificate.issuer
    : `${selectedEvidence?.code} · ${selectedEvidence?.indicator}`;

  const activeModalPreviewUrl = selectedGame
    ? selectedGame.url
    : selectedCertificate
    ? selectedCertificate.link
    : selectedEvidence?.previewUrl;

  const activeModalDirectUrl = selectedGame
    ? selectedGame.url
    : selectedCertificate
    ? selectedCertificate.link.replace('/preview', '/view')
    : selectedEvidence?.directUrl;

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-emerald-100 selection:text-emerald-950 text-stone-800 flex flex-col">
      
      {/* Top 2-Page Navigation */}
      <Navbar activePage={activePage} onSelectPage={setActivePage} />

      {/* Interactive Game / Certificate / Document Preview Modal */}
      {(selectedCertificate || selectedEvidence || selectedGame) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden border-2 border-stone-200">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 bg-[#FAF9F6]">
              <div className="flex-1 min-w-[200px]">
                <h3 className="font-extrabold text-sm sm:text-base text-stone-900 leading-snug">
                  {activeModalTitle}
                </h3>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                  {activeModalSubtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a 
                  href={activeModalDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 shadow-[0_2px_0_0_#064e3b] transition-all"
                  title="Buka di Tab Baru Layar Penuh"
                >
                  <span>Buka Layar Penuh</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button 
                  onClick={() => {
                    setSelectedCertificate(null);
                    setSelectedEvidence(null);
                    setSelectedGame(null);
                  }}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
                  aria-label="Tutup Pratinjau"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-stone-100 relative">
              <iframe 
                src={activeModalPreviewUrl}
                className="w-full h-full border-0"
                title={activeModalTitle || "Pratinjau Interaktif"}
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Main 2-Page Content Container */}
      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1">
        
        {/* =====================================================================
            HALAMAN 1: PROFIL EKSEKUTIF, INOVASI BISMA+, CONTOH GAME & KATALOG 3D
           ===================================================================== */}
        {activePage === 1 && (
          <div className="space-y-10 sm:space-y-12 animate-in fade-in duration-200">
            
            {/* 1. Elegant High-Impact Hero Section (Mobile: Photo & Tools First!) */}
            <section id="about" className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Column on Desktop / Second on Mobile (7 cols) */}
                <div className="order-2 lg:order-1 lg:col-span-7">
                  {/* Top Badges (Responsive Wrapping, Non-truncated) */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-900 border-2 border-amber-200 rounded-xl text-xs font-extrabold tracking-wider shadow-[0_2px_0_0_#fde68a]">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                      <span>MOTTO: "NGALAH BAROKAH"</span>
                    </span>
                    <a
                      href={BISMA_EVIDENCE_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-2 border-emerald-200 rounded-xl text-xs font-extrabold shadow-[0_2px_0_0_#a7f3d0] transition-all leading-snug"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{CONTACT_INFO.agpTitle}</span>
                    </a>
                  </div>

                  {/* Name & Title */}
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-950 leading-tight">
                    {CONTACT_INFO.name}
                  </h1>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-800 tracking-wide mt-1.5 mb-4">
                    {CONTACT_INFO.role}
                  </p>

                  {/* Concise Low-Profile Bio */}
                  <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                    {CONTACT_INFO.about}
                  </p>

                  {/* 4 Clickable 3D Highlight Icon Boxes -> Full Responsive Text (No Truncation) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    <a
                      href={BISMA_EVIDENCE_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 border-2 border-amber-700 shadow-[0_3px_0_0_#78350f] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-stone-900 leading-snug">Juara 1 AGP 2026</div>
                        <div className="text-[11px] text-stone-600 font-semibold leading-snug">Kategori Kepala Sekolah SD Kab. Pasuruan</div>
                      </div>
                    </a>

                    <a
                      href="https://bisma.web.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Award className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-stone-900 leading-snug">Juara 1 INOPAMAS 2026</div>
                        <div className="text-[11px] text-stone-600 font-semibold leading-snug">Inovasi Daerah Kabupaten Pasuruan</div>
                      </div>
                    </a>

                    <a
                      href="https://bisma.web.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 text-white border-2 border-teal-950 shadow-[0_3px_0_0_#134e4a] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-5 h-5 text-emerald-200" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-stone-900 leading-snug">Top 5 Inovasi Jatim</div>
                        <div className="text-[11px] text-stone-600 font-semibold leading-snug">BRIDA Provinsi Jawa Timur 2026</div>
                      </div>
                    </a>

                    <a
                      href={GOOGLE_DRIVE_FOLDER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_4px_0_0_#e7e5e4] hover:shadow-[0_6px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-700 to-stone-900 text-white border-2 border-stone-950 shadow-[0_3px_0_0_#1c1917] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Sparkles className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-stone-900 leading-snug">Fasilitator Daerah (Fasda)</div>
                        <div className="text-[11px] text-stone-600 font-semibold leading-snug">Bidang Digitalisasi BPPMP Jatim</div>
                      </div>
                    </a>
                  </div>

                  {/* Quick CTA Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://bisma.web.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-extrabold shadow-[0_4px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all inline-flex items-center gap-2"
                    >
                      <span>Buka Aplikasi BISMA⁺</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                    <button
                      onClick={() => switchPage(2)}
                      className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 border-2 border-amber-300 rounded-xl text-xs font-extrabold shadow-[0_4px_0_0_#fcd34d] hover:shadow-[0_2px_0_0_#fcd34d] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <FolderCheck className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Lihat 16 Bukti Dukung AGP (Halaman 2)</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Right Column on Desktop / FIRST on Mobile: Elegant 3D Portrait Card & Pirantinya (5 cols) */}
                <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm bg-[#FAF9F6] rounded-3xl p-5 border-2 border-stone-200 shadow-[0_8px_0_0_#d6d3d1]">
                    {/* Portrait Frame (4:5 ratio with object-top so vertical portrait is never cropped awkwardly) */}
                    <div className="aspect-[4/5] w-full max-w-[250px] mx-auto rounded-2xl overflow-hidden mb-4 bg-stone-200 border-2 border-stone-300 shadow-[0_4px_0_0_#d6d3d1]">
                      <img
                        src={PROFILE_IMAGE_URL}
                        alt={CONTACT_INFO.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center mb-3.5">
                      <div className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-[10px] font-extrabold tracking-widest uppercase mb-1.5">
                        "NGALAH BAROKAH"
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-stone-900 leading-snug">{CONTACT_INFO.name}</div>
                      <div className="text-xs font-extrabold text-emerald-800 mt-0.5 leading-snug">KEPALA SEKOLAH SDN BAUJENG I BEJI</div>
                      <div className="text-[11px] font-semibold text-stone-600 mt-0.5 leading-snug">
                        Juara 1 AGP Kategori Kepala Sekolah SD Kab. Pasuruan
                      </div>
                    </div>

                    {/* Piranti Kontak & Aksi Cepat 3D */}
                    <div className="grid grid-cols-3 gap-2 pt-3.5 border-t border-stone-200/80">
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Chat WhatsApp"
                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl border-2 border-stone-200 hover:border-emerald-600 shadow-[0_3px_0_0_#e7e5e4] hover:-translate-y-0.5 transition-all flex flex-col items-center gap-1.5 text-center"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white shadow-[0_2px_0_0_#064e3b] flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-stone-700 leading-tight">WhatsApp</span>
                      </a>

                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        title={CONTACT_INFO.email}
                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl border-2 border-stone-200 hover:border-emerald-600 shadow-[0_3px_0_0_#e7e5e4] hover:-translate-y-0.5 transition-all flex flex-col items-center gap-1.5 text-center"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-800 text-white shadow-[0_2px_0_0_#1c1917] flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-stone-700 leading-tight">Email</span>
                      </a>

                      <a
                        href="https://www.sdnbaujeng1.sch.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Website SDN Baujeng I Beji"
                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl border-2 border-stone-200 hover:border-emerald-600 shadow-[0_3px_0_0_#e7e5e4] hover:-translate-y-0.5 transition-all flex flex-col items-center gap-1.5 text-center"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-600 text-white shadow-[0_2px_0_0_#78350f] flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-stone-700 leading-tight">Sekolah</span>
                      </a>
                    </div>

                    {/* Piranti Pintasan Inovasi & Bukti AGP (Khusus memudahkan akses cepat di Mobile & Desktop) */}
                    <div className="grid grid-cols-2 gap-2 mt-2.5">
                      <a
                        href="https://bisma.web.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-[11px] font-extrabold shadow-[0_3px_0_0_#064e3b] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Buka BISMA⁺</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                      <button
                        onClick={() => switchPage(2)}
                        className="px-3 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-xl text-[11px] font-extrabold shadow-[0_3px_0_0_#fcd34d] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <FolderCheck className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                        <span>Bukti AGP</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Featured Innovation: BISMA+ 3D Showcase */}
            <section id="bisma-plus" className="bg-white rounded-3xl border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4] overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-emerald-800 via-teal-600 to-amber-500"></div>
              <div className="p-6 sm:p-8">
                
                {/* Top Header with Clickable 3D Logo Box */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-stone-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href={BISMA_PLUS_SHOWCASE.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Klik untuk membuka BISMA+"
                      className="group bg-[#FAF9F6] px-4 py-3 rounded-2xl border-2 border-stone-300 shadow-[0_5px_0_0_#d6d3d1] hover:shadow-[0_7px_0_0_#a8a29e] hover:border-emerald-700 hover:-translate-y-1 active:translate-y-0.5 transition-all inline-flex items-center justify-center shrink-0 w-fit"
                    >
                      <img 
                        src={BISMA_PLUS_SHOWCASE.logoUrl} 
                        alt={BISMA_PLUS_SHOWCASE.name} 
                        className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </a>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-[11px] font-extrabold mb-1.5 leading-snug">
                        <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{BISMA_PLUS_SHOWCASE.awardBadge}</span>
                      </div>
                      <h2 className="text-lg sm:text-2xl font-extrabold text-stone-950 leading-snug">
                        {BISMA_PLUS_SHOWCASE.fullName}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-0.5 leading-snug">
                        {BISMA_PLUS_SHOWCASE.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Direct Action 3D Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <a
                      href={BISMA_PLUS_SHOWCASE.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold rounded-xl shadow-[0_3px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all text-xs"
                    >
                      <span>Buka</span>
                      <span>→</span>
                    </a>
                    <a
                      href={BISMA_EVIDENCE_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF9F6] hover:bg-stone-100 text-stone-800 border-2 border-stone-300 font-extrabold rounded-xl shadow-[0_3px_0_0_#d6d3d1] hover:shadow-[0_2px_0_0_#d6d3d1] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all text-xs"
                    >
                      <FolderCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Folder Bukti Dukung</span>
                    </a>
                  </div>
                </div>

                {/* Powerful Executive Summary */}
                <div className="py-5 border-b border-stone-200/80">
                  <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {BISMA_PLUS_SHOWCASE.summary}
                  </p>
                </div>

                {/* 3 Clickable 3D Pillars with 3D Icon Boxes */}
                <div className="py-6 border-b border-stone-200/80">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {BISMA_PLUS_SHOWCASE.pillars.map((pillar, idx) => (
                      <a
                        key={pillar.id}
                        href={pillar.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-5 bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_5px_0_0_#e7e5e4] hover:shadow-[0_8px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                            {/* 3D Tactile Icon Box */}
                            <div className={`
                              w-11 h-11 rounded-2xl border-2 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 group-hover:-rotate-2
                              ${idx === 0 ? 'bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b]' : ''}
                              ${idx === 1 ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white border-amber-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#78350f]' : ''}
                              ${idx === 2 ? 'bg-gradient-to-br from-teal-700 to-teal-900 text-white border-teal-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#134e4a]' : ''}
                            `}>
                              {getPillarIcon(pillar.id)}
                            </div>
                            <span className="px-2.5 py-1 bg-white text-emerald-900 border-2 border-stone-200 rounded-lg text-[11px] font-extrabold shadow-[0_2px_0_0_#e7e5e4]">
                              {pillar.metric}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-stone-900 group-hover:text-emerald-800 text-base mb-1 flex items-center justify-between gap-2">
                            <span>{pillar.title}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-700 shrink-0" />
                          </h3>
                          <p className="text-xs font-bold text-emerald-800 mb-2 leading-snug">
                            {pillar.subtitle}
                          </p>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 4 Clickable Impact Metric Boxes (Full Non-truncated Text) */}
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {BISMA_PLUS_SHOWCASE.impactMetrics.map((m, idx) => (
                    <a
                      key={idx}
                      href={m.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-[#FAF9F6] hover:bg-white rounded-xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_3px_0_0_#e7e5e4] hover:-translate-y-0.5 transition-all flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 border-2 border-emerald-200 shadow-[0_2px_0_0_#a7f3d0] flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-950 transition-colors mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-extrabold text-emerald-900 leading-tight">{m.value}</div>
                        <div className="text-xs font-bold text-stone-800 mt-0.5 leading-snug">{m.label}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">{m.detail}</div>
                      </div>
                    </a>
                  ))}
                </div>

              </div>
            </section>

            {/* 3. NEW: Contoh Game Edukasi Interaktif (MPI) Hasil Game Generator BISMA+ */}
            <section id="game-samples" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80 mb-6">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-2 border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b] flex items-center justify-center shrink-0">
                    <Gamepad2 className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                      Bukti Luaran Pilar AI-Powered BISMA⁺ · Siap Layar IFP & VLab
                    </div>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-stone-950 leading-snug">
                      3 Contoh Game Interaktif (MPI) Lintas Jenjang (SD, SLB Inklusi & SMP)
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Klik tombol <b>Mainkan Langsung</b> untuk mencoba simulasi Lab Maya, Puzzle Drag &amp; Drop, dan Kuis Petualangan di halaman ini, atau klik ikon 3D untuk membuka di tab baru.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {GAME_SAMPLES_DATA.map((game) => {
                  const GameIcon = game.icon;
                  return (
                    <div
                      key={game.id}
                      className="group bg-[#FAF9F6] hover:bg-white rounded-2xl border-2 border-stone-200 hover:border-emerald-700 shadow-[0_6px_0_0_#d6d3d1] hover:shadow-[0_10px_0_0_#a8a29e] hover:-translate-y-1.5 transition-all flex flex-col justify-between overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 flex-1 flex flex-col">
                        {/* Top Row: Clickable 3D Icon Box + Level Badge */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <a
                            href={game.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Buka ${game.title} di tab baru`}
                            className={`w-12 h-12 rounded-2xl border-2 bg-gradient-to-br text-white flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 group-hover:-rotate-2 ${game.accentClass}`}
                          >
                            <GameIcon className="w-6 h-6" />
                          </a>
                          <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-[11px] font-extrabold text-right leading-snug">
                            {game.levelBadge}
                          </span>
                        </div>

                        <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider mb-1">
                          {game.subject}
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-emerald-800 leading-snug mb-2 transition-colors">
                          {game.title}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed mb-4">
                          {game.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-auto pt-3.5 border-t border-stone-200/80 space-y-1.5 text-xs text-stone-700 font-medium">
                          {game.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-2 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom 3D Action Footer */}
                      <div className="px-5 py-3.5 bg-white border-t border-stone-200/80 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedGame(game)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-extrabold rounded-xl shadow-[0_3px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all text-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Mainkan Langsung</span>
                        </button>

                        <a
                          href={game.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-colors"
                          title="Buka di Tab Baru"
                        >
                          <span>Buka</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Katalog Aplikasi & Inovasi Digital (3D Icon Cards -> Direct URLs) */}
            <section id="portfolio">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_4px_0_0_#064e3b] flex items-center justify-center shrink-0">
                    <Layout className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                      Launcher Ekosistem Digital
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                      Katalog Inovasi & Produk Terapan
                    </h2>
                  </div>
                </div>

                {/* Compact Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: 'all', label: `Semua (${PORTFOLIO_DATA.length})` },
                    { id: 'ai', label: 'AI Generator' },
                    { id: 'management', label: 'Manajemen Sekolah' },
                    { id: 'assessment', label: 'Asesmen & CBT' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setPortfolioFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                        portfolioFilter === tab.id
                          ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                          : 'bg-white text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredPortfolio.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Page 1 -> Page 2 Bottom Transition Card */}
            <div className="bg-[#0f241e] text-white rounded-2xl p-6 border-2 border-[#1b4338] shadow-[0_6px_0_0_#071612] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 border-2 border-amber-300 shadow-[0_4px_0_0_#78350f] flex items-center justify-center shrink-0">
                  <FolderCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Lanjut ke Halaman 2
                  </div>
                  <h3 className="text-sm sm:text-lg font-extrabold text-white leading-snug">
                    Analisis 16 Bukti Dukung BISMA⁺ (AGP 2026), Penghargaan & Rekam Jejak
                  </h3>
                </div>
              </div>
              <button
                onClick={() => switchPage(2)}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold rounded-xl shadow-[0_3px_0_0_#78350f] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all text-xs inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Buka Halaman 2</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>
        )}

        {/* =====================================================================
            HALAMAN 2: ANALISIS BUKTI DUKUNG AGP (16 DOKUMEN) & REKAM JEJAK CV
           ===================================================================== */}
        {activePage === 2 && (
          <div className="space-y-10 sm:space-y-12 animate-in fade-in duration-200">
            
            {/* 1. Repositori & Analisis Bukti Dukung BISMA+ (16 Clickable 3D Icon Cards) */}
            <section id="evidence" className="bg-white rounded-3xl border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4] p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
                <div className="flex items-start sm:items-center gap-3.5">
                  <a
                    href={BISMA_EVIDENCE_FOLDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buka Google Drive Bukti Dukung"
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-2 border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b] hover:scale-105 transition-transform flex items-center justify-center shrink-0"
                  >
                    <FolderCheck className="w-6 h-6 text-amber-300" />
                  </a>
                  <div>
                    <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                      Verifikasi Bukti Dukung AGP Kepala Sekolah SD Kab. Pasuruan
                    </div>
                    <h1 className="text-lg sm:text-2xl font-extrabold text-stone-950 leading-snug">
                      Analisis 16 Dokumen & Media Bukti Dukung Inovasi BISMA⁺
                    </h1>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Klik pada kotak atau ikon 3D untuk membuka langsung dokumen bukti dukung atau memainkan sampel game interaktif.
                    </p>
                  </div>
                </div>

                <a
                  href={BISMA_EVIDENCE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-extrabold shadow-[0_3px_0_0_#064e3b] hover:translate-y-[1px] transition-all shrink-0 w-fit"
                >
                  <span>Buka Folder Drive Lengkap</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Replication Partners Highlight Strip */}
              <div className="my-5 p-4 bg-emerald-50/70 rounded-2xl border-2 border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Terbukti Direplikasi Lintas Jenjang (4 Satuan Pendidikan):</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {BISMA_PLUS_SHOWCASE.replicationSchools.map((sch, i) => (
                    <a
                      key={i}
                      href={BISMA_EVIDENCE_DATA[6].directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white hover:bg-emerald-800 hover:text-white text-stone-700 border border-emerald-300 rounded-lg text-[11px] font-bold shadow-2xs transition-colors"
                    >
                      {sch}
                    </a>
                  ))}
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {['all', 'Naskah & Panduan', 'Tata Kelola & Layanan', 'Dampak & Replikasi', 'Media & Publikasi'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setEvidenceFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                      evidenceFilter === cat
                        ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                        : 'bg-[#FAF9F6] text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-100'
                    }`}
                  >
                    {cat === 'all' ? `Semua Bukti (${BISMA_EVIDENCE_DATA.length})` : cat}
                  </button>
                ))}
              </div>

              {/* 16 Clickable 3D Evidence Cards with 3D Icon Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredEvidence.map((ev) => {
                  const EvIcon = ev.icon;
                  return (
                    <div
                      key={ev.id}
                      className="group p-4 sm:p-5 rounded-2xl border-2 border-stone-200 bg-[#FAF9F6] hover:bg-white hover:border-emerald-700 shadow-[0_5px_0_0_#e7e5e4] hover:shadow-[0_8px_0_0_#d6d3d1] hover:-translate-y-1 transition-all flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Clickable 3D Icon Box -> Direct URL */}
                        <a
                          href={ev.directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Buka ${ev.title}`}
                          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white border-2 border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:-rotate-2 transition-transform"
                        >
                          <EvIcon className="w-5 h-5 text-amber-300" />
                        </a>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                              {ev.code} · {ev.indicator}
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-stone-200/80 text-stone-700 rounded-md shrink-0">
                              {ev.fileType}
                            </span>
                          </div>
                          <a
                            href={ev.directUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-extrabold text-stone-900 group-hover:text-emerald-800 text-sm sm:text-base leading-snug block transition-colors"
                          >
                            {ev.title}
                          </a>
                          <p className="text-xs text-stone-600 leading-relaxed mt-1">
                            {ev.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-2">
                        <a
                          href={ev.directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg shadow-[0_2px_0_0_#064e3b] hover:translate-y-[1px] transition-all text-xs"
                        >
                          <span>Buka</span>
                          <span>→</span>
                        </a>
                        <button
                          onClick={() => setSelectedEvidence(ev)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                          <span>{ev.fileType === 'HTML' ? 'Mainkan di Layar' : 'Pratinjau Layar'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 2. Penghargaan & Rekam Jejak (2-Column Minimalist Grid) */}
            <section id="awards" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Penghargaan & Apresiasi (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Rekognisi Daerah & Nasional</div>
                    <h2 className="text-xl font-extrabold text-stone-900">Penghargaan & Amanah</h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {AWARDS_DATA.map((award) => (
                    <AwardCard key={award.id} item={award} />
                  ))}
                </div>
              </div>

              {/* Right: Pengalaman, Pendidikan & Organisasi (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Pengalaman */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Karir Pendidik</div>
                      <h2 className="text-xl font-extrabold text-stone-900">Pengalaman Pengabdian</h2>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {EXPERIENCE_DATA.map((item) => (
                      <ExperienceCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                {/* Pendidikan */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Kualifikasi Akademik</div>
                      <h2 className="text-xl font-extrabold text-stone-900">Pendidikan</h2>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.id} className="bg-white p-4 rounded-2xl border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4]">
                        <h3 className="text-sm font-extrabold text-stone-900 leading-snug">{edu.degree}</h3>
                        <div className="text-xs text-emerald-800 font-bold mt-0.5 mb-2">
                          {edu.institution} · {edu.period}
                        </div>
                        {edu.details.map((d, i) => (
                          <p key={i} className="text-xs text-stone-600 leading-relaxed">• {d}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organisasi */}
                <div className="bg-white rounded-2xl p-5 border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4]">
                  <h3 className="text-sm font-extrabold text-stone-900 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>Pengabdian Organisasi</span>
                  </h3>
                  <div className="space-y-2">
                    {ORGANIZATION_DATA.map((org, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-xl text-xs text-stone-700 font-semibold flex items-start gap-2 border border-stone-200/80 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                        <span>{org}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* 3. Sertifikat dengan Kotak Ikon 3D */}
            <section id="certificates" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-white border-2 border-emerald-950 shadow-[0_3px_0_0_#064e3b] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Lisensi & Kompetensi</div>
                    <h2 className="text-xl font-extrabold text-stone-900">Arsip Sertifikat & Pelatihan</h2>
                  </div>
                </div>
                <a
                  href={GOOGLE_DRIVE_FOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF9F6] hover:bg-stone-100 border-2 border-stone-300 text-stone-800 rounded-xl text-xs font-extrabold shadow-[0_3px_0_0_#d6d3d1] transition-all w-fit"
                >
                  <span>Folder Sertifikat Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {CERTIFICATES_DATA.map((cert) => (
                  <CertificateCard
                    key={cert.id}
                    item={cert}
                    onClick={setSelectedCertificate}
                  />
                ))}
              </div>
            </section>

            {/* Page 2 -> Page 1 Back Banner */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => switchPage(1)}
                className="px-5 py-2.5 bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-300 font-extrabold rounded-xl shadow-[0_3px_0_0_#d6d3d1] hover:translate-y-[1px] transition-all text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span>Kembali ke Halaman 1 (Profil & Katalog Inovasi 3D)</span>
              </button>
            </div>

          </div>
        )}

        {/* Minimalist Footer */}
        <footer className="mt-14 pt-6 border-t border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div>
            <span className="font-extrabold text-stone-800">{CONTACT_INFO.name}</span>
            <span className="mx-2">·</span>
            <span className="font-bold text-emerald-800">"NGALAH BAROKAH"</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 font-bold">
            <button onClick={() => switchPage(1)} className="hover:text-emerald-800 cursor-pointer">Halaman 1</button>
            <span>·</span>
            <button onClick={() => switchPage(2)} className="hover:text-emerald-800 cursor-pointer">Halaman 2</button>
            <span>·</span>
            <a href="https://bisma.web.id/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline">BISMA⁺</a>
            <span>·</span>
            <a href={BISMA_EVIDENCE_FOLDER_URL} target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">Drive AGP</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
