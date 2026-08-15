import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#172014] text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Duy Chữ Co., Ltd"
              width={160}
              height={80}
              className="mb-5 h-20 w-auto rounded bg-white object-contain p-1"
            />

            <p className="max-w-sm text-sm leading-7 text-white/65">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-white/65">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
              <Link href="/certifications" className="hover:text-white">
                Certifications
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Contact</h3>

            <div className="space-y-3 text-sm leading-6 text-white/65">
              <p>{siteConfig.contact.address}</p>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="block hover:text-white"
              >
                {siteConfig.contact.phoneDisplay}
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block break-all hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-white/45">
          © {new Date().getFullYear()} Duy Chữ Co., Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}