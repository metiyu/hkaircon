import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 821 1135 4111</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@hkairconindo.co.id</span>
              </div> */}
            </div>
            <div className="hidden sm:block">
              <span>Sen-Sab: 09.00-17.00</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-300 cursor-pointer">HK AIRCONINDO</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Beranda</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Tentang Kami</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Produk</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Layanan</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Mengapa Kami</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"><a href="https://wa.me/6282111354111">Hubungi Kami!</a></button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:scale-110 transition-transform duration-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Tentang Kami</button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Produk</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Mengapa Kami</button>
              <button className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"><a href="https://wa.me/6282111354111">Hubungi Kami!</a></button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;