import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "BeeSpot",
            description: "Transformando Wi-Fi em uma ferramenta de Marketing Poderosa",
            fullDescription: "A BeeSpot transforma a experiência de conexão Wi-Fi em uma poderosa ferramenta de marketing digital, ajudando seu negócio a aumentar a visibilidade e engajamento com os clientes.",
            image: "/imagens/bee-3.jpg", 
        },
        {
            title: "Magazine",
            description: "A Modernização da Publicação Digital",
            fullDescription: "O Magazine digitaliza a publicação de conteúdos de forma eficiente, criando uma nova maneira de interagir com o público, seja para marketing ou informações corporativas.",
            image: "/imagens/bee-3.jpg", 
            link: "/servicos/Magazine",
        },
        {
            title: "Semear",
            description: "Semeando oportunidades de negócios",
            fullDescription: "Com Semear, você encontra novas oportunidades de negócios com um processo de análise e recomendação de ideias inovadoras que podem transformar seu negócio.",
            image: "/imagens/bee-3.jpg", 
            link: "/servicos/Semear",
        },
        {
            title: "E-AGC",
            description: "Assembleias virtuais",
            fullDescription: "E-AGC oferece soluções completas para realizar assembleias virtuais com total segurança e facilidade de uso para todos os participantes.",
            image: "/imagens/bee-3.jpg",
            link: "/servicos/E-AGC",
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    const openModal = (service) => {
        setCurrentService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id='services' className=" px-4 mt-0">
            <h2 className="text-center text-4xl font-bold text-bit-bee-yellow mb-10">Nossos Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center w-full max-w-screen-xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{ minHeight: '300px' }} 
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                            style={{
                                backgroundImage: `url(${service.image})`, 
                                backgroundSize: 'cover', 
                                minHeight: '300px'  
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-lg mb-4">{service.description}</p>
                            <button
                                onClick={() => openModal(service)}
                                className="mt-4 text-lg font-bold text-bit-bee-yellow hover:underline"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-black p-8 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg relative">
                        <h3 className="text-3xl font-bold text-bit-bee-yellow mb-4">{currentService.title}</h3>
                        <p className="text-lg mb-4">{currentService.fullDescription}</p>
                        
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(currentService.fullDescription)}%20${encodeURIComponent(currentService.link)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center mt-4 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-full py-2 px-4 transition duration-300"
                        >
                            <FaWhatsapp className="mr-2 text-xl" />
                            Entrar em contato via WhatsApp
                        </a>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl hover:text-red-500"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
