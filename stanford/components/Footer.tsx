import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="border-t border-white/5 bg-pine-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center font-semibold ">
                  <Image
                      src="/logo3.png"
                      alt="Stanfordos"
                      width={180}
                      height={48}
                      priority
                      className="h-9 w-auto object-contain lg:h-10"
                  />
                </div>

                <span className="text-xl font-semibold tracking-tight">
                StanfordOS
              </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                Practical software for schools that want simpler, more connected
                operations.
              </p>

              <Link
                  href="/book-demo"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-acid px-5 py-3 text-sm font-semibold text-pine-950 transition hover:brightness-105"
              >
                Book a Demo
                <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                Products
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                      href="/products/school-management"
                      className="text-sm text-white/50 transition hover:text-acid"
                  >
                    School Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                Company
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                      href="/about"
                      className="text-sm text-white/50 transition hover:text-acid"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                      href="/contact"
                      className="text-sm text-white/50 transition hover:text-acid"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get started */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                Get started
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                      href="/book-demo"
                      className="text-sm text-white/50 transition hover:text-acid"
                  >
                    Book a Demo
                  </Link>
                </li>

                <li>
                  <a
                      href="mailto:santospaul1252@gmail.com"
                      className="text-sm text-white/50 transition hover:text-acid"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} StanfordOS. All rights reserved.
            </p>

            <div className="flex gap-5 text-xs text-white/40">
              <Link href="/" className="transition hover:text-white">
                Privacy
              </Link>

              <Link href="/" className="transition hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}