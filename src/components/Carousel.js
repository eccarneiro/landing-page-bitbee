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
    const fullText = 'TRANSFORMAMOS IDEIAS EM SOLUÇÕES PERSONALIZADAS E INOVADORAS';

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
        { image: "imagens/fotografia.jpg" },
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextBlur(0);
        }, 2000);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = window.innerHeight;
            const blur = Math.min(scrollTop / maxScroll * 10, 10);
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 1);
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

                
                <div  className="absolute inset-0 flex flex-col items-center md:items-start px-4 lg:ml-28 justify-center text-center md:text-left z-10">
                    <h1
                        className="text-3xl md:text-4xl lg:text-7xl font-bold mb-0 text-bit-bee-yellow transition-all duration-2000"
                        style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                    >
                        BITBEE
                    </h1>
                    <h2>
                        <span
                            className="text-lg md:text-2xl lg:text-4xl font-bold text-bit-bee-yellow transition-all duration-2000"
                            style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                        >
                            SUA BOTIQUE DE SOFTWARE
                        </span>
                    </h2>
                    <h2
                        className="text-sm md:text-lg lg:text-2xl font-bold mt-4 break-words max-w-screen-md text-white transition-all duration-2000"
                        style={{ filter: `blur(${textBlur}px)`, transition: 'filter 1s ease-out' }}
                    >
                        {fullText}
                    </h2>
                    <div className="mt-5">
                        <button
                            className="flex items-center bg-green-500 font-semibold text-sm md:text-lg lg:text-xl mt-11 px-6 py-3 md:py-4 md:px-7 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600"
                            style={{ filter: `blur(${textBlur}px)`, transition: 'filter 0.5s ease-out' }}
                            onClick={() => window.open('https://wa.me/5562994946120?text=Olá,%20gostaria%20de%20conhecer%20a%20BitBee', '_blank')}
                        >
                            <FaWhatsapp className="mr-2 text-lg md:text-2xl lg:text-3xl" />
                            ENTRE EM CONTATO
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Carousel;
