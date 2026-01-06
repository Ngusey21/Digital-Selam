
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import CollaborationBoard from './components/CollaborationBoard';
import ResourceLibrary from './components/ResourceLibrary';
import AISandbox from './components/AISandbox';
import { Language, Project, Idea, Resource, Event } from './types';
// Fixed: Added Globe to the lucide-react imports to resolve the "Cannot find name 'Globe'" error
import { Calendar, Users, Target, Info, Mail, Globe } from 'lucide-react';

const mockProjects: Project[] = [
  {
    id: '1',
    title: { en: 'Oromo Voice-to-Text', am: 'የኦሮምኛ ድምጽን ወደ ጽሁፍ መለወጫ' },
    description: { en: 'A project to digitize Oromo proverbs using neural speech recognition.', am: 'የነርቭ ንግግር እውቅናን በመጠቀም የኦሮምኛ ምሳሌያዊ አነጋገሮችን ዲጂታይዝ የማድረግ ፕሮጀክት።' },
    tags: ['AI', 'Linguistics'],
    image: 'https://picsum.photos/seed/oromo/600/400',
    author: 'Abebe B.'
  },
  {
    id: '2',
    title: { en: 'Digital Folktale Comics', am: 'ዲጂታል የተረቶች ኮሚክ' },
    description: { en: 'Interactive comics translating Kenyan folktales for a global audience.', am: 'የኬንያ የህዝብ ተረቶችን ለአለም አቀፍ ታዳሚዎች የሚተረጉሙ በይነተገናኝ ኮሚክስ።' },
    tags: ['Design', 'Storytelling'],
    image: 'https://picsum.photos/seed/story/600/400',
    author: 'Sarah K.'
  },
  {
    id: '3',
    title: { en: 'Amharic Grammar Checker', am: 'የአማርኛ ሰዋስው መፈተሻ' },
    description: { en: 'A Chrome extension that helps writers check Amharic syntax rules.', am: 'ጸሐፊዎች የአማርኛ የሰዋስው ደንቦችን እንዲፈትሹ የሚረዳ የChrome ቅጥያ።' },
    tags: ['Dev', 'Tool'],
    image: 'https://picsum.photos/seed/amharic/600/400',
    author: 'Daniel T.'
  }
];

const mockIdeas: Idea[] = [
  {
    id: '1',
    title: 'Swahili Poetry Generator',
    description: 'Looking for a Python dev to help build an LSTM model trained on 19th-century Swahili poetry.',
    author: 'Fatuma S.',
    skillsNeeded: ['Python', 'NLP', 'Linguistics'],
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    title: 'VR Cultural Tours (Tigray)',
    description: 'Creating a VR experience of ancient Ethiopian architecture. Need 3D modelers.',
    author: 'Kassa G.',
    skillsNeeded: ['Blender', 'Unity', 'History'],
    timestamp: '5 hours ago'
  }
];

