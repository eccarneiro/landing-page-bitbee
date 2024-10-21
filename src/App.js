import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; 

const App = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <About />
            <Services />
            <Contact />
            <Footer /> 
        </div>
    );
};

export default App;