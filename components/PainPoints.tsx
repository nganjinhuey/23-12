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
    <Section className="bg-white border-t border-teal-50">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-brand-navy text-xs font-bold uppercase tracking-wider mb-6">
          The Reality of Healthcare in Malaysia
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
          What Most People <span className="text-brand-teal">Overlook</span> About <br className="hidden md:block" />
          Medical Protection
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          The reality of healthcare in Malaysia is challenging. Are you prepared for the unexpected?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {PAIN_POINTS.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 text-emerald-500`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 leading-tight min-h-[56px] flex items-center">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-8 py-4" onClick={scrollToJoin}>
          <ArrowRight className="w-4 h-4 mr-2" /> Start Your Protection Plan Now
        </Button>
      </div>
    </Section>
  );
};

export default PainPoints;