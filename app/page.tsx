import FadeIn from "./components/FadeIn";
import ImageModal from "./components/ImageModal";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Green Park",
    description:
      "Kawasan ekowisata alam dengan jalur tracking, area hijau, dan fasilitas keluarga.",
    url: "https://example.com", 
    touristType: "Ecotourism",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kota Sejuk",
      addressCountry: "ID",
    },
  };

  return (
    <>
      {/* Script JSON-LD untuk SEO */}
      <Script
        id="ld-tourist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* HERO */}
        <div className="relative w-full h-[380px]">
          <Image
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg"
            alt="Mangrove Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center drop-shadow-lg px-4 bg-black/20">
            <h1 className="text-4xl font-bold">Wisata Alam untuk Semua</h1>
            <p className="text-lg mt-2 max-w-lg">
              Temukan ketenangan di ruang hijau yang asri dan alami.
            </p>
            <a
              href="#info"
              className="mt-4 bg-green-700 px-6 py-3 rounded-lg text-white font-medium hover:bg-green-800 transition"
            >
              Rencanakan Kunjungan
            </a>
          </div>
        </div>

        {/* TENTANG */}
        <section
          id="info"
          className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-3xl font-bold text-green-700">Tentang Green Park</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Green Park adalah kawasan ekowisata mangrove yang menghadirkan
            ketenangan, edukasi lingkungan, dan pengalaman menyusuri jalur
            mangrove yang alami. Cocok untuk keluarga, pecinta alam, dan
            fotografi.
          </p>
        </section>

        {/* FASILITAS */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700">Fasilitas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Jalur Tracking</div>
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Menara Pantau</div>
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Area Istirahat</div>
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Pusat Edukasi</div>
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Warung Lokal</div>
              <div className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200">Toilet</div>
            </div>
          </section>
        </FadeIn>

        {/* GALERI */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Galeri</h2>

            <div className="grid grid-cols-3 gap-4">
              {/* SAYA KEMBALIKAN WRAPPER DIV AGAR LAYOUT TIDAK PECAH */}
              <div className="relative h-[110px] w-full rounded-lg overflow-hidden">
                <ImageModal
                  src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"
                  alt="Mangrove 1"
                />
              </div>

              <div className="relative h-[110px] w-full rounded-lg overflow-hidden">
                <ImageModal
                  src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg"
                  alt="Mangrove 2"
                />
              </div>

              <div className="relative h-[110px] w-full rounded-lg overflow-hidden">
                <ImageModal
                  src="https://images.pexels.com/photos/726298/pexels-photo-726298.jpeg"
                  alt="Mangrove 3"
                />
              </div>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-700 underline mt-4 text-center"
            >
              Lihat lebih banyak di Instagram
            </a>
          </section>
        </FadeIn>

        {/* MAP */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 mb-16 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Lokasi</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.692015520926!2d112.79155737583648!3d-7.275841771497299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1708930000000!5m2!1sid!2sid" 
              loading="lazy"
              className="w-full h-[300px] rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </section>
        </FadeIn>

      </main>
    </> // <--- INI YANG HILANG DI KODEMU (Penutup Fragment)
  );
}