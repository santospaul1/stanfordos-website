import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Users,
  UserRoundCheck,
  Settings2,
  ShieldCheck,
  Sparkles, ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School Management Software That Keeps Everything Connected",
  description:
      "Stanfordos helps schools manage students, academics, attendance, finance and administration from one connected platform.",
};

const screenshots = {
  dashboard: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.39.jpeg",
  management: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40.jpeg",
  students: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg",
  studentEdit: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (2).jpeg",
  additional1: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.41.jpeg",
  additional2: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.43.jpeg",
  additional3: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.45.jpeg",
};

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
        "Keep student profiles, records and information organized in one centralized system.",
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    description:
        "Bring academic information and everyday school workflows into one connected platform.",
  },
  {
    icon: UserRoundCheck,
    title: "Attendance",
    description:
        "Make attendance tracking easier and give administrators a clearer view of student participation.",
  },
  {
    icon: CreditCard,
    title: "Finance",
    description:
        "Keep financial information organized and make it easier to monitor school payment records.",
  },
  {
    icon: Settings2,
    title: "Administration",
    description:
        "Simplify day-to-day administrative work with a centralized digital workspace.",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
        "Turn school data into useful information that supports better decisions.",
  },
];

const problems = [
  {
    number: "01",
    title: "Too much manual work",
    description:
        "Student records, attendance and reports can become difficult to manage when information is spread across paper and spreadsheets.",
  },
  {
    number: "02",
    title: "Information is scattered",
    description:
        "When different parts of the school operate separately, finding the right information takes more time.",
  },
  {
    number: "03",
    title: "Reporting takes too long",
    description:
        "Administrators shouldn't have to spend hours compiling information just to understand what's happening.",
  },
  {
    number: "04",
    title: "Growing schools need better systems",
    description:
        "As your school grows, disconnected processes become harder to maintain and easier to get wrong.",
  },
];

const outcomes = [
  "Spend less time searching for information",
  "Reduce repetitive administrative work",
  "Keep student information organized",
  "Improve visibility across school operations",
  "Give teams a connected workspace",
  "Make better decisions with accessible data",
];

const audiences = [
  {
    icon: ShieldCheck,
    title: "School Administrators",
    description:
        "Keep everyday school operations organized from a central platform.",
  },
  {
    icon: LayoutDashboard,
    title: "School Leaders",
    description:
        "Get a clearer view of the information needed to make informed decisions.",
  },
  {
    icon: BookOpen,
    title: "Teachers",
    description:
        "Access the student and academic information needed for everyday work.",
  },
  {
    icon: CreditCard,
    title: "Finance Teams",
    description:
        "Keep financial records and payment information easier to manage.",
  },
];

const faqs = [
  {
    question: "What is Stanfordos?",
    answer:
        "Stanfordos is a software platform designed to help schools manage core operations such as students, academics, attendance, finance, administration and reporting from one connected system.",
  },
  {
    question: "Can I see Stanfordos before using it?",
    answer:
        "Yes. You can book a personalized demo and our team can walk you through the platform and its capabilities.",
  },
  {
    question: "Is Stanfordos suitable for different types of schools?",
    answer:
        "The platform is designed around common school-management workflows. During a demo, we can discuss your school's specific requirements and workflow.",
  },
  {
    question: "Can multiple members of staff use the platform?",
    answer:
        "Stanfordos is designed to support school teams and role-based workflows. Available roles and permissions can be discussed during your product demonstration.",
  },
  {
    question: "Can Stanfordos be customized?",
    answer:
        "If your school has specific requirements, we can discuss customization, integrations and deployment options during a consultation.",
  },
  {
    question: "How do I get started?",
    answer:
        "Start by booking a demo. We'll learn about your school, demonstrate the platform and discuss the best way to get started.",
  },
];

