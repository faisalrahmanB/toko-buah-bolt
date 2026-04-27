import { Heart, Truck, ShieldCheck, Leaf, Eye, Target, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Dipilih dengan Cinta',
    desc: 'Setiap buah dipilih secara manual untuk memastikan kualitas terbaik sampai ke tangan Anda.',
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    desc: 'Dari kebun ke rumah Anda dalam waktu singkat, menjaga kesegaran tetap optimal.',
  },
  {
    icon: ShieldCheck,
    title: 'Jaminan Kualitas',
    desc: 'Buah tidak segar? Kami ganti tanpa syarat. Kepuasan Anda adalah prioritas kami.',
  },
  {
    icon: Leaf,
    title: 'Dari Petani Lokal',
    desc: 'Kami bekerja langsung dengan petani lokal untuk mendapatkan buah terbaik dan mendukung ekonomi lokal.',
  },
];

const milestones = [
  { year: '2020', text: 'Toko Buah Segar didirikan dengan toko pertama di Jakarta Selatan.' },
  { year: '2021', text: 'Bermitra dengan 15 petani lokal di Jawa dan Sumatera.' },
  { year: '2022', text: 'Meluncurkan layanan pengiriman online ke seluruh Jabodetabek.' },
  { year: '2023', text: 'Melayani lebih dari 5.000 pelanggan setia dengan rating 4.9.' },
  { year: '2024', text: 'Ekspansi ke 5 kota besar di Indonesia.' },
];

export default function AboutPage() {
  return (
    <section className="pt-24 pb-20 sm:pb-24 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tentang Toko Buah Segar
          </h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar toko buah — kami adalah jembatan antara petani lokal dan meja makan keluarga Indonesia.
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Visi</h2>
            <p className="text-gray-500 leading-relaxed">
              Menjadi penyedia buah segar terpercaya di Indonesia yang menghubungkan petani lokal
              langsung dengan konsumen, memastikan setiap keluarga menikmati buah berkualitas
              tinggi dengan harga yang adil.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Misi</h2>
            <ul className="space-y-3 text-gray-500 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                Menyediakan buah segar berkualitas tinggi yang dipetik pada waktu yang tepat.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                Mendukung petani lokal dengan pembelian langsung dan harga yang adil.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                Menghadirkan pengalaman belanja buah yang mudah, cepat, dan menyenangkan.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                Menjaga keberlanjutan lingkungan melalui pengemasan ramah lingkungan.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50/50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Mengapa Memilih Kami?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-200">
                  <f.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline / Sejarah */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-green-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Perjalanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Sejarah Singkat
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-5 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-green-200 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-sm font-bold text-green-600">{m.year}</span>
                <p className="mt-1 text-gray-600 leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '5.000+', label: 'Pelanggan Setia', icon: Users },
              { value: '50+', label: 'Petani Mitra', icon: Leaf },
              { value: '8+', label: 'Kota Terlayani', icon: Truck },
              { value: '4.9', label: 'Rating Pelanggan', icon: Heart },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-green-200" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-green-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
