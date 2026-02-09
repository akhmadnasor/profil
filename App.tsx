import React, { useState, useEffect } from 'react';
import { 
  Menu, X, GraduationCap, CheckCircle2, Users, Phone, Mail, MapPin,
  User, Briefcase, Code, Layout, Award, FileText, ChevronRight, Download
} from 'lucide-react';
import Sidebar from './components/Sidebar';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'portfolio', 'certificates', 'awards'];
      const scrollPosition = window.scrollY + 200; // Offset

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

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900 print:bg-white print:block">
      
      {/* Mobile Header Toggle - Hidden on Print */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-40 flex items-center justify-between px-6 border-b border-slate-100 print:hidden">
        <span className="font-bold text-primary-600 text-lg">CV Akhmad Nasor</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay for mobile menu - Hidden on Print */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity print:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Certificate Preview Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
              <div>
                <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{selectedCertificate.title}</h3>
                <p className="text-xs text-slate-500">{selectedCertificate.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={selectedCertificate.link.replace('/preview', '/view')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors hidden sm:flex"
                  title="Buka di tab baru"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-colors"
                >
                  <X className="w-4 h-4" />
                  Kembali
                </button>
              </div>
            </div>
            
            {/* Iframe Content */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe 
                src={selectedCertificate.link}
                className="w-full h-full border-0"
                title="Certificate Preview"
                allow="autoplay"
              ></iframe>
              {/* Loading Indicator (hidden by iframe if loads fast) */}
              <div className="absolute inset-0 flex items-center justify-center z-0 text-slate-400">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mb-3"></div>
                  <span className="text-sm">Memuat Sertifikat...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation - Controlled by CSS to be hidden on print */}
      <Sidebar 
        activeSection={activeSection} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Main Content */}
      <main className="flex-1 lg:h-screen lg:overflow-y-auto scroll-smooth print:h-auto print:overflow-visible print:w-full print:block">
        <div className="max-w-5xl mx-auto px-6 py-24 lg:py-20 lg:px-12 print:max-w-none print:w-full print:px-0 print:py-0">
          
          {/* Header ONLY for Print (Because sidebar is hidden) */}
          <div className="hidden print:flex flex-row items-center gap-6 mb-8 border-b-2 border-slate-800 pb-6">
             <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-slate-300">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt={CONTACT_INFO.name}
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-900 mb-1 uppercase tracking-wide leading-tight">{CONTACT_INFO.name}</h1>
                <p className="text-lg text-primary-700 font-bold mb-3">{CONTACT_INFO.role}</p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
                  <div className="flex items-center">
                    <Phone className="w-3 h-3 mr-1.5" />
                    {CONTACT_INFO.phone}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-3 h-3 mr-1.5" />
                    {CONTACT_INFO.email}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1.5" />
                    {CONTACT_INFO.location}
                  </div>
                </div>
             </div>
          </div>

          {/* About Section */}
          <Section id="about" title="Profil Profesional" icon={User}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-0">
               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:hidden w-full flex justify-center mb-4 relative print:hidden">
                    <div className="absolute inset-0 bg-primary-200 blur-2xl opacity-20 rounded-full"></div>
                     <img 
                      src={PROFILE_IMAGE_URL} 
                      alt={CONTACT_INFO.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-6 print:mb-2">
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light print:text-sm print:text-justify print:text-black">
                        {CONTACT_INFO.about}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 print:grid-cols-2 print:gap-4 print:mt-4">
                      <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors print:bg-transparent print:border print:border-slate-300 print:p-3">
                        <h4 className="font-bold text-blue-700 text-sm mb-2 uppercase tracking-wider flex items-center print:text-black">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 print:bg-black"></span>
                          Bidang Keahlian
                        </h4>
                        <p className="text-slate-700 font-medium print:text-black print:text-sm">Teknologi Pendidikan, Inovasi Pembelajaran & Manajemen Pendidikan</p>
                      </div>
                      <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 hover:bg-emerald-50 transition-colors print:bg-transparent print:border print:border-slate-300 print:p-3">
                        <h4 className="font-bold text-emerald-700 text-sm mb-2 uppercase tracking-wider flex items-center print:text-black">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 print:bg-black"></span>
                          Fokus Saat Ini
                        </h4>
                        <p className="text-slate-700 font-medium print:text-black print:text-sm">Pengembangan Solusi Digital & Kepemimpinan Sekolah</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Pengalaman Kerja" icon={Briefcase}>
            <div className="space-y-6 print:space-y-4">
              {EXPERIENCE_DATA.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </Section>

          {/* Education Section */}
          <Section id="education" title="Pendidikan" icon={GraduationCap}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group print:border-slate-300 print:shadow-none print:p-4 print:break-inside-avoid">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-sm print:hidden">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-700 transition-colors print:text-black print:text-lg">{edu.degree}</h3>
                  <div className="text-primary-600 font-medium text-sm mb-4 print:text-black print:font-bold">{edu.institution}</div>
                  
                  {edu.period && (
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-6 print:bg-transparent print:border print:border-slate-300 print:px-0 print:py-0 print:text-black print:mb-2 print:inline">
                      {edu.period}
                    </div>
                  )}
                  
                  <div className="space-y-3 pt-4 border-t border-slate-50 print:border-slate-200">
                    {edu.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-start leading-relaxed print:text-black">
                        <span className="mr-3 text-primary-400 mt-1 print:text-black">•</span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Keahlian Utama" icon={Code}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
              {SKILLS_DATA.map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-slate-300 print:break-inside-avoid">
                  <div className="bg-gradient-to-r from-slate-50 to-white p-5 border-b border-slate-100 flex items-center print:bg-slate-100">
                    <div className="p-2 bg-primary-100 text-primary-600 rounded-lg mr-4 print:bg-transparent print:text-black">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg print:text-black">{category.title}</h3>
                  </div>
                  <div className="p-8 print:p-4">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all cursor-default shadow-sm print:shadow-none print:border-slate-400 print:text-black print:py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Portfolio Section */}
          <Section id="portfolio" title="Portofolio Inovasi Digital" icon={Layout}>
            <p className="text-slate-600 mb-10 max-w-2xl text-lg print:text-black print:text-sm print:mb-4">Berikut adalah beberapa solusi digital yang telah saya kembangkan:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
              {PORTFOLIO_DATA.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </Section>

           {/* Certificates Section (NEW) */}
           <Section id="certificates" title="Sertifikat & Pelatihan" icon={FileText}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8 print:grid-cols-2 print:gap-2">
              {CERTIFICATES_DATA.slice(0, 12).map((cert) => (
                <CertificateCard 
                  key={cert.id} 
                  item={cert} 
                  onClick={setSelectedCertificate}
                />
              ))}
            </div>
            <div className="flex justify-center mt-6 print:hidden">
              <a 
                href={GOOGLE_DRIVE_FOLDER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold text-slate-600 hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                Lihat Seluruh Sertifikat di Google Drive
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Section>

          {/* Awards & Organization Section */}
          <Section id="awards" title="Penghargaan & Organisasi" icon={Award}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 print:grid-cols-2 print:gap-6">
              <div className="lg:col-span-2 space-y-5 print:space-y-4 print:col-span-1">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center print:mb-2 print:text-black">
                  <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mr-4 rounded-full print:bg-black"></div>
                  Pencapaian & Sertifikasi
                </h3>
                {AWARDS_DATA.map((award) => (
                  <AwardCard key={award.id} item={award} />
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl h-fit shadow-xl relative overflow-hidden print:bg-transparent print:text-black print:shadow-none print:p-0 print:border print:border-slate-300 print:p-4 print:col-span-1 print:break-inside-avoid">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 print:hidden"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full blur-2xl -ml-10 -mb-10 print:hidden"></div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center relative z-10 print:text-black print:mb-4">
                  <Users className="w-6 h-6 mr-3 text-primary-400 print:text-black" />
                  Organisasi
                </h3>
                <ul className="space-y-8 relative z-10 print:space-y-4">
                  {ORGANIZATION_DATA.map((org, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="mt-1 mr-4 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors print:text-black" />
                      </div>
                      <span className="text-sm text-slate-300 leading-relaxed font-medium group-hover:text-white transition-colors print:text-black">{org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="mt-24 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm pb-10 print:hidden">
            <p className="font-medium text-slate-500">&copy; {new Date().getFullYear()} Akhmad Nasor, S.Pd., M.Pd.</p>
            <p className="mt-2 opacity-80">Designed with modern technologies for better education</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;