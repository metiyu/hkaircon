import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Kantor Pusat",
      details: [
        "Jl. Sudirman No. 123",
        "Central Jakarta 10220",
        "Indonesia"
      ]
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      details: [
        "Utama: +62 21 5555 0123",
        "Darurat: +62 21 5555 0999",
        "WhatsApp: +62 812 3456 7890"
      ]
    },
    {
      icon: Mail,
      title: "Alamat Email",
      details: [
        "info@hkairconindo.co.id",
        "sales@hkairconindo.co.id",
        "support@hkairconindo.co.id"
      ]
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Sen-Jum: 08.00 - 18.00",
        "Sabtu: 08.00 - 14.00",
        "Minggu: Darurat Saja"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap menemukan solusi AC yang sempurna? Hubungi para ahli kami hari ini untuk konsultasi personal dan penawaran kompetitif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Hubungi Kami</h3>
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Perusahaan/Organisasi
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Nama perusahaan Anda"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Minat Layanan
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                >
                  <option value="general">Pertanyaan Umum</option>
                  <option value="residential">Sistem Residensial</option>
                  <option value="commercial">Solusi Komersial</option>
                  <option value="industrial">Pendingin Industri</option>
                  <option value="maintenance">Layanan Pemeliharaan</option>
                  <option value="support">Dukungan Teknis</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none"
                  placeholder="Silakan jelaskan kebutuhan Anda, detail proyek, atau pertanyaan spesifik yang Anda miliki..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-lg"
              >
                Kirim Pesan
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-blue-600 hover:scale-110 transition-all duration-300 group">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Jaminan Respon Cepat</h4>
              <p className="text-gray-600 leading-relaxed">
                Kami menjamin merespons semua pertanyaan dalam 2 jam selama jam kerja, dan dalam 24 jam di akhir pekan dan hari libur.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Kunjungi Lokasi Kami</h3>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Integrasi peta interaktif akan ada di sini</p>
              <p className="text-sm text-gray-500 mt-2">
                Lihat lokasi gudang dan pusat distribusi kami di seluruh Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;