"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav container">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span>STANFORDOS</span></Link>
    <div className={`nav-links ${open ? "open" : ""}`}>
      <Link href="/products/school-management" onClick={() => setOpen(false)}>Products</Link>
      <Link href="/#solutions" onClick={() => setOpen(false)}>Solutions</Link>
      <Link href="/about" onClick={() => setOpen(false)}>About</Link>
      <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      <Link href="/book-demo" className="nav-cta" onClick={() => setOpen(false)}>Book a Demo</Link>
    </div>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={24}/> : <Menu size={24}/>}</button>
  </nav></header>;
}
