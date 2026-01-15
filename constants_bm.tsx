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
    TrendingUp,
    Building2,
    Banknote,
    Calendar,
    Shield,
    Baby,
    Microscope
} from 'lucide-react';
import { ChartData, FeatureItem, Testimonial, PlanItem } from './types';

export const HERO_OBJECTIONS = [
    "Terlalu mahal",
    "Saya rasa tak penting sekarang",
    "Saya tak faham cara ia berfungsi",
    "Saya masih muda dan sihat",
    "Terma dan syarat terlalu rumit"
];

export const PAIN_POINTS = [
    {
        title: "Kos Rawatan Semakin Meningkat",
        description: "Inflasi perubatan meningkat setiap tahun, melebihi kenaikan pendapatan purata.",
        icon: TrendingUp,
        color: "text-red-500",
        bgColor: "bg-red-50"
    },
    {
        title: "Hospital Swasta Terlalu Mahal",
        description: "Prosedur yang nampak ringkas pun boleh menelan kos ribuan ringgit, sampai habis simpanan sekelip mata.",
        icon: DollarSign,
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        title: "Hospital Kerajaan Terlalu Sesak",
        description: "Waktu menunggu yang lama boleh memburukkan keadaan yang memerlukan rawatan segera.",
        icon: Building2,
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        title: "Ramai Kanak-kanak Tiada Perlindungan",
        description: "Ramai keluarga membiarkan anak-anak tanpa perlindungan kerana premium insurans yang tinggi.",
        icon: Baby,
        color: "text-rose-500",
        bgColor: "bg-rose-50"
    }
];

export const FEATURES: FeatureItem[] = [
    { title: "Ketelusan Mutlak", description: "Ke mana setiap sen anda pergi, semuanya jelas terpapar.", icon: FileSearch },
    { title: "Mampu Milik Untuk Semua", description: "Sumbangan bulanan dihadkan kepada RM50 sahaja.", icon: DollarSign },
    { title: "Model Tanpa Untung", description: "Tiada caj tersembunyi. Setiap sen disalurkan untuk bantuan perubatan sebenar.", icon: Heart },
    { title: "Adil & Saksama", description: "Kadar sumbangan yang sama rata, tanpa mengira umur.", icon: Scale },
    { title: "Boleh Dipercayai", description: "Sumbangan anda 100% untuk komuniti, bukan untuk pelaburan atau keuntungan.", icon: ShieldCheck },
    { title: "Liputan Seluruh Malaysia", description: "Akses ke lebih 250 hospital panel dan 4000 klinik di seluruh negara.", icon: MapPin },
];

export const COVERAGE_ITEMS = [
    { name: "Kemasukan Hospital & Pembedahan", icon: Shield },
    { name: "Bilik & Penginapan", icon: Bed },
    { name: "Unit Rawatan Rapi (ICU)", icon: Activity },
    { name: "Elaun Tunai Harian (Hosp. Kerajaan)", icon: Banknote },
    { name: "Ujian Pra & Pasca Diagnostik", icon: Microscope },
    { name: "Rawatan Susulan Pasca-Hospital", icon: Calendar },
    { name: "Rawatan Kecederaan Kemalangan", icon: Truck },
    { name: "Khairat Kematian", icon: Heart },
    { name: "Rawatan Kanser Pesakit Luar", icon: FileSearch },
    { name: "Manfaat Pesakit Luar Bersyarat RM10", icon: Stethoscope },
];

export const CO_PAYMENT_CONDITIONS = [
    "Demam & Selesema",
    "Masalah Gastrik",
    "Jangkitan Resdung/ENT",
    "Bronkitis",
    "Luka Kecil & Terseliuh"
];

export const CO_PAYMENT_COVERED = [
    "Yuran Konsultasi",
    "Yuran Anestesia",
    "Bekalan & Perkhidmatan Perubatan (Peralatan, Ubat-ubatan, Ujian Makmal)"
];

export const CO_PAYMENT_NOT_COVERED = [
    "Rawatan yang tidak diperlukan secara perubatan",
    "Bekalan & peralatan perubatan yang tidak dipreskripsi",
    "Barangan Keselesaan Peribadi",
    "Suplemen"
];

