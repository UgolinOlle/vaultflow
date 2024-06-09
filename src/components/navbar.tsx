import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

/**
 * @function Navbar
 * @description Navbar component.
 * @returns {React.ReactElement} - The Navbar component.
 * @exports Navbar
 */
export const Navbar: React.FC = (): React.ReactElement => {
  // -- Render
  return (
    <nav className="flex items-center justify-between w-full bg-black/50 backdrop-filter backdrop-blur-lg rounded-[25px] shadow-md py-[20px] px-[40px] mx-[30px] my-[20px]">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-[22px] font-bold flex items-center gap-[10px]"
        >
          <Image src="/logo.png" alt="VaultFlow" width={22} height={22} />
          VaultFlow
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-[16px]">
          Features
        </Link>
        <Link href="/" className="text-[16px]">
          Pricing
        </Link>
        <Link href="/" className="text-[16px]">
          About us
        </Link>
      </div>
      <Button
        size="small"
        className="rounded-full text-[16px] font-normal leading-[24px]"
      >
        Download the app
      </Button>
    </nav>
  );
};
