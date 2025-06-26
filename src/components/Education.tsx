import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const education = [
    {
      degree: 'B.Tech – CSE (Data Science)',
      institution: 'Madanapalle Institute of Technology & Science',
      period: 'Pursuing',
      grade: '92.5% Aggregate',
      status: 'current',
      description: 'Specializing in Data Science with focus on Machine Learning, Deep Learning, and Analytics'
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Blue Moon Junior College',
      period: '2020 – 2022',
      grade: '87.9%',
      status: 'completed',
      description: 'Mathematics, Physics, Chemistry with strong foundation in analytical thinking'
    },
    {
      degree: 'S.S.C',
      institution: 'Sree Valmeeki High School',
      period: '2019 – 2020',
      grade: '99.33%',
      status: 'completed',
      description: 'Outstanding academic performance with near-perfect score'
    }
  ];

  const certifications = [
    { name: 'Data Analyst', provider: 'Udemy', year: '2024' },
    { name: 'Generative AI (Gen_AI)', provider: 'Google Cloud', year: '2024' },
    { name: 'AWS Cloud Fundamentals', provider: 'Euron', year: '2024' },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Academic journey and professional certifications in data science and technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 border-l-2 ${
                    edu.status === 'current' ? 'border-blue-500' : 'border-blue-200'
                  } ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    edu.status === 'current' ? 'bg-blue-600' : 'bg-blue-400'
                  }`}>
                    <GraduationCap size={14} className="text-white" />
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                      <div className="flex items-center text-slate-500 text-sm mt-1 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="text-blue-600 font-medium mb-2">{edu.institution}</div>
                    <div className="flex items-center mb-3">
                      <Award size={16} className="text-green-600 mr-2" />
                      <span className="text-green-600 font-semibold">{edu.grade}</span>
                    </div>
                    <p className="text-slate-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Award size={20} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-500">{cert.year}</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{cert.name}</h4>
                  <p className="text-blue-600 font-medium">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;