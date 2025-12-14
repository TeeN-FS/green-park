import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; img-src 'self' https://images.pexels.com data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src https://www.google.com;",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }, // Perbaikan: Koma ganda dihapus
    ],
  }, // Perbaikan: Menambahkan kurung tutup objek images

  async headers() {
    return [
      {
        source: "/:path*", // Menggunakan wildcard yang lebih standar untuk Next.js
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;