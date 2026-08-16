import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Duy Chu Co., Ltd for cashew product inquiries, business cooperation and international supply.",
};

const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s build a connection."
        description="Get in touch with Duy Chu Co., Ltd for product inquiries, business opportunities and long-term partnerships."
        />

      {/* Contact information */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Get In Touch
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
                We&apos;re ready
                <br />
                to connect.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-[#5c6756]">
                Whether you are looking for product information, commercial
                cooperation or supply discussions, our team is available to
                assist.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Address */}
              <div className="rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                  Address
                </p>

                <p className="mt-5 leading-7 text-[#33402d]">
                  {siteConfig.contact.address}
                </p>
              </div>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] p-8 transition hover:-translate-y-1 hover:border-[#159447]/40 hover:shadow-lg"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                  Phone
                </p>

                <p className="mt-5 text-xl font-semibold text-[#172014] group-hover:text-[#159447]">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] p-8 transition hover:-translate-y-1 hover:border-[#159447]/40 hover:shadow-lg"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                  WhatsApp
                </p>

                <p className="mt-5 text-xl font-semibold text-[#172014] group-hover:text-[#159447]">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group rounded-3xl border border-[#e2e6dc] bg-[#f8f9f5] p-8 transition hover:-translate-y-1 hover:border-[#159447]/40 hover:shadow-lg"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                  Email
                </p>

                <p className="mt-5 break-all text-lg font-semibold text-[#172014] group-hover:text-[#159447]">
                  {siteConfig.contact.email}
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct contact CTA */}
      <section className="bg-[#172014] py-24 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a8cf45]">
                Business Inquiry
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Talk directly
                <br />
                with our team.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-white/65">
                For product availability, specifications, pricing or
                cooperation opportunities, contact us directly by email,
                phone or WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#159447] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0f7738]"
                >
                  WhatsApp Us
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#172014]"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Back to products */}
      <section className="bg-[#159447] py-16 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Our Products
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Explore our cashew kernel range.
              </h2>
            </div>

            <Link
              href="/products"
              className="w-fit rounded-full bg-white px-7 py-3.5 font-semibold text-[#159447] transition hover:bg-[#f2f5ec]"
            >
              View Products
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}