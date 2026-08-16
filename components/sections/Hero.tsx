import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f2]">
      {/* Factory image */}
      <div className="absolute inset-0">
        <img
          src="/images/factory/factory-aerial.jpg"
          alt=""
          className="
            h-full w-full object-cover
            object-[58%_center]
            md:object-[65%_center]
          "
        />
      </div>

      {/* Desktop fade */}
      <div
        className="
          absolute inset-0
          hidden md:block
          bg-gradient-to-r
          from-[#f7f8f2]
          via-[#f7f8f2]/90
          via-[38%]
          to-transparent
        "
      />

      {/* Mobile fade */}
      <div
        className="
          absolute inset-0
          md:hidden
          bg-gradient-to-r
          from-[#f7f8f2]
          via-[#f7f8f2]/85
          via-[45%]
          to-[#f7f8f2]/10
        "
      />

      {/* subtle wash */}
      <div className="absolute inset-0 bg-[#f7f8f2]/5" />

      <Container>
        <div
          className="
            relative flex
            min-h-[620px]
            items-center
            py-16
            sm:min-h-[650px]
            md:min-h-[680px]
            md:py-24
          "
        >
          <div className="w-full max-w-4xl">
            {/* Eyebrow */}
            <p
              className="
                mb-5
                text-xs font-bold uppercase
                tracking-[0.18em]
                text-[#159447]
                sm:text-sm
                sm:tracking-[0.22em]
              "
            >
              Vietnamese Cashew Supplier
            </p>

            {/* Company name */}
            <h1
              className="
                max-w-full
                text-[42px]
                font-semibold
                leading-[0.98]
                tracking-[-0.04em]
                text-[#172014]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              DUY CHU{" "}
              <span className="text-[#159447]">
                CO., LTD
              </span>
            </h1>

            {/* Slogan */}
            <p
              className="
                mt-6
                max-w-md
                text-xl
                font-medium
                italic
                leading-relaxed
                text-[#6a755f]
                sm:text-2xl
              "
            >
              {siteConfig.slogan}
            </p>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-lg
                text-base
                leading-7
                text-[#53604c]
                sm:text-lg
                sm:leading-8
              "
            >
              Quality Vietnamese cashews for global partners.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                w-full
                flex-col
                gap-3
                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:gap-4
              "
            >
              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#159447]
                  px-7 py-3.5
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0f7738]
                  sm:w-auto
                "
              >
                Explore Our Products
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#26321c]/20
                  bg-white/90
                  px-7 py-3.5
                  font-semibold
                  text-[#26321c]
                  backdrop-blur-sm
                  transition
                  hover:border-[#159447]
                  hover:text-[#159447]
                  sm:w-auto
                "
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