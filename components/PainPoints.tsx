import React from 'react';
import Section from './Section';
import { PAIN_POINTS } from '../constants';
import Button from './Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-indigo-50/40 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Most People Overlook About Medical Protection</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          The reality of healthcare in Malaysia is challenging. Are you prepared for the unexpected?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {PAIN_POINTS.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-teal-100`}>
                <Icon className={`w-7 h-7 text-teal-600 group-hover:text-teal-700 transition-colors`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white" onClick={scrollToJoin}>
          <ArrowRight className="w-4 h-4 mr-2" /> Start Your Protection Plan Now
        </Button>
      </div>
    </Section>
  );
};

export default PainPoints;