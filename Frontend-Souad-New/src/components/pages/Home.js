import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Projects from '../Projects'
import Footer from '../Footer'
import HeroSection from '../HeroSection';
import Experience from '../Experience'
import About from '../About';
import ContactSection from '../ContactSection'


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <About />
            <Projects />
            <Experience />
            <ContactSection />
            <Footer />
        </>
    )
}
export default Home