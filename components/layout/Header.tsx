"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[100px] max-w-[1920px] items-center justify-between px-6 sm:px-10 lg:px-14">

        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="DUY CHU CO., LTD"
            width={90}
            height={80}
            priority
            className="h-auto w-[72px] sm:w-[82px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  rounded-full px-5 py-2.5
                  text-[16px] font-medium
                  transition-all duration-200
                  ${
                    active
                      ? "bg-[#159447] text-white"
                      : "text-[#26321c] hover:bg-[#159447] hover:text-white"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full bg-[#159447]
              px-7 py-3
              text-[17px] font-semibold text-white
              transition-all duration-200
              hover:bg-[#0f7738]
              hover:shadow-lg
            "
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative z-50
            flex h-11 w-11
            items-center justify-center
            rounded-full
            text-[#172014]
            transition
            hover:bg-[#159447]/10
            lg:hidden
          "
        >
          <div className="flex w-6 flex-col gap-[5px]">
            <span
              className={`
                block h-[2px] w-full bg-current
                transition-all duration-300
                ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                block h-[2px] w-full bg-current
                transition-all duration-300
                ${
                  menuOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            <span
              className={`
                block h-[2px] w-full bg-current
                transition-all duration-300
                ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          absolute left-0 top-full w-full
          overflow-hidden
          border-t border-black/5
          bg-white
          shadow-xl
          transition-all duration-300
          lg:hidden
          ${
            menuOpen
              ? "visible max-h-[600px] opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  my-1 rounded-xl
                  px-5 py-4
                  text-base font-medium
                  transition-all duration-200
                  ${
                    active
                      ? "bg-[#159447] text-white"
                      : "text-[#26321c] hover:bg-[#159447] hover:text-white"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-4 flex items-center justify-center
              rounded-full
              bg-[#159447]
              px-6 py-4
              font-semibold text-white
              transition
              hover:bg-[#0f7738]
            "
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}