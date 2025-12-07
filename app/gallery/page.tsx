import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Green Park",
  description:
    "Kumpulan foto suasana Green Park, jalur tracking, dan area hijau yang dapat dinikmati pengunjung.",
};


const photos = [
  "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
  "https://images.pexels.com/photos/726298/pexels-photo-726298.jpeg",
  "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
];

export default function Gallery() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Galeri Foto</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <img key={i} src={src} alt="Green Park" className="rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
}
