"use client";

import emailjs from "@emailjs/browser";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Loader2,
  Mail,
  School,
  User,
  Users,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  role: string;
  students: string;
  interests: string[];
  date: string;
  time: string;
  message: string;
  website: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  school: "",
  role: "",
  students: "",
  interests: [],
  date: "",
  time: "",
  message: "",
  website: "",
};

const interestOptions = [
  "Student Management",
  "Finance",
  "Academics",
  "Attendance",
  "Reports & Insights",
  "Everything",
];

const roleOptions = [
  "School Administrator",
  "Principal / Head Teacher",
  "Teacher",
  "School Owner / Director",
  "IT Administrator",
  "Other",
];

const studentOptions = [
  "Below 100",
  "100 – 300",
  "301 – 500",
  "501 – 1,000",
  "1,000+",
];

export default function DemoForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const minimumDate = useMemo(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => {
      let interests = [...current.interests];

      if (interest === "Everything") {
        interests = interests.includes("Everything")
          ? []
          : [...interestOptions];
      } else {
        interests = interests.filter((item) => item !== "Everything");

        if (interests.includes(interest)) {
          interests = interests.filter((item) => item !== interest);
        } else {
          interests.push(interest);
        }
      }

      return {
        ...current,
        interests,
      };
    });

    setErrors((current) => ({
      ...current,
      interests: "",
    }));
  }

  function validateStepOne() {
    const nextErrors: Record<string, string> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!form.school.trim()) {
      nextErrors.school = "Please enter your school name.";
    }

    if (!form.role) {
      nextErrors.role = "Please select your role.";
    }

    if (!form.students) {
      nextErrors.students = "Please select the approximate number of students.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function validateStepTwo() {
    const nextErrors: Record<string, string> = {};

    if (form.interests.length === 0) {
      nextErrors.interests =
        "Please select at least one area you're interested in.";
    }

    if (!form.date) {
      nextErrors.date = "Please choose a preferred date.";
    }

    if (!form.time) {
      nextErrors.time = "Please choose a preferred time.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleNext() {
    if (validateStepOne()) {
      setStep(2);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handleBack() {
    setStep(1);
    setErrors({});
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateStepTwo()) {
      return;
    }

    /*
     * Honeypot:
     * Real users should never see or fill this field.
     */
    if (form.website) {
      setSubmitted(true);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError(
        "Demo booking is not configured yet. Please contact us directly.",
      );
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          school: form.school,
          role: form.role,
          students: form.students,
          interests: form.interests.join(", "),
          preferred_date: form.date,
          preferred_time: form.time,
          message: form.message || "No additional message provided.",
          submitted_at: new Date().toLocaleString(),
          page_url: window.location.href,
          receiver_name:
            process.env.NEXT_PUBLIC_DEMO_RECEIVER_NAME || "Stanfordos Team",
        },
        {
          publicKey,
        },
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS demo request failed:", error);

      setSubmitError(
        "We couldn't send your request right now. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
    setStep(1);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
            <Check size={30} strokeWidth={3} />
          </div>
        </div>

        <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-950">
          Demo request received
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">
          Thanks for your interest in Stanfordos. Our team will review your
          request and contact you using the details you provided.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-5 text-left">
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 text-blue-600" size={20} />

            <div>
              <p className="text-sm font-bold text-slate-950">
                Preferred demo time
              </p>

              <p className="mt-1 text-sm text-slate-600">
                {form.date} at {form.time}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Back to Stanfordos
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Request another demo
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Step {step} of 2
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
              {step === 1
                ? "Tell us about your school"
                : "Choose your demo preferences"}
            </h2>
          </div>

          <div className="hidden text-sm font-semibold text-slate-400 sm:block">
            {step === 1 ? "Your details" : "Demo preferences"}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <div
            className={`h-1.5 flex-1 rounded-full ${
              step >= 1 ? "bg-blue-600" : "bg-slate-200"
            }`}
          />

          <div
            className={`h-1.5 flex-1 rounded-full ${
              step >= 2 ? "bg-blue-600" : "bg-slate-200"
            }`}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <InputField
            label="Full name"
            icon={<User size={18} />}
            value={form.fullName}
            placeholder="e.g. John Kamau"
            error={errors.fullName}
            onChange={(value) => updateField("fullName", value)}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <InputField
              label="Email address"
              icon={<Mail size={18} />}
              type="email"
              value={form.email}
              placeholder="you@school.com"
              error={errors.email}
              onChange={(value) => updateField("email", value)}
            />

            <InputField
              label="Phone number"
              icon={<Users size={18} />}
              type="tel"
              value={form.phone}
              placeholder="+254 7XX XXX XXX"
              error={errors.phone}
              onChange={(value) => updateField("phone", value)}
            />
          </div>

          <InputField
            label="School / organization"
            icon={<School size={18} />}
            value={form.school}
            placeholder="e.g. Stanford Academy"
            error={errors.school}
            onChange={(value) => updateField("school", value)}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              label="Your role"
              value={form.role}
              placeholder="Select your role"
              options={roleOptions}
              error={errors.role}
              onChange={(value) => updateField("role", value)}
            />

            <SelectField
              label="Approximate students"
              value={form.students}
              placeholder="Select range"
              options={studentOptions}
              error={errors.students}
              onChange={(value) => updateField("students", value)}
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Continue
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-7">
          <div>
            <label className="text-sm font-bold text-slate-900">
              What would you like to explore?
            </label>

            <p className="mt-1 text-sm text-slate-500">
              Select everything that is relevant to your school.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {interestOptions.map((interest) => {
                const selected =
                  form.interests.includes(interest) ||
                  (interest === "Everything" &&
                    form.interests.length === interestOptions.length);

                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      selected
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                          selected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300"
                        }`}
                      >
                        {selected && <Check size={13} strokeWidth={3} />}
                      </span>

                      {interest}
                    </span>
                  </button>
                );
              })}
            </div>

            {errors.interests && (
              <p className="mt-2 text-xs font-medium text-red-600">
                {errors.interests}
              </p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="text-sm font-bold text-slate-900"
              >
                Preferred date
              </label>

              <div className="relative mt-2">
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="date"
                  type="date"
                  min={minimumDate}
                  value={form.date}
                  onChange={(event) => updateField("date", event.target.value)}
                  className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${
                    errors.date ? "border-red-400" : "border-slate-200"
                  }`}
                />
              </div>

              {errors.date && (
                <p className="mt-2 text-xs font-medium text-red-600">
                  {errors.date}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="time"
                className="text-sm font-bold text-slate-900"
              >
                Preferred time
              </label>

              <div className="relative mt-2">
                <Clock3
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(event) => updateField("time", event.target.value)}
                  className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${
                    errors.time ? "border-red-400" : "border-slate-200"
                  }`}
                />
              </div>

              {errors.time && (
                <p className="mt-2 text-xs font-medium text-red-600">
                  {errors.time}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-bold text-slate-900"
            >
              Anything else you'd like us to know?
            </label>

            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about your school's current challenges or what you'd like to see during the demo."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {submitError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {submitError}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleBack}
              disabled={submitting}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending request...
                </>
              ) : (
                <>
                  Request Demo
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs leading-5 text-slate-400">
            By submitting this form, you agree to be contacted by the Stanfordos
            team regarding your demo request.
          </p>
        </div>
      )}
    </form>
  );
}

type InputFieldProps = {
  label: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
};

function InputField({
  label,
  icon,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-900">{label}</label>

      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${
            error ? "border-red-400" : "border-slate-200"
          }`}
        />
      </div>

      {error && (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
};

function SelectField({
  label,
  value,
  placeholder,
  options,
  error,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-900">{label}</label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
