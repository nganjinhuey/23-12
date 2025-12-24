import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, AlertCircle, HelpCircle, DollarSign, Search } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    const data = [
        { name: 'Already Insured', value: 22, color: '#22c55e' }, // Green
        { name: 'Cannot Afford Premium', value: 42, color: '#db2777' }, // Pink
        { name: 'Think It\'s Unnecessary', value: 36, color: '#8b5cf6' }, // Purple
    ];

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="py-20 bg-white h-[600px]"></div>; // Placeholder to prevent layout shift
    }

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Inline style for floating animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
            }
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
            .stats-card {
                box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
            }
        `}} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                {/* Header */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-8 tracking-tight">
                    78% of Malaysians are <span className="text-red-500 underline decoration-red-200 decoration-8 underline-offset-4">UNPROTECTED</span>
                </h2>

                {/* Sub-badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-red-100 shadow-md text-red-500 font-bold text-lg mb-12 animate-pulse">
                    Are you one of them? ✋
                </div>

                {/* Chart Container */}
                <div className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">

                    {/* The Floating Chart */}
                    {/* The Floating Chart */}
                    <div className="relative w-full h-full animate-float">
                        {mounted && (
                            <ResponsiveContainer width="100%" height="100%" minHeight={400}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={100}
                                        outerRadius={160}
                                        paddingAngle={0}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={-270}
                                        cornerRadius={10}
                                        stroke="none"
                                        isAnimationActive={false}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>

                    {/* Overlays / Floating Cards */}
                    {/* 22% Already Insured - Left */}
                    <div className="absolute top-1/4 left-0 md:left-10 lg:left-0 transform -translate-y-1/2 bg-white p-4 rounded-2xl stats-card border border-slate-50 flex items-center gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <Users size={20} />
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-bold text-brand-navy">22%</div>
                            <div className="text-xs font-semibold text-green-600">Already Insured</div>
                        </div>
                    </div>

                    {/* 42% Cannot Afford - Right */}
                    <div className="absolute top-1/3 right-0 md:right-10 lg:right-0 transform -translate-y-1/2 bg-white p-4 rounded-2xl stats-card border border-slate-50 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="text-left mr-2">
                            <div className="text-3xl font-bold text-brand-navy text-right">42%</div>
                            <div className="text-xs font-semibold text-pink-600">Cannot Afford Premium</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                            <DollarSign size={24} />
                        </div>
                    </div>

                    {/* 36% Unnecessary - Bottom Left */}
                    <div className="absolute bottom-10 left-10 md:left-20 bg-white p-5 rounded-3xl stats-card border border-slate-50 flex flex-col items-center gap-1 animate-float" style={{ animationDelay: '1.5s' }}>
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1">
                            <Search size={20} />
                        </div>
                        <div className="text-2xl font-bold text-brand-navy">36%</div>
                        <div className="text-xs font-bold text-purple-600">Think It's Unnecessary</div>
                    </div>

                </div>

                <p className="text-slate-400 text-sm mt-8">
                    Source: National Health & Morbidity Survey (NHMS)
                </p>

            </div>
        </section>
    );
};

export default UnprotectedStats;
