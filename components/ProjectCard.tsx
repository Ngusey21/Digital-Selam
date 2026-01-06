
import React from 'react';
import { ExternalLink, User } from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectCardProps {
  project: Project;
  lang: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 transition-all hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-sm rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title[lang]}</h3>
        <p className="text-sm text-slate-600 mb-6 line-clamp-2">
          {project.description[lang]}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <User className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-xs font-medium text-slate-500">{project.author}</span>
          </div>
          <button className="text-orange-600 hover:text-orange-700 font-bold text-sm flex items-center gap-1">
            View <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
