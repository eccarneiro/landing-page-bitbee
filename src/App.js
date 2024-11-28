import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; 
import { ParallaxProvider } from 'react-scroll-parallax';
import Technologies from './components/Technologies';
import StickyWhatsapp from './components/StickWhatsApp';


const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ParallaxProvider>
            <div>
                <Header onMenuToggle={(state) => setIsMenuOpen(state)} />
                <Carousel />
                <About />
                <Services />
                <Technologies />
                <Contact />
                <Footer /> 
                {!isMenuOpen && <StickyWhatsapp />}
            </div>
        </ParallaxProvider>
    );
};

export default App;
