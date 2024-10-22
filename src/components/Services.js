import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isColapse, setIsColapsed] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const sectionRef = useRef(null);
    const semicircleRef = useRef(null);
    const services = [
        {
            title: "BeeSpot",
            description: "Transformando Wi-Fi em uma ferramenta de Marketing Poderosa",
            link: "/servicos/BeeSpot",
            image: "https://investorcp.com/wp-content/webp-express/webp-images/uploads/2020/03/startup-computador.jpg.webp"
        },
        {
            title: "Magazine",
            description: "A Modernização da Publicação Digital", 
            link: "servicos/Magazine",
            image: "https://i0.wp.com/carreiras.pucminas.br/med/2023/04/pessoas-trabalhando-em-escritorio-de-startup-scaled.jpg?resize=1100%2C700&ssl=1"
        },
        {
            title: "Boutique de Software",
            description: "Desenvolvimento de Software Personalizado",
            link: "/servicos/Boutique-de-Software",
            image: "https://investorcp.com/wp-content/webp-express/webp-images/uploads/2020/03/startup-computador.jpg.webp"
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsColapsed(true);
                        setTimeout(() => setShowContent(true), 1000);
                    }, 500);
                } else {
                    setIsColapsed(false);
                    setShowContent(false);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    
    return (
        <div ref={sectionRef} className="flex h-screen relative overflow-hidden">
            <div 
                ref={semicircleRef}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                    isColapse 
                        ? 'w-[75%] -translate-x-1/3 rounded-r-full' 
                        : 'w-full'
                }`}
                style={{ 
                    backgroundImage: `url(${services[currentSlide].image})`,
                }}
            >
                <div className={`absolute inset-0 bg-black opacity-70 transition-all duration-1000 ${isColapse ? 'rounded-r-full' : ''}`}></div>
            </div>
            <div className={`w-1/2 relative overflow-hidden transition-all duration-1000 ${isColapse ? 'opacity-100' : 'opacity-0'}`}>
                <Slider {...settings} className="relative z-10 h-full pt-40">
                    {services.map((service, index) => (
                        <div key={index} className="h-full relative flex items-center justify-center">
                            <a 
                                href={service.link} 
                                className={`flex flex-col items-center justify-center h-full p-5 text-bit-bee-yellow cursor-pointer pt-40 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h3 className="text-4xl font-bold text-center">{service.title}</h3>
                                <p className="text-lg text-center mb-4">{service.description}</p>
                            </a>
                        </div>
                    ))} 
                </Slider>
            </div>
            <div className={`w-1/2 flex items-center justify-center p-10 transition-all duration-1000 ${isColapse? 'opacity-100' : 'opacity-0'}`}>
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-bit-bee-yellow">Nossos Serviços</h2>
                    <p className="text-lg text-black">
                        Oferecemos uma variedade de serviços para atender às suas necessidades. 
                        Entre em contato para saber mais sobre como podemos ajudar seu negócio a crescer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;