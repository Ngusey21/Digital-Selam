
import React from 'react';
import { PlusCircle, MessageSquare, Briefcase } from 'lucide-react';
import { Idea, Language } from '../types';

interface CollaborationBoardProps {
  ideas: Idea[];
  lang: Language;
}

const CollaborationBoard: React.FC<CollaborationBoardProps> = ({ ideas, lang }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            {lang === 'en' ? 'Collaboration Board' : 'የትብብር ሰሌዳ'}
          </h2>
          <p className="text-slate-500 mt-1">
            {lang === 'en' ? 'Find teammates and form cross-border teams.' : 'የሥራ ባልደረቦችን ያግኙ እና የድንበር ተሻጋሪ ቡድኖችን ይመስርቱ።'}
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
          <PlusCircle className="w-5 h-5" />
          {lang === 'en' ? 'Post Idea' : 'ሀሳብ ያቅርቡ'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all border-l-4 border-l-orange-500">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-slate-900">{idea.title}</h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{idea.timestamp}</span>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{idea.description}</p>
            
            <div className="mb-6 flex flex-wrap gap-2">
              {idea.skillsNeeded.map(skill => (
                <span key={skill} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-400">Proposed by <span className="text-slate-900 font-semibold">{idea.author}</span></div>
              <div className="flex gap-4">
                <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-orange-600">
                  <MessageSquare className="w-4 h-4" /> 12
                </button>
                <button className="flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg hover:bg-orange-100">
                  <Briefcase className="w-4 h-4" /> Join Team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationBoard;
