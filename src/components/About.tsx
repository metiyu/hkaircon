import React from 'react';
import { Award, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Kualitas",
      description: "Kami mendistribusikan hanya sistem AC berkualitas tertinggi dari merek global terpercaya."
    },
    {
      icon: Target,
      title: "Keandalan", 
      description: "Komitmen kami terhadap layanan yang andal telah menjadikan kami distributor HVAC paling terpercaya di Jakarta."
    },
    {
      icon: Eye,
      title: "Inovasi",
      description: "Kami selalu mengikuti tren industri untuk menghadirkan teknologi kontrol iklim terdepan."
    },
    {
      icon: Heart,
      title: "Kepuasan Pelanggan",
      description: "Kenyamanan dan kepuasan Anda mendorong segala yang kami lakukan, dari penjualan hingga dukungan purna jual."
    }
  ];

  const milestones = [
    { year: "2008", achievement: "Mendirikan HK AIRCONINDO di Jakarta" },
    { year: "2012", achievement: "Menjadi distributor resmi untuk merek AC terkemuka" },
    { year: "2016", achievement: "Memperluas layanan ke sektor komersial dan industri" },
    { year: "2020", achievement: "Meluncurkan layanan dukungan teknis 24/7" },
    { year: "2023", achievement: "Mencapai 50.000+ pelanggan puas di seluruh Jakarta" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang HK AIRCONINDO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Memimpin dalam distribusi AC dengan keahlian, integritas, dan inovasi sejak 2008.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-stagger-children">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kisah Kami</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                HK AIRCONINDO didirikan dengan misi sederhana: memberikan akses kepada penduduk dan bisnis Jakarta terhadap solusi AC terbaik dunia. Yang dimulai sebagai perusahaan distribusi kecil telah berkembang menjadi salah satu mitra HVAC terpercaya di wilayah DKI Jakarta.
              </p>
              <p>
                Pemahaman mendalam kami tentang tantangan iklim DKI Jakarta, dikombinasikan dengan pengetahuan produk yang luas dan komitmen terhadap keunggulan layanan, telah memungkinkan kami membangun hubungan yang erat dengan ribuan pelanggan yang puas.
              </p>
              {/* <p>
                Hari ini, kami dengan bangga melayani klien residensial, komersial, dan industri di seluruh wilayah DKI Jakarta, menawarkan solusi komprehensif dari pemilihan produk hingga dukungan instalasi dan pemeliharaan berkelanjutan.
              </p> */}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pencapaian Utama</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                    {milestone.year}
                  </div>
                  <p className="text-gray-600 pt-1">{milestone.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Inti Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 hover:scale-110 transition-all duration-300 group">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Misi & Visi Kami</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-100 mb-3">Misi</h4>
              <p className="text-white leading-relaxed">
                Menyediakan solusi AC superior dan layanan luar biasa yang meningkatkan kenyamanan, produktivitas, dan kualitas hidup pelanggan kami di seluruh Jakarta dan sekitarnya.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-100 mb-3">Visi</h4>
              <p className="text-white leading-relaxed">
                Menjadi distributor HVAC paling terpercaya dan inovatif di Indonesia, menetapkan standar industri untuk kualitas, layanan, dan kepuasan pelanggan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;