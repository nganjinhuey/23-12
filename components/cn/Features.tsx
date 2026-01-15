import React from 'react';
import Section from './Section';
import { FEATURES } from '../../constants_cn';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <Section
            title="为什么要加入 We&nbsp;Kongsi？"
            subtitle="因为医疗保障应该是简单、公平且以人为本的。"
            id="features"
            className="bg-brand-surface-teal"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-teal/20 group">
                            <div className="w-14 h-14 bg-brand-surface-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-7 h-7 text-brand-teal" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Features;