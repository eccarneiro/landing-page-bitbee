import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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

    return (
        <div className="flex h-screen">
            <div className="w-1/2 relative overflow-hidden">
                <div 
                    className="absolute inset-y-0 left-0 rounded-r-full h-full w-[200%] transform -translate-x-1/2 bg-cover bg-center transition-all duration-500 ease-in-out"
                    style={{ 
                        backgroundImage: `url(${services[currentSlide].image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-70 rounded-r-full"></div>
                </div>
                <Slider {...settings} className="relative z-10 h-full pt-40">
                    {services.map((service, index) => (
                        <div key={index} className="h-full relative flex items-center justify-center">
                            <a 
                                href={service.link} 
                                className="flex flex-col items-center justify-center h-full p-5 text-bit-bee-yellow cursor-pointer pt-40" 
                            >
                                <h3 className="text-4xl font-bold text-center">{service.title}</h3>
                                <p className="text-lg text-center mb-4">{service.description}</p>
                            </a>
                        </div>
                    ))} 
                </Slider>
            </div>
            <div className="w-1/2 flex items-center justify-center p-10">
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