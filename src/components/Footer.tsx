import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Somanaboyana Neelaveni</h3>
            <p className="text-slate-300 leading-relaxed">
              Data Science enthusiast passionate about transforming data into actionable insights 
              and building intelligent systems that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-2 mb-4">
              <p className="text-slate-300">📧 22691A3268@mits.ac.in</p>
              <p className="text-slate-300">📞 +91 90636 56561</p>
              <p className="text-slate-300">📍 Kadiri, Andhra Pradesh</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Neelaveninethra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neelaveni-somanaboyana-a091b1254/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:22691A3268@mits.ac.in"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            © {currentYear} Somanaboyana Neelaveni. All rights reserved.
          </p>
          <p className="flex items-center text-slate-300 text-sm mt-4 sm:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;