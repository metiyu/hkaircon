import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/public/checking-conditioner.jpg"
          alt="Sistem AC modern"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 animate-fade-in"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-slide-up">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-delay-1">
            Mitra Terpercaya Anda dalam
            <span className="text-white"> </span>
            <span className="text-white">Kebutuhan AC Sehari-hari</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in-delay-2">
            Air Conditioner Specialist Servis/Jual/Perbaikan
          </p>

          <div className="mb-8 animate-fade-in-delay-3">
            <span className="text-lg text-white leading-relaxed">
              Dengan lebih dari 15 tahun keunggulan di industri,
            </span>
            <span className="text-lg text-white leading-relaxed font-bold"> HK AIRCONINDO
            </span>
            <span className="text-lg text-white leading-relaxed"> telah memantapkan diri sebagai distributor AC terkemuka di Jakarta. Kami melayani klien residensial, komersial, dan industri dengan komitmen yang tak tergoyahkan terhadap kualitas, keandalan, dan kepuasan pelanggan di seluruh wilayah DKI Jakarta.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-xl"
            >
              Jelajahi Produk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;