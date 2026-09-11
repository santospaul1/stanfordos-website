import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Monitor,
  Sparkles,
} from "lucide-react";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo | Stanfordos",
  description:
    "Book a personalized Stanfordos demo and see how your school can manage everyday operations from one connected platform.",
};

const benefits = [
  "See the School Management System in action",
  "Explore the features most relevant to your school",
  "Ask questions directly to the Stanfordos team",
  "Understand how Stanfordos can fit your existing workflow",
];

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-300">
              <Sparkles size={15} />
              See Stanfordos in action
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's show you what
              <span className="text-blue-400">
                {" "}
                better school management
              </span>{" "}
              looks like.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Book a personalized Stanfordos demo and explore how your school
              can bring students, academics, administration, finance and
              reporting together in one connected platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Left */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
                Your demo
              </p>

              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                A focused walkthrough built around your school.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Tell us what matters most to your team and we'll use the demo to
                focus on those areas.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 size={19} className="text-blue-400" />
                  </div>

                  <p className="text-sm leading-6 text-slate-300">
                    Explore real product workflows
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 size={19} className="text-blue-400" />
                  </div>

                  <p className="text-sm leading-6 text-slate-300">
                    Discuss your school's specific needs
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 size={19} className="text-blue-400" />
                  </div>

                  <p className="text-sm leading-6 text-slate-300">
                    Get answers from the Stanfordos team
                  </p>
                </div>
              </div>

              <div className="mt-9 border-t border-white/10 pt-7">
                <div className="flex items-start gap-3">
                  <Clock3 size={19} className="mt-0.5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Demo duration
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Approximately 30–45 minutes
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <Monitor size={19} className="mt-0.5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Online walkthrough
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Join from your computer or mobile device
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-bold text-slate-950">
                Already know what you need?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore the School Management System before booking your demo.
              </p>

              <Link
                href="/products/school-management"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                Explore the product
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9 lg:p-10">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                What to expect
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Come with questions.
                <br />
                Leave with clarity.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
