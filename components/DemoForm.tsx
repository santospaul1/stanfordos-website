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
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => {
      let interests = [...current.interests];
      if (interest === "Everything") {
        interests = interests.includes("Everything") ? [] : [...interestOptions];
      } else {
        interests = interests.filter((item) => item !== "Everything");
        if (interests.includes(interest)) {
          interests = interests.filter((item) => item !== interest);
        } else {
          interests.push(interest);
        }
      }
      return { ...current, interests };
    });
    setErrors((current) => ({ ...current, interests: "" }));
  }

  function validateStepOne() {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!form.school.trim()) nextErrors.school = "Please enter your school name.";
    if (!form.role) nextErrors.role = "Please select your role.";
    if (!form.students) nextErrors.students = "Please select the approximate number of students.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStepTwo() {
    const nextErrors: Record<string, string> = {};
    if (form.interests.length === 0) {
      nextErrors.interests = "Please select at least one area you're interested in.";
    }
    if (!form.date) nextErrors.date = "Please choose a preferred date.";
    if (!form.time) nextErrors.time = "Please choose a preferred time.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleNext() {
    if (validateStepOne()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setStep(1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStepTwo()) return;
    if (form.website) {
      setSubmitted(true);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("Demo booking is not configured yet. Please contact us directly.");
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
            receiver_name: process.env.NEXT_PUBLIC_DEMO_RECEIVER_NAME || "Stanfordos Team",
          },
          { publicKey }
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS demo request failed:", error);
      setSubmitError("We couldn't send your request right now. Please try again.");
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
        <div className="animate-in fade-in zoom-in-95 duration-500 rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl shadow-indigo-100/50 sm:p-14">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-indigo-100 opacity-75"></div>
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 shadow-inner">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-200">
                <Check size={32} strokeWidth={3} />
              </div>
            </div>
          </div>

          <h2 className="mt-8 text-3xl font-black tracking-tight text-slate-900">
            Demo request received!
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Thanks for your interest in Stanfordos. Our team will review your request and contact you shortly using the details provided.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <CalendarDays size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Preferred demo time</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {form.date} <span className="text-slate-400 mx-1">•</span> {form.time}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="/"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-300 active:translate-y-0"
            >
              Back to Homepage
            </a>
            <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
            >
              Request another demo
            </button>
          </div>
        </div>
    );
  }

  return (
      <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
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
        <div className="mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                Step {step} of 2
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                {step === 1 ? "Tell us about your school" : "Demo preferences"}
              </h2>
            </div>
            <div className="hidden pb-1 text-sm font-semibold text-slate-400 sm:block">
              {step === 1 ? "Your details" : "Schedule it"}
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <div
                className={`h-2 flex-1 rounded-full transition-all duration-500 ease-in-out ${
                    step >= 1 ? "bg-gradient-to-r from-indigo-600 to-blue-600" : "bg-slate-100"
                }`}
            />
            <div
                className={`h-2 flex-1 rounded-full transition-all duration-500 ease-in-out ${
                    step >= 2 ? "bg-gradient-to-r from-indigo-600 to-blue-600" : "bg-slate-100"
                }`}
            />
          </div>
        </div>

        {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-left-4 duration-300">
              <InputField
                  label="Full name"
                  icon={<User size={18} />}
                  value={form.fullName}
                  placeholder="e.g. John Kamau"
                  error={errors.fullName}
                  onChange={(value) => updateField("fullName", value)}
              />

              <div className="grid gap-6 sm:grid-cols-2">
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

              <div className="grid gap-6 sm:grid-cols-2">
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
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-300 active:translate-y-0"
              >
                Continue to Preferences
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
        )}

        {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div>
                <label className="text-base font-bold text-slate-900">
                  What would you like to explore?
                </label>
                <p className="mt-1 text-sm text-slate-500">
                  Select everything that is relevant to your school's needs.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {interestOptions.map((interest) => {
                    const selected =
                        form.interests.includes(interest) ||
                        (interest === "Everything" && form.interests.length === interestOptions.length);

                    return (
                        <button
                            type="button"
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`group relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                                selected
                                    ? "border-indigo-600 bg-indigo-50/50 shadow-sm shadow-indigo-100"
                                    : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                        >
                          <div
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                  selected
                                      ? "border-indigo-600 bg-indigo-600 text-white"
                                      : "border-slate-300 bg-white group-hover:border-slate-400"
                              }`}
                          >
                            {selected && <Check size={14} strokeWidth={3} className="animate-in zoom-in" />}
                          </div>
                          <span className={`text-sm font-bold ${selected ? "text-indigo-900" : "text-slate-700"}`}>
                      {interest}
                    </span>
                        </button>
                    );
                  })}
                </div>
                {errors.interests && (
                    <p className="mt-3 text-sm font-medium text-red-500 animate-in slide-in-from-top-1">
                      {errors.interests}
                    </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group relative">
                  <label htmlFor="date" className="text-sm font-bold text-slate-900">
                    Preferred date
                  </label>
                  <div className="relative mt-2">
                    <CalendarDays
                        size={18}
                        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                            errors.date ? "text-red-400" : "text-slate-400 group-focus-within:text-indigo-500"
                        }`}
                    />
                    <input
                        id="date"
                        type="date"
                        min={minimumDate}
                        value={form.date}
                        onChange={(event) => updateField("date", event.target.value)}
                        className={`w-full rounded-xl border-2 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all hover:bg-white focus:bg-white focus:ring-4 ${
                            errors.date
                                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                : "border-slate-100 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10"
                        }`}
                    />
                  </div>
                  {errors.date && (
                      <p className="mt-2 text-xs font-medium text-red-500">{errors.date}</p>
                  )}
                </div>

                <div className="group relative">
                  <label htmlFor="time" className="text-sm font-bold text-slate-900">
                    Preferred time
                  </label>
                  <div className="relative mt-2">
                    <Clock3
                        size={18}
                        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                            errors.time ? "text-red-400" : "text-slate-400 group-focus-within:text-indigo-500"
                        }`}
                    />
                    <input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(event) => updateField("time", event.target.value)}
                        className={`w-full rounded-xl border-2 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all hover:bg-white focus:bg-white focus:ring-4 ${
                            errors.time
                                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                : "border-slate-100 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10"
                        }`}
                    />
                  </div>
                  {errors.time && (
                      <p className="mt-2 text-xs font-medium text-red-500">{errors.time}</p>
                  )}
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="text-sm font-bold text-slate-900">
                  Anything else you'd like us to know? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Tell us about your school's current challenges or what you'd like to see..."
                    className="mt-2 w-full resize-none rounded-xl border-2 border-slate-100 bg-slate-50/50 px-5 py-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {submitError && (
                  <div className="animate-in fade-in rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                    {submitError}
                  </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <button
                    type="button"
                    onClick={handleBack}
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                <button
                    type="submit"
                    disabled={submitting}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-300 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending request...
                      </>
                  ) : (
                      <>
                        Request Demo
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                      </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs font-medium leading-5 text-slate-400">
                By submitting this form, you agree to be contacted by the Stanfordos team.
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
      <div className="group relative">
        <label className="text-sm font-bold text-slate-900">{label}</label>
        <div className="relative mt-2">
        <span
            className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                error ? "text-red-400" : "text-slate-400 group-focus-within:text-indigo-500"
            }`}
        >
          {icon}
        </span>
          <input
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={(event) => onChange(event.target.value)}
              className={`w-full rounded-xl border-2 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-white focus:bg-white focus:ring-4 ${
                  error
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-slate-100 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10"
              }`}
          />
        </div>
        {error && <p className="mt-2 text-xs font-medium text-red-500">{error}</p>}
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
      <div className="group relative">
        <label className="text-sm font-bold text-slate-900">{label}</label>
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className={`mt-2 w-full appearance-none rounded-xl border-2 bg-slate-50/50 px-5 py-3.5 text-sm font-medium outline-none transition-all hover:bg-white focus:bg-white focus:ring-4 ${
                value ? "text-slate-900" : "text-slate-500"
            } ${
                error
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-100 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10"
            }`}
        >
          <option value="" disabled className="text-slate-400">
            {placeholder}
          </option>
          {options.map((option) => (
              <option key={option} value={option} className="text-slate-900">
                {option}
              </option>
          ))}
        </select>
        {/* Custom dropdown arrow for better styling consistency */}
        <div className="pointer-events-none absolute bottom-0 right-4 top-8 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
        {error && <p className="mt-2 text-xs font-medium text-red-500">{error}</p>}
      </div>
  );
}