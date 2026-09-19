import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Stanfordos",
  description:
    "Contact the Stanfordos team for product questions, partnerships, support and demo requests.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              Contact Stanfordos
            </p>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's talk about what you're building.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you want to learn more about our products, discuss your
              organization's needs or explore a partnership, we'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={<Mail size={23} />}
            title="Email"
            description="Send us a message and we'll get back to you."
            value="hello@stanfordos.com"
            href="mailto:hello@stanfordos.com"
          />

          <ContactCard
            icon={<Phone size={23} />}
            title="Phone"
            description="Prefer to speak directly? Get in touch with our team."
            value="Contact our team"
            href="/book-demo"
          />

          <ContactCard
            icon={<MessageSquare size={23} />}
            title="Product demo"
            description="See how Stanfordos works for your organization."
            value="Book a demo"
            href="/book-demo"
          />
        </div>
      </section>

      {/* Main CTA */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <MessageSquare size={25} />
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Looking for a product walkthrough?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A demo is the fastest way to understand how Stanfordos could fit
            into your school's day-to-day operations.
          </p>

          <Link
            href="/book-demo"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Book a Demo
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
            Before you contact us
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Common questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          <Faq
            question="Can I request a product demonstration?"
            answer="Yes. Use the Book a Demo page to tell us about your school and the areas you'd like to explore."
          />

          <Faq
            question="Can Stanfordos support different types of schools?"
            answer="The School Management System is designed around common school administration workflows. During a demo, we can discuss your specific requirements."
          />

          <Faq
            question="Can I contact Stanfordos about a partnership?"
            answer="Yes. Send us an email with some information about your organization and what you'd like to discuss."
          />

          <Faq
            question="Will Stanfordos offer more products?"
            answer="The platform is designed to grow over time. More products and capabilities can be introduced as Stanfordos evolves."
          />
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  description,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-black text-slate-950">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>

      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
      >
        {value}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 sm:p-7">
      <h3 className="text-base font-bold text-slate-950">{question}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
    </div>
  );
}
