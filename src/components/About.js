import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
    const items = [
        {
            title: "Profissionalismo",
            description: "Nosso time de profissionais e desenvolvedores combinam expertise técnica com uma abordagem inovadora e orientada a resultados."
        },
        {
            title: "Inovação",
            description: "Utilizando as melhores tecnologias de ponta, criamos produtos sob medida que atendam às necessidades específicas de cada cliente, independentemente do setor ou desafio."
        },
        {
            title: "Comprometimento",
            description: "Estamos comprometidos em entregar resultados excepcionais e superar as expectativas dos nossos clientes."
        }
    ];

    return (
        <Parallax speed={5}>
            <div id='about' className="relative flex flex-col min-h-screen p-8 md:p-16 lg:p-24 mt-28">
                <div className="relative z-10">
                    <p className="text-center text-lg lg:text-7xl font-bold text-bit-bee-yellow mb-10">
                        
                        Crie, inove e desenvolva conosco
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#13678A] bg-opacity-50  p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#13678A] hover:bg-opacity-90"
                            >
                                <div className="relative w-full" style={{ height: "300px" }}>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                                        <h2 className="text-2xl text-bit-bee-yellow font-bold mb-4 text-center">{item.title}</h2>
                                        <p className="text-lg text-white leading-relaxed text-center">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default About;
