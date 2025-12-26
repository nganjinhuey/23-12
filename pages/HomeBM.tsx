import React from 'react';
// Importing components from the duplicated 'bm' folder
import Header from '../components/bm/Header';
import Hero from '../components/bm/Hero';
import UnprotectedStats from '../components/bm/UnprotectedStats';
import PainPoints from '../components/bm/PainPoints';
import Features from '../components/bm/Features';
import HospitalNetwork from '../components/bm/HospitalNetwork';
import Coverage from '../components/bm/Coverage';
import Impact from '../components/bm/Impact';
import Pricing from '../components/bm/Pricing';
import HowItWorks from '../components/bm/HowItWorks';
import Partners from '../components/bm/Partners';
import Testimonials from '../components/bm/Testimonials';
import Footer from '../components/bm/Footer';

const HomeBM: React.FC = () => {
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

export default HomeBM;
