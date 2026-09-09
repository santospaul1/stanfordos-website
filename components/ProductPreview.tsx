"use client";
import Image from "next/image";
import { useState } from "react";

const previews = [
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.39.jpeg",
    label: "Dashboard",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40.jpeg",
    label: "Management",
  },
  {
    src: "/screenshots/WhatsApp Image 2026-09-04 at 18.25.40 (1).jpeg",
    label: "Students",
  },
];

export default function ProductPreview() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
        <div className="flex h-10 items-center gap-2 rounded-t-xl border-b bg-slate-50 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

          <div className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-400">
            app.stanfordos.com
          </div>
        </div>
        <Image
          src={previews[active].src}
          alt={`Stanfordos ${previews[active].label} interface`}
          width={1366}
          height={768}
          className="w-full"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {previews.map((preview, index) => (
          <button
            key={preview.label}
            onClick={() => setActive(index)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              active === index
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {preview.label}
          </button>
        ))}
      </div>
    </div>
  );
}
