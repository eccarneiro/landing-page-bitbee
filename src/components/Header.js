import React, { useState, useEffect } from 'react';
import { FaBars, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

const Header = ({ onMenuToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        const newMenuState = !isMenuOpen;
        setIsMenuOpen(newMenuState);
        onMenuToggle(newMenuState);
    };

    return (
        <header
            className={`flex items-center justify-between p-5 w-full h-20 text-bit-bee-yellow text-xl z-20 fixed top-0 left-0 transition-all duration-300 ${
                isScrolled
                    ? 'bg-black bg-opacity-90 backdrop-blur-md'
                    : 'bg-black bg-opacity-0'
            }`}
        >
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
                        <a
                            href="#home"
                            className="text-white font-semibold transition duration-200 py-2 px-5 rounded hover:text-bit-bee-yellow hover:underline"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="text-white font-semibold transition duration-200 py-2 px-5 rounded hover:text-bit-bee-yellow hover:underline"
                        >
                            SERVIÇOS
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-white font-semibold transition duration-200 py-2 px-5 rounded hover:text-bit-bee-yellow hover:underline"
                        >
                            SOBRE
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-white font-semibold transition duration-200 py-2 px-5 rounded hover:text-bit-bee-yellow hover:underline"
                        >
                            CONTATO
                        </a>
                    </li>
                </ul>
            </nav>

            <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center p-2 bg-bit-bee-yellow text-black rounded-full"
            >
                <FaBars size={24} />
            </button>

            <div
                className={`md:hidden fixed top-0 right-0 w-4/5 h-full bg-black bg-opacity-90 text-white transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 z-50`}
            >
                <div className="p-5 flex flex-col h-full">
                    <button
                        onClick={toggleMenu}
                        className="self-end text-white text-2xl mb-5"
                    >
                        <FaTimes />
                    </button>

                    <ul className="flex flex-col space-y-5 mb-10">
                        <li>
                            <a
                                href="#home"
                                onClick={toggleMenu}
                                className="text-lg text-white hover:text-bit-bee-yellow"
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={toggleMenu}
                                className="text-lg text-white hover:text-bit-bee-yellow"
                            >
                                SERVIÇOS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={toggleMenu}
                                className="text-lg text-white hover:text-bit-bee-yellow"
                            >
                                SOBRE
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={toggleMenu}
                                className="text-lg text-white hover:text-bit-bee-yellow"
                            >
                                CONTATO
                            </a>
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <div className="flex items-center justify-center space-x-5 mb-5">
                            <a
                                href="https://www.instagram.com/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-bit-bee-yellow hover:text-white"
                            >
                                <FaInstagram size={28} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-bit-bee-yellow hover:text-white"
                            >
                                <FaLinkedin size={28} />
                            </a>
                        </div>

                        <button
                            onClick={() => {
                                window.open('https://wa.me/5599999999999', '_blank');
                            }}
                            className="w-full bg-bit-bee-yellow text-black py-3 rounded-md text-lg font-bold hover:bg-opacity-80"
                        >
                            Entrar em Contato
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
