'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Projects />
            <Research />
            <Contact />
            <Footer />
        </>
    );
}
