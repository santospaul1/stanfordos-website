"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ProductNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-20 z-40 border-b transition ${
                scrolled ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl" 
                         :"border-slate-200 bg-white"}`}
        >
            <div className="mx-auto flex max-w-7xl item-center justify-between gap-6 overflow ->">
                <Link
                    href="/products/school-management"
                    className="whitespace-nowrap text-sm font-bold text-slate-950"
                >
                    School Management 
                </Link>
                <nav className="flex items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-500">
                    < a href="#features" className="hover:text-blue-600">
                    Features
                    </a>
                    <a href="#screenshots" className="hover:text-blue-600">
                    Screenshots
                    </a>
                    <a href="#faq" className="hover:text-blue-600">
                    FAQ
                    </a>
                    <Link
                    href="/book-demo"
                    className="rounded-1g bg-blue-600 px-4 py-2 font-bold text-white font-bold text-white hover:bg-blue-700"
                    >
                    Book a Demo
                    </Link> 
                </nav>  
            </div>  
        </div>
    );
}