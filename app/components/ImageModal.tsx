"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative h-[110px] w-full cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        >
          <div className="relative w-[90vw] h-[70vh]">
            <Image src={src} alt={alt} fill className="object-contain rounded-xl" />
          </div>
        </div>
      )}
    </>
  );
}