const mockResources: Resource[] = [
  { id: '1', title: 'AI for Indigenous Languages Guide', type: 'PDF', category: 'AI' },
  { id: '2', title: 'Ethical Storytelling Masterclass', type: 'Video', category: 'Storytelling' },
  { id: '3', title: 'Open Dataset: Ethiopian Oral History', type: 'Tool', category: 'Linguistics' },
  { id: '4', title: 'Funding Your Tech-Cultural Project', type: 'PDF', category: 'Storytelling' },
  { id: '5', title: 'Ge’ez script digitization tools', type: 'Tool', category: 'AI' }
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'showcase':
        return (
          <div className="py-12 px-4 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'Project Showcase' : 'የሥራዎች ማሳያ'}</h2>
              <p className="text-slate-600">{lang === 'en' ? 'Discover how youth are using AI and digital media to preserve African heritage.' : 'ወጣቶች የአፍሪካን ቅርስ ለመጠበቅ AI እና ዲጂታል ሚዲያዎችን እንዴት እየተጠቀሙ እንደሆነ ይወቁ።'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProjects.map(p => <ProjectCard key={p.id} project={p} lang={lang} />)}
            </div>
          </div>
        );
      case 'collab':
        return (
          <div className="py-12 px-4 max-w-4xl mx-auto">
            <CollaborationBoard ideas={mockIdeas} lang={lang} />
          </div>
        );
      case 'library':
        return (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <ResourceLibrary resources={mockResources} lang={lang} />
          </div>
        );
      case 'ai':
        return (
          <div className="py-12 px-4 max-w-5xl mx-auto">
            <AISandbox lang={lang} />
          </div>
        );
      case 'events':
        return (
          <div className="py-12 px-4 max-w-5xl mx-auto text-center space-y-8">
             <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'Upcoming Events' : 'መጪ ክስተቶች'}</h2>
              <p className="text-slate-600">{lang === 'en' ? 'Join workshops, hackathons and networking sessions.' : 'በሥልጠናዎች፣ በሃካቶኖች እና በትብብር ስብሰባዎች ላይ ይሳተፉ።'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex gap-4 items-center">
                <div className="bg-orange-50 p-3 rounded-lg text-orange-600 font-bold text-center w-16">
                  <span className="block text-xs uppercase">Oct</span>
                  <span className="text-xl">12</span>
                </div>
                <div>
                  <h4 className="font-bold">Indigenous Tech Hackathon</h4>
                  <p className="text-xs text-slate-500">Virtual • 48 Hours • Prizes</p>
                </div>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex gap-4 items-center opacity-70">
                <div className="bg-slate-50 p-3 rounded-lg text-slate-600 font-bold text-center w-16">
                  <span className="block text-xs uppercase">Nov</span>
                  <span className="text-xl">05</span>
                </div>
                <div>
                  <h4 className="font-bold">Oral Tradition Storytelling Workshop</h4>
                  <p className="text-xs text-slate-500">Addis Ababa & Zoom</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero lang={lang} onExplore={() => setActiveSection('showcase')} />
            
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {lang === 'en' ? 'Why Digital Selam Matters' : 'ዲጂታል ሰላም ለምን አስፈለገ?'}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Preservation' : 'ጥበቃ'}</h4>
                        <p className="text-slate-500 text-sm">{lang === 'en' ? 'Turning technology from a tool of homogenization into a bridge for cultural heritage.' : 'ቴክኖሎጂን ከባህል ማመሳሰያነት ወደ ባህላዊ ቅርስ መጠበቂያ ድልድይነት መለወጥ።'}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Skill Building' : 'ክህሎት ማሳደግ'}</h4>
                        <p className="text-slate-500 text-sm">{lang === 'en' ? 'Empowering youth to be both tech innovators and cultural custodians.' : 'ወጣቶች የቴክኖሎጂ ፈጣሪዎች እና የባህል ጠባቂዎች እንዲሆኑ ማብቃት።'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="https://picsum.photos/seed/africa/800/600" className="rounded-3xl shadow-2xl" alt="African Youth Tech" />
                  <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-2xl text-white max-w-xs shadow-xl">
                    <p className="text-sm italic">"Digital Selam turns technology into a bridge for cultural preservation."</p>
                    <p className="mt-2 text-xs font-bold text-orange-400">— Digital Diplomacy Model</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${lang === 'am' ? 'font-amharic' : ''}`}>
      <Header 
        lang={lang} 
        setLang={setLang} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main>
        {renderSection()}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Digital Selam</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Co-creation hub for African youth preserving indigenous languages through digital tools.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2"><Info className="w-4 h-4" /> About</h4>
            <ul className="text-slate-500 text-sm space-y-2">
              <li><button onClick={() => setActiveSection('hero')} className="hover:text-orange-600">Our Vision</button></li>
              <li><button onClick={() => setActiveSection('events')} className="hover:text-orange-600">Timeline</button></li>
              <li><a href="#" className="hover:text-orange-600">Funding Strategy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</h4>
            <ul className="text-slate-500 text-sm space-y-2">
              <li>support@digitalselam.africa</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2024 Digital Selam Initiative. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
