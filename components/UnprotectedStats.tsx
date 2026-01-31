import React from 'react';
import { Users, HelpCircle, DollarSign, ShieldCheck } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            {/* Header Section - Dark Navy Background */}
            <div className="bg-brand-navy py-24 pb-48 relative overflow-hidden">
                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Optional: Add an actual image background here if available, e.g., <img src="image16.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" /> */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        78% of Malaysians are <br className="hidden md:block" />
                        <span className="text-red-500">
                            UNPROTECTED
                        </span>
                    </h2>

                    <p className="text-slate-200 text-xl font-medium max-w-2xl mx-auto">
                        Many delay medical protection until it's too late.
                    </p>

                    <div className="mt-8 inline-block">
                        <div className="animate-bounce text-slate-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-32 mb-24">
                {/* 3-Card Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

                    {/* CARD 1: THE BARRIER (42%) - WHITE BG, RED ACCENTS */}
                    <div className="lg:flex-[42] group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-100">

                        <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                            <DollarSign size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-red-700">
                                42%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-red-600 mb-4">"Cannot Afford It"</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                            Traditional insurance premiums are rising faster than wages, pricing out nearly half the population from essential coverage.
                        </p>
                    </div>

                    {/* CARD 2: THE MINDSET (36%) - WHITE BG, ORANGE ACCENTS */}
                    <div className="lg:flex-[36] group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-100">

                        <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                            <HelpCircle size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-orange-600">
                                36%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-orange-600 mb-4">"Don't Need It"</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                            Many underestimate their health risks until it's too late, leaving them exposed to devastating hospital bills without a safety net.
                        </p>
                    </div>

                    {/* CARD 3: THE SAFE ZONE (22%) - NAVY BG */}
                    <div className="lg:flex-[22] group relative bg-brand-navy rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border border-brand-teal/20">

                        <div className="w-20 h-20 rounded-2xl bg-brand-teal/20 flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <ShieldCheck size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4 relative z-10">
                            <span className="text-6xl font-black text-white">
                                22%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Are Protected</h3>
                        <p className="text-slate-300 leading-relaxed mb-8 text-sm relative z-10 flex-grow">
                            Only a small minority have adequate coverage.
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
