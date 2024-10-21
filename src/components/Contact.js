// src/components/Contact.js
import React from 'react';
import Map from './Map';

const Contact = () => {
    return (
        <section className="bg-gray-100 text-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
                <div className="flex flex-col md:flex-row justify-between items-stretch">
                    <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="name">Nome</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="border border-gray-300 rounded-lg w-full p-2" 
                                        placeholder="Seu nome" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="border border-gray-300 rounded-lg w-full p-2" 
                                        placeholder="Seu email" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="message">Mensagem</label>
                                    <textarea 
                                        id="message" 
                                        className="border border-gray-300 rounded-lg w-full p-2" 
                                        rows="4" 
                                        placeholder="Sua mensagem" 
                                        required 
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="bg-bit-bee-yellow text-white font-bold py-2 px-4 rounded-lg hover:bg-bit-bee-yellow-dark"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-4">
                        <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">Nossa Localização</h3>
                            <div className="flex-grow"> 
                                <Map className="w-full h-full rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;