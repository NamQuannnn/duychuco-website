import Image from "next/image";
import Container from "@/components/ui/Container";

const partners = [
  {
    name: "Atlanta Poland S.A.",
    logo: "/images/partners/ATLANTA POLAND S.A..png",
    scale: "scale-100",
  },
  {
    name: "Atlantix Commodities",
    logo: "/images/partners/ATLANTIX COMMODITIES.,.png",
    scale: "scale-100",
  },
  {
    name: "Agrico Trading BV",
    logo: "/images/partners/Agrico Trading BV.png",
    scale: "scale-[1.8]",
  },
  {
    name: "CAP Industries",
    logo: "/images/partners/CAP INDUSTRIES.png",
    scale: "scale-[1.8]",
  },
  {
    name: "Cetecom",
    logo: "/images/partners/Cetecom.png",
    scale: "scale-100",
  },
  {
    name: "Dirkzwager Moordrecht B.V.",
    logo: "/images/partners/DIRKZWAGER MOORDRECHT B.V..png",
    scale: "scale-100",
  },
  {
    name: "Ecom",
    logo: "/images/partners/Ecom.png",
    scale: "scale-100",
  },
  {
    name: "King Nuts & Raaphorst B.V.",
    logo: "/images/partners/KING NUTS & RAAPHORST B.V..png",
    scale: "scale-100",
  },
  {
    name: "Marjan Voce DOO",
    logo: "/images/partners/MARJAN VOCE DOO.png",
    scale: "scale-[1.8]",
  },
  {
    name: "Nature Supply EOOD",
    logo: "/images/partners/NATURE SUPPLY EOOD.png",
    scale: "scale-100",
  },
  {
    name: "RZ Commodities B.V.",
    logo: "/images/partners/RZ COMMODITIES B.V..png",
    scale: "scale-100",
  },
  {
    name: "Ultra Trading International Ltd",
    logo: "/images/partners/ULTRA TRADING INTERNATIONAL LTD.png",
    scale: "scale-[1.8]",
  },
];

function PartnerSet() {
  return (
    <div className="flex shrink-0 items-center">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="mx-3 flex h-32 w-56 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#e5e9df] bg-white px-8"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={180}
            height={80}
            className={`max-h-16 w-auto max-w-full object-contain ${partner.scale}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
            Our Partners
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#172014] md:text-5xl">
            Trusted connections
            <br />
            around the world.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#65705f]">
            Building long-term relationships with partners across international
            markets.
          </p>
        </div>
      </Container>

      <div className="partner-marquee">
        <div className="partner-marquee-track">
          <PartnerSet />
          <PartnerSet />
        </div>
      </div>
    </section>
  );
}