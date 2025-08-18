"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-boska text-dark">
          <img src="/logo.png" alt="logo" width={50} height={50} />
          Nimble.
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
        <nav className={`absolute md:static top-full left-0 w-full bg-primary z-50 md:w-auto md:flex ${open ? "block" : "hidden"}`}> 
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 text-lg">
            <li className="py-1 md:py-0"><Link href="/" className="hover:text-secondary font-boska " onClick={() => setOpen(false)}>Home</Link></li>
            <li className="py-1 md:py-0"><Link href="/about" className="hover:text-secondary font-boska " onClick={() => setOpen(false)}>About</Link></li>
            <li className="py-1 md:py-0"><Link href="/contact" className="hover:text-secondary font-boska " onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
