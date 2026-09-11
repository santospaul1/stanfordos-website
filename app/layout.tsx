import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://stanfordos.com"),

  title: {
    default: "Stanfordos | Software That Makes Organizations Smarter",
    template: "%s | Stanfordos",
  },

  description:
    "Stanfordos builds modern software solutions that simplify operations, connect teams, and help organizations grow.",

  keywords: [
    "Stanfordos",
    "school management system",
    "school software",
    "education software",
    "student management",
    "school administration",
    "attendance management",
    "school finance",
    "business software",
  ],

  authors: [{ name: "Stanfordos" }],
  creator: "Stanfordos",

  openGraph: {
    type: "website",
    siteName: "Stanfordos",
    title: "Stanfordos | Software That Makes Organizations Smarter",
    description:
      "Modern software solutions that simplify operations and help organizations grow.",
    url: "https://stanfordos.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Stanfordos",
    description:
      "Modern software solutions that simplify operations and help organizations grow.",
  },

  robots: {
    index: true,
    follow: true,
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
