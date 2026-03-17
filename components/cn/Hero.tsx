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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
        style={{ backgroundImage: `url('image1.jpg')` }}
      />
      
      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content overlay on the left */}
          <div className="w-full lg:w-1/2 text-left max-w-[600px]">
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

            <p className="text-lg text-slate-800 font-medium mb-8 leading-relaxed max-w-lg">
              停止支付昂贵的费用。加入成千上万的马来西亚人，加入这个公平、透明且负担得起的医疗费用分担社区。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" variant="primary" className="rounded-xl px-8 shadow-lg shadow-brand-blue/10" onClick={scrollToJoin}>
                立即加入我们 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white/80 border-brand-navy/20 hover:bg-brand-navy hover:text-white" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                如何运作
              </Button>
            </div>

            <div className="flex items-center text-sm text-slate-700 font-medium bg-white/80 p-3 rounded-lg w-fit border border-slate-200/60 backdrop-blur-sm">
              <Info className="w-4 h-4 mr-2 text-brand-blue" />
              <span>从今天开始享受 RM100 万的医疗保障。</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;