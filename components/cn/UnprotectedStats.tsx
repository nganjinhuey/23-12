import React from 'react';
import { Users, AlertCircle, HelpCircle, DollarSign, Search, ShieldAlert, ShieldCheck } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    return (
        <section className="py-24 bg-brand-surface-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Headline */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 tracking-tight">
                        78% 的马来西亚人 <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                            没有保障
                        </span>
                    </h2>

                    <div className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-red-50 border border-red-100 mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
                        <span className="text-red-600 font-bold text-xl tracking-tight">你是其中之一吗？</span>
                        <span className="text-2xl animate-wave">✋</span>
                    </div>
                </div>

                {/* 3-Card Flex Layout (Proportional + Soft Gradient + Aligned) */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

                    {/* CARD 1: THE BARRIER (42%) - SOFT RED */}
                    <div className="lg:flex-[42] group relative bg-gradient-to-br from-red-50 to-red-100 rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-red-100">

                        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-50">
                            <DollarSign size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-800">
                                42%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-red-600 mb-4">"负担不起"</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                            传统保险费的上涨速度超过了工资，导致近一半的人口无法获得基本保障。
                        </p>
                    </div>

                    {/* CARD 2: THE MINDSET (36%) - SOFT ORANGE */}
                    <div className="lg:flex-[36] group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-orange-100">

                        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-50">
                            <HelpCircle size={40} strokeWidth={2} />
                        </div>

                        <div className="mb-4">
                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700">
                                36%
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-orange-600 mb-4">"不需要"</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                            许多人低估了他们的健康风险，直到为时已晚，在没有安全网的情况下暴露于毁灭性的医院账单中。
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

                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">已受保</h3>
                        <p className="text-brand-surface-blue opacity-80 leading-relaxed mb-8 text-sm relative z-10 flex-grow">
                            只有少数人拥有足够的保障。
                        </p>

                        <button className="w-full py-4 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(52,227,196,0.4)] relative z-10 cursor-pointer text-sm">
                            今天就获得保障
                            <Users size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                </div>

                <div className="mt-16 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    来源：2019 年全国健康与发病率调查 (NHMS)
                </div>

            </div>
        </section>
    );
};

export default UnprotectedStats;
