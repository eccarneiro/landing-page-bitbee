import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center justify-between p-5 absolute top-0 left-0 w-full text-bit-bee-yellow text-xl z-20">
            <div className="flex items-center">
                <img 
                    src="/imagens/logo.png" 
                    alt="Logo da Marca" 
                    className="h-16" 
                    href="#home"
                />
            </div>
            
            
            <nav className="hidden md:block">
                <ul className="flex space-x-9 mr-10">
                    <li>
                        <a href="#services" className="bg-bit-bee-yellow text-black font-semibold transition duration-200 py-2 px-5 rounded hover:bg-opacity-80">Serviços</a>
                    </li>
                    <li>
                        <a href="#about" className="bg-bit-bee-yellow text-black font-semibold transition duration-200 py-2 px-5 rounded hover:bg-opacity-80">Sobre</a>
                    </li>
                    <li>
                        <a href="#contact" className="bg-bit-bee-yellow text-black font-semibold transition duration-200 py-2 px-5 rounded hover:bg-opacity-80">Contato</a>
                    </li>
                </ul>
            </nav>

            
            <button 
                onClick={toggleMenu} 
                className="md:hidden flex items-center justify-center p-2 bg-bit-bee-yellow text-black rounded-full">
                <FaBars size={24} />
            </button>

            
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-bit-bee-yellow p-5`}>
                <ul className="flex flex-col space-y-5">
                    <li>
                        <a href="#services" className="text-black hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded ">Serviços</a>
                    </li>
                    <li>
                        <a href="#about" className="text-black hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded">Sobre</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-black hover:bg-black hover:bg-opacity-20 transition duration-200 p-2 rounded">Contato</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
