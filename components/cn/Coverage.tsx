import React from 'react';
import Section from './Section';
import { COVERAGE_ITEMS, CO_PAYMENT_CONDITIONS, CO_PAYMENT_COVERED, CO_PAYMENT_NOT_COVERED } from '../../constants_cn';
import { Info, Check, X, ShieldCheck } from 'lucide-react';

const Coverage: React.FC = () => {
    return (
        <Section
            title="全面的 RM 100 万保障"
            subtitle="从住院到术后康复，我们让您安心，专注于恢复健康。"
            id="coverage"
            className="bg-white"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: General Coverage Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {COVERAGE_ITEMS.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 text-brand-teal shadow-sm">
                                    <Icon size={20} />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm leading-tight">{item.name}</span>
                            </div>
                        )
                    })}
                </div>

                {/* Right: Featured RM10 COB Card (Visual Emphasis) */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy to-brand-blue shadow-2xl text-white transform hover:scale-[1.01] transition-transform duration-500 group">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">

                        {/* Header Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/30 w-fit mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                            <span className="text-brand-teal font-bold text-xs uppercase tracking-wider">马来西亚首创</span>
                        </div>

                        {/* Main Offer */}
                        <div className="mb-6 flex items-baseline flex-wrap gap-x-4">
                            <h3 className="text-7xl md:text-8xl font-black text-emerald-400 tracking-tighter leading-none drop-shadow-lg">
                                RM10
                            </h3>
                            <h3 className="text-2xl font-bold text-white flex flex-col">
                                <span>有条件门诊福利</span>
                                <span className="text-brand-teal">(COB)</span>
                            </h3>
                        </div>

                        <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md">
                            针对 5 种常见情况，仅需付费 RM10 即可在任何指定私人诊所就诊。
                        </p>

                        {/* Conditions Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="col-span-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">包含的情况</div>
                            {CO_PAYMENT_CONDITIONS.map((cond, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                                    <Check size={14} className="text-emerald-400 flex-shrink-0" />
                                    <span className="text-sm font-medium text-slate-100">{cond}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-2 px-2 py-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                <Info size={14} className="text-white" />
                                <span className="text-xs text-white underline">查看 5 种情况</span>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold mb-2 text-emerald-300 text-sm">
                                    <Check size={16} /> 也包含 (共付额)
                                </h4>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    {CO_PAYMENT_COVERED.slice(0, 2).map((c, i) => <li key={i}>{c}</li>)}
                                    <li>+ 更多医疗必需品</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 font-bold mb-2 text-red-300 text-sm">
                                    <X size={16} /> 不包含
                                </h4>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    {CO_PAYMENT_NOT_COVERED.slice(0, 2).map((c, i) => <li key={i}>{c}</li>)}
                                    <li>+ 非医疗项目</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Coverage;