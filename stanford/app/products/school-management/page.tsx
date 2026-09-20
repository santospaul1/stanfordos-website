import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Banknote,
  Users,
  House,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School Management System",
  description:
      "A modern school management system for simplifying administration, student management, academics, and school operations.",
};

const modules: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Student Management",
    description:
        "Manage student profiles, enrollment information, classes, contacts, and records from a centralized platform.",
    icon: Users,
  },
  {
    title: "School Administration",
    description:
        "Bring everyday school administration into one organized system with clear access to important information.",
    icon: House,
  },
  {
    title: "Academic Management",
    description:
        "Organize academic information and give your team a better way to manage the learning environment.",
    icon: BookOpen,
  },
  {
    title: "Finance",
    description:
        "Keep track of school financial information and simplify the management of fees and payments.",
    icon: Banknote,
  },
  {
    title: "Attendance",
    description:
        "Monitor attendance and maintain reliable records that help your school stay informed.",
    icon: Users,
  },
  {
    title: "Reports & Insights",
    description:
        "Access useful information and reports to help administrators make informed decisions.",
    icon: ChartNoAxesCombined,
  },
];

const screenshots = [
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.41.jpeg",
    title: "School dashboard",
    description:
        "Get a clear overview of important school information as soon as you log in.",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (2).jpeg",
    title: "Student management",
    description:
        "Find students, manage profiles, classes, contacts and records from one place.",
  },
  {
    src: "/screenshots/attendance.png",
    title: "Attendance",
    description:
        "Record attendance and quickly understand student participation across classes and terms.",
  },
  {
    src: "/screenshots/fees.png",
    title: "School finance",
    description:
        "Keep fee structures, invoices, balances and payment information organized in one place.",
  },
  {
    src: "/screenshots/results.png",
    title: "Results & academic performance",
    description:
        "Manage marks and results while keeping academic information accessible to authorized staff.",
  },
  {
    src: "/screenshots/timetable.png",
    title: "Timetable",
    description:
        "Keep classes, lessons and schedules organized and easy to access.",
  },
  {
    src: "/screenshots/parent-portal.png",
    title: "Parent portal",
    description:
        "Give parents secure access to the information that matters to them, including academic and financial records.",
  },
  {
    src: "/screenshots/reports.png",
    title: "Reports & insights",
    description:
        "Turn organized school information into useful reports for administrators and school leadership.",
  },
];

const faqs = [
  {
    question: "What is the StanfordOS School Management System?",
    answer:
        "It is a centralized platform designed to help schools manage administration, students, academics, and other everyday operations from one place.",
  },
  {
    question: "Who can use the system?",
    answer:
        "The platform is designed around the needs of schools and can support administrators, teachers, and other authorized users.",
  },
  {
    question: "Can we see the system before adopting it?",
    answer:
        "Yes. You can book a personalized demo and our team can walk you through the platform and its capabilities.",
  },
  {
    question: "Can StanfordOS support our school's specific needs?",
    answer:
        "Book a demo with our team so we can understand your requirements and show you how the platform can fit into your school's workflow.",
  },
];

function BrowserFrame({
                        src,
                        alt,
                        priority = false,
                      }: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
      <div className="overflow-hidden rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-pine-900 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
            app.stanfordos.co.ke
          </div>
        </div>

        <Image
            src={src}
            alt={alt}
            width={1366}
            height={768}
            priority={priority}
            className="w-full"
        />
      </div>
  );
}

export default function SchoolManagementPage() {
  return (
      <main className="bg-pine-950 font-sans text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(23,94,75,0.6),transparent_60%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 sm:text-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
                </span>
                  StanfordOS School Management System
                </div>

                <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Run your entire school from one{" "}
                  <span className="font-serif font-normal italic text-acid">
                  connected platform.
                </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                  Simplify school administration, organize student information,
                  and bring your school&apos;s everyday operations together in one
                  modern system.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Link
                      href="/book-demo"
                      className="group inline-flex items-center justify-center gap-3 rounded-xl bg-acid px-7 py-4 text-base font-semibold text-pine-950 transition hover:brightness-105"
                  >
                    Book a Demo
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pine-950/10 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                  </Link>

                  <a
                      href="#features"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                  >
                    Explore Features
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-acid" />
                  Centralized management
                </span>
                  <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-acid" />
                  Modern interface
                </span>
                  <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-acid" />
                  Designed for schools
                </span>
                </div>
              </div>

              <div className="relative">
                <div
                    aria-hidden
                    className="absolute -inset-8 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(23,94,75,0.5),transparent_70%)] blur-3xl"
                />

                <div className="relative">
                  <BrowserFrame
                      src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.41.jpeg"
                      alt="StanfordOS School Management System dashboard"
                      priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FEATURES */}
        <section id="features" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                Platform features
              </p>

              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything your school needs to{" "}
                <span className="font-serif font-normal italic text-acid">
                stay organized.
              </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                A growing collection of tools designed around the everyday needs
                of modern schools.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => {
                const Icon = module.icon;

                return (
                    <div
                        key={module.title}
                        className="group rounded-2xl bg-white/[0.03] p-7 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:ring-acid/40"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-acid/10 text-acid transition group-hover:bg-acid group-hover:text-pine-950">
                        <Icon size={21} strokeWidth={2} />
                      </div>

                      <h3 className="mt-6 text-lg font-semibold">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/60">
                        {module.description}
                      </p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT SCREENSHOT TOUR */}
        <section
            id="screenshots"
            className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                Inside StanfordOS
              </p>

              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                See the platform{" "}
                <span className="font-serif font-normal italic text-acid">
                  in action.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Explore the core workflows your school team can use every day,
                from student management and attendance to finance, results and
                parent access.
              </p>
            </div>

            <div className="mt-16 space-y-24">
              {screenshots.map((screenshot, index) => (
                  <div
                      key={screenshot.src}
                      className="grid items-center gap-12 lg:grid-cols-2"
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                      <BrowserFrame
                          src={screenshot.src}
                          alt={`StanfordOS ${screenshot.title}`}
                      />
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {screenshot.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-2 rounded-xl bg-acid px-7 py-4 text-base font-semibold text-pine-950 transition hover:brightness-105"
              >
                See StanfordOS in a demo
                <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
            id="faq"
            className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                FAQ
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                  <details
                      key={faq.question}
                      className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition open:bg-white/[0.05] open:ring-white/20"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.question}

                      <span className="text-xl text-white/40 transition group-open:rotate-45 group-open:text-acid">
                    +
                  </span>
                    </summary>

                    <p className="mt-4 max-w-3xl leading-7 text-white/60">
                      {faq.answer}
                    </p>
                  </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 pt-20 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-pine-900 px-6 py-20 text-center ring-1 ring-white/10 sm:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_115%,rgba(205,242,94,0.14),transparent_70%)]" />
            </div>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:text-sm">
                See StanfordOS in action
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Ready to see a smarter way to{" "}
                <span className="font-serif font-normal italic text-acid">
                manage your school?
              </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Book a personalized demo and let our team show you how StanfordOS
                can fit into your school&apos;s workflow.
              </p>

              <div className="mt-9">
                <Link
                    href="/book-demo"
                    className="group inline-flex items-center gap-3 rounded-xl bg-acid px-8 py-4 text-base font-semibold text-pine-950 transition hover:brightness-105"
                >
                  Book a Demo
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pine-950/10 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
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