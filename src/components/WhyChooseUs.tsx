import React from 'react';
import { Package, Zap, Award, DollarSign, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Package,
      title: "Rangkaian Produk Luas",
      description: "Pilihan sistem AC yang luas dari merek global terkemuka untuk memenuhi setiap kebutuhan dan anggaran."
    },
    {
      icon: Zap,
      title: "Pengiriman Cepat",
      description: "Pengiriman hari yang sama tersedia di seluruh Jakarta dengan lokasi gudang strategis dan jaringan logistik kami."
    },
    {
      icon: Award,
      title: "Teknisi Bersertifikat",
      description: "Tim profesional HVAC bersertifikat kami memberikan panduan ahli dan dukungan teknis."
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description: "Harga terbaik dengan opsi pembayaran fleksibel dan diskon dealer eksklusif."
    },
    {
      icon: Clock,
      title: "Dukungan 24/7",
      description: "Dukungan darurat dan bantuan teknis sepanjang waktu saat Anda paling membutuhkannya."
    },
    {
      icon: Users,
      title: "Layanan Berpusat pada Pelanggan",
      description: "Pendekatan layanan personal dengan manajer akun khusus untuk klien komersial."
    }
  ];

  const stats = [
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "50,000+", label: "Pelanggan Puas" },
    { number: "500+", label: "Proyek Komersial" },
    { number: "24/7", label: "Dukungan Teknis" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih HK AIRCONINDO?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami telah membangun reputasi dengan memberikan nilai, layanan, dan keahlian luar biasa yang membedakan kami dari kompetisi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105 animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 mb-16 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Rekam Jejak Kami</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-white mb-2 hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Apa Kata Pelanggan Kami</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "HK AIRCONINDO memberikan layanan luar biasa untuk gedung kantor kami. Instalasi profesional dan dukungan purna jual yang hebat."
              </p>
              <div className="font-semibold text-gray-900">PT. Jakarta Sentral</div>
              <div className="text-sm text-gray-500">Klien Komersial</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Pengiriman cepat dan harga kompetitif. Teknisinya sangat membantu dalam menjelaskan fitur sistem."
              </p>
              <div className="font-semibold text-gray-900">Maria Sari</div>
              <div className="text-sm text-gray-500">Pelanggan Residensial</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Mitra yang andal untuk kebutuhan pendingin industri kami. Selalu mengirim tepat waktu dengan produk berkualitas."
              </p>
              <div className="font-semibold text-gray-900">CV. Industri Maju</div>
              <div className="text-sm text-gray-500">Klien Industri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;