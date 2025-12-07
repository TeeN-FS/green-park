import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white px-8 py-4 flex justify-between items-center z-50 shadow">
      <Link href="/" className="text-2xl font-semibold">
        Green Park
      </Link>

      <div className="flex gap-6 text-lg">
        <Link href="/about">Tentang</Link>
        <Link href="/gallery">Galeri</Link>
        <Link href="/contact">Kontak</Link>
      </div>
    </nav>
  );
}
