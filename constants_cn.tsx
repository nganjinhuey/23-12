import {
    ShieldCheck,
    Users,
    Heart,
    Scale,
    FileSearch,
    MapPin,
    Stethoscope,
    Activity,
    Bed,
    Truck,
    DollarSign,
    Thermometer,
    Pill,
    Syringe,
    Microscope,
    Baby,
    TrendingUp,
    Building2,
    Banknote,
    Calendar,
    Shield
} from 'lucide-react';
import { ChartData, FeatureItem, Testimonial, PlanItem } from './types';

export const HERO_OBJECTIONS = [
    "太贵了",
    "我觉得现在不重要",
    "我不明白它是如何运作的",
    "我还年轻健康",
    "条款太复杂了"
];

export const PAIN_POINTS = [
    {
        title: "医疗费用越来越高",
        description: "医疗通胀逐年上升，超过了平均收入增长。",
        icon: TrendingUp,
        color: "text-red-500",
        bgColor: "bg-red-50"
    },
    {
        title: "私立医院太贵了",
        description: "一个简单的手术可能花费数千，瞬间耗尽你的积蓄。",
        icon: DollarSign,
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        title: "政府医院过度拥挤",
        description: "长时间的等待可能会使急需关注的病情恶化。",
        icon: Building2,
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        title: "许多儿童没有任何保障",
        description: "由于高昂的保险费，许多家庭让孩子没有保障。",
        icon: Baby,
        color: "text-rose-500",
        bgColor: "bg-rose-50"
    }
];

export const FEATURES: FeatureItem[] = [
    { title: "你看得见的透明度", description: "每一分钱的共享都会显示在你的月度共享报告中。", icon: FileSearch },
    { title: "每个人都负担得起", description: "你的医疗共享上限为每月 RM50。", icon: DollarSign },
    { title: "纯粹的初衷", description: "没有隐藏的把戏或利润空间。每一分钱都支持真实的案例。", icon: Heart },
    { title: "所有年龄段公平对待", description: "无论年龄大小，每个人都分担相同的费率。", icon: Scale },
    { title: "你看得见的责任感", description: "你的分担仅用于医疗共享。没有投资或谋利。", icon: ShieldCheck },
    { title: "覆盖全国", description: "可前往 250+ 家指定医院和 4000+ 家诊所。", icon: MapPin },
];

export const COVERAGE_ITEMS = [
    { name: "住院与手术", icon: Shield },
    { name: "病房与膳食", icon: Bed },
    { name: "重症监护室 (ICU)", icon: Activity },
    { name: "每日现金津贴 (政府医院)", icon: Banknote },
    { name: "诊断前后的检测", icon: Microscope },
    { name: "出院后后续治疗", icon: Calendar },
    { name: "意外伤害治疗", icon: Truck },
    { name: "抚恤金支持", icon: Heart },
    { name: "门诊癌症治疗", icon: FileSearch },
    { name: "RM10 有条件门诊福利 (COB)", icon: Stethoscope },
];

export const CO_PAYMENT_CONDITIONS = [
    "发烧和流感",
    "胃病",
    "鼻窦/耳鼻喉感染",
    "支气管炎",
    "轻微伤口和扭伤"
];

export const CO_PAYMENT_COVERED = [
    "咨询费",
    "麻醉费",
    "医疗用品与服务 (设备, 药物, 实验室测试)"
];

export const CO_PAYMENT_NOT_COVERED = [
    "非医疗必要的治疗",
    "非处方的医疗用品和设备",
    "个人舒适用品",
    "补充剂"
];

export const CHART_DATA: ChartData[] = [
    { month: '1月', amount: 39.91 },
    { month: '2月', amount: 44.73 },
    { month: '3月', amount: 43.77 },
    { month: '4月', amount: 22.71 },
    { month: '5月', amount: 46.35 },
    { month: '6月', amount: 43.48 },
    { month: '7月', amount: 18.56 },
    { month: '8月', amount: 31.72 },
    { month: '9月', amount: 47.69 },
    { month: '10月', amount: 46.84 },
    { month: '11月', amount: 48.81 },
    { month: '12月', amount: 49.37 },
];

export const MEMBERSHIP_PLANS: PlanItem[] = [
    { name: "月度", price: "RM40", period: "/月", details: "真正负担得起的保障。每月费用少于一次外出喝咖啡，为您提供全面保障和最大灵活性。" },
    { name: "季度", price: "RM100", period: "/季度", details: "精明储蓄者的选择。与月度计划相比，每年节省 RM80。" },
    { name: "年度", price: "RM360", period: "/年", details: "超值优惠！立省 RM120——相当于免费获得 3 个月的保障。", highlight: true },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Muhammad Hanif",
        role: "Kelantan",
        quote: "我的 RM75 诊所账单降到了只有 RM10！这就是共享的力量——每次我看医生时都能真正减轻经济负担。",
        receipt: true,
        image: "image23.jpg"
    },
    {
        name: "Xin Min",
        role: "19, Perak",
        quote: "WeKongsi 让我迫切需要的 RM15,000 手术成为了可能。它减轻了我父母巨大的经济负担——社区真的在支持我。",
        videoUrl: "https://www.youtube.com/watch?v=u2ZxoJHv0oc&t=6s",
        image: "image24.jpg"
    },
    {
        name: "Honey",
        role: "27, Perak",
        quote: "我的 RM45,000 手术？全额覆盖！每月只需支付 RM50，这只是我旧保险费的一小部分，却让我完全安心。",
        videoUrl: "https://www.youtube.com/watch?v=L8HD1zJEHjc",
        image: "image25.jpg"
    },
    {
        name: "Niena",
        role: "26, Johor",
        quote: "面对 RM39,000 的意外账单非常可怕，但 WeKongsi 顺利处理了一切。零压力，完全安心。",
        videoUrl: "https://www.youtube.com/watch?v=FLR8F-Ohuj8&t=237s",
        image: "image26.jpg"
    },
    {
        name: "Syafiq",
        role: "29, Kelantan",
        quote: "我不再使用昂贵的保险，当我需要时，我 RM42,000 的脚踝手术得到了全力支持。WeKongsi 给了我更好的价值和全面的支持。",
        videoUrl: "https://www.youtube.com/watch?v=u_IKmL7MA5E&t=11s",
        image: "image27.jpg"
    },
    {
        name: "Ainul & Abdul",
        role: "35 & 42",
        quote: "起初我们有些怀疑，但当我们的孩子入院时，保证书很快就下来了。我们的疑虑变成了完全的信心！",
        videoUrl: "https://www.youtube.com/watch?v=9u0jeksr9Ew&t=10s",
        image: "image28.jpg"
    },
    {
        name: "Mohd Hizam",
        role: "推荐人",
        quote: "我的会员因严重食物中毒入院，立即得到了支持。看到索赔处理得这么快，证明了 WeKongsi 为我的社区带来了真正的价值。",
        image: "image29.jpg"
    },
    {
        name: "Puan Maslina",
        role: "会员",
        quote: "我的孩子发生了摩托车事故，但因为我们要一家八口都有保障，他们在私立医院得到了舒适、快速的治疗。We Kongsi 承担了一切——我们非常感激！",
        image: "image30.jpg"
    }
];
