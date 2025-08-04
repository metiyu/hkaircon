import React from 'react';
import { Truck, Wrench, Users, Shield, Clock, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Distribusi Produk & Logistik",
      description: "Pengiriman cepat dan andal di seluruh Jakarta dan sekitarnya dengan jaringan distribusi yang luas.",
      features: [
        "Pengiriman hari yang sama tersedia",
        "Lokasi gudang yang beragam", 
        "Penanganan profesional",
        "Pelacakan real-time"
      ]
    },
    {
      icon: Wrench,
      title: "Dukungan Teknis & Layanan Purna Jual",
      description: "Dukungan teknis komprehensif dari insinyur dan teknisi bersertifikat kami.",
      features: [
        "Hotline teknis 24/7",
        "Pemecahan masalah di lokasi",
        "Diagnostik jarak jauh",
        "Optimisasi performa"
      ]
    },
    {
      icon: Users,
      title: "Jaringan Mitra Instalasi",
      description: "Akses ke jaringan profesional instalasi bersertifikat kami untuk setup yang mulus.",
      features: [
        "Installer bersertifikat",
        "Jaminan kualitas",
        "Penjadwalan fleksibel",
        "Dukungan pasca-instalasi"
      ]
    },
    {
      icon: Shield,
      title: "Program Garansi & Pemeliharaan",
      description: "Cakupan garansi komprehensif dan program pemeliharaan preventif.",
      features: [
        "Opsi garansi diperpanjang",
        "Pemeliharaan terjadwal",
        "Panggilan layanan prioritas",
        "Jaminan ketersediaan suku cadang"
      ]
    }
  ];

  const locations = [
    {
      icon: MapPin,
      title: "Gudang Jakarta Pusat",
      address: "Jl. Sudirman No. 123, Central Jakarta 10220",
      coverage: "Jakarta Pusat & Selatan"
    },
    {
      icon: MapPin,
      title: "Pusat Distribusi Jakarta Utara", 
      address: "Jl. Pelabuhan Raya No. 456, North Jakarta 14250",
      coverage: "Jakarta Utara & Bekasi"
    },
    {
      icon: MapPin,
      title: "Fasilitas Jakarta Barat",
      address: "Jl. Puri Indah No. 789, West Jakarta 11610", 
      coverage: "Jakarta Barat & Tangerang"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selain distribusi, kami menyediakan layanan dukungan komprehensif untuk memastikan kepuasan lengkap Anda dari pembelian hingga pemeliharaan berkelanjutan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 hover:bg-blue-600 hover:scale-110 transition-all duration-300 group">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Jaringan Distribusi Kami</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => {
              const IconComponent = location.icon;
              return (
                <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 hover:scale-110 transition-all duration-300 group">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{location.title}</h4>
                  <p className="text-gray-600 mb-2">{location.address}</p>
                  <p className="text-sm text-blue-600 font-medium">Melayani: {location.coverage}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Dukungan Darurat 24/7</h3>
          </div>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ketika Anda membutuhkan bantuan segera, tim dukungan darurat kami tersedia sepanjang waktu untuk membantu menyelesaikan masalah kritis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
              <p className="text-white font-semibold">Hotline Darurat</p>
              <p className="text-blue-100">+62 21 5555 0999</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
              <p className="text-white font-semibold">Dukungan WhatsApp</p>
              <p className="text-blue-100">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;