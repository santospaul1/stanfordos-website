import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                S
              </div>

              <span className="text-xl font-extrabold tracking-tight">
                Stanfordos
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Practical software for organizations that want simpler, more
              connected operations.
            </p>

            <Link
              href="/book-demo"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Book a Demo
            </Link>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-white">Products</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/products/school-management"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  School Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get started */}
          <div>
            <h3 className="text-sm font-bold text-white">Get started</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/book-demo"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Book a Demo
                </Link>
              </li>

              <li>
                <a
                  href="mailto:hello@stanfordos.com"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Stanfordos. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-slate-500">
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
