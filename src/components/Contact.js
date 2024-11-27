import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <section id='contact' className=" text-white py-20 bg-bit-bee-yellow">
       <div className="mx-auto text-center">
        <div className="flex justify-center -mt-10">
          <img src="/imagens/contact-us.png" alt="Logo da Marca" className="h-20 mb-10" />
        </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          ENTRE EM CONTATO
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
          
          <div className="w-[800px] h-[500px]">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form>
                <div className="mb-6">
                  <label
                    className="flex text-2xl text-black  font-medium mb-4"
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
                    className="flex text-2xl text-black font-medium mb-4"
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
                    className="block text-sm font-semibold mb-2"
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
                  className="bg-bit-bee-yellow text-black font-bold py-3 px-6 rounded-lg hover:bg-bit-bee-yellow transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          
          <div className="w-full md:w-1/2">
          
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-black flex justify-center">
                NOSSA LOCALIZAÇÃO
              </h3>
              <div className="flex-grow">
                <Map className="w-full h-full rounded-xl shadow-md" />
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
