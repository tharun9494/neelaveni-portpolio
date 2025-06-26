export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'database' | 'libraries' | 'tools' | 'specialization';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}