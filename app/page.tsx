import Link from "next/link";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <section className="bg-[#172014] py-24 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a8cf45]">
                About Duy Chữ
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Built for reliable
                <br />
                cashew supply.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Duy Chữ Co., Ltd is a Vietnamese cashew company focused on
                supplying quality cashew kernels and building dependable
                relationships with customers around the world.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block font-semibold text-[#a8cf45] hover:text-white"
              >
                Discover our company →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <Products />

      {/* Certifications */}
      <section className="bg-[#f7f8f2] py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Food Safety & Quality
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
              Certified standards.
              <br />
              Consistent commitment.
            </h2>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {siteConfig.certifications.map((certification) => (
                <div
                  key={certification}
                  className="flex min-h-32 w-48 items-center justify-center rounded-2xl border border-[#e2e6dc] bg-white p-6 shadow-sm"
                >
                  <span className="text-xl font-bold text-[#26321c]">
                    {certification}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/certifications"
              className="mt-10 inline-block font-semibold text-[#159447] hover:text-[#0f7738]"
            >
              Our certifications →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#159447] py-20 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Work With Us
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build a connection.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-white px-7 py-3.5 font-semibold text-[#159447] transition hover:bg-[#f2f5ec]"
            >
              Contact Duy Chữ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}