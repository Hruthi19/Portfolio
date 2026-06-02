import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hruthi Muggalla | Software Engineer",
  description:
    "Software Engineer building full-stack applications and decentralized systems. MS Computer Science graduated at University of Georgia.",
  metadataBase: new URL("https://hruthimuggalla.com"),

  // Basic metadata
  applicationName: "Hruthi Muggalla Portfolio",
  authors: [{ name: "Hruthi Muggalla" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "University of Georgia",
  ],

  openGraph: {
    type: "website",
    url: "https://hruthimuggalla.com",
    title: "Hruthi Muggalla | Software Engineer",
    description:
      "Software Engineer building full-stack applications and decentralized systems. MS CS graduate at University of Georgia.",
    siteName: "Hruthi Muggalla",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hruthi Muggalla - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://hruthimuggalla.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}