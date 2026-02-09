import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS, PROFILE_IMAGE_URL } from '../constants';

interface SidebarProps {
  activeSection: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-br from-primary-400 to-primary-600 text-white transform transition-transform duration-300 ease-in-out overflow-y-auto
      lg:translate-x-0 lg:static lg:h-screen lg:flex-shrink-0 shadow-2xl
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-8 flex flex-col h-full relative overflow-hidden">
        
        {/* Decorative background circle */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Profile Header */}
        <div className="text-center mb-10 relative z-10">
          <div className="relative w-36 h-36 mx-auto mb-5 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src={PROFILE_IMAGE_URL} 
              alt={CONTACT_INFO.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h1 className="text-xl font-bold text-white mb-2 tracking-tight leading-snug drop-shadow-sm">{CONTACT_INFO.name}</h1>
          <p className="text-primary-50 text-sm font-medium leading-tight opacity-90">
            {CONTACT_INFO.role}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 mb-8 relative z-10">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center px-4 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-white text-primary-600 shadow-lg translate-x-2' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white hover:translate-x-1'
                  }
                `}
              >
                <Icon className={`w-5 h-5 mr-3 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-white/70 group-hover:text-white'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Contact Mini Info */}
        <div className="mt-auto pt-6 border-t border-white/20 space-y-5 text-sm text-white relative z-10">
          <div className="flex items-center group transition-all hover:translate-x-1">
            <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-white/25 transition-colors shadow-sm">
                <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium tracking-wide">{CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center group transition-all hover:translate-x-1">
            <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-white/25 transition-colors shadow-sm">
                <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="truncate font-medium tracking-wide">{CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-start group transition-all hover:translate-x-1">
            <div className="p-2 bg-white/10 rounded-lg mr-3 mt-0.5 group-hover:bg-white/25 transition-colors shadow-sm flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="leading-tight font-medium tracking-wide">{CONTACT_INFO.location}</span>
          </div>
        </div>

        {/* CV Download Button */}
        <button className="mt-8 w-full flex items-center justify-center bg-white text-primary-600 py-3.5 px-4 rounded-xl font-bold text-sm hover:bg-primary-50 hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 relative z-10">
          <Download className="w-4 h-4 mr-2" />
          Unduh CV PDF
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;