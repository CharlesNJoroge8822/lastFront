import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gradient mb-4 hover:text-yellow-400 cursor-pointer">Njoroge</h2>
                    <p className="text-lg text-gray-200 hover:text-gray-400 transition duration-300">explore !      !</p>
                </div>
                <div className="flex space-x-8 mb-6 md:mb-0 justify-center md:justify-start">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-yellow-400 transform hover:scale-125 transition duration-300">
                        <FaInstagram size={32} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-yellow-400 transform hover:scale-125 transition duration-300">
                        <FaFacebookF size={32} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-yellow-400 transform hover:scale-125 transition duration-300">
                        <FaTwitter size={32} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-yellow-400 transform hover:scale-125 transition duration-300">
                        <FaGithub size={32} />
                    </a>
                </div>
                <div className="text-sm text-center md:text-right mt-4 md:mt-0">
                    <p className="text-gray-200">&copy; {new Date().getFullYear()} Njoroge</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
