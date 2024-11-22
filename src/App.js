import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; 
import { ParallaxProvider } from 'react-scroll-parallax';
import Technologies from './components/Technologies';

const App = () => {
    return (
        <ParallaxProvider>
             <div>
                <Header />
                <Carousel />
                <About />
                <Services />
                <Technologies />
                <Contact />
                <Footer /> 
            </div>
        </ParallaxProvider>
       
    );
};

export default App;