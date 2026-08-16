import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f2]">
      {/* Factory image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 28%, black 62%, black 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 28%, black 62%, black 100%)",
        }}
      >
        <img
          src="/images/factory/factory-aerial.jpg"
          alt=""
          className="absolute left-[18%] top-0 h-full w-[118%] object-cover object-center"
        />
      </div>

      {/* Light wash */}
      <div className="pointer-events-none absolute inset-0 bg-[#f7f8f2]/10" />

      <Container>
        <div className="relative flex min-h-[680px] items-center py-24">
          <div className="max-w-5xl">

            {/* Eyebrow */}
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
              Vietnamese Cashew Supplier
            </p>

            {/* Company name - one line */}
            <h1 className="whitespace-nowrap text-5xl font-semibold leading-none tracking-tight text-[#172014] sm:text-6xl lg:text-7xl">
              DUY CHU{" "}
              <span className="text-[#159447]">CO., LTD</span>
            </h1>

            {/* Slogan */}
            <p className="mt-5 text-xl font-medium italic text-[#6a755f]">
              {siteConfig.slogan}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#53604c]">
              Quality Vietnamese cashews for global partners.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-4">
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