import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Duy Chu Co., Ltd"
              width={150}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#26321c] transition-colors hover:text-[#159447]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f7738] md:inline-flex"
          >
            Get in Touch
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#159447] px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}