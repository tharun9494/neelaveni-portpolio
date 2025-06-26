import React from 'react';
import { Brain, Database, TrendingUp, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const highlights = [
    { icon: Brain, title: 'Machine Learning', description: 'Building intelligent systems with ML/DL algorithms' },
    { icon: Database, title: 'Data Analytics', description: 'Extracting insights from complex datasets' },
    { icon: TrendingUp, title: 'Problem Solving', description: 'Transforming business challenges into data solutions' },
    { icon: Users, title: 'Leadership', description: 'Mentoring and training in data science communities' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Data Science Professional"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-slate-600 leading-relaxed">
                  I'm an aspiring data science and machine learning enthusiast currently pursuing B.Tech in 
                  Computer Science Engineering with specialization in Data Science at Madanapalle Institute 
                  of Technology & Science. With a strong academic record of 9.75 CGPA, I'm passionate 
                  about transforming data into actionable insights.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  My journey in data science has been enriched through hands-on internships at Zidio Development 
                  and SmartInterz, where I've worked on customer segmentation, emotion recognition, and ML model 
                  deployment. I actively contribute to the Data Oracle Club as a trainer and mentor, sharing 
                  knowledge in Power BI and Generative AI.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-slate-50 rounded-lg transition-all duration-500 hover:shadow-md ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <item.icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;