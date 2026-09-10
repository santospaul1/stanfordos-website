"use client";
import { FormEvent, useState } from "react";
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

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  role: string;
  students: string;
  interest: string;
  date: string;
  time: string;
  message:string;
  website: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  school: "",
  role: "",
  students: "",
  interest: "",
  date: "",
  time: "",
  message:"",
  website: "",
};

const interestOptions = [
  "Student Mnagagement",
  "Finance",
  "Attendance",
  "Attendance",
  "Reports & Insights",
  "Everything",
];

const roleOptions = [
  "SchoolAdministrator",
  "Principal/ Head Teacher",
  "Teacher",
  "School Owner / Director"
  "IT Administrator",
  "Other",
];

const studentOptions = [
  "Less than 100",
  "100-500",
  "500-1000",
  "1000-5000",
  "More than 5000",
];

export default function DemoForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState<Record<string, string> | null>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("")

  const minimumDate = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

function updateField<K extends keyof FormData>(
  field: K, 
  value: FormData[K]
) {
  setForm((current) => ({ ...current, [field]: value }));
  setError((current) => ({ ...current, [field]: "" }));
}

function toggleInterest(interest: string) {
  setForm((current) => {
    let interests = [...current.interest];
    if (interests === "Everything") {
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
return { ...current, 
           interests};
});

setError((current) => ({ ...current, interest: "" }));

function validateStepOne() {
  const nextError: Record<string, string> = {};

  if(!form.fullName.trim()) {
    nextError.fullName = "Please enter your full name";
  }

  if(!form.email.trim()) {
    nextError.email = "Please enter your email address";
  } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    nextError.email = "Please enter a valid email address";
  }

  if (!form.phone.trim()) {
    nextError.phone = "Please enter your phone number";
  }
  if (!form.school.trim()) {
    nextError.school = "Please enter your school name";
  }
  if (!form.role.trim()) {
    nextError.role = "Please select your role";
  }
  if (!form.students.trim()) {
    nextError.students = "Please select the approximate number of students";
  }

  setErrors(nextError);
  return Object.keys(nextError).length === 0;
}

function validateStepTwo() {
  const nextError: Record<string, string> = {};
  if (form.interests.length === 0) {
    nextError.interests = "Please select at least one area of interest";
  }
  if (!form.date) {
    nextError.date = "Please choose a preferred date";
  }
  if (!form.time) {
    nextError.time = "Please choose a preferred time";
  }
  setErrors(nextError);
  return Object.keys(nextError).length === 0;
}
function handleNext() {
  if (validateStepOne()) {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

function handleBack() {
  setStep(1);
  setError({});
  window.scrollTo({ top: 0, behavior: "smooth" });
}