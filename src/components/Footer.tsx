import { Link } from 'react-router-dom';
import { Leaf, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-green-500" />
              <span className="text-lg font-bold text-white tracking-tight">
                Toko Buah <span className="text-green-500">Segar</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Menyediakan buah segar pilihan langsung dari petani lokal ke meja Anda.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigasi</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Produk', to: '/produk' },
                { label: 'Tentang Kami', to: '/tentang' },
                { label: 'Kontak', to: '/kontak' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Kontak</h3>
            <ul className="space-y-2.5 text-sm">
              <li>Jl. Kayuringin Jaya No. 1</li>
              <li>Jakarta Selatan 12345</li>
              <li>+62 812-3456-7890</li>
              <li>faisal@gmail.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} Toko Buah Segar. Semua hak dilindungi.</p>
          <p>Dibuat dengan dedikasi untuk kesegaran Anda.</p>
        </div>
      </div>
    </footer>
  );
}
