
import React from 'react';
import { Globe, Menu, X, Users, LayoutGrid, BookOpen, Calendar } from 'lucide-react';
import { Language } from '../types.ts';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'showcase', label: { en: 'Showcase', am: 'የሥራዎች ማሳያ' }, icon: LayoutGrid },
    { id: 'collab', label: { en: 'Collab', am: 'ትብብር' }, icon: Users },
    { id: 'library', label: { en: 'Library', am: 'መጽሐፍ ቤት' }, icon: BookOpen },
    { id: 'events', label: { en: 'Events', am: 'ክስተቶች' }, icon: Calendar },
    { id: 'ai', label: { en: 'AI Sandbox', am: 'AI መሞከሪያ' }, icon: Globe },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('hero')}>
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Digital <span className="text-orange-600">Selam</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  activeSection === item.id ? 'text-orange-600' : 'text-slate-600'
                }`}
              >
                {lang === 'en' ? item.label.en : item.label.am}
              </button>
            ))}
            
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-sm font-bold hover:bg-orange-100 transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'አማርኛ' : 'English'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-orange-50 rounded-lg"
            >
              {lang === 'en' ? item.label.en : item.label.am}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            className="w-full text-center px-4 py-2 rounded-lg bg-orange-600 text-white font-bold"
          >
            {lang === 'en' ? 'አማርኛ' : 'English'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
