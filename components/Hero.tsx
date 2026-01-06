
import React from 'react';
import { ArrowRight, Sparkles, Languages, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onExplore }) => {
  const content = {
    en: {
      title: "Building Bridges Through Technology",
      subtitle: "Digital Selam is a virtual exchange platform for young African tech creators and storytellers to preserve indigenous languages using AI.",
      cta: "Explore Projects",
      features: [
        { icon: Sparkles, text: "AI-Powered Preservation" },
        { icon: Languages, text: "Indigenous Languages" },
        { icon: HeartHandshake, text: "Cross-Border Co-Creation" }
      ]
    },
    am: {
      title: "በቴክኖሎጂ ድልድዮችን መገንባት",
      subtitle: "ዲጂታል ሰላም ወጣት አፍሪካውያን የቴክኖሎጂ ባለሙያዎች እና ታሪክ ነጋሪዎች አርቲፊሻል ኢንተለጀንስን በመጠቀም የአገር በቀል ቋንቋዎችን የሚጠብቁበት መድረክ ነው።",
      cta: "ሥራዎችን ያስሱ",
      features: [
        { icon: Sparkles, text: "በAI የታገዘ ጥበቃ" },
        { icon: Languages, text: "የአገር በቀል ቋንቋዎች" },
        { icon: HeartHandshake, text: "የድንበር ተሻጋሪ ትብብር" }
      ]
    }
  };

  const active = content[lang];

  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            {lang === 'en' ? 'VIRTUAL EXCHANGE HUB' : 'የዲጂታል መለዋወጫ ማዕከል'}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            {active.title}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            {active.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onExplore}
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20"
            >
              {active.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              {lang === 'en' ? 'Join Community' : 'ማህበረሰቡን ይቀላቀሉ'}
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {active.features.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 glass-card rounded-2xl shadow-sm border border-orange-50">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                  <f.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-800">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual flourishes */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
    </div>
  );
};

export default Hero;
