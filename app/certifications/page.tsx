import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Explore the certifications and food safety standards held by Duy Chu Co., Ltd.",
};

const certifications = [
  {
    name: "BRCGS",
    fullName: "BRCGS Food Safety",
    description:
      "A globally recognized food safety standard supporting product quality, safety and operational control.",
    image: "/images/certifications/brcgs.jpg",
    pdf: "/certificates/brcgs.pdf",
  },
  {
    name: "FDA",
    fullName: "U.S. Food and Drug Administration",
    description:
      "Registration and compliance supporting access to customers and markets requiring FDA-related requirements.",
    image: "/images/certifications/fda.jpg",
    pdf: "/certificates/fda.pdf",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Standards you can trust."
        description="Our commitment to quality and food safety is supported by recognized standards and certifications."
      />

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
              View our certifications and supporting documents for food safety,
              quality and international market requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {certifications.map((certification) => (
              <article
                key={certification.name}
                className="group overflow-hidden rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5]"
              >
                {/* Certificate preview */}
                <a
                  href={certification.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden bg-[#eef1e9] p-8 md:p-10"
                  aria-label={`View ${certification.name} certificate`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-white shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <Image
                      src={certification.image}
                      alt={`${certification.name} certificate`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-full bg-[#172014] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    View PDF ↗
                  </div>
                </a>

                {/* Information */}
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

                  <a
                    href={certification.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center rounded-full bg-[#159447] px-6 py-3 font-semibold text-white transition hover:bg-[#0f7738]"
                  >
                    View Certificate ↗
                  </a>
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
                Certification requirements are integrated into how we manage
                food safety, operations and customer expectations.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}