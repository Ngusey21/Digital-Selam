
import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Languages, Loader2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { analyzeCulturalText } from '../services/gemini';

interface AISandboxProps {
  lang: Language;
}

const AISandbox: React.FC<AISandboxProps> = ({ lang }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const analysis = await analyzeCulturalText(text, lang === 'am' ? 'Amharic' : 'Unknown');
    setResult(analysis);
    setLoading(false);
  };

  const placeholders = {
    en: "Enter a proverb, poem, or cultural phrase...",
    am: "ምሳሌያዊ አነጋገር፣ ግጥም ወይም ባህላዊ ሐረግ ያስገቡ..."
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <BrainCircuit className="w-32 h-32" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-600 rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{lang === 'en' ? 'AI Preservation Sandbox' : 'የ AI ጥበቃ መሞከሪያ'}</h2>
            <p className="text-slate-400 text-sm">{lang === 'en' ? 'Analyze indigenous language snippets with Gemini' : 'የአገር በቀል ቋንቋዎችን በGemini ይተንትኑ'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={placeholders[lang]}
              className="w-full h-48 bg-slate-800 border-none rounded-2xl p-6 text-lg focus:ring-2 focus:ring-orange-500 placeholder:text-slate-600 resize-none transition-all"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !text.trim()}
              className="w-full py-4 bg-orange-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {lang === 'en' ? 'Analyzing...' : 'እየተተነተነ ነው...'}
                </>
              ) : (
                <>
                  {lang === 'en' ? 'Analyze Cultural Snippet' : 'ባህላዊ ሐረግን ይተንትኑ'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <div className="min-h-[200px] bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center">
                <Languages className="w-12 h-12 mb-4 opacity-20" />
                <p>{lang === 'en' ? 'Analysis results will appear here' : 'የትንተና ውጤቶች እዚህ ይታያሉ'}</p>
              </div>
            )}

            {loading && (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                <div className="h-20 bg-slate-700 rounded"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                <div className="h-24 bg-slate-700 rounded"></div>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Translation & Lang</h4>
                  <p className="text-lg leading-relaxed">{result.translation}</p>
                  {result.detectedLanguage && <span className="text-[10px] mt-2 inline-block px-2 py-0.5 bg-slate-700 rounded-full">{result.detectedLanguage}</span>}
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Cultural Significance</h4>
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{result.culturalSignificance}"</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Preservation Ideas</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {result.preservationSuggestions.map((s: string, i: number) => (
                      <li key={i} className="text-xs flex items-start gap-2 text-slate-400">
                        <span className="text-orange-500 font-bold">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISandbox;
