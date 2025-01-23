"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ className = "", menuOpen }) => {
  const pathname = usePathname();
  // console.log(className)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Characters", href: "/characters" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <>
      <ul className={`${className}`}>
        {navLinks.map((link) => (
          <li key={link.href} className="py-4 font-bold">
            <Link
              href={link.href}
              onClick={() => menuOpen(false)}
              className={
                pathname === link.href
                  ? "text-primary lg:border-b-2 sm:border-b-none lg:border-primary"
                  : "hover:text-primary"
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarLinks;
