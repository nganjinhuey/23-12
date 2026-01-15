import React from 'react';
import { Users, AlertCircle, HelpCircle, DollarSign, Search, ShieldAlert, ShieldCheck } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-teal-50 to-sky-100/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Headline */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 tracking-tight">
                        78% of Malaysians are <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-600">
                            UNPROTECTED
                        </span>
                    </h2>

                    <div className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-teal-50 border border-teal-100 mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
                        <span className="text-teal-800 font-bold text-xl tracking-tight">Are you one of them?</span>
                        <span className="text-2xl animate-wave">✋</span>
                    </div>
                </div>

                {/* 3-Card Flex Layout (Proportional + Soft Gradient + Aligned) */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

                    {/* CARD 1: THE BARRIER (42%) - SOFT SLATE/TEAL */}
                    <div className="lg:flex-[42] group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-100 hover:border-teal-100">

                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-50">
                            <DollarSign size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-900 group-hover:from-teal-700 group-hover:to-teal-900">
                                42%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-700 mb-4 group-hover:text-teal-800">"Too expensive for what I get"</h3>
                        <p className="text-slate-500 leading-relaxed flex-grow font-medium">
                            Rising premiums and age-based pricing push many people out of traditional coverage.
                        </p>
                    </div>

                    {/* CARD 2: THE MINDSET (36%) - SOFT SLATE/BLUE */}
                    <div className="lg:flex-[36] group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-100 hover:border-blue-100">

                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-50">
                            <HelpCircle size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-900 group-hover:from-blue-700 group-hover:to-blue-900">
                                36%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-700 mb-4 group-hover:text-blue-800">"I'll deal with it later"</h3>
                        <p className="text-slate-500 leading-relaxed flex-grow font-medium">
                            Many underestimate medical risks until an unexpected hospital bill hits.
                        </p>
                    </div>

                    {/* CARD 3: THE SAFE ZONE (22%) - TEAL (highlighted) */}
                    <div className="lg:flex-[22] group relative bg-brand-navy rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-brand-teal/20 overflow-hidden flex flex-col">
                        {/* Blob Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="w-20 h-20 rounded-2xl bg-brand-teal/20 flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <ShieldCheck size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4 relative z-10">
                            <span className="text-6xl font-black text-white">
                                22%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Are Protected</h3>
                        <p className="text-brand-surface-blue opacity-80 leading-relaxed mb-8 text-sm relative z-10 flex-grow">
                            Most rely on traditional plans that become more expensive over time.
                        </p>

                        <button className="w-full py-4 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(52,227,196,0.4)] relative z-10 cursor-pointer text-sm">
                            Get Protected Today
                            <Users size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                </div>

                <div className="mt-16 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Source: National Health & Morbidity Survey (NHMS)
                </div>

            </div>
        </section>
    );
};

export default UnprotectedStats;
