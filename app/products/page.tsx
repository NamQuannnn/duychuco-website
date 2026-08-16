import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Duy Chu Co., Ltd cashew kernel grades including WW450, WW320, WW240, WS and LP.",
};

const products = [
  {
    slug: "ww450",
    code: "WW450",
    name: "White Whole 450",
    image: "/images/products/ww450/01.jpg",
    description:
      "A whole cashew kernel grade commonly used for retail, food service and industrial applications.",
  },
  {
    slug: "ww320",
    code: "WW320",
    name: "White Whole 320",
    image: "/images/products/ww320/01.jpg",
    description:
      "One of the most widely traded cashew kernel grades, offering a balanced size and strong market demand.",
  },
  {
    slug: "ww240",
    code: "WW240",
    name: "White Whole 240",
    image: "/images/products/ww240/01.jpg",
    description:
      "A larger whole cashew kernel grade suitable for premium retail and food applications.",
  },
  {
    slug: "ws",
    code: "WS",
    name: "White Splits",
    image: "/images/products/ws/01.jpg",
    description:
      "Split cashew kernels suitable for processing, bakery, confectionery, snacks and food manufacturing.",
  },
  {
    slug: "lp",
    code: "LP",
    name: "Large Pieces",
    image: "/images/products/lp/01.jpg",
    description:
      "Cashew kernel pieces commonly used in food processing, confectionery, bakery and ingredient applications.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Vietnamese cashews for global markets."
        description="Quality cashew kernels supplied with consistency, careful handling and reliable service."
        />

      {/* Product Range */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Product Range
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
                Focused selection.
                <br />
                Reliable supply.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#5c6756]">
              Our product portfolio includes whole, split and piece grades to
              serve different customer requirements and applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={product.code}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] transition duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f3ed]">
                  <Image
                    src={product.image}
                    alt={`${product.code} cashew kernels`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#159447] shadow-sm backdrop-blur">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-[#172014] transition group-hover:text-[#159447]">
                        {product.code}
                      </h2>

                      <p className="mt-2 font-semibold text-[#33402d]">
                        {product.name}
                      </p>
                    </div>

                    <span className="rounded-full border border-[#dce2d7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#65705f]">
                      Kernel
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-[#65705f]">
                    {product.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#dde2d8] pt-5">
                    <span className="text-sm font-semibold text-[#159447]">
                      View product
                    </span>

                    <span className="text-lg text-[#159447] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality */}
      <section className="bg-[#172014] py-24 text-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a8cf45]">
                Quality & Supply
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Built around
                <br />
                consistency.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/65">
              <p>
                We understand that consistency matters in international cashew
                trading. Our product approach focuses on reliable grading,
                responsible handling and clear communication with customers.
              </p>

              <p>
                Detailed specifications, packing requirements and commercial
                information can be provided based on each customer&apos;s
                request.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#159447] py-20 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Product Inquiry
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Looking for a specific grade?
              </h2>
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