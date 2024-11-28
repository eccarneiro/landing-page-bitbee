import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <section id="contact" className="text-white py-20 bg-bit-bee-yellow">
      <div className="mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center -mt-10">
          <img
            src="/imagens/contact-us.png"
            alt="Logo da Marca"
            className="h-16 md:h-20 mb-6"
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
            ENTRE EM CONTATO
          </h2>

          {/* Conteúdo principal */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {/* Formulário */}
            <div className="w-full md:w-1/2 lg:w-[800px]">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <form>
                  <div className="mb-6">
                    <label
                      className="flex text-lg md:text-2xl text-black font-medium mb-4"
                      htmlFor="name"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-700 bg-opacity-20 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="flex text-lg md:text-2xl text-black font-medium mb-4"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border border-gray-700 bg-opacity-20 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                      placeholder="Seu email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-lg font-medium text-black mb-4"
                      htmlFor="message"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="border border-gray-700 bg-opacity-20 bg-gray-900 text-white rounded-lg w-full p-3 transition focus:ring-2 focus:ring-bit-bee-yellow focus:outline-none"
                      rows="5"
                      placeholder="Sua mensagem"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-bit-bee-yellow text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg h-full flex flex-col">
                <h3 className="text-lg md:text-2xl font-bold mb-6 text-black text-center">
                  NOSSA LOCALIZAÇÃO
                </h3>
                <div className="flex-grow">
                  <Map className="w-full h-[300px] md:h-[500px] rounded-xl shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
