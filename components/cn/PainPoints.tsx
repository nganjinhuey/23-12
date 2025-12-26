import React from 'react';
import Section from './Section';
import { PAIN_POINTS } from '../../constants_cn';
import { ArrowRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <Section
      title="大多数人忽视的医疗保障问题"
      subtitle="马来西亚的医疗现实充满挑战。你准备好应对突发情况了吗？"
      id="challenges"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PAIN_POINTS.map((point, idx) => (
          <div key={idx} className={`rounded-2xl p-6 ${point.bgColor} border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-lg group`}>
            <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
              <point.icon className={`w-6 h-6 ${point.color}`} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{point.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center text-brand-blue font-bold hover:text-brand-navy transition-colors"
        >
          立即开始你的保障计划 <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </Section>
  );
};

export default PainPoints;