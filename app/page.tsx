"use client";

import { useState } from "react";
import FadeIn from "./components/FadeIn";
import ImageModal from "./components/ImageModal";
import Image from "next/image";
import Script from "next/script";

type Lang = "id" | "en";

const content = {
  id: {
    heroTitle: "Wisata Alam untuk Semua",
    heroSubtitle: "Temukan ketenangan di ruang hijau yang asri dan alami.",
    heroButton: "Rencanakan Kunjungan",

    aboutTitle: "Tentang Green Park",
    aboutText:
      "Green Park adalah kawasan ekowisata mangrove yang menghadirkan ketenangan, edukasi lingkungan, dan pengalaman menyusuri jalur mangrove yang alami. Cocok untuk keluarga, pecinta alam, dan fotografi.",

    infoTitle: "Informasi Praktis",
    openHourTitle: "⏰ Jam Buka",
    openHourText: "Setiap hari, 07.00 – 17.00 WIB",
    ticketTitle: "💸 Harga Tiket",
    ticketText: "Dewasa: Rp10.000\nAnak-anak: Rp5.000",
    locationTitle: "📍 Lokasi",
    locationText: "Kawasan Hijau No. 12, Kota Sejuk",
    accessTitle: "🚐 Cara ke Lokasi",
    accessText:
      "Dapat diakses dengan kendaraan pribadi, ojek online, atau angkutan kota (turun di halte Kawasan Hijau).",
    contactTitle: "☎ Kontak",
    contactText: "WhatsApp: 08xx-xxxx-xxxx\nEmail: info@greenpark.com",

    fasilitasTitle: "Fasilitas",
    fasilitasList: [
      "Jalur Tracking",
      "Menara Pantau",
      "Area Istirahat",
      "Pusat Edukasi",
      "Warung Lokal",
      "Toilet",
    ],

    testiTitle: "Testimoni Pengunjung",
    testi: [
      {
        stars: "★★★★★",
        text: "“Tempatnya asri banget. Cocok buat healing dan foto-foto!”",
        author: "Rina S. – Jan 2024",
      },
      {
        stars: "★★★★★",
        text: "“Trek jalan kaki nyaman, banyak spot bagus dan edukatif.”",
        author: "Dimas A. – Feb 2024",
      },
      {
        stars: "★★★★☆",
        text: "“Tempatnya bersih dan sejuk. Akan lebih bagus kalau ada cafe.”",
        author: "Nur L. – Maret 2024",
      },
    ],

    galleryTitle: "Galeri",
    galleryMore: "Lihat lebih banyak di Instagram",

    mapTitle: "Lokasi",

    faqTitle: "Pertanyaan yang Sering Diajukan (FAQ)",
    faq: [
      {
        q: "Apakah perlu reservasi sebelum datang?",
        a: "Tidak perlu. Pengunjung bisa langsung datang selama jam operasional.",
      },
      {
        q: "Apa yang terjadi jika hujan?",
        a: "Area tetap buka, namun beberapa jalur mungkin licin. Disarankan membawa payung atau jas hujan.",
      },
      {
        q: "Apakah bisa membawa makanan sendiri?",
        a: "Ya, pengunjung diperbolehkan membawa makanan. Harap menjaga kebersihan area.",
      },
      {
        q: "Apakah ada tempat parkir?",
        a: "Ada. Parkir tersedia untuk motor dan mobil dengan kapasitas terbatas.",
      },
      {
        q: "Apakah ramah anak?",
        a: "Sangat ramah anak, namun tetap perlu pengawasan orang tua terutama di area berair.",
      },
    ],
  },

  en: {
    heroTitle: "Nature Escape for Everyone",
    heroSubtitle: "Find peace in a lush and refreshing green space.",
    heroButton: "Plan Your Visit",

    aboutTitle: "About Green Park",
    aboutText:
      "Green Park is a mangrove-based ecotourism area offering tranquility, environmental education, and the experience of walking through natural mangrove trails. Perfect for families, nature lovers, and photography enthusiasts.",

    infoTitle: "Practical Information",
    openHourTitle: "⏰ Opening Hours",
    openHourText: "Daily, 07:00 – 17:00 WIB",
    ticketTitle: "💸 Ticket Price",
    ticketText: "Adults: Rp10.000\nChildren: Rp5.000",
    locationTitle: "📍 Location",
    locationText: "Green Area No. 12, Kota Sejuk",
    accessTitle: "🚐 How to Get There",
    accessText:
      "Accessible by private vehicle, ride-hailing services, or public transport (get off at Green Area stop).",
    contactTitle: "☎ Contact",
    contactText: "WhatsApp: +62 8xx-xxxx-xxxx\nEmail: info@greenpark.com",

    fasilitasTitle: "Facilities",
    fasilitasList: [
      "Walking Trails",
      "Viewing Tower",
      "Rest Area",
      "Education Center",
      "Local Food Stalls",
      "Toilets",
    ],

    testiTitle: "Visitor Testimonials",
    testi: [
      {
        stars: "★★★★★",
        text: "“Very serene place. Perfect for relaxing and taking photos!”",
        author: "Rina S. – Jan 2024",
      },
      {
        stars: "★★★★★",
        text: "“Comfortable walking paths, many great and educational spots.”",
        author: "Dimas A. – Feb 2024",
      },
      {
        stars: "★★★★☆",
        text: "“Clean and cool area. Would be great if there was a cafe.”",
        author: "Nur L. – March 2024",
      },
    ],

    galleryTitle: "Gallery",
    galleryMore: "See more on Instagram",

    mapTitle: "Location",

    faqTitle: "Frequently Asked Questions (FAQ)",
    faq: [
      {
        q: "Do I need a reservation before visiting?",
        a: "No. Visitors can come directly during opening hours.",
      },
      {
        q: "What happens if it rains?",
        a: "The area remains open, but some paths might be slippery. Bringing an umbrella or raincoat is recommended.",
      },
      {
        q: "Can I bring my own food?",
        a: "Yes, visitors are allowed to bring food. Please keep the area clean.",
      },
      {
        q: "Is parking available?",
        a: "Yes. Parking is available for motorcycles and cars with limited capacity.",
      },
      {
        q: "Is it child-friendly?",
        a: "Very child-friendly, but parental supervision is still needed especially near water areas.",
      },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("id");
  const t = content[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Green Park",
    description:
      "Kawasan ekowisata alam dengan jalur tracking, area hijau, dan fasilitas keluarga.",
    url: "https://green-park-rho.vercel.app",
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

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center drop-shadow-lg px-4 bg-black/30">
            {/* Language toggle */}
            <div className="absolute top-4 right-4 flex gap-2 text-sm">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded-full ${
                  lang === "id" ? "bg-white text-green-700" : "bg-black/40"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full ${
                  lang === "en" ? "bg-white text-green-700" : "bg-black/40"
                }`}
              >
                EN
              </button>
            </div>

            <h1 className="text-4xl font-bold">{t.heroTitle}</h1>
            <p className="text-lg mt-2 max-w-lg">{t.heroSubtitle}</p>
            <a
              href="#info"
              className="mt-4 bg-green-700 px-6 py-3 rounded-lg text-white font-medium hover:bg-green-800 transition"
            >
              {t.heroButton}
            </a>
          </div>
        </div>

        {/* TENTANG */}
        <section
          id="info"
          className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-3xl font-bold text-green-700">
            {t.aboutTitle}
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">{t.aboutText}</p>
        </section>

        {/* INFORMASI PRAKTIS */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {t.infoTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">{t.openHourTitle}</h3>
                <p>{t.openHourText}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">{t.ticketTitle}</h3>
                <p>
                  {t.ticketText.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">{t.locationTitle}</h3>
                <p>{t.locationText}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">{t.accessTitle}</h3>
                <p>{t.accessText}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg md:col-span-2">
                <h3 className="font-semibold mb-1">{t.contactTitle}</h3>
                <p>
                  {t.contactText.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FASILITAS */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700">
              {t.fasilitasTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {t.fasilitasList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-green-100 p-3 rounded-lg text-center transition hover:scale-105 hover:bg-green-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* TESTIMONI */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {t.testiTitle}
            </h2>

            <div className="grid gap-4 md:grid-cols-3 text-gray-700">
              {t.testi.map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 p-4 rounded-lg shadow-sm flex flex-col justify-between"
                >
                  <p className="text-yellow-500 text-lg mb-1">
                    {item.stars}
                  </p>
                  <p className="text-sm italic">{item.text}</p>
                  <p className="mt-2 text-xs font-semibold">{item.author}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* GALERI */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {t.galleryTitle}
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <ImageModal
                src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"
                alt="Mangrove 1"
              />
              <ImageModal
                src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg"
                alt="Mangrove 2"
              />
              <ImageModal
                src="https://images.pexels.com/photos/726298/pexels-photo-726298.jpeg"
                alt="Mangrove 3"
              />
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-700 underline mt-4 text-center"
            >
              {t.galleryMore}
            </a>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faq.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* MAP */}
        <FadeIn>
          <section className="max-w-3xl mx-auto mt-10 mb-16 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {t.mapTitle}
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.692015520926!2d112.79155737583648!3d-7.275841771497299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1708930000000!5m2!1sid!2sid"
              loading="lazy"
              className="w-full h-[300px] rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </section>
        </FadeIn>
      </main>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-50 transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <span className="text-green-600 text-xl">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
