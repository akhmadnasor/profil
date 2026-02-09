import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, CheckCircle2, Users } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { PortfolioCard, ExperienceCard, AwardCard } from './components/Card';
import { 
  CONTACT_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  PORTFOLIO_DATA, 
  AWARDS_DATA, 
  ORGANIZATION_DATA,
  PROFILE_IMAGE_URL
} from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'portfolio', 'awards'];
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

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      
      {/* Mobile Header Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-40 flex items-center justify-between px-6 border-b border-slate-100">
        <span className="font-bold text-primary-600 text-lg">CV Akhmad Nasor</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Main Content */}
      <main className="flex-1 lg:h-screen lg:overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto px-6 py-24 lg:py-20 lg:px-12">
          
          {/* About Section */}
          <Section id="about" title="Profil Profesional">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:hidden w-full flex justify-center mb-4 relative">
                    <div className="absolute inset-0 bg-primary-200 blur-2xl opacity-20 rounded-full"></div>
                     <img 
                      src={PROFILE_IMAGE_URL} 
                      alt={CONTACT_INFO.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-6">
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        <span className="text-4xl float-left mr-2 mt-[-10px] text-primary-400 font-serif">"</span>
                        {CONTACT_INFO.about}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                      <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
                        <h4 className="font-bold text-blue-700 text-sm mb-2 uppercase tracking-wider flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          Bidang Keahlian
                        </h4>
                        <p className="text-slate-700 font-medium">Teknologi Pendidikan, Inovasi Pembelajaran & Manajemen Pendidikan</p>
                      </div>
                      <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 hover:bg-emerald-50 transition-colors">
                        <h4 className="font-bold text-emerald-700 text-sm mb-2 uppercase tracking-wider flex items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                          Fokus Saat Ini
                        </h4>
                        <p className="text-slate-700 font-medium">Pengembangan Solusi Digital & Kepemimpinan Sekolah</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Pengalaman Kerja">
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </Section>

          {/* Education Section */}
          <Section id="education" title="Pendidikan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-700 transition-colors">{edu.degree}</h3>
                  <div className="text-primary-600 font-medium text-sm mb-4">{edu.institution}</div>
                  
                  {edu.period && (
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-6">
                      {edu.period}
                    </div>
                  )}
                  
                  <div className="space-y-3 pt-4 border-t border-slate-50">
                    {edu.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-start leading-relaxed">
                        <span className="mr-3 text-primary-400 mt-1">•</span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Keahlian Utama">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS_DATA.map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-slate-50 to-white p-5 border-b border-slate-100 flex items-center">
                    <div className="p-2 bg-primary-100 text-primary-600 rounded-lg mr-4">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">{category.title}</h3>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all cursor-default shadow-sm"
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
          <Section id="portfolio" title="Portofolio Inovasi Digital">
            <p className="text-slate-600 mb-10 max-w-2xl text-lg">Berikut adalah beberapa solusi digital yang telah saya kembangkan untuk memajukan pendidikan:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_DATA.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </Section>

          {/* Awards & Organization Section */}
          <Section id="awards" title="Penghargaan & Organisasi">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-5">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mr-4 rounded-full"></div>
                  Pencapaian & Sertifikasi
                </h3>
                {AWARDS_DATA.map((award) => (
                  <AwardCard key={award.id} item={award} />
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl h-fit shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center relative z-10">
                  <Users className="w-6 h-6 mr-3 text-primary-400" />
                  Organisasi
                </h3>
                <ul className="space-y-8 relative z-10">
                  {ORGANIZATION_DATA.map((org, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="mt-1 mr-4 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                      </div>
                      <span className="text-sm text-slate-300 leading-relaxed font-medium group-hover:text-white transition-colors">{org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="mt-24 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm pb-10">
            <p className="font-medium text-slate-500">&copy; {new Date().getFullYear()} Akhmad Nasor, S.Pd., M.Pd.</p>
            <p className="mt-2 opacity-80">Designed with modern technologies for better education</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;