export default function HomePage() {
  return (
      <main className="overflow-hidden bg-pine-950 font-sans text-white antialiased">
        {/* =========================================================
          HERO — centered, like the reference
      ========================================================== */}
        <section className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(23,94,75,0.55),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_110%,rgba(16,70,59,0.5),transparent_70%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-mint sm:text-sm">
                <Sparkles size={14} className="text-acid" />
                Modern school management software
              </div>

              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
                Run your school.
                <br />
                And{" "}
                <span className="font-serif font-normal italic text-acid">
                stay connected.
              </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-white/60 sm:text-lg">
                Manage students, academics, attendance, finance and
                administration from one modern school management system.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                    href="/book-demo"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-acid px-7 py-4 text-base font-semibold text-pine-950 transition hover:brightness-105 sm:w-auto"
                >
                  Book a Demo
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pine-950/10 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
                </Link>

                <Link
                    href="/products/school-management"
                    className="group inline-flex items-center gap-1.5 text-base font-medium text-white transition hover:text-acid"
                >
                  Explore the platform
                  <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="mt-9 flex items-center justify-center gap-2 text-xs text-white/50 sm:text-sm">
                <Sparkles size={14} className="shrink-0 text-acid" />
                <p>
                  Students · Academics · Attendance · Finance · Administration ·
                  Reports
                </p>
              </div>
            </div>

            {/* Product shot */}
            <div className="relative mx-auto mt-16 w-full max-w-5xl sm:mt-20">
              {/* Left tilted screenshot */}
              <div
                  aria-hidden
                  className="absolute -left-32 top-1/2 hidden w-80 -translate-y-[55%] -rotate-6 xl:block xl:w-96"
              >
                <Image
                    src={screenshots.additional1}
                    alt=""
                    width={1366}
                    height={768}
                    className="h-[400px] w-full rounded-2xl object-cover object-left-top shadow-2xl shadow-black/50 ring-1 ring-white/20 xl:h-[480px]"
                />
              </div>

              {/* Right tilted screenshot */}
              <div
                  aria-hidden
                  className="absolute -right-32 top-1/2 hidden w-80 -translate-y-[55%] rotate-6 xl:block xl:w-96"
              >
                <Image
                    src={screenshots.additional2}
                    alt=""
                    width={1366}
                    height={768}
                    className="h-[400px] w-full rounded-2xl object-cover object-right-top shadow-2xl shadow-black/50 ring-1 ring-white/20 xl:h-[480px]"
                />
              </div>

              {/* Floating pill badge — top left, overlaps everything */}
              <div className="absolute -left-4 top-24 z-20 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-2xl shadow-black/30 xl:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pine-950 text-acid">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Everything in one place.
                  </p>
                  <p className="text-xs text-slate-500">
                    Admissions to reports, connected.
                  </p>
                </div>
              </div>

              {/* Toast notification — bottom right */}
              <div className="absolute -right-3 bottom-12 z-20 hidden items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-2xl shadow-black/30 lg:flex">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Fee payment recorded.
                  </p>
                  <p className="text-xs text-slate-500">Synced across your school.</p>
                </div>
              </div>

              {/* Main screenshot */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-pine-900 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                    app.stanfordos.co.ke
                  </div>
                </div>

                <Image
                    src={screenshots.dashboard}
                    alt="Stanfordos school management dashboard"
                    width={1366}
                    height={768}
                    priority
                    className="w-full"
                />
              </div>

              {/* Caption row — like the reference's bottom strip */}
              <div className="mt-10 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
    <span className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
      One connected workspace
    </span>
                <span className="hidden sm:block">Illustrative product preview</span>
                <a
                    href="#features"
                    className="hidden transition hover:text-white md:block"
                >
                  Built around schools →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          POSITIONING
      ========================================================== */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                  One platform
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  One connected view of your school.
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-white/60">
                Stanfordos brings the core parts of school operations together,
                giving administrators and teams a clearer way to manage
                information, processes and everyday work.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
          PROBLEMS
      ========================================================== */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                The problem
              </p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Running a school shouldn&apos;t mean{" "}
                <span className="font-serif font-normal italic text-acid">
                juggling disconnected systems.
              </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                As school operations grow, manual processes and scattered
                information can make everyday work harder than it needs to be.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {problems.map((problem) => (
                  <div
                      key={problem.number}
                      className="rounded-2xl bg-white/[0.03] p-8 ring-1 ring-white/10 transition hover:bg-white/[0.05] hover:ring-white/20 lg:p-10"
                  >
                <span className="font-serif text-2xl italic text-acid">
                  {problem.number}
                </span>
                    <h3 className="mt-6 text-xl font-semibold">{problem.title}</h3>
                    <p className="mt-3 leading-7 text-white/60">
                      {problem.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          FEATURES
      ========================================================== */}
        <section id="features" className="border-y border-white/5 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                The solution
              </p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything your school needs,{" "}
                <span className="font-serif font-normal italic text-acid">
                connected in one platform.
              </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Built around the core workflows that keep a school running.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={feature.title}
                        className="group rounded-2xl bg-white/[0.03] p-7 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.05] hover:ring-acid/40"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-acid/10 text-acid transition group-hover:bg-acid group-hover:text-pine-950">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/60">
                        {feature.description}
                      </p>
                      <Link
                          href="/products/school-management"
                          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-acid transition hover:text-white"
                      >
                        Learn more
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
          PRODUCT SHOWCASE
      ========================================================== */}
        <section id="product" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                  See Stanfordos in action
                </p>
                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Built to make everyday school operations{" "}
                  <span className="font-serif font-normal italic text-acid">
                  simpler.
                </span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/60">
                  A clean workspace for the information and processes your school
                  relies on every day.
                </p>
              </div>
              <Link
                  href="/products/school-management"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-acid transition hover:text-white"
              >
                View full product
                <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-14 overflow-hidden rounded-3xl bg-white/[0.03] p-2 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
              <Image
                  src={screenshots.dashboard}
                  alt="Stanfordos dashboard"
                  width={1366}
                  height={768}
                  className="w-full rounded-2xl"
              />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <div className="overflow-hidden rounded-2xl bg-white/[0.03] p-2 ring-1 ring-white/10">
                  <Image
                      src={screenshots.students}
                      alt="Stanfordos student management"
                      width={1366}
                      height={768}
                      className="w-full rounded-xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Student Management</h3>
                <p className="mt-2 leading-7 text-white/60">
                  Keep student information organized and accessible.
                </p>
              </div>

              <div>
                <div className="overflow-hidden rounded-2xl bg-white/[0.03] p-2 ring-1 ring-white/10">
                  <Image
                      src={screenshots.management}
                      alt="Stanfordos administration interface"
                      width={1366}
                      height={768}
                      className="w-full rounded-xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  School Administration
                </h3>
                <p className="mt-2 leading-7 text-white/60">
                  Give your team a centralized workspace for everyday operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          OUTCOMES
      ========================================================== */}
        <section className="border-y border-white/5 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                  The outcome
                </p>
                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  More clarity.{" "}
                  <span className="font-serif font-normal italic text-acid">
                  Less administrative friction.
                </span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/60">
                  Stanfordos is designed to help your team spend less time
                  managing systems and more time focusing on the school.
                </p>
                <Link
                    href="/book-demo"
                    className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-acid px-6 py-3.5 text-sm font-semibold text-pine-950 transition hover:brightness-105"
                >
                  See how it works
                  <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                    <div
                        key={outcome}
                        className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10"
                    >
                      <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-acid"
                      />
                      <span className="font-medium leading-6 text-white/80">
                    {outcome}
                  </span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          WHO IT'S FOR
      ========================================================== */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                Built for school teams
              </p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Everyone gets a{" "}
                <span className="font-serif font-normal italic text-acid">
                clearer way to work.
              </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Stanfordos brings different parts of your school together without
                making everyday workflows unnecessarily complicated.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => {
                const Icon = audience.icon;
                return (
                    <div
                        key={audience.title}
                        className="rounded-2xl bg-white/[0.03] p-7 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/20"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
                        <Icon size={19} />
                      </div>
                      <h3 className="mt-6 font-semibold">{audience.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/60">
                        {audience.description}
                      </p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
        <section className="border-y border-white/5 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                Getting started
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                See how Stanfordos fits your school.
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Book a demo",
                  description:
                      "Tell us about your school and how your team currently works.",
                },
                {
                  number: "02",
                  title: "See the platform",
                  description:
                      "We'll walk you through Stanfordos and focus on the workflows relevant to your school.",
                },
                {
                  number: "03",
                  title: "Get started",
                  description:
                      "Once you're ready, we'll discuss setup, onboarding and the best way to move forward.",
                },
              ].map((step) => (
                  <div
                      key={step.number}
                      className="rounded-2xl bg-white/[0.03] p-8 ring-1 ring-white/10"
                  >
                <span className="font-serif text-5xl italic text-acid">
                  {step.number}
                </span>
                    <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-white/60">
                      {step.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          FAQ
      ========================================================== */}
        <section id="faq" className="py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                FAQ
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-14 space-y-4">
              {faqs.map((faq) => (
                  <details
                      key={faq.question}
                      className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition open:bg-white/[0.05] open:ring-white/20"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60 transition group-open:rotate-90 group-open:bg-acid/15 group-open:text-acid">
                    <ChevronRight size={17} />
                  </span>
                    </summary>
                    <p className="mt-5 max-w-3xl leading-7 text-white/60">
                      {faq.answer}
                    </p>
                  </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          FINAL CTA — lime panel closer
      ========================================================== */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-acid px-6 py-20 text-center text-pine-950 sm:px-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-950 text-acid">
              <ClipboardCheck size={25} />
            </div>

            <h2 className="mt-8 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Ready to see Stanfordos{" "}
              <span className="font-serif font-normal italic">in action?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-pine-950/70">
              Discover how your school can bring its operations into one
              connected platform.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-pine-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-pine-800"
              >
                Book a Demo
                <ArrowUpRight size={17} />
              </Link>
              <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-pine-950/15 px-7 py-4 text-base font-semibold text-pine-950 transition hover:bg-pine-950/5"
              >
                Talk to Stanfordos
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}