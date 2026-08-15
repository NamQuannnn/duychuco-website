import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";

const products = {
  ww450: {
    code: "WW450",
    name: "White Whole 450",
    description:
      "Whole cashew kernels suitable for retail, food service and industrial applications.",
    images: [
      "/images/products/ww450/01.jpg",
      "/images/products/ww450/02.jpg",
    ],
  },

  ww320: {
    code: "WW320",
    name: "White Whole 320",
    description:
      "One of the most widely traded cashew grades, offering balanced size and broad market demand.",
    images: [
      "/images/products/ww320/01.jpg",
      "/images/products/ww320/02.jpg",
    ],
  },

  ww240: {
    code: "WW240",
    name: "White Whole 240",
    description:
      "Larger whole cashew kernels suitable for premium retail and food applications.",
    images: [
      "/images/products/ww240/01.jpg",
      "/images/products/ww240/02.jpg",
    ],
  },

  ws: {
    code: "WS",
    name: "White Splits",
    description:
      "Split cashew kernels suitable for processing, bakery, confectionery and food manufacturing.",
    images: [
      "/images/products/ws/01.jpg",
      "/images/products/ws/02.jpg",
    ],
  },

  lp: {
    code: "LP",
    name: "Large Pieces",
    description:
      "Cashew pieces commonly used in food processing, confectionery, bakery and ingredient applications.",
    images: [
      "/images/products/lp/01.jpg",
      "/images/products/lp/02.jpg",
    ],
  },
};

type ProductSlug = keyof typeof products;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in products)) {
    notFound();
  }

  const product = products[slug as ProductSlug];

  return (
    <>
      <section className="bg-[#f7f8f2] py-20 md:py-28">
        <Container>
          <Link
            href="/products"
            className="mb-8 inline-block text-sm font-semibold text-[#159447]"
          >
            ← Back to Products
          </Link>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
            Cashew Kernel
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-[#172014] md:text-7xl">
            {product.code}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-[#33402d]">
            {product.name}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5c6756]">
            {product.description}
          </p>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Product Gallery
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172014]">
              Product images
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f5f6f2]"
              >
                <Image
                  src={image}
                  alt={`${product.code} product image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#159447] py-16 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Product Inquiry
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Interested in {product.code}?
              </h2>
            </div>

            <Link
              href="/contact"
              className="w-fit rounded-full bg-white px-7 py-3.5 font-semibold text-[#159447]"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}