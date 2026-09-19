import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.stanfordos.co.ke"),
  title: {
    default: "StanfordOS | School management that stays out of the way",
    template: "%s | StanfordOS",
  },
  icons: {
    icon: "/logo2.jpg",
    apple: "/logo2.jpg",
  },

  description:
    "StanfordOS builds modern software solutions that simplify operations, connect teams, and help organizations grow.",

  keywords: [
    "StanfordOS",
    "school management system",
    "school software",
    "education software",
    "student management",
    "school administration",
    "attendance management",
    "school finance",
    "business software",
  ],

  authors: [{ name: "StanfordOS" }],
  creator: "StanfordOS",

  openGraph: {
    type: "website",
    siteName: "StanfordOS",
    title: "StanfordOS | Software That Makes Organizations Smarter",
    description:
      "Modern software solutions that simplify operations and help organizations grow.",
    url: "https://www.stanfordos.co.ke",
  },

  twitter: {
    card: "summary_large_image",
    title: "StanfordOS",
    description:
      "Modern software solutions that simplify operations and help organizations grow.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});
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
