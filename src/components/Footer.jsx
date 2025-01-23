"use client";

import React from "react";
import Container from "./Container";
import FollowUsBtnGroup from "./FollowUsBtnGroup";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Characters", href: "/characters" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <footer className="mt-auto bg-footerColor text-white py-16">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-12">
            <p className="font-leckerli text-2xl text-center mb-4">Follow Us</p>
            <FollowUsBtnGroup />
          </div>
          <div className="w-3/4 lg:w-1/2 flex gap-5">
            <div className="h-[1px] border border-white w-1/2"></div>
            <div className="h-[1px] border border-white w-1/2"></div>
          </div>
          <div className="mt-12 w-full lg:w-2/3">
            <div className="w-full flex justify-between items-center">
              {/* <NavbarLinks/> */}
              {navLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`${
                    pathname === link.href
                      ? "text-primary border-b-2 border-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
