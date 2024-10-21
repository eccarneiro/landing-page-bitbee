// src/components/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentIndex(next), // Atualiza o índice atual
    };

    const slides = [
        {
            image: "https://investorcp.com/wp-content/webp-express/webp-images/uploads/2020/03/startup-computador.jpg.webp", // URL da imagem 1
            text: "Soluções Web Inovadoras"
        },
        {
            image: "https://i0.wp.com/carreiras.pucminas.br/med/2023/04/pessoas-trabalhando-em-escritorio-de-startup-scaled.jpg?resize=1100%2C700&ssl=1", // URL da imagem 2
            text: "Transforme Seu Negócio"
        },
        {
            image: "https://t.ctcdn.com.br/_RIjAaletov-hjASvjC7H0T9tzE=/1200x675/smart/i493384.jpeg", // URL da imagem 3
            text: "Tecnologia que Impulsiona"
        }
    ];

    return (
        <div className="relative w-full h-screen">
            <Slider {...settings} className="h-full">
                {slides.map((slide, index) => (
                    <div className="relative w-full h-full" key={index}>
                        <img 
                            src={slide.image} 
                            className="w-full h-[85vh] object-cover" // Ajustando a altura da imagem
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
    );
};

export default Carousel;
