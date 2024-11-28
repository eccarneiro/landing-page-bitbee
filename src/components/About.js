import React from 'react';

const About = () => {
    return (
        <>
        <section id='about'>
        <div>
            <h1 className=" text-2xl text-center mt-28 font-semibold lg:text-4xl  text-black">SOBRE NÓS </h1>
        </div>
        <div 
            className="relative bg-center mx-auto max-w-lg items-center sm:mt-10 lg:max-w-6xl gap-8 my-20" 
        >    
            <div className="relative z-10 flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-8 px-4 pt-0 ">
                
                
                <div className="rounded-3xl shadow-2xl bg-bit-bee-yellow p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-xl font-semibold text-black">PROFISSIONALISMO</h3>
                    <div className="flex justify-center">
                    <img src="/imagens/professor.png" alt="Logo da Marca" className="h-14" />
                    </div>
                    <p className="text-base/7 transition-colors duration-500">Nossa equipe combina expertise técnica com uma abordagem inovadora e focada em resultados.</p>
                </div>

                
                <div className="rounded-3xl shadow-2xl bg-bit-bee-yellow p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-xl font-semibold text-black">INOVAÇÃO</h3>
                    <div className="flex justify-center mt-0 mb-0">
                    <img src="/imagens/foguete.png" alt="Logo da Marca" className="h-14" />
                    </div>
                    <p className="text-base/7 transition-colors duration-500">Criamos soluções personalizadas com tecnologia de ponta, atendendo às necessidades específicas de cada cliente.</p>
                </div>

               
                <div className="rounded-3xl shadow-2xl bg-bit-bee-yellow p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:scale-105 h-64 flex flex-col justify-between">
                    <h3 className="flex justify-center text-xl font-semibold text-black">COMPROMETIMENTO</h3>
                    <div className="flex justify-center mt-0 mb-0">
                    <img src="/imagens/apoio-suporte.png" alt="Logo da Marca" className="h-14" />
                    </div>
                    <p className="text-base/7 transition-colors duration-500">Nossa equipe alia expertise técnica e inovação para gerar resultados eficazes.</p>
                </div>

            </div>
        </div>
        </section>
        
        </>
    );
};

export default About;
