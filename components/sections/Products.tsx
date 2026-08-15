import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

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
            className="font-semibold text-[#159447] hover:text-[#0f7738]"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {siteConfig.products.map((product) => (
            <div
              key={product}
              className="group flex aspect-square items-center justify-center rounded-2xl border border-[#e6e9df] bg-[#f8f9f5] transition hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-lg"
            >
              <span className="text-2xl font-bold text-[#26321c] transition group-hover:text-[#159447]">
                {product}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}