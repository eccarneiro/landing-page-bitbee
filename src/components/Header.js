import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-5  bg-black text-bit-bee-yellow text-xl">
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
                        <a href="#services" className="hover:underline transition duration-200">Serviços</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline transition duration-200">Sobre</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline transition duration-200">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
