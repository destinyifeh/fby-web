import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Face By You - AI Powered Makeup Assistant",
  description:
    "Face By You combines beauty + technology to give you personalized makeup guidance that understands your face, your skin tone, and your style.",

  openGraph: {
    title: "AI Powered Makeup Assistant",
    description:
      "Beauty + technology for personalized makeup guidance that understands your face.",
    url: "https://www.facebyyou.tech",
    siteName: "Face By You",
    images: [
      {
        url: "/fby-logo.png",
        width: 1200,
        height: 630,
        alt: "Face By You - AI Makeup Assistant Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Face By You",
    description: "AI Powered Makeup Assistant",
    images: ["/fby-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Abhaya+Libre:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
