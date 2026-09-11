"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.jpg"
            alt="Stanfordos"
            width={180}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />

          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Stanfordos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {/* Products */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
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
              <div className="absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <Link
                  href="/products/school-management"
                  onClick={() => setProductsOpen(false)}
                  className="group block rounded-xl p-4 transition hover:bg-slate-50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      S
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        School Management System
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
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
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/book-demo"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-semibold text-slate-700 hover:bg-slate-50"
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
                <div className="ml-3 border-l border-slate-200 pl-3">
                  <Link
                    href="/products/school-management"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    School Management System
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>

            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
