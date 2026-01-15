import React, { useState, useEffect } from 'react';
import Button from './Button';
import { HERO_OBJECTIONS } from '../../constants_cn';
import { ArrowRight, Info } from 'lucide-react';

const Hero: React.FC = () => {
  const [objectionIndex, setObjectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setObjectionIndex((prev) => (prev + 1) % HERO_OBJECTIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToJoin = () => {
    const element = document.getElementById('join-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-blue/10 mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-navy">社区互助的医疗保障</span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-6 leading-[1.1] whitespace-nowrap">
              还在为医疗保障太贵而发愁？
            </h1>

            {/* Carousel Line */}
            <div className="h-16 mb-6 flex flex-col sm:flex-row sm:items-center text-lg leading-tight">
              <span
                key={objectionIndex} // Key ensures animation restart
                className="font-extrabold text-red-600 text-2xl md:text-4xl origin-left transition-all duration-300 drop-shadow-sm"
              >
                "{HERO_OBJECTIONS[objectionIndex]}"?
              </span>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              停止支付昂贵的费用。加入成千上万的马来西亚人，加入这个公平、透明且负担得起的医疗费用分担社区。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" variant="primary" className="rounded-xl px-8 shadow-lg shadow-brand-blue/10" onClick={scrollToJoin}>
                立即加入我们 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white/50 border-brand-navy/20 hover:bg-brand-navy hover:border-brand-navy" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                如何运作
              </Button>
            </div>

            <div className="flex items-center text-sm text-slate-500 font-medium bg-white/60 p-3 rounded-lg w-fit border border-slate-200/60 backdrop-blur-sm">
              <Info className="w-4 h-4 mr-2 text-brand-blue" />
              <span>从今天开始享受 RM100 万的医疗保障。</span>
            </div>
          </div>

          {/* Right Visual - image1.jpg */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-slate-100 bg-slate-200 group">
              <img
                src="image1.jpg"
                alt="Happy family enjoying healthcare protection"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-navy/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;