export const CHART_DATA: ChartData[] = [
    { month: 'Jan', amount: 39.91 },
    { month: 'Feb', amount: 44.73 },
    { month: 'Mac', amount: 43.77 },
    { month: 'Apr', amount: 22.71 },
    { month: 'Mei', amount: 46.35 },
    { month: 'Jun', amount: 43.48 },
    { month: 'Jul', amount: 18.56 },
    { month: 'Ogo', amount: 31.72 },
    { month: 'Sep', amount: 47.69 },
    { month: 'Okt', amount: 46.84 },
    { month: 'Nov', amount: 48.81 },
    { month: 'Dis', amount: 49.37 },
];

export const MEMBERSHIP_PLANS: PlanItem[] = [
    { name: "Bulanan", price: "RM40", period: "/bulan", details: "Perlindungan Paling Mampu Milik. Kurang daripada harga sekali minum kopi sebulan, memberi anda akses penuh dan fleksibiliti mutlak." },
    { name: "Suku Tahunan", price: "RM100", period: "/suku tahun", details: "Pilihan Penjimat Bijak. Jimat RM80 setiap tahun berbanding pelan bulanan." },
    { name: "Tahunan", price: "RM360", period: "/tahun", details: "Nilai Terbaik! Jimat RM120 serta-merta—bersamaan 3 bulan perlindungan PERCUMA.", highlight: true },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Muhammad Hanif",
        role: "Kelantan",
        quote: "Bil klinik RM75 saya turun jadi RM10 je! Inilah kuasa berkongsi—betul-betul rasa lega setiap kali jumpa doktor.",
        receipt: true,
        image: "image23.jpg"
    },
    {
        name: "Xin Min",
        role: "19, Perak",
        quote: "Pembedahan RM15,000 yang saya perlukan berjaya ditanggung oleh WeKongsi. Ia betul-betul kurangkan beban mak ayah saya—komuniti ni memang terbaik.",
        videoUrl: "https://www.youtube.com/watch?v=u2ZxoJHv0oc&t=6s",
        image: "image24.jpg"
    },
    {
        name: "Honey",
        role: "27, Perak",
        quote: "Pembedahan RM45,000 saya? Ditanggung sepenuhnya! Memang tenang hati, cuma bayar RM50 sebulan, jauh lebih murah dari insurans lama saya.",
        videoUrl: "https://www.youtube.com/watch?v=L8HD1zJEHjc",
        image: "image25.jpg"
    },
    {
        name: "Niena",
        role: "26, Johor",
        quote: "Bila kena bil kemalangan RM39,000 memang takut, tapi WeKongsi uruskan semuanya dengan lancar. Tak ada stres, hati pun tenang.",
        videoUrl: "https://www.youtube.com/watch?v=FLR8F-Ohuj8&t=237s",
        image: "image26.jpg"
    },
    {
        name: "Syafiq",
        role: "29, Kelantan",
        quote: "Saya tukar dari insurans mahal, dan bila saya perlu, pembedahan buku lali RM42,000 saya ditanggung sepenuhnya. WeKongsi bagi nilai dan sokongan padu.",
        videoUrl: "https://www.youtube.com/watch?v=u_IKmL7MA5E&t=11s",
        image: "image27.jpg"
    },
    {
        name: "Ainul & Abdul",
        role: "35 & 42",
        quote: "Mula-mula ragu, tapi bila anak masuk wad, Surat Jaminan (GL) dapat cepat. Keraguan kami terus bertukar jadi yakin sepenuhnya!",
        videoUrl: "https://www.youtube.com/watch?v=9u0jeksr9Ew&t=10s",
        image: "image28.jpg"
    },
    {
        name: "Mohd Hizam",
        role: "Perujuk",
        quote: "Ahli saya masuk wad sebab keracunan makanan teruk, dan bantuan memang pantas. Tuntutan selesai cepat bukti WeKongsi memang beri nilai sebenar pada komuniti.",
        image: "image29.jpg"
    },
    {
        name: "Puan Maslina",
        role: "Ahli",
        quote: "Anak saya kemalangan motor, tapi sebab kami sekeluarga 8 orang dilindungi, dapat rawatan selesa dan cepat di hospital swasta. WeKongsi tanggung semua—syukur sangat!",
        image: "image30.jpg"
    }
];
