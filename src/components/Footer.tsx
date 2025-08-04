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
              <a href="https://linktr.ee/hk.aircond" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                {/* <Facebook className="h-5 w-5" /> */}
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linktree--Streamline-Simple-Icons" height="24" width="24">
                  <desc>
                    Linktree Streamline Icon: https://streamlinehq.com
                  </desc>
                  <title>Linktree</title>
                  <path d="m13.73635 5.85251 4.00467 -4.11665 2.3248 2.3808 -4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766 -2.3248 2.3338L12.0005 12.099l-5.74052 5.76852 -2.3248 -2.3248 4.22864 -4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248 -2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" fill="#ffffff" stroke-width="1"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/hk.aircond/" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/6282111354111" className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Whatsapp--Streamline-Simple-Icons" height="24" width="24">
                  <desc>
                    Whatsapp Streamline Icon: https://streamlinehq.com
                  </desc>
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-0.297 -0.149 -1.758 -0.867 -2.03 -0.967 -0.273 -0.099 -0.471 -0.148 -0.67 0.15 -0.197 0.297 -0.767 0.966 -0.94 1.164 -0.173 0.199 -0.347 0.223 -0.644 0.075 -0.297 -0.15 -1.255 -0.463 -2.39 -1.475 -0.883 -0.788 -1.48 -1.761 -1.653 -2.059 -0.173 -0.297 -0.018 -0.458 0.13 -0.606 0.134 -0.133 0.298 -0.347 0.446 -0.52 0.149 -0.174 0.198 -0.298 0.298 -0.497 0.099 -0.198 0.05 -0.371 -0.025 -0.52 -0.075 -0.149 -0.669 -1.612 -0.916 -2.207 -0.242 -0.579 -0.487 -0.5 -0.669 -0.51 -0.173 -0.008 -0.371 -0.01 -0.57 -0.01 -0.198 0 -0.52 0.074 -0.792 0.372 -0.272 0.297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 0.149 0.198 2.096 3.2 5.077 4.487 0.709 0.306 1.262 0.489 1.694 0.625 0.712 0.227 1.36 0.195 1.871 0.118 0.571 -0.085 1.758 -0.719 2.006 -1.413 0.248 -0.694 0.248 -1.289 0.173 -1.413 -0.074 -0.124 -0.272 -0.198 -0.57 -0.347m-5.421 7.403h-0.004a9.87 9.87 0 0 1 -5.031 -1.378l-0.361 -0.214 -3.741 0.982 0.998 -3.648 -0.235 -0.374a9.86 9.86 0 0 1 -1.51 -5.26c0.001 -5.45 4.436 -9.884 9.888 -9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-0.003 5.45 -4.437 9.884 -9.885 9.884m8.413 -18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 0.16 5.335 0.157 11.892c0 2.096 0.547 4.142 1.588 5.945L0.057 24l6.305 -1.654a11.882 11.882 0 0 0 5.683 1.448h0.005c6.554 0 11.89 -5.335 11.893 -11.893a11.821 11.821 0 0 0 -3.48 -8.413Z" fill="#ffffff" stroke-width="1"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Tentang Kami</button>
              <button onClick={() => scrollToSection('products')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Produk</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Kontak</button>
            </nav>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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