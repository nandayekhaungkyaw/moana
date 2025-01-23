"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="">
      <Container>
        <nav className="">
          <div className="flex justify-between items-center py-3 lg:py-2">
            <Link href="/">
              <Logo className="cursor-pointer w-[81px] h-[29px] lg:w-[152px] lg:h-[55px] object-cover" />
            </Link>
            <NavbarLinks className="hidden lg:flex lg:w-1/2 lg:justify-between" />
            <button onClick={handleNav} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#262626"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1={4} x2={20} y1={12} y2={12} />
                <line x1={4} x2={20} y1={6} y2={6} />
                <line x1={4} x2={20} y1={18} y2={18} />
              </svg>
            </button>
          </div>
          <div
            className={
              menuOpen
                ? "fixed right-0 top-0 h-screen w-[65%] md:w-[50%] bg-primary-100 ease-in duration-300 z-[150] p-10"
                : "fixed right-[-100%] top-0 h-screen w-[65%] md:w-[50%] bg-primary-100 ease-in duration-300 z-[150] p-10"
            }
          >
            <div className="flex flex-col justify-center items-start gap-5">
              <button onClick={handleNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#262626"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <NavbarLinks className="w-full" menuOpen={menuOpen} />
            </div>
          </div>
        </nav>
        <div
          className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[110] cursor-pointer ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </Container>
    </header>
  );
}

export default Header;
