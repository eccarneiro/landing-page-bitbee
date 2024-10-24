import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-5 absolute top-0 left-0 w-full text-bit-bee-yellow text-xl z-20">
            <div className="flex items-center">
                <img 
                    src="/imagens/logo.png" 
                    alt="Logo da Marca" 
                    className="h-16" 
                />
            </div>
            <nav>
                <ul className="flex space-x-9">
                    <li>
                        <a href="#services" className="hover:underline hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded">Serviços</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded">Sobre</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;