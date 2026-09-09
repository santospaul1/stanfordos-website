import {
  BookOpen,
  Banknote,
  Users,
  House,
  ChartNoAxesCombined,
  type LucideIcon,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductPreview from "../components/ProductPreview";

const features: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Student Management",
    description:
      "Keep student records organized, accessible and easy to manage from one central platform.",
    icon: Users,
  },
  {
    number: "02",
    title: "Academic Management",
    description:
      "Manage classes, subjects, examinations, results and academic information with ease.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Finance Management",
    description:
      "Simplify fee collection, payments, balances, receipts and financial reporting.",
    icon: Banknote,
  },
  {
    number: "04",
    title: "Attendance",
    description:
      "Track Attendance and get a picture of students participation across your school.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Report & Insights",
    description:
      "Turn your school data into useful information for better decision and planning.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "06",
    title: "Administration",
    description:
      "Bring the different parts of your school's operations together in one platform.",
    icon: House,
  },
];

const audiences = [
  {
    title: "School Administrators",
    description:
      "Get a complete view of school operations and manage your institution from one place.",
  },
  {
    title: "Teachers",
    description:
      "Spend less time on administration and more time focusing on teaching and students.",
  },
  {
    title: "Parents",
    description:
      "Keep parents connected to important information about their child's education and school activities.",
  },
];
const screenshots = [
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.39.jpeg",
    title: "School dashboard",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40.jpeg",
    title: "Management overview",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg",
    title: "Student management",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[760px] bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Software built for modern organizations
              </div>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Software that makes
                <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  organizations smarter.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Stanfordos builds modern software solutions that simplify
                complex operations, improve efficiency, and help organizations
                grow.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/school-management"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore our product
                  <span className="ml-3">→</span>
                </Link>

                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Book a demo
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
                <span>✓ Simple to use</span>
                <span>✓ Built for scale</span>
                <span>✓ Accessible anywhere</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <div className="flex h-10 items-center gap-2 border-b bg-slate-50 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="ml-4 h-5 flex-1 rounded-md bg-slate-100" />
                  </div>

                  <Image
                    src={screenshots[0].src}
                    alt="Stanfordos School Management System dashboard"
                    width={1366}
                    height={768}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/10 bg-[#101c2d] p-4 shadow-xl sm:block">
                <div className="text-xs text-slate-400">School management</div>
                <div className="mt-1 text-lg font-bold">All in one place</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                What we build
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Technology designed around the way organizations actually work.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We believe great software should remove complexity rather than add
              to it. Stanfordos creates practical digital products that bring
              people, information, and processes together.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Our product
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Everything your school needs.
                <span className="block text-blue-600">In one platform.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                The Stanfordos School Management System brings administration,
                students, teachers, academics, finance, attendance, and
                reporting together in one modern platform.
              </p>

              <div className="mt-8">
                <Link
                  href="/products/school-management"
                  className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Explore School Management System
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <ProductPreview />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Powerful features
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              One platform. Multiple possibilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything is organized into a single system so your team can
              spend less time switching between tools.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group bg-white p-8 transition hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={2} />
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="bg-[#07111f] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              See it in action
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A closer look at Stanfordos
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Designed to give school administrators a clear view of their
              institution while keeping everyday tasks simple.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {screenshots.slice(1).map((screenshot) => (
              <div
                key={screenshot.src}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    width={1366}
                    height={768}
                    className="w-full transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products/school-management"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              View all product features
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Built for people
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Technology that works for everyone.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Stanfordos brings different parts of an organization together
                without making technology harder to use.
              </p>
            </div>

            <div className="grid gap-5">
              {audiences.map((audience, index) => (
                <div
                  key={audience.title}
                  className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {audience.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center text-white sm:px-12 lg:px-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
            Ready to see it?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            See what Stanfordos can do for your organization.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Book a personalized demo and let us walk you through the platform.
          </p>

          <div className="mt-8">
            <Link
              href="/book-demo"
              className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Book a demo
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
