import React, { useEffect, useRef, useState } from 'react';
import { Quote, Play, FileText, Star, Video, Image as ImageIcon } from 'lucide-react';

const TESTIMONIAL_DATA = [
  // --- STATIC CARDS ---
  {
    id: 1,
    type: 'static',
    name: "Muhammad Hanif",
    role: "吉兰丹",
    quote: "我的 RM75 诊所账单降到了仅 RM10！这就是分担的力量——每次看医生都能获得真正的经济减负。",
    hasReceipt: true,
    image: "image23.jpg"
  },
  {
    id: 2,
    type: 'video',
    name: "Xin Min",
    role: "19, 霹雳",
    quote: "We Kongsi 让我迫切需要的 RM15,000 手术成为可能。这减轻了我父母巨大的经济负担——社区真的在支持我。",
    hasReceipt: false,
    videoUrl: "https://www.youtube.com/watch?v=u2ZxoJHv0oc&t=6s",
    image: "image24.jpg"
  },
  {
    id: 3,
    type: 'video',
    name: "Honey",
    role: "27, 霹雳",
    quote: "我的 RM45,000 手术？全额覆盖！每月只需支付 RM50，却能获得完全的安心，这只是我旧保险费的一小部分。",
    hasReceipt: false,
    videoUrl: "https://www.youtube.com/watch?v=L8HD1zJEHjc",
    image: "image25.jpg"
  },
  {
    id: 4,
    type: 'video',
    name: "Niena",
    role: "26, 柔佛",
    quote: "面对 RM39,000 的意外账单非常可怕，但 We Kongsi 顺利解决了一切。零压力，完全安心。",
    hasReceipt: false,
    videoUrl: "https://www.youtube.com/watch?v=FLR8F-Ohuj8&t=237s",
    image: "image26.jpg"
  },
  // --- VIDEO CARDS ---
  {
    id: 5,
    type: 'video',
    name: "Syafiq",
    role: "29, 吉兰丹",
    quote: "我从昂贵的保险转过来，当我需要时，我的 RM42,000 脚踝手术得到了全力支持。We Kongsi 给了我更好的价值和全面的支持。",
    videoUrl: "https://www.youtube.com/watch?v=u_IKmL7MA5E&t=11s",
    image: "image27.jpg"
  },
  {
    id: 6,
    type: 'video',
    name: "Ainul & Abdul",
    role: "35 & 42",
    quote: "起初我们持怀疑态度，但当我们的孩子入院时，担保信很快就到了。我们的疑虑变成了完全的信心！",
    videoUrl: "https://www.youtube.com/watch?v=9u0jeksr9Ew&t=10s",
    image: "image28.jpg"
  },
  // --- NEW STATIC CARDS ---
  {
    id: 7,
    type: 'static',
    name: "Mohd Hizam",
    role: "推荐人",
    quote: "我的会员因严重食物中毒入院，支持非常迅速。看到理赔处理得这么快，证明了 We Kongsi 为我的社区带来了真正的价值。",
    image: "image29.jpg"
  },
  {
    id: 8,
    type: 'static',
    name: "Puan Maslina",
    role: "会员",
    quote: "我的孩子发生了交通事故，但因为我们一家 8 口都有保障，他们在私立医院得到了舒适、快速的治疗。We Kongsi 支付了全部费用——我们非常感激！",
    image: "image30.jpg"
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIAL_DATA.length);
    }, 5000); // 5 seconds delay before shifting

    return () => clearInterval(interval);
  }, []);

  // Programmatic scrolling when activeIndex changes
  useEffect(() => {
    if (scrollRef.current) {
      // Calculate the position of the active card
      const cardElement = scrollRef.current.children[activeIndex] as HTMLElement;
      if (cardElement) {
        // Center the card in the container
        const containerWidth = scrollRef.current.offsetWidth;
        const cardWidth = cardElement.offsetWidth;
        const cardLeft = cardElement.offsetLeft;

        // Calculate scroll position to center the card
        const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        scrollRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-blue-100 relative overflow-hidden">
      {/* Background - Soft Blue Theme with gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">进院会员的见证</h2>
        <p className="text-slate-600 mt-2 text-lg font-medium">他们找到让他们负担得起以及安心的医疗保障</p>
        <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-brand-navy/20"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">

        {/* Gradient Fade Masks to focus attention on center - matched to bg-blue-100 */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-blue-100 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-blue-100 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto items-center py-6 px-[50vw] no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {TESTIMONIAL_DATA.map((item: any, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`mx-4 inline-block w-[85vw] md:w-[600px] flex-shrink-0 bg-white rounded-2xl shadow-lg border border-blue-50 p-6 md:p-8 whitespace-normal relative transition-all duration-500 cursor-pointer
                ${index === activeIndex ? 'scale-100 opacity-100 ring-4 ring-brand-teal/30 shadow-2xl' : 'scale-95 opacity-50 hover:opacity-80 grayscale-[0.5] hover:grayscale-0'}
              `}
            >
              {/* --- MEDIA PLACEHOLDERS --- */}

              {/* Video Placeholder */}
              {item.type === 'video' && (
                <div className="mb-6 w-full aspect-video bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-inner group/video flex items-center justify-center">
                  {/* Background Image or Generic Placeholder */}
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-300 absolute inset-0">
                      <Video size={48} className="mb-2 opacity-50" />
                      <span className="text-xs font-bold uppercase tracking-wider">观看故事</span>
                    </div>
                  )}

                  {/* Overlay for readability if image is present */}
                  {item.image && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>}

                  {/* YouTube Style Icon */}
                  <div
                    onClick={() => item.videoUrl && window.open(item.videoUrl, '_blank')}
                    className="relative z-10 w-16 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-xl hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    <Play size={20} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
              )}

              {/* Static Image Placeholder */}
              {item.type === 'static' && (
                <div className="mb-6 w-full aspect-video bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-inner flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-300">
                      <ImageIcon size={48} className="mb-2 opacity-50" />
                      <span className="text-xs font-bold uppercase tracking-wider">图片</span>
                    </div>
                  )}
                </div>
              )}

              {/* --- HEADER --- */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-brand-surface-teal p-2 rounded-lg text-brand-teal">
                  <Quote size={20} fill="currentColor" />
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>

              {/* --- CONTENT: QUOTE --- */}
              <p className="text-slate-700 italic leading-relaxed text-sm md:text-base mb-6 font-medium">
                "{item.quote}"
              </p>

              {/* --- RECEIPT (Static Only - Specific Card) --- */}
              {item.hasReceipt && (
                <div className="mb-6">
                  <div className="flex items-center gap-3 bg-blue-50/80 p-3 rounded-xl border border-blue-100 border-dashed">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200">
                      <FileText size={20} className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">官方收据</div>
                      <div className="text-sm font-bold text-brand-navy">已付： <span className="text-brand-blue">RM10.00</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- FOOTER: AUTHOR INFO (No Icon) --- */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-brand-navy text-base">{item.name}</h4>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIAL_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-brand-navy w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;