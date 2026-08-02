import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diyorbek Sultanov",
  description: "builds things from Uzbekistan.",
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
    title: "Diyorbek Sultanov",
    description: "builds things from Uzbekistan.",
    url: "https://sultanov.space",
    siteName: "Sultanov.Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyorbek Sultanov",
    description: "builds things from Uzbekistan.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} bg-black font-mono text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
