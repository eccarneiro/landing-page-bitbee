import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <section id='contact' className=" text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-bit-bee-yellow mb-12">
          Entre em Contato
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <form>
                <div className="mb-6">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="name"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-700 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-700 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                    placeholder="Seu email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="message"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-700 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                    rows="5"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-bit-bee-yellow text-black font-bold py-3 px-6 rounded-lg hover:bg-bit-bee-yellow-dark transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-bit-bee-yellow">
                Nossa Localização
              </h3>
              <div className="flex-grow">
                <Map className="w-full h-full rounded-xl shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
