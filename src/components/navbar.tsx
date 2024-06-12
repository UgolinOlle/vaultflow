import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

/**
 * @function Navbar
 * @description Navbar component.
 * @returns {React.ReactElement} - The Navbar component.
 * @exports Navbar
 */
export const Navbar: React.FC = (): React.ReactElement => {
  // -- Render
  return (
    <header className="mx-5 my-5 w-full h-20 relative">
      <nav className="fixed top-5 left-5 right-5 flex items-center justify-between bg-black/50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-md py-5 px-10 z-10">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-3">
            <Image src="/logo.png" alt="VaultFlow" width={22} height={22} />
            VaultFlow
          </Link>
        </div>
        <div className="flex items-center space-x-4">
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
        <Button
          size="small"
          className="rounded-full text-md font-normal leading-7"
        >
          Download the app
        </Button>
      </nav>
    </header>
  );
};
