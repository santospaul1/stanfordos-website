import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductNav from "@/components/ProductNav";
import {
  BookOpen,
  Banknote,
  Users,
  House,
  ChartNoAxesCombined,
  type LucideIcon,
  Handshake,
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
    title: "A complete school dashboard",
    description:
      "Get a clear overview of important school information as soon as you log in.",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg",
    title: "Manage your school from one place",
    description:
      "Keep the different areas of your school connected through a centralized platform.",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (2).jpeg",
    title: "Student management made simple",
    description:
      "Find and manage student information without navigating through disconnected systems.",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.45.jpeg",
    title: "Detailed student information",
    description:
      "Update and maintain student information using a structured, easy-to-use interface.",
  },
];

const faqs = [
  {
    question: "What is the Stanfordos School Management System?",
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
    question: "Can Stanfordos support our school's specific needs?",
    answer:
      "Book a demo with our team so we can understand your requirements and show you how the platform can fit into your school's workflow.",
  },
];

export default function SchoolManagementPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,0.10),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Stanfordos School Management System
              </div>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Run your entire school from one
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  connected platform.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Simplify school administration, organize student information,
                and bring your school's everyday operations together in one
                modern system.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
                >
                  Book a Demo
                  <span className="ml-3">→</span>
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span>✓ Centralized management</span>
                <span>✓ Modern interface</span>
                <span>✓ Designed for schools</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-xl bg-white">
                  <div className="flex h-10 items-center gap-2 border-b bg-slate-50 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                    <div className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-400">
                      School Management System
                    </div>
                  </div>

                  <Image
                    src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.41.jpeg"
                    alt="Stanfordos School Management System dashboard"
                    width={1366}
                    height={768}
                    priority
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductNav />

      {/* INTRO */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            One platform
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Less complexity. More control.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Schools deal with large amounts of information every day. Stanfordos
            brings that information together into a single, organized platform
            designed to make everyday management easier.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Platform features
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Everything your school needs to stay organized.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A growing collection of tools designed around the everyday needs
              of modern schools.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {module.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {module.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-blue-600">
                    Learn more →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Designed for clarity
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                See your school at a glance.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The dashboard provides a centralized view of important school
                information, helping administrators understand what's happening
                without jumping between different systems.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Centralized information",
                  "Clear dashboard overview",
                  "Easy navigation",
                  "Organized school records",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                      ✓
                    </span>

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-xl">
              <Image
                src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.43.jpeg"
                alt="Stanfordos school dashboard"
                width={1366}
                height={768}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT 1 */}
      <section className="bg-[#07111f] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                <Image
                  src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg"
                  alt="Stanfordos school administration dashboard"
                  width={1366}
                  height={768}
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                Administration
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Put your school's operations in one place.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Give your team a central place to work with the information they
                need every day.
              </p>

              <Link
                href="/book-demo"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                See it in a demo
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT MANAGEMENT */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Student management
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Keep student information organized.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Find student records quickly, view relevant information, and
                manage your school's student data through an organized
                interface.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Student profiles",
                  "Search & filtering",
                  "Class information",
                  "Contact information",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-700"
                  >
                    <span className="mr-2 text-blue-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <Image
                src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (2).jpeg"
                alt="Stanfordos student management interface"
                width={1366}
                height={768}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT EDIT */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-xl">
              <Image
                src="/screenshots/WhatsApp Image 2026-09-04 at 18.25.45.jpeg"
                alt="Stanfordos student information form"
                width={1366}
                height={768}
                className="w-full rounded-xl"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Student records
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Information where your team needs it.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Keep important student information structured and accessible to
                authorized users while reducing unnecessary paperwork and
                fragmented records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MORE SCREENSHOTS */}
      <section id="screenshots" className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Inside the platform
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Built to be practical.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore some of the interfaces your team can use every day.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {screenshots.slice(0, 2).map((screenshot) => (
              <div key={screenshot.src}>
                <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
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

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {screenshot.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <div className="text-4xl font-bold">01</div>

              <h3 className="mt-8 text-2xl font-bold">
                Centralize information
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Reduce scattered records by bringing important school
                information together.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8 text-white">
              <div className="text-4xl font-bold">02</div>

              <h3 className="mt-8 text-2xl font-bold">Simplify daily work</h3>

              <p className="mt-4 leading-7 text-blue-100">
                Give administrators and staff a more organized way to handle
                everyday school processes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="text-4xl font-bold text-slate-950">03</div>

              <h3 className="mt-8 text-2xl font-bold text-slate-950">
                Make better decisions
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Use organized information and reports to gain a clearer view of
                your institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950">
                  {faq.question}

                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#07111f] px-8 py-16 text-center text-white sm:px-12 lg:px-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
            See Stanfordos in action
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to see a smarter way to manage your school?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Book a personalized demo and let our team show you how Stanfordos
            can fit into your school's workflow.
          </p>

          <div className="mt-9">
            <Link
              href="/book-demo"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              Book a Demo
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
