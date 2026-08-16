import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://duychuco.com"),
  title: {
    default: "Duy Chu Co., Ltd | Vietnamese Cashew Supplier",
    template: "%s | Duy Chu Co., Ltd",
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}