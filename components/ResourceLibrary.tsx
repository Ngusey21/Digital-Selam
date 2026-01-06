
import React from 'react';
import { Search, FileText, PlayCircle, Wrench, ArrowRight } from 'lucide-react';
import { Resource, Language } from '../types.ts';

interface ResourceLibraryProps {
  resources: Resource[];
  lang: Language;
}

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ resources, lang }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-500" />;
      case 'Video': return <PlayCircle className="w-5 h-5 text-blue-500" />;
      default: return <Wrench className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            {lang === 'en' ? 'Resource Library' : 'የመረጃ መዝገብ ቤት'}
          </h2>
          <p className="text-slate-500 mt-1">
            {lang === 'en' ? 'Guides on AI, ethical storytelling, and cultural tech.' : 'ስለ AI፣ ስነ-ምግባራዊ ታሪክ አወጋግ እና ባህላዊ ቴክኖሎጂ መመሪያዎች።'}
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={lang === 'en' ? "Search resources..." : "መረጃ ይፈልጉ..."}
            className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl text-sm border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((res) => (
          <div key={res.id} className="p-4 bg-white rounded-xl border border-slate-100 flex items-center gap-4 hover:border-orange-200 hover:shadow-sm cursor-pointer transition-all">
            <div className="p-3 bg-slate-50 rounded-lg">
              {getIcon(res.type)}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{res.title}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] px-1.5 py-0.5 bg-orange-50 text-orange-600 font-bold rounded">{res.type}</span>
                <span className="text-[10px] text-slate-400 font-medium">{res.category}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
