// src/components/Map.js
import React from 'react';

const Map = () => {
    return (
        <section id="map" className="py-10">
            <h2 className="text-center text-2xl font-bold mb-6">Localização da Empresa</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153163!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzfCsDQyJzQwLjAiUyAxNDRyJzQwLjAiRQ!5e0!3m2!1spt-BR!2sbr!4v1616161616161!5m2!1spt-BR!2sbr"
                    width="600"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full"
                ></iframe>
            </div>
        </section>
    );
};

export default Map;

