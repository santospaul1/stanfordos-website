"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
            S
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Stanfordos
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/products/school-management"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            Products
          </Link>

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
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Book a Demo
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/products/school-management"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Products
            </Link>

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
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}