
export type Language = 'en' | 'am';

export interface Project {
  id: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
  tags: string[];
  image: string;
  author: string;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  author: string;
  skillsNeeded: string[];
  timestamp: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Tool';
  category: 'AI' | 'Storytelling' | 'Linguistics';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'Workshop' | 'Hackathon' | 'Networking';
}
