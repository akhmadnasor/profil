import React, { useState, useEffect } from 'react';
import { 
  X, GraduationCap, Users, Phone, Mail, MapPin,
  Briefcase, Code, Layout, Award, FileText, Download,
  ExternalLink, Trophy, MessageCircle, ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { PortfolioCard, ExperienceCard, AwardCard, CertificateCard } from './components/Card';
import { 
  CONTACT_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  PORTFOLIO_DATA, 
  AWARDS_DATA, 
  ORGANIZATION_DATA,
  PROFILE_IMAGE_URL,
  CERTIFICATES_DATA,
  GOOGLE_DRIVE_FOLDER
} from './constants';
import { CertificateItem } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'awards', 'experience', 'education', 'skills', 'certificates'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCertificate(null);
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

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-emerald-100 selection:text-emerald-950 text-stone-800">
      
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Certificate Preview Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-4xl h-[82vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden border-2 border-stone-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF9F6]">
              <div>
                <h3 className="font-bold text-base text-stone-900 line-clamp-1">{selectedCertificate.title}</h3>
                <p className="text-xs text-stone-500">{selectedCertificate.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={selectedCertificate.link.replace('/preview', '/view')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors hidden sm:flex"
                  title="Buka tab baru"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors"
                  aria-label="Tutup Pratinjau"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 bg-stone-100 relative">
              <iframe 
                src={selectedCertificate.link}
                className="w-full h-full border-0"
                title="Pratinjau Sertifikat"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* Hero Section */}
        <section id="about" className="pt-4 pb-16 border-b border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            
            {/* Left Column: Headline & Bio (7 cols) */}
            <div className="md:col-span-7">
              {/* Quiet Kicker with Motto */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/90 rounded-lg text-xs font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Motto: "NGALAH BAROKAH"
                </span>
                <span className="text-xs font-medium text-stone-500 hidden sm:inline">
                  · Juara 1 INOPAMAS 2026 · Top 5 BRIDA Jatim
                </span>
              </div>

              {/* Title & Name */}
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight mb-3">
                {CONTACT_INFO.name}
              </h1>

              {/* Role */}
              <p className="text-lg md:text-xl font-semibold text-emerald-900 mb-6">
                {CONTACT_INFO.role}
              </p>

              {/* Executive Summary */}
              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8">
                {CONTACT_INFO.about}
              </p>

              {/* Key Trust Stats (Tactile 3D boxes) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
                <div className="p-3.5 bg-white rounded-xl border-2 border-stone-200 shadow-[0_3px_0_0_#e7e5e4]">
                  <div className="text-lg font-extrabold text-emerald-800">Juara 1</div>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">INOPAMAS 2026</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border-2 border-stone-200 shadow-[0_3px_0_0_#e7e5e4]">
                  <div className="text-lg font-extrabold text-amber-700">Top 5</div>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">BRIDA Jatim 2026</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border-2 border-stone-200 shadow-[0_3px_0_0_#e7e5e4]">
                  <div className="text-lg font-extrabold text-stone-900">Fasda</div>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">BPPMP Prov. Jatim</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border-2 border-stone-200 shadow-[0_3px_0_0_#e7e5e4]">
                  <div className="text-lg font-extrabold text-teal-800">5+ Alat AI</div>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">Solusi Terapan</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#portfolio"
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white rounded-lg text-xs font-bold shadow-[0_3px_0_0_#064e3b] hover:shadow-[0_2px_0_0_#064e3b] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all inline-flex items-center gap-2"
                >
                  <span>Lihat Inovasi & Portofolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 rounded-lg text-xs font-bold shadow-[0_3px_0_0_#e7e5e4] hover:shadow-[0_2px_0_0_#e7e5e4] hover:translate-y-[1px] active:translate-y-[3px] active:shadow-none transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kontak WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Card (5 cols) */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="w-full max-w-sm bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-[0_8px_0_0_#e7e5e4] hover:shadow-[0_12px_0_0_#d6d3d1] hover:-translate-y-1 transition-all duration-200">
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-5 bg-stone-100 border-2 border-stone-200 shadow-inner">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt={CONTACT_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-extrabold text-stone-900 text-sm">
                    {CONTACT_INFO.name}
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5 font-bold tracking-wide">
                    KEPALA SEKOLAH SDN BAUJENG I BEJI
                  </p>
                  
                  {/* Motto Badge */}
                  <div className="mt-2 mb-3 inline-block px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-[11px] font-extrabold tracking-widest uppercase">
                    "NGALAH BAROKAH"
                  </div>
                  
                  <div className="pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-600 text-left">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{CONTACT_INFO.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{CONTACT_INFO.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="font-mono">{CONTACT_INFO.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Portfolio Section */}
        <Section
          id="portfolio"
          title="Inovasi & Produk Terapan"
          subtitle="Aplikasi sederhana untuk mendukung pengelolaan sekolah dan memudahkan guru dalam kegiatan belajar mengajar."
          icon={Layout}
          badge="Katalog Solusi"
        >
          {/* Segmented Filter Control with 3D tactile buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <button
              onClick={() => setPortfolioFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                portfolioFilter === 'all'
                  ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                  : 'bg-white text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-50'
              }`}
            >
              Semua Solusi ({PORTFOLIO_DATA.length})
            </button>
            <button
              onClick={() => setPortfolioFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                portfolioFilter === 'ai'
                  ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                  : 'bg-white text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-50'
              }`}
            >
              AI Generator Pembelajaran
            </button>
            <button
              onClick={() => setPortfolioFilter('management')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                portfolioFilter === 'management'
                  ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                  : 'bg-white text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-50'
              }`}
            >
              Manajemen Sekolah
            </button>
            <button
              onClick={() => setPortfolioFilter('assessment')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                portfolioFilter === 'assessment'
                  ? 'bg-emerald-900 text-white shadow-[0_2px_0_0_#064e3b]'
                  : 'bg-white text-stone-600 border-2 border-stone-200 shadow-[0_2px_0_0_#e7e5e4] hover:bg-stone-50'
              }`}
            >
              Asesmen & CBT
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </Section>

        {/* Awards & Recognition Section */}
        <Section
          id="awards"
          title="Penghargaan & Apresiasi"
          subtitle="Amanah dan apresiasi yang menjadi pengingat diri untuk terus berbenah dan memberi manfaat."
          icon={Award}
          badge="Apresiasi & Amanah"
        >
          <div className="space-y-3.5 mb-10">
            {AWARDS_DATA.map((award) => (
              <AwardCard key={award.id} item={award} />
            ))}
          </div>

          {/* Organization & Social Contribution */}
          <div className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4]">
            <h3 className="text-sm font-extrabold text-stone-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-800" />
              <span>Amanah Organisasi & Pengabdian</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ORGANIZATION_DATA.map((org, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 font-medium flex items-start gap-2 border border-stone-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section
          id="experience"
          title="Pengalaman Pengabdian"
          subtitle="Perjalanan bertugas di dunia pendidikan dan pendampingan rekan-rekan guru."
          icon={Briefcase}
          badge="Riwayat Singkat"
        >
          <div className="space-y-4">
            {EXPERIENCE_DATA.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          title="Pendidikan"
          subtitle="Riwayat studi dan riset yang pernah ditempuh."
          icon={GraduationCap}
          badge="Latar Belakang"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-stone-900 mb-1">
                  {edu.degree}
                </h3>
                <div className="text-xs text-emerald-800 font-bold mb-3">
                  {edu.institution} {edu.period && `· ${edu.period}`}
                </div>
                <div className="space-y-2 pt-3 border-t border-stone-100">
                  {edu.details.map((detail, idx) => (
                    <p key={idx} className="text-xs text-stone-600 leading-relaxed">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="Bidang Peminatan & Keahlian"
          subtitle="Hal-hal yang terus dipelajari dan dipraktikkan dalam kegiatan mengajar serta mengelola sekolah."
          icon={Code}
          badge="Fokus Minat"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_DATA.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-[0_4px_0_0_#e7e5e4]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg">
                    <category.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-stone-900">{category.title}</h3>
                    {category.description && (
                      <p className="text-xs text-stone-500">{category.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-100">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certificates Section */}
        <Section
          id="certificates"
          title="Sertifikat & Pelatihan"
          subtitle="Arsip sertifikat pelatihan dan kegiatan yang pernah diikuti."
          icon={FileText}
          badge="Dokumen Pendukung"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {CERTIFICATES_DATA.slice(0, 12).map((cert) => (
              <CertificateCard
                key={cert.id}
                item={cert}
                onClick={setSelectedCertificate}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={GOOGLE_DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-stone-200 hover:border-emerald-300 text-stone-700 hover:text-emerald-900 rounded-lg text-xs font-bold shadow-[0_2px_0_0_#e7e5e4] transition-all"
            >
              <span>Buka Repositori Dokumen di Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-stone-200 text-center text-xs text-stone-500 pb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3 font-semibold text-stone-600">
            <a href="#about" className="hover:text-emerald-900 transition-colors">Profil</a>
            <span>·</span>
            <a href="#portfolio" className="hover:text-emerald-900 transition-colors">Inovasi</a>
            <span>·</span>
            <a href="#awards" className="hover:text-emerald-900 transition-colors">Penghargaan</a>
            <span>·</span>
            <a href="#experience" className="hover:text-emerald-900 transition-colors">Pengalaman</a>
            <span>·</span>
            <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">WhatsApp</a>
          </div>
          <p className="font-bold text-stone-800">
            &copy; {new Date().getFullYear()} Akhmad Nasor, S.Pd., M.Pd.
          </p>
          <p className="mt-1 text-stone-500 font-medium">
            "NGALAH BAROKAH" · SDN BAUJENG I BEJI
          </p>
          <p className="mt-0.5 text-stone-400 text-[11px]">
            Juara 1 INOPAMAS 2026 · Top 5 BRIDA Jawa Timur 2026 · Fasda Digitalisasi BPPMP Jawa Timur
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;
