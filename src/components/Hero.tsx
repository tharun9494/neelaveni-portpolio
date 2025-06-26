import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const { displayText: title } = useTypewriter('Data Science Enthusiast', 100, 500);
  const { displayText: subtitle } = useTypewriter('Transforming data into actionable insights', 50, 2000);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 pb-8">
        {/* Profile Image */}
       

        {/* Main Content */}
        <div className="animate-fade-in-up animation-delay-300 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
            Hi, I'm <span className="text-blue-600">Somanaboyana Neelaveni</span>
          </h1>
          <div className="h-8 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-light">
              {title}<span className="animate-blink">|</span>
            </h2>
          </div>
          <div className="h-12 mb-8">
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <MapPin size={16} />
            <span className="text-sm">Kadiri, AP</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Phone size={16} />
            <span className="text-sm">+91 90636 56561</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Mail size={16} />
            <span className="text-sm">22691A3268@mits.ac.in</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <span className="text-sm">CGPA: 9.75/10</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-900">
          <a
            href="https://github.com/Neelaveninethra/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-slate-600 hover:text-blue-600"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/neelaveni-somanaboyana-a091b1254/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-slate-600 hover:text-blue-600"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:22691A3268@mits.ac.in"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-slate-600 hover:text-blue-600"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-1200">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-slate-400 hover:text-blue-600 transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;