import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              About Stanfordos
            </p>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build software that makes complex work feel simpler.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Stanfordos creates practical digital products that help
              organizations bring their everyday operations together, make
              better use of information and give their teams better tools to
              work with.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              What we believe
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Software should solve problems, not create more of them.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Organizations manage a lot of information every day. Students,
              customers, finances, schedules, documents, people and decisions
              all create moving parts.
            </p>

            <p>
              When those processes are scattered across disconnected tools, work
              becomes slower and visibility becomes harder.
            </p>

            <p>
              Stanfordos is focused on building software that brings those
              workflows together in a way that is clear, practical and easy to
              use.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Four things guide what we build.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Our first product
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Helping schools operate from one connected platform.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The Stanfordos School Management System brings core school
              operations into one environment, giving administrators and
              educators better visibility into the information they manage every
              day.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Student management",
                "Academic administration",
                "Attendance",
                "School finance",
                "Reports and insights",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-blue-600" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/products/school-management"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Explore School Management
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" />

            <div className="relative rounded-3xl bg-slate-950 p-7 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                  S
                </div>

                <div>
                  <p className="font-bold text-white">Stanfordos</p>

                  <p className="text-xs text-slate-400">
                    Connected school operations
                  </p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Students", "Academics", "Attendance", "Finance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="h-2 w-16 rounded-full bg-blue-500" />

                      <p className="mt-4 text-sm font-bold text-white">
                        {item}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Connected workflow
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white">
                Want to see what Stanfordos can do?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
                Explore the School Management System or book a personalized
                walkthrough with our team.
              </p>
            </div>

            <Link
              href="/book-demo"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Book a Demo
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
