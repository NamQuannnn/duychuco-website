import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Duy Chữ Co., Ltd cashew kernel grades including WW450, WW320, WW240, WS and LP.",
};

const products = [
  {
    slug: "ww450",
    code: "WW450",
    name: "White Whole 450",
    description:
      "A whole cashew kernel grade commonly used for retail, food service and industrial applications.",
  },
  {
    slug: "ww320",
    code: "WW320",
    name: "White Whole 320",
    description:
      "One of the most widely traded cashew kernel grades, offering a balanced size and strong market demand.",
  },
  {
    slug: "ww240",
    code: "WW240",
    name: "White Whole 240",
    description:
      "A larger whole cashew kernel grade suitable for premium retail and food applications.",
  },
  {
    slug: "ws",
    code: "WS",
    name: "White Splits",
    description:
      "Split cashew kernels suitable for processing, bakery, confectionery, snacks and food manufacturing.",
  },
  {
    slug: "lp",
    code: "LP",
    name: "Large Pieces",
    description:
      "Cashew kernel pieces commonly used in food processing, confectionery, bakery and ingredient applications.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8f2]">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#dff000]/20 blur-3xl" />

        <Container>
          <div className="relative py-24 md:py-32">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
              Our Products
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172014] md:text-7xl">
              Cashew kernels
              <br />
              for global markets.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5c6756]">
              We supply a focused range of Vietnamese cashew kernel grades for
              customers across international markets.
            </p>
          </div>
        </Container>
      </section>

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
              Select a grade to view product images and more information.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={product.code}
                href={`/products/${product.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#159447]/40 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-bold text-[#159447]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-[#dce2d7] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#65705f]">
                    Cashew Kernel
                  </span>
                </div>

                <div className="mt-16">
                  <h3 className="text-4xl font-bold tracking-tight text-[#172014] transition group-hover:text-[#159447]">
                    {product.code}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-[#33402d]">
                    {product.name}
                  </p>

                  <p className="mt-5 leading-7 text-[#65705f]">
                    {product.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-[#dde2d8] pt-6">
                  <span className="text-sm font-medium text-[#75806e]">
                    View product
                  </span>

                  <span className="text-xl text-[#159447] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

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