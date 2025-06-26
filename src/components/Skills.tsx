import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'programming' },
    { name: 'HTML/CSS', level: 85, category: 'programming' },
    { name: 'MySQL', level: 80, category: 'database' },
    { name: 'NumPy', level: 85, category: 'libraries' },
    { name: 'Pandas', level: 90, category: 'libraries' },
    { name: 'Matplotlib', level: 80, category: 'libraries' },
    { name: 'Power BI', level: 85, category: 'tools' },
    { name: 'Google Colab', level: 90, category: 'tools' },
    { name: 'Git & GitHub', level: 75, category: 'tools' },
    { name: 'Machine Learning', level: 85, category: 'specialization' },
    { name: 'Data Analytics', level: 90, category: 'specialization' },
    { name: 'Deep Learning', level: 75, category: 'specialization' },
  ];

  const categories = {
    programming: { title: 'Programming', color: 'bg-blue-500', lightColor: 'bg-blue-100' },
    database: { title: 'Database', color: 'bg-green-500', lightColor: 'bg-green-100' },
    libraries: { title: 'Libraries', color: 'bg-purple-500', lightColor: 'bg-purple-100' },
    tools: { title: 'Tools', color: 'bg-orange-500', lightColor: 'bg-orange-100' },
    specialization: { title: 'Specialization', color: 'bg-pink-500', lightColor: 'bg-pink-100' },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit for data science, machine learning, and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg ${categories[category as keyof typeof categories].lightColor} mr-3`}>
                    <div className={`w-4 h-4 rounded ${categories[category as keyof typeof categories].color}`}></div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {categories[category as keyof typeof categories].title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            categories[category as keyof typeof categories].color
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;