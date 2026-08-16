import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Partners from "@/components/sections/Partners";
import { siteConfig } from "@/config/site";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Duy Chu Co., Ltd, a Vietnamese cashew company committed to quality, food safety and reliable long-term partnerships.",
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
      <PageHero
        eyebrow="About Duy Chu"
        title="Growing connections through quality."
        description="A Vietnamese cashew company focused on quality products, responsible operations and dependable partnerships."
      />

      {/* Company + Factory */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

            {/* Factory Image */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#eef1e9]">
                <Image
                  src="/images/factory/factory-main.jpg"
                  alt="Duy Chu cashew processing facility in Dong Nai, Vietnam"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* subtle image wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172014]/15 via-transparent to-transparent" />

                {/* label */}
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#26321c] backdrop-blur-sm">
                  Dong Nai, Vietnam
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#7a8474]">
                Duy Chu&apos;s cashew processing facility in Dong Nai,
                Vietnam.
              </p>
            </div>

            {/* Company Content */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Our Company
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#172014] md:text-5xl">
                Vietnamese cashews.
                <br />
                Global perspective.
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-[#5c6756]">
                <p>
                  {siteConfig.name} supplies Vietnamese cashew kernels to
                  customers and partners across international markets.
                </p>

                <p>
                  Our work is built around consistent quality, food safety and
                  reliable cooperation at every stage of the business.
                </p>

                <p>
                  From our facility in Dong Nai, we continue building trusted
                  connections between Vietnamese cashews and the global market.
                </p>
              </div>

              {/* Location detail */}
              <div className="mt-9 border-t border-[#e4e8df] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159447]">
                  Our Facility
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#65705f]">
                  Group 1, Hamlet 3, Phu Nghia Commune,
                  <br />
                  Dong Nai City, Vietnam
                </p>
              </div>
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
                  alt="Duy Chu"
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
                Connect With Duy Chu
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