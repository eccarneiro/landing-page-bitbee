import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from 'react-scroll-parallax';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blurAmount, setBlurAmount] = useState(0);
    const [opacity, setOpacity] = useState(1);

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
        {
            image: "imagens/bee-1.jpg", 
            text: "Soluções Web Inovadoras"
        },
        {
            image: "imagens/bee-2.jpg", 
            text: "Transforme Seu Negócio"
        },
        {
            image: "imagens/bee-3.jpg", 
            text: "Tecnologia que Impulsiona"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = window.innerHeight;
            const blur = Math.min(scrollTop / maxScroll * 10, 10);
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.5); // Ajusta a opacidade
            setBlurAmount(blur);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Parallax speed={-10}>
            <div className="relative w-full h-screen">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-bit-bee-yellow z-10">
                    <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].text}</h2>
                    <p className="text-2xl text-bit-bee-yellow text-center font-bold">
                        Transformando ideias em soluções digitais inovadoras
                    </p>
                </div>
            </div>
        </Parallax>
    );
};

export default Carousel;