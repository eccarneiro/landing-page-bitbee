import React from 'react';

const About = () => {
    return (
        <section className="bg-white text-black mb-10 -m-20">
            <div className="container mx-auto flex flex-col md:flex-row px-4">
                <div className="md:w-1/2 md:pr-10 mt-8 md:mt-0"> {/* Texto à esquerda */}
                    <h2 className="text-4xl font-bold text-center mb-6">Sobre nós</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        Na Bitbee, temos a paixão de transformar ideias em soluções de software inovadoras. 
                        Fundada com o objetivo de oferecer serviços de desenvolvimento de software de alta qualidade para os 
                        mercados brasileiro e norte-americano, nossa missão é entregar tecnologia personalizada e de impacto.
                    </p>
                    <p className="text-lg mb-4 leading-relaxed">
                        Nosso foco está em oferecer excelência, inovação e soluções sob medida, através de uma abordagem boutique
                        de desenvolvimento de software. Acreditamos em criar experiências digitais significativas, 
                        que resolvem desafios reais e ajudam nossos clientes a alcançar o sucesso.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Com sede no Brasil e uma visão global, nossa equipe de desenvolvedores talentosos trabalha de perto com os clientes 
                        para trazer suas visões à vida, seja criando novos aplicativos móveis, desenvolvendo plataformas web avançadas, ou 
                        ferramentas de marketing digital inovadoras. Nossos produtos principais, como o BeeSpot e o Magazine, 
                        refletem nosso compromisso com a inovação, transformando tecnologias cotidianas em ferramentas poderosas para negócios.
                    </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center"> {/* Imagem à direita */}
                    <img 
                        src="/imagens/imagem1.jpg" // Caminho da imagem
                        alt="Ilustração sobre a empresa" 
                        className="w-full h-auto rounded-lg shadow-lg" // Estilizando a imagem
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
