import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Stanfordos",
  description:
      "Learn about Stanfordos and our approach to building practical software for organizations that want simpler, more connected operations.",
};

const screenshots = {
  management: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40.jpeg",
  students: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg",
};

const principles = [
  {
    icon: Layers3,
    title: "Connected by design",
    text: "We believe important information should not be trapped in disconnected systems. Our products are designed to bring everyday workflows together.",
  },
  {
    icon: Sparkles,
    title: "Simple where it matters",
    text: "Powerful software should not feel unnecessarily complicated. We focus on clear interfaces and practical workflows that teams can understand quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Built for real operations",
    text: "Our products are designed around the day-to-day problems organizations actually face, not just impressive feature lists.",
  },
  {
    icon: Users,
    title: "People first",
    text: "Technology works best when it helps people do their jobs better. We design around administrators, teams, educators and the people they serve.",
  },
];

const stats = [
  { value: "6+", label: "Core modules in one platform" },
  { value: "4", label: "School teams supported" },
  { value: "1", label: "Connected workspace" },
];

export default function AboutPage() {
  return (
      <main className="bg-pine-950 font-sans text-white antialiased">
        {/* =========================================================
          HERO — grid pattern + glows + stats strip
      ========================================================== */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {/* dot-grid that fades out downward */}
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(23,94,75,0.6),transparent_60%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
              </span>
                About Stanfordos
              </div>

              <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                We build software that makes complex work{" "}
                <span className="font-serif font-normal italic text-acid">
                feel simpler.
              </span>
              </h1>

              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/60">
                Stanfordos creates practical digital products that help
                organizations bring their everyday operations together, make
                better use of information and give their teams better tools to
                work with.
              </p>
            </div>

            {/* Stats strip */}
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
              {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-5xl italic text-white lg:text-6xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm text-white/50">{stat.label}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          01 — WHAT WE BELIEVE, with pull-quote
      ========================================================== */}
        <section className="border-t border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                  01 — What we believe
                </p>

                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Software should solve problems,{" "}
                  <span className="font-serif font-normal italic text-acid">
                  not create more of them.
                </span>
                </h2>
              </div>

              <div className="space-y-5 pt-2 text-base leading-8 text-white/60 lg:pt-4">
                <p>
                  Organizations manage a lot of information every day. Students,
                  customers, finances, schedules, documents, people and decisions
                  all create moving parts.
                </p>
                <p>
                  Stanfordos is focused on building software that brings those
                  workflows together in a way that is clear, practical and easy to
                  use.
                </p>
              </div>
            </div>

            {/* Pull-quote */}
            <blockquote className="mx-auto mt-20 max-w-4xl text-center">
            <span
                aria-hidden
                className="block font-serif text-7xl italic leading-none text-acid/30"
            >
              &ldquo;
            </span>
              <p className="text-balance font-serif text-3xl italic leading-snug text-white/90 sm:text-4xl">
                When processes are scattered across disconnected tools, work
                becomes slower — and visibility gets harder.
              </p>
            </blockquote>
          </div>
        </section>

        {/* =========================================================
          02 — PRINCIPLES, editorial numbered rows
      ========================================================== */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
              02 — Our approach
            </p>

            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Four things guide{" "}
              <span className="font-serif font-normal italic text-acid">
              what we build.
            </span>
            </h2>

            <div className="mt-14 border-t border-white/10">
              {principles.map((principle, i) => {
                const Icon = principle.icon;

                return (
                    <div
                        key={principle.title}
                        className="group grid gap-4 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.02] lg:grid-cols-[72px_1fr_1.3fr] lg:items-center lg:gap-10 lg:px-6"
                    >
                  <span className="font-serif text-3xl italic text-white/20 transition-colors duration-300 group-hover:text-acid lg:text-4xl">
                    0{i + 1}
                  </span>

                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-acid/10 text-acid transition-colors duration-300 group-hover:bg-acid group-hover:text-pine-950">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight lg:text-[1.7rem]">
                          {principle.title}
                        </h3>
                      </div>

                      <p className="max-w-xl leading-7 text-white/60">
                        {principle.text}
                      </p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
          03 — FIRST PRODUCT, real screenshot + floating chip
      ========================================================== */}
        <section className="border-t border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                  03 — Our first product
                </p>

                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Helping schools operate from{" "}
                  <span className="font-serif font-normal italic text-acid">
                  one connected platform.
                </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                  The Stanfordos School Management System brings core school
                  operations into one environment, giving administrators and
                  educators better visibility into the information they manage
                  every day.
                </p>

                <div className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
                  {[
                    "Student management",
                    "Academic administration",
                    "Attendance",
                    "School finance",
                    "Reports and insights",
                  ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="shrink-0 text-acid" />
                        <span className="text-sm font-medium text-white/80">
                      {item}
                    </span>
                      </div>
                  ))}
                </div>

                <Link
                    href="/products/school-management"
                    className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-acid px-6 py-3.5 text-sm font-semibold text-pine-950 transition hover:brightness-105"
                >
                  Explore School Management
                  <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Real screenshot in browser frame */}
              <div className="relative">
                <div
                    aria-hidden
                    className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(23,94,75,0.5),transparent_70%)] blur-2xl"
                />

                <div className="relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
                  <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-pine-900 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                      app.stanfordos.com
                    </div>
                  </div>

                  <Image
                      src={screenshots.management}
                      alt="Stanfordos school management interface"
                      width={1366}
                      height={768}
                      className="w-full"
                  />
                </div>

                {/* Floating chip */}
                <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl bg-white p-3.5 pr-6 shadow-2xl shadow-black/30 sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Everything connected.
                    </p>
                    <p className="text-xs text-slate-500">
                      One source of truth for your school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          CTA — dark panel with glow + grid texture
      ========================================================== */}
        <section className="px-6 pb-24 pt-20 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-pine-900 px-6 py-20 text-center ring-1 ring-white/10 sm:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_115%,rgba(205,242,94,0.14),transparent_70%)]" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Want to see what Stanfordos{" "}
                <span className="font-serif font-normal italic text-acid">
                can do?
              </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
                Explore the School Management System or book a personalized
                walkthrough with our team.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                    href="/book-demo"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-acid px-7 py-4 text-base font-semibold text-pine-950 transition hover:brightness-105"
                >
                  Book a Demo
                  <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                    href="/products/school-management"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  Explore the platform
                </Link>
              </div>

              <p className="mt-6 text-xs text-white/40">
                Free personalized walkthrough · No commitment
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}