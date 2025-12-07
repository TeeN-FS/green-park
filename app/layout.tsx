import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Green Park – Wisata Alam",
    template: "%s | Green Park",
  },
  description:
    "Green Park adalah kawasan ekowisata alam dengan jalur tracking, suasana sejuk, dan area hijau yang cocok untuk keluarga dan pecinta alam.",
    metadataBase: new URL("https://green-park-rho.vercel.app"),
  openGraph: {
    title: "Green Park – Wisata Alam",
    description:
      "Nikmati pengalaman ekowisata, tracking, dan relaksasi di Green Park.",
    url: "https://green-park-rho.vercel.app/", // ganti nanti
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
        {/* padding-top supaya konten tidak ketutup navbar */}
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
