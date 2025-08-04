import React from 'react';
import { Snowflake, Building2, Factory, Home, Truck } from 'lucide-react';

const Products = () => {
  const brands = [
    { name: "Daikin", description: "Presisi dan efisiensi Jepang", logo: "D", image: "public/daikin.png" },
    { name: "Midea", description: "Teknologi iklim canggih", logo: "M", image: "public/midea.png"},
    { name: "Changhong", description: "Solusi pendingin pintar", logo: "L", image: "public/changhong.png" },
    { name: "Aux", description: "Performa yang andal", logo: "P", image: "public/auxx.png"},
  ];

  const categories = [
    {
      icon: Home,
      title: "Sistem Split",
      description: "Sempurna untuk ruang residensial dan komersial kecil",
      features: ["Hemat energi", "Operasi senyap", "Instalasi mudah", "Kontrol jarak jauh"],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Building2,
      title: "Sistem Ducted",
      description: "Kontrol iklim komprehensif untuk bangunan besar",
      features: ["Cakupan seluruh bangunan", "Instalasi tersembunyi", "Kontrol zona", "Kelas profesional"],
      image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Factory,
      title: "Sistem VRF/VRV",
      description: "Aliran refrigeran variabel untuk efisiensi maksimum",
      features: ["Kontrol multi-zona", "Penghematan energi", "Pemanasan/pendinginan simultan", "Kelas komersial"],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Truck,
      title: "Unit Portabel",
      description: "Solusi pendingin fleksibel untuk kebutuhan sementara",
      features: ["Pendingin mobile", "Setup cepat", "Tidak perlu instalasi", "Berbagai kapasitas"],
      image: "https://images.pexels.com/photos/6045043/pexels-photo-6045043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Snowflake,
      title: "Pendingin Industri",
      description: "Pendingin tugas berat untuk aplikasi industri",
      features: ["Kapasitas tinggi", "Konstruksi kokoh", "Operasi 24/7", "Solusi kustom"],
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk & Merek Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami mendistribusikan sistem AC premium dari produsen paling terpercaya di dunia, memastikan kualitas dan keandalan untuk setiap aplikasi.
          </p>
        </div>

        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Merek Terpercaya yang Kami Distribusikan</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:transition-all duration-300 group-hover:scale-110">
                  {/* <span className="text-2xl font-bold text-white">{brand.logo}</span> */}
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-72 h-72 object-contain"></img>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{brand.name}</h4>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Layanan Kami</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">{category.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Butuh Bantuan Memilih AC yang Tepat?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Para ahli teknis kami siap membantu Anda memilih solusi AC yang sempurna untuk kebutuhan dan anggaran spesifik Anda.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="https://wa.me/6282111354111">
              Dapatkan Konsultasi Ahli
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;