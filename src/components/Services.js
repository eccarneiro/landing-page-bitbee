// src/components/Services.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const services = [
        {
            title: "BeeSpot",
            description: "Transformando Wi-Fi em uma ferramenta de Marketing Poderosa",
            link: "/servicos/BeeSpot" 
        },
        {
            title: "Magazine",
            description: "A Modernizaçã o da Publicação Digita", 
            link: "servicos/Magazine"
        },
        {
            title: "Boutique de Software",
            description: "Desenvolvimento de Software Personalizado",
            link: "/servicos/Boutique-de-Software" // Link para mais informações
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
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 relative">
                <div className="absolute inset-y-0 left-0 bg-black rounded-r-full h-full w-[200%] transform -translate-x-1/2 "></div> {/* Semi-círculo com fundo preto */}
                <Slider {...settings} className="relative z-10 h-full flex items-center justify-center pt-40">
                    {services.map((service, index) => (
                        <a 
                            href={service.link} 
                            className="flex flex-col items-center justify-center h-full p-5 text-bit-bee-yellow cursor-pointer pt-40" 
                            key={index}
                        >
                            <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                            <p className="text-lg text-center mb-4">{service.description}</p>
                        </a>
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
