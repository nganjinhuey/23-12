import React from 'react';
import Section from './Section';
import { FEATURES } from '../constants';
import Button from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
    const scrollToJoin = () => {
        document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="overflow-hidden bg-white">

            {/* Intro / Who We Are Section - Clean Brand Tint */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-sky-50 rounded-3xl my-8 mx-4 md:mx-auto relative overflow-hidden text-brand-navy">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60"></div>

                <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 bg-white rounded-full mb-6 shadow-sm border border-teal-100">
                            <Sparkles className="w-4 h-4 text-brand-teal mr-2" />
                            <span className="text-xs font-bold tracking-wider uppercase text-brand-navy">Who We Are</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
                            Introducing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-blue to-teal-500 animate-gradient">We Kongsi</span>
                        </h2>

                        {/* Special Bubble - Calm Brand Tint */}
                        <div className="inline-block w-full">
                            <div className="bg-gradient-to-r from-teal-50 via-white to-teal-50 p-6 rounded-full shadow-md border border-teal-100 mb-8 text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 group">
                                {/* Decorative shine */}
                                <div className="absolute top-0 right-0 w-full h-full bg-white/40 skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>

                                <h3 className="text-lg md:text-xl font-extrabold text-brand-navy uppercase tracking-wide leading-snug relative z-10">
                                    A Community Based Medical Cost-Sharing Program
                                </h3>
                            </div>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                            We are a community dedicated to ensuring transparent, affordable, and fair healthcare for everyone. We believe that by coming together, we can protect each other without the burden of expensive medical premiums. <br /><br />
                            We Kongsi is not insurance or takaful, but a people-powered medical cost-sharing program built on transparency and shared responsibility.
                        </p>

                        <Button variant="primary" className="px-8 shadow-teal-900/10 bg-brand-navy hover:bg-brand-navy-light text-white border-none" onClick={scrollToJoin}>
                            Talk to Us to Understand the Benefits <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Right Image - image2.jpg */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white bg-slate-100 group">
                            <img
                                src="image2.jpg?v=3"
                                alt="We Kongsi Community"
                                className="w-full h-auto object-contain md:group-hover:scale-105 transition-transform duration-700 bg-slate-100"
                                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 max-w-xs bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl text-brand-navy border border-white/50">
                                <div className="text-3xl font-bold text-brand-teal mb-1">100%</div>
                                <div className="text-sm font-semibold opacity-80">Committed to Transparency & Care</div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Clean White Background */}
            <Section
                title="Why Malaysians Trust We Kongsi"
                subtitle="Built on transparency, fairness, and shared responsibility."
                id="benefits"
                className="bg-white relative"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 hover:border-teal-100 group relative overflow-hidden">
                                {/* Hover Reveal Background - Soft Teal */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300 shadow-sm text-brand-teal border border-teal-100">
                                        <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
};

export default Features;