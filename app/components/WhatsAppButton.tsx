const phone = "6285649204047"; // ganti dengan nomor WA-mu
const message = "Halo, saya mau tanya tentang Green Park."; // pesan awal

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg text-sm md:text-base"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">Chat via WhatsApp</span>
      <span className="sm:hidden">WA</span>
    </a>
  );
}
