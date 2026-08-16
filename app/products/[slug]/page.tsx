import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductGallery from "@/components/products/ProductGallery";

const products = {
  ww450: {
    code: "WW450",
    name: "White Whole 450",
    description:
      "Whole cashew kernels suitable for retail, food service and industrial applications.",
    images: [
      "/images/products/ww450/01.jpg",
      "/images/products/ww450/02.jpg",
      "/images/products/ww450/03.jpg",
      "/images/products/ww450/04.jpg",
      "/images/products/ww450/05.jpg",
      "/images/products/ww450/06.jpg",
      "/images/products/ww450/07.jpg",
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
      "/images/products/ww320/03.jpg",
      "/images/products/ww320/04.jpg",
      "/images/products/ww320/05.jpg",
      "/images/products/ww320/06.jpg",
      "/images/products/ww320/07.jpg",
      "/images/products/ww320/08.jpg",
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
      "/images/products/ww240/03.jpg",
      "/images/products/ww240/04.jpg",
      "/images/products/ww240/05.jpg",
      "/images/products/ww240/06.jpg",
      "/images/products/ww240/07.jpg",
      "/images/products/ww240/08.jpg",
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
      "/images/products/ws/03.jpg",
      "/images/products/ws/04.jpg",
      "/images/products/ws/05.jpg",
      "/images/products/ws/06.jpg",
      "/images/products/ws/07.jpg",
      "/images/products/ws/08.jpg",
      "/images/products/ws/09.jpg",
      "/images/products/ws/010.jpg",
      "/images/products/ws/011.jpg",
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
      "/images/products/lp/03.jpg",
      "/images/products/lp/04.jpg",
      "/images/products/lp/05.jpg",
      "/images/products/lp/06.jpg",
      "/images/products/lp/07.jpg",
      "/images/products/lp/08.jpg",
      "/images/products/lp/09.jpg",
      "/images/products/lp/010.jpg",
      "/images/products/lp/011.jpg",
    ],
  },
} as const;

type ProductSlug = keyof typeof products;

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in products)) {
    return {};
  }

  const product = products[slug as ProductSlug];

  return {
    title: `${product.code} - ${product.name}`,
    description: `${product.name} cashew kernels supplied by Duy Chu Co., Ltd.`,
  };
}

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
      {/* Hero */}
      <section className="bg-[#f7f8f2] py-20 md:py-28">
        <Container>
          <Link
            href="/products"
            className="mb-10 inline-flex items-center text-sm font-semibold text-[#159447] transition hover:text-[#0f7738]"
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

      {/* Gallery */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Product Gallery
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
              {product.code} product images
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#65705f]">
              A closer look at our {product.name.toLowerCase()} products.
            </p>
          </div>

          <ProductGallery
            images={product.images}
            productCode={product.code}
          />
        </Container>
      </section>

      {/* Inquiry */}
      <section className="bg-[#159447] py-20 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Product Inquiry
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Interested in {product.code}?
              </h2>

              <p className="mt-4 max-w-xl text-lg text-white/75">
                Contact us for specifications, availability and commercial
                information.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-white px-7 py-3.5 font-semibold text-[#159447] transition hover:bg-[#f2f5ec]"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}