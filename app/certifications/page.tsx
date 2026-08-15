import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Explore the certifications and food safety standards held by Duy Chữ Co., Ltd.",
};

const certifications = [
  {
    name: "BRCGS",
    fullName: "BRCGS Food Safety",
    description:
      "A globally recognized food safety standard supporting product quality, safety and operational control.",
    image: "/images/certifications/brcgs.jpg",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis and Critical Control Points",
    description:
      "A systematic approach to identifying, evaluating and controlling food safety hazards.",
    image: "/images/certifications/haccp.jpg",
  },
  {
    name: "ISO",
    fullName: "International Organization for Standardization",
    description:
      "Standards supporting consistent processes, quality management and reliable operations.",
    image: "/images/certifications/iso.jpg",
  },
  {
    name: "FDA",
    fullName: "U.S. Food and Drug Administration",
    description:
      "Registration and compliance supporting access to customers and markets requiring FDA-related standards.",
    image: "/images/certifications/fda.jpg",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f8f2]">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#dff000]/20 blur-3xl" />

        <Container>
          <div className="relative py-24 md:py-32">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
              Certifications
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172014] md:text-7xl">
              Standards you
              <br />
              can trust.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5c6756]">
              Our certifications reflect our commitment to food safety,
              consistent quality and responsible operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Certificates */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Certified Standards
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
                Quality supported
                <br />
                by recognized standards.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#5c6756]">
              We maintain certifications and standards relevant to food safety,
              quality management and international trade requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((certification) => (
              <article
                key={certification.name}
                className="overflow-hidden rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5]"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={certification.image}
                    alt={`${certification.name} certificate`}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="border-t border-[#e2e6dc] p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                    {certification.name}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-[#172014]">
                    {certification.fullName}
                  </h2>

                  <p className="mt-4 leading-7 text-[#65705f]">
                    {certification.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality statement */}
      <section className="bg-[#172014] py-24 text-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a8cf45]">
                Our Commitment
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Food safety is part
                <br />
                of every step.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-white/65">
                Our approach to quality goes beyond the finished product.
                Standards and certification requirements are integrated into
                how we manage food safety, operations and customer expectations.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}