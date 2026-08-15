import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f2]">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#dff000]/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#159447]/10 blur-3xl" />

      <Container>
        <div className="relative flex min-h-[680px] items-center py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
              Vietnamese Cashew Supplier
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172014] sm:text-6xl lg:text-7xl">
              Quality cashews.
              <br />
              Trusted connections.
              <br />
              <span className="text-[#159447]">Global reach.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#53604c]">
              {siteConfig.name} supplies quality Vietnamese cashew kernels
              with a commitment to consistency, food safety and long-term
              partnerships.
            </p>

            <p className="mt-4 font-medium italic text-[#6a755f]">
              {siteConfig.slogan}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#159447] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0f7738]"
              >
                Explore Our Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#26321c]/20 bg-white px-7 py-3.5 font-semibold text-[#26321c] transition hover:border-[#159447] hover:text-[#159447]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}