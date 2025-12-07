import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Green Park",
  description:
    "Informasi tentang Green Park sebagai kawasan ekowisata alam yang ramah keluarga dan pecinta lingkungan.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">Tentang Green Park</h1>
      <p>
        Green Park adalah kawasan rekreasi alam yang dirancang untuk memberikan
        pengalaman menenangkan, edukatif, dan ramah keluarga.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Misi Kami</h2>
      <p>Melestarikan ekosistem hijau melalui wisata berkelanjutan.</p>
    </div>
  );
}
