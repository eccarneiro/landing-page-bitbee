import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from 'react-scroll-parallax';
import { FaWhatsapp } from 'react-icons/fa';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blurAmount, setBlurAmount] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [textBlur, setTextBlur] = useState(10);
    const fullText = 'Transformamos ideias em soluções personalizadas e inovadoras BitBee.';

    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    const slides = [
        { image: "imagens/bee-1.jpg" },
        { image: "imagens/bee-2.jpg" },
        { image: "imagens/bee-3.jpg" }
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextBlur(0);
        }, 2000);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = window.innerHeight;
            const blur = Math.min(scrollTop / maxScroll * 10, 10);
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.5);
            setBlurAmount(blur);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Parallax speed={-10}>
            <div id='home' className="relative w-full h-screen">
               
                <Slider {...settings} className="h-full">
                    {slides.map((slide, index) => (
                        <div className="relative w-full h-full overflow-hidden" key={index}>
                            <img
                                src={slide.image}
                                className="w-full h-[100vh] object-cover object-top transition-all duration-500 ease-in-out"
                                style={{ filter: `blur(${blurAmount}px)`, opacity: opacity }}
                                alt={`Imagem ${index + 1}`}
                            />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </div>
                    ))}
                </Slider>

                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <h1
                        className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 text-bit-bee-yellow transition-all duration-2000"
                        style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                    >
                        BitBee
                    </h1>
                    <h2>
                        <span
                            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-2000"
                            style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                        >
                            Sua boutique de software
                        </span>
                    </h2>
                    <h2
                        className="text-lg md:text-xl lg:text-3xl font-bold mt-4 text-white transition-all duration-2000"
                        style={{ filter: `blur(${textBlur}px)`, transition: 'filter 1s ease-out' }}
                    >
                        {fullText}
                    </h2>
                    <div className="mt-5">
                        <button
                            className="flex items-center bg-green-500 font-semibold text-white text-lg md:text-xl lg:text-2xl py-3 px-6 md:py-4 md:px-7 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600"
                            style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                            onClick={() => window.open('https://wa.me/yourphone', '_blank')}
                        >
                            <FaWhatsapp className="mr-2 text-xl md:text-2xl lg:text-3xl" />
                            Fale Conosco no WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Carousel;
