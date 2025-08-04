import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">HK AIRCONINDO</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mitra terpercaya Jakarta dalam solusi AC premium sejak 2008. Produk berkualitas, layanan ahli, dan kepuasan pelanggan terjamin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Tentang Kami</button>
              <button onClick={() => scrollToSection('products')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Produk</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Kontak</button>
            </nav>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Sistem Split</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Sistem Ducted</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Sistem VRF/VRV</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Unit Portabel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Pendingin Industri</a></li>
            </ul>
          </div>

          <div className="animate-slide-in-right">
            <h4 className="text-lg font-semibold mb-4">Info Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Jl. Sudirman No. 123</p>
                  <p>Central Jakarta 10220</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 21 5555 0123</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@hkairconindo.co.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HK AIRCONINDO. Semua hak dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Syarat Layanan</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kebijakan Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;