import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      title: 'Data Science & Analytics Intern',
      company: 'Zidio Development',
      period: 'May 2024 – July 2024',
      location: 'Remote',
      description: [
        'Performed customer segmentation using EDA and K-means clustering',
        'Built emotion speech recognition model using ML/DL for sentiment analysis',
        'Analyzed large datasets to extract meaningful business insights'
      ],
      type: 'internship'
    },
    {
      title: 'Machine Learning Intern',
      company: 'SmartInterz',
      period: 'May 2024',
      location: 'Remote',
      description: [
        'Developed and deployed ML models for real-world problems',
        'Gained proficiency in Python libraries like Pandas, NumPy, Scikit-learn',
        'Worked on data preprocessing and model optimization techniques'
      ],
      type: 'internship'
    },
    {
      title: 'Trainer & Mentor',
      company: 'Data Oracle Club',
      period: 'Ongoing',
      location: 'MITS College',
      description: [
        'Resource Person in Power BI and Generative AI workshops',
        'Mentoring students in data science and analytics',
        'Organizing technical events and knowledge sharing sessions'
      ],
      type: 'leadership'
    }
  ];

  const achievements = [
    { title: 'Perfect CGPA', description: 'Scored 10.0 CGPA in 1st Semester', icon: Award },
    { title: 'Paper Presentation', description: '3rd Prize in Technical Paper Presentation', icon: Award },
    { title: 'Hackathon', description: 'Consolation Prize in 24-hour Hackathon', icon: Award },
    { title: 'Community Service', description: 'Volunteered as School Teacher for 10th grade', icon: Users },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Experience & Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional experience and notable achievements in data science and technology
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 border-l-2 border-blue-200 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-slate-800">{exp.title}</h4>
                      <div className="flex items-center text-slate-500 text-sm mt-1 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium mb-3">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                    <achievement.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-slate-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;