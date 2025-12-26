
import React from 'react';
import { Wallet, AlertTriangle, Shield, Users } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    return (
        <section className="py-24 bg-brand-surface-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-8 tracking-tight text-slate-800 leading-tight">
                        <span className="block text-xl md:text-2xl font-bold text-red-500 mb-2 tracking-widest uppercase flex items-center justify-center gap-2">
                            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full border border-red-200 shadow-sm animate-pulse">
                                👋 你是其中之一吗？
                            </span>
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 drop-shadow-sm">78% 的马来西亚人</span> <br />
                        <span className="text-slate-800">没有保障</span>
                    </h2>

                    {/* Main Stats Grid - Flexbox for proportional sizing */}
                    <div className="flex flex-col md:flex-row gap-4 w-full h-auto">

                        {/* Card 1: Cannot Afford (Larger) - 42% */}
                        <div className="md:w-[42%] bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 border border-red-200 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Wallet className="w-32 h-32 text-red-600" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white rounded-xl shadow-sm border border-red-100">
                                            <Wallet className="w-6 h-6 text-red-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">"负担不起"</h3>
                                    </div>
                                    <div className="text-5xl lg:text-7xl font-black text-slate-800 mb-1 tracking-tighter">
                                        43<span className="text-3xl lg:text-5xl">%</span>
                                    </div>
                                    <p className="text-slate-600 text-sm lg:text-base font-medium leading-relaxed">
                                        传统保险费的上涨速度超过了工资，导致近一半的人口无法获得基本保障。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Don't Need (Medium) - 36% */}
                        <div className="md:w-[36%] bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 border border-orange-200 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <AlertTriangle className="w-32 h-32 text-orange-600" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                                            <AlertTriangle className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-orange-800">"不需要"</h3>
                                    </div>
                                    <div className="text-5xl lg:text-7xl font-black text-slate-800 mb-1 tracking-tighter">
                                        35<span className="text-3xl lg:text-5xl">%</span>
                                    </div>
                                    <p className="text-slate-600 text-sm lg:text-base font-medium leading-relaxed">
                                        许多人低估了他们的健康风险，直到为时已晚，在没有安全网的情况下暴露于毁灭性的医院账单中。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Protected (Small) - 22% */}
                        <div className="md:w-[22%] bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner relative overflow-hidden flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
                            <div className="absolute top-0 right-0 p-2 opacity-5">
                                <Shield className="w-24 h-24 text-slate-800" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="w-5 h-5 text-slate-400" />
                                    <h3 className="text-lg font-bold text-slate-500">已受保</h3>
                                </div>
                                <div className="text-4xl lg:text-6xl font-black text-slate-400 mb-2">
                                    22<span className="text-2xl lg:text-4xl">%</span>
                                </div>
                                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                                    只有少数人拥有足够的保障。
                                </p>
                            </div>

                            <div className="mt-4">
                                <div className="w-full py-2 bg-white border border-slate-200 rounded-lg text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    今天就获得保障
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className="text-center text-slate-400 text-xs mt-6 font-medium">
                        来源：2019 年全国健康与发病率调查 (NHMS)
                    </p>
                </div>



            </div>
        </section>
    );
};

export default UnprotectedStats;
