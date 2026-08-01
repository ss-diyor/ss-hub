import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diyorbek Sultanov | Sultanov.Space",
  description:
    "A central hub for digital products, experiments, and tools built by Diyorbek Sultanov from Uzbekistan.",
  keywords: [
    "Diyorbek Sultanov",
    "Sultanov Space",
    "IELTS Mock SS",
    "Bustanlik SS",
    "Uzbekistan developer",
    "digital products",
  ],
  authors: [{ name: "Diyorbek Alibek o'g'li Sultanov" }],
  creator: "Diyorbek Alibek o'g'li Sultanov",
  metadataBase: new URL("https://sultanov.space"),
  openGraph: {
    title: "Diyorbek Sultanov | Sultanov.Space",
    description:
      "Building digital products, experiments, and tools from Uzbekistan.",
    url: "https://sultanov.space",
    siteName: "Sultanov.Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyorbek Sultanov | Sultanov.Space",
    description:
      "Building digital products, experiments, and tools from Uzbekistan.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} bg-ink font-sans text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
