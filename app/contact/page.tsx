import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Green Park",
  description:
    "Hubungi pengelola Green Park untuk pertanyaan, reservasi rombongan, atau informasi lebih lanjut.",
};


export default function Contact() {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">Kontak Kami</h1>

      <form
        action="https://formspree.io/f/xgegdnyl" // nanti ganti dengan formspree-mu sendiri
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          className="border p-3 rounded"
          type="text"
          name="nama"
          placeholder="Nama"
          required
        />
        <input
          className="border p-3 rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="border p-3 rounded"
          name="pesan"
          rows={5}
          placeholder="Pesan"
          required
        />
        <button className="bg-green-700 text-white p-3 rounded">
          Kirim
        </button>
      </form>
    </div>
  );
}
