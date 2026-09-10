import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Stanfordos |Software That Makes Organizations Smarter",
    template: "%s | Stanfordos",
  },
  description:
    "Stanford builds modern software solutions that simplify operations and help organizations grow.",
  keywords: [
    "Stanfordos",
    "School Management System",
    "School Software",
    "Education Software",
    "School Management Software",
  ],

  openGraph: {
    title: "Stanfordos | Software That Makes Organizations Smarter",
    description:
      "Modern software designed to simplify operations and empower organizations.",
    type: "website",
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
