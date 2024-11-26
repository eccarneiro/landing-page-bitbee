import React from 'react';

const About = () => {
    return (
        <>
        <div>
            <h1 id='about' className="text-center mt-32 font-semibold text-8xl text-bit-bee-yellow mb-6">Sobre nós</h1>
        </div>
        <div 
            className="relative bg-cover bg-center mx-auto max-w-lg items-center sm:mt-10 lg:max-w-6xl gap-8 my-20" 
        >    
            <div className="relative z-10 flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-8 px-4 py-8">
                
                
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-3xl font-semibold text-indigo-600">Profissionalismo</h3>
                    <p className="text-base/7 transition-colors duration-500">Nossa equipe combina expertise técnica com uma abordagem inovadora e focada em resultados.</p>
                </div>

                
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-3xl font-semibold text-indigo-600">Inovação</h3>
                    <p className="text-base/7 transition-colors duration-500">Criamos soluções personalizadas com tecnologia de ponta, atendendo às necessidades específicas de cada cliente.</p>
                </div>

               
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-3xl font-semibold text-indigo-600">Comprometimento</h3>
                    <p className="text-base/7 transition-colors duration-500">Nossa equipe alia expertise técnica e inovação para gerar resultados eficazes.</p>
                </div>

            </div>
        </div>
        </>
    );
};

export default About;
