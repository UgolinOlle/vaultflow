"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./ui/button";

/**
 * @function Navbar
 * @description Navbar component.
 * @returns {React.ReactElement} - The Navbar component.
 * @exports Navbar
 */
export const Navbar: React.FC = (): React.ReactElement => {
  // -- State
  const [menuOpen, setMenuOpen] = useState(false);

  // -- Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // -- Render
  return (
    <header className="mx-5 my-5 w-full h-20 relative">
      <nav className="fixed top-5 left-5 right-5 flex items-center justify-between bg-black/50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-md py-3 px-4 md:py-5 md:px-10 z-10">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="VaultFlow"
              width={22}
              height={22}
              className="w-10 h-10"
            />
            <span className="hidden md:block">VaultFlow</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="/"
            className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
          >
            About us
          </Link>
        </div>
        <div className="hidden md:flex">
          <Button
            size="small"
            className="rounded-full text-md font-normal leading-7"
          >
            Download the app
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-black/50 backdrop-filter backdrop-blur-lg rounded-b-3xl shadow-md py-5 px-10 z-10 md:hidden">
          <div className="flex flex-col items-start space-y-4">
            <Link
              href="/"
              className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-md transition-all ease-in-out hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Button
              size="small"
              className="rounded-full text-md font-normal leading-7"
              onClick={toggleMenu}
            >
              Download the app
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
