"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 border-b border-white/5 bg-pine-950/80 backdrop-blur-xl">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setOpen(false)}
          >
            <Image
                src="/logo3.png"
                alt="Stanfordos"
                width={180}
                height={48}
                priority
                className="h-9 w-auto object-contain lg:h-10"
            />
            <span className="text-xl font-semibold tracking-tight text-white">
            StanfordOS
          </span>
          </Link>

          {/* Desktop Navigation — centered like the reference */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {/* Products dropdown */}
            <div className="relative">
              <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
              >
                Products
                <ChevronDown
                    size={15}
                    className={`transition-transform ${
                        productsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-2xl bg-pine-800 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/10">
                    <Link
                        href="/products/school-management"
                        onClick={() => setProductsOpen(false)}
                        className="block rounded-xl p-4 transition hover:bg-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-acid/15 text-base font-bold text-acid">
                          S
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            School Management System
                          </p>
                          <p className="mt-1 text-xs leading-5 text-white/50">
                            Manage students, academics, attendance, finance and
                            administration from one platform.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
              )}
            </div>

            <Link
                href="/about"
                className="text-sm text-white/70 transition hover:text-white"
            >
              About
            </Link>

            <Link
                href="/contact"
                className="text-sm text-white/70 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA — white pill */}
          <Link
              href="/book-demo"
              className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-pine-950 transition hover:bg-white/90 lg:inline-flex"
          >
            Book a Demo
            <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Mobile button */}
          <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
            <div className="border-t border-white/10 bg-pine-900/95 px-6 py-5 backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col gap-1">
                <div>
                  <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-white/80 hover:bg-white/5"
                  >
                    Products
                    <ChevronDown
                        size={17}
                        className={`transition-transform ${
                            productsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {productsOpen && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        <Link
                            href="/products/school-management"
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
                        >
                          School Management System
                        </Link>
                      </div>
                  )}
                </div>

                <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 font-medium text-white/80 hover:bg-white/5"
                >
                  About
                </Link>

                <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 font-medium text-white/80 hover:bg-white/5"
                >
                  Contact
                </Link>

                <Link
                    href="/book-demo"
                    onClick={() => setOpen(false)}
                    className="mt-3 rounded-xl bg-acid px-4 py-3 text-center font-semibold text-pine-950"
                >
                  Book a Demo
                </Link>
              </nav>
            </div>
        )}
      </header>
  );
}