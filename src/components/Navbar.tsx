import Link from "next/link";
import React from "react";
import { navItems } from "@/utils/NavData";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo */}
      <h1 className="font-bold text-2xl">Logo</h1>
      {/* Navigation items */}
      <ul className="flex gap-6">
        {navItems.map(({ label }) => (
          <Link href="/" key={label}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
