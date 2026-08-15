import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Partners from "@/components/sections/Partners";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Duy Chữ Co., Ltd, a Vietnamese cashew company committed to quality, food safety and reliable long-term partnerships.",
};

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "We focus on consistent product quality and careful handling throughout our operations.",
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "We value dependable communication, responsible execution and long-term business relationships.",
  },
  {
    number: "03",
    title: "Food Safety",
    description:
      "Food safety is an essential part of our commitment to customers and international markets.",
  },
  {
    number: "04",
    title: "Partnership",
    description:
      "We believe sustainable growth comes from building strong and trusted connections with our partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#f7f8f2]">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#dff000]/20 blur-3xl" />

        <Container>
          <div className="relative py-24 md:py-32">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
              About Duy Chữ
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172014] md:text-7xl">
              Growing connections
              <br />
              through quality.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5c6756]">
              A Vietnamese cashew company focused on quality products,
              responsible operations and dependable partnerships.
            </p>
          </div>
        </Container>
      </section>

      {/* Company */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Our Company
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#172014] md:text-5xl">
                Vietnamese cashews.
                <br />
                Global perspective.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#5c6756]">
              <p>
                {siteConfig.name} is a Vietnamese cashew company supplying
                cashew kernels for customers and markets around the world.
              </p>

              <p>
                Our approach is built around product consistency, food safety
                and reliable cooperation. From every order to every business
                relationship, we aim to create value through responsible work
                and clear communication.
              </p>

              <p>
                As we continue to grow, our focus remains simple: deliver
                quality products, strengthen trusted partnerships and connect
                Vietnamese cashews with the global market.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Brand Statement */}
      <section className="bg-[#172014] py-24 text-white">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="flex justify-center lg:justify-start">
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white p-10 md:h-80 md:w-80 md:p-12">
                    <Image
                    src="/images/cropped-icon.png"
                    alt="Duy Chữ"
                    width={260}
                    height={260}
                    className="h-full w-full object-contain"
                    />
                </div>
                </div>

            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#a8cf45]">
                Our Direction
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                From one step
                <br />
                to global reach.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                Every strong connection starts with one step. We work to turn
                those steps into lasting partnerships and opportunities across
                international markets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-[#f7f8f2] py-24">
        <Container>
          <div className="mb-14">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              What We Value
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
              The principles behind
              <br />
              every connection.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#e2e6dc] bg-[#e2e6dc] md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="min-h-72 bg-white p-8 md:p-9"
              >
                <span className="text-sm font-bold text-[#159447]">
                  {value.number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold text-[#172014]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#65705f]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Partners />

      {/* Certifications */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Standards
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
                Quality backed
                <br />
                by standards.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-[#5c6756]">
                Our commitment to quality and food safety is supported by
                recognized certifications and standards relevant to our
                operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {siteConfig.certifications.map((certification) => (
                  <span
                    key={certification}
                    className="rounded-full border border-[#dce2d7] bg-[#f7f8f2] px-5 py-2.5 font-semibold text-[#26321c]"
                  >
                    {certification}
                  </span>
                ))}
              </div>

              <Link
                href="/certifications"
                className="mt-8 inline-block font-semibold text-[#159447] hover:text-[#0f7738]"
              >
                View certifications →
              </Link>
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
                Connect With Duy Chữ
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s grow together.
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