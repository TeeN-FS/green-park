import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

// HAPUS BARIS INI DARI KODEMU:
// google-site-verification: google91435b098f66a664.html (INI BUKAN JAVASCRIPT)

export const metadata: Metadata = {
  // 1. Definisikan Base URL dulu agar gambar OG tidak error
  metadataBase: new URL("https://green-park-rho.vercel.app"),

  title: {
    default: "Green Park – Wisata Alam",
    template: "%s | Green Park",
  },
  description:
    "Green Park adalah kawasan ekowisata alam dengan jalur tracking, suasana sejuk, dan area hijau yang cocok untuk keluarga dan pecinta alam.",
  
  // 2. MASUKKAN VERIFIKASI GOOGLE DI SINI
  verification: {
    google: "google91435b098f66a664", // Ambil kodenya saja, tanpa .html
  },

  openGraph: {
    title: "Green Park – Wisata Alam",
    description:
      "Nikmati pengalaman ekowisata, tracking, dan relaksasi di Green Park.",
    url: "/", 
    siteName: "Green Park",
    images: [
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        width: 1200,
        height: 630,
        alt: "Green Park",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-100">
        <Navbar />
        {/* Pt-24 sudah benar untuk kompensasi fixed navbar */}
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}