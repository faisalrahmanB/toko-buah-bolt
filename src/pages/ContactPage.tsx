import { useState } from 'react';
import { MapPin, Phone, Clock, Send, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="pt-24 pb-20 sm:pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan atau ingin pemesanan khusus? Kami siap membantu Anda.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: MapPin,
                title: 'Alamat',
                lines: ['Jl. Buah Segar No. 12', 'Kebayoran Baru, Jakarta Selatan 12345'],
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                lines: ['+62 812-3456-7890'],
              },
              {
                icon: Mail,
                title: 'Email',
                lines: ['faisal@gmail.com'],
              },
              {
                icon: Clock,
                title: 'Jam Operasional',
                lines: ['Senin - Sabtu: 07.00 - 20.00', 'Minggu: 08.00 - 16.00'],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-sm text-gray-500 mt-0.5">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm mb-3">Ikuti Kami</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-green-50 hover:bg-green-500 flex items-center justify-center text-green-600 hover:text-white transition-all duration-200"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form + Map */}
          <div className="lg:col-span-3 space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-5">Kirim Pesan</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
                {submitted && (
                  <p className="text-center text-sm text-green-600 font-medium">
                    Pesan terkirim! Kami akan segera menghubungi Anda.
                  </p>
                )}
              </div>
            </form>

            {/* Google Maps Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  Lokasi Kami
                </h3>
              </div>
              <div className="relative aspect-[16/9] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Google Maps</p>
                  <p className="text-xs text-gray-300 mt-1">Jl. Buah Segar No. 12, Jakarta Selatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
