import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  LayoutDashboard,
  Users,
  UserRoundCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
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
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative bg-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200">
                <Sparkles size={15} />
                Modern school management software
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Run your school from{" "}
                <span className="text-blue-400">one connected platform.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Manage students, academics, attendance, finance and
                administration from one modern school management system.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
                >
                  Book a Demo
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/products/school-management"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore the Platform
                  <ChevronRight size={17} />
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  "Student records",
                  "Attendance",
                  "Finance",
                  "Academics",
                  "Administration",
                  "Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-blue-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Product preview */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
                <div className="flex h-10 items-center gap-2 rounded-t-xl border-b border-slate-200 bg-slate-100 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate-400">
                    app.stanfordos.com
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

              <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <LayoutDashboard size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Your school
                    </p>
                    <p className="text-sm font-bold text-slate-950">
                      One connected view
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                One platform
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                One connected view of your school.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">
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
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The problem
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Running a school shouldn't mean juggling disconnected systems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              As school operations grow, manual processes and scattered
              information can make everyday work harder than it needs to be.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.number}
                className="interactive-card bg-white p-8 lg:p-10"
              >
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-black text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {problem.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {problem.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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
      <section className="bg-white py-24" id="features">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The solution
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything your school needs, connected in one platform.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Built around the core workflows that keep a school running.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <Link
                    href="/products/school-management"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Learn more
                    <ArrowRight size={15} />
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
      <section id="product" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                See Stanfordos in action
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Built to make everyday school operations simpler.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                A clean workspace for the information and processes your school
                relies on every day.
              </p>
            </div>

            <Link
              href="/products/school-management"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              View full product
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                <Image
                  src={screenshots.students}
                  alt="Stanfordos student management"
                  width={1366}
                  height={768}
                  className="w-full rounded-xl"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-bold">Student Management</h3>
                <p className="mt-2 leading-7 text-slate-400">
                  Keep student information organized and accessible.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                <Image
                  src={screenshots.management}
                  alt="Stanfordos administration interface"
                  width={1366}
                  height={768}
                  className="w-full rounded-xl"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-bold">School Administration</h3>
                <p className="mt-2 leading-7 text-slate-400">
                  Give your team a centralized workspace for everyday
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTCOMES
      ========================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                The outcome
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                More clarity. Less administrative friction.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Stanfordos is designed to help your team spend less time
                managing systems and more time focusing on the school.
              </p>

              <Link
                href="/book-demo"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                See how it works
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <span className="font-semibold leading-6 text-slate-800">
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
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Built for school teams
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everyone gets a clearer way to work.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stanfordos brings different parts of your school together without
              making everyday workflows unnecessarily complicated.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div
                  key={audience.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-6 font-bold text-slate-950">
                    {audience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Getting started
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              See how Stanfordos fits your school.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
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
                className="rounded-2xl border border-slate-200 p-8"
              >
                <span className="text-sm font-black text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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
      <section id="faq" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
                    <ChevronRight size={17} />
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <ClipboardCheck size={25} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to see Stanfordos in action?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover how your school can bring its operations into one connected
            platform.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Book a Demo
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Talk to Stanfordos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
