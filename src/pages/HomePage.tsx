import { ArrowDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

function formatRupiah(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function HomePage() {
  const { products, loading, error } = useProducts();
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Segar Setiap Hari
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Kesegaran Alam{' '}
            <span className="text-green-500 relative">
              Langsung
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-green-200"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C50 1 150 1 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            ke Meja Anda
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Kami menyediakan buah-buahan pilihan terbaik dari petani lokal, dipetik segar dan
            dikirim langsung ke rumah Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              Lihat Produk
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              to="/tentang"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-7 py-3.5 rounded-full font-semibold text-sm border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-green-400" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-green-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Produk Unggulan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Buah Pilihan Terbaik
            </h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto">
              Tiga buah terbaik kami yang paling diminati pelanggan
            </p>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-3 border-green-200 border-t-green-500 rounded-full animate-spin" />
              <span className="ml-3 text-gray-500">Memuat produk...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-10 text-red-500">
              Gagal memuat produk. Silakan coba lagi nanti.
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((product) => (
                  <article
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-bold text-green-600">
                          {formatRupiah(product.price)}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/produk"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
                >
                  Lihat Semua Produk
                  <ArrowDown className="w-4 h-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
