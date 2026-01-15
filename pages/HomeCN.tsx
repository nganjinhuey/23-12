import React from 'react';
import Header from '../components/cn/Header';
import Hero from '../components/cn/Hero';
import UnprotectedStats from '../components/cn/UnprotectedStats';
import PainPoints from '../components/cn/PainPoints';
import Features from '../components/cn/Features';
import HospitalNetwork from '../components/cn/HospitalNetwork';
import Coverage from '../components/cn/Coverage';
import Impact from '../components/cn/Impact';
import Pricing from '../components/cn/Pricing';
import HowItWorks from '../components/cn/HowItWorks';
import Partners from '../components/cn/Partners';
import Testimonials from '../components/cn/Testimonials';
import Footer from '../components/cn/Footer';

const HomeCN: React.FC = () => {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Header />
            <main>
                <Hero />
                <UnprotectedStats />
                <PainPoints />
                <Features />
                <Coverage />
                <HospitalNetwork />
                <Impact />
                <Pricing />
                <HowItWorks />
                <Partners />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default HomeCN;
