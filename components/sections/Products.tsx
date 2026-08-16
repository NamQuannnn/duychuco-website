import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const products = [
  {
    code: "WW450",
    name: "White Whole 450",
    slug: "ww450",
    image: "/images/products/ww450/01.jpg",
  },
  {
    code: "WW320",
    name: "White Whole 320",
    slug: "ww320",
    image: "/images/products/ww320/01.jpg",
  },
  {
    code: "WW240",
    name: "White Whole 240",
    slug: "ww240",
    image: "/images/products/ww240/01.jpg",
  },
  {
    code: "WS",
    name: "White Splits",
    slug: "ws",
    image: "/images/products/ws/01.jpg",
  },
  {
    code: "LP",
    name: "Large Pieces",
    slug: "lp",
    image: "/images/products/lp/01.jpg",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Our Products
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
              Cashew kernels for
              <br />
              global markets.
            </h2>
          </div>

          <Link
            href="/products"
            className="font-semibold text-[#159447] transition hover:text-[#0f7738]"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <Link
              key={product.code}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-3xl border border-[#e6e9df] bg-[#f8f9f5] transition duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f3ed]">
                <Image
                  src={product.image}
                  alt={`${product.code} cashew kernels`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#172014] transition group-hover:text-[#159447]">
                  {product.code}
                </h3>

                <p className="mt-1 text-sm text-[#65705f]">
                  {product.name}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#e1e5dc] pt-4">
                  <span className="text-sm font-semibold text-[#159447]">
                    View product
                  </span>

                  <span className="text-[#159447] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}