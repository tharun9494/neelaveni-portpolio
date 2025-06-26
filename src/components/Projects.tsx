import React from 'react';
import { ExternalLink, Github, Bot, Code, Film } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const projects: Project[] = [
    {
      id: 1,
      title: 'HealthCare Chatbot',
      description: 'Intelligent healthcare assistant developed using Streamlit, Python, and Gemini AI API. Provides real-time medical responses and health guidance with natural language processing capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Streamlit', 'Gemini AI API', 'NLP'],
   
      githubUrl: 'https://github.com/Neelaveninethra/',
      icon: Bot,
    },
    {
      id: 2,
      title: 'Code Generation System',
      description: 'Advanced code generation platform using Groq Cloud Model, LangChain, and Streamlit. Converts natural language prompts into functional code dynamically across multiple programming languages.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Groq Cloud', 'LangChain', 'Streamlit', 'Python'],
   
      githubUrl: 'https://github.com/Neelaveninethra/',
      icon: Code,
    },
    {
      id: 3,
      title: 'Movie Recommendation System',
      description: 'Comprehensive recommendation engine implementing collaborative filtering, content-based filtering, and hybrid approaches. Built with machine learning algorithms and deployed using Streamlit.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      
      githubUrl: 'https://github.com/Neelaveninethra/',
      icon: Film,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Innovative data science and machine learning projects showcasing practical applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <ExternalLink size={20} className="text-slate-600" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Github size={20} className="text-slate-600" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md">
                    <project.icon size={20} className="text-blue-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Neelaveninethra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 space-x-2"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;