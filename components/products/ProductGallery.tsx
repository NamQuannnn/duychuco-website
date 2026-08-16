"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductGalleryProps = {
  images: readonly string[];
  productCode: string;
};

export default function ProductGallery({
  images,
  productCode,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  return (
    <>
      {/* Gallery */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-3xl bg-[#f4f6f1] text-left"
            aria-label={`View ${productCode} product image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productCode} cashew kernels ${index + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

            <div className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#172014] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View image
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${productCode} product gallery`}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute left-5 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black md:left-6 md:h-14 md:w-14"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[82vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${productCode} cashew kernels ${selectedIndex + 1}`}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black md:right-6 md:h-14 md:w-14"
              aria-label="Next image"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}