import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Heading } from "./ui/heading";

/**
 * @function Footer
 * @description The footer component.
 * @returns {React.ReactElement} - The footer component.
 * @exports Footer
 */
export const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className="pb-10 pt-4 text-white w-full px-5">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-stretch gap-16">
          <div className="flex flex-col justify-between items-start gap-8 w-full md:w-1/3">
            <div>
              <Heading
                variant="h4"
                className="mb-4 font-bold tracking-widest text-white"
              >
                Contact
              </Heading>
              <ul className="flex flex-col gap-1 items-start justify-between text-white/65">
                <li>{`Work inquires: work@vaultflow.com`}</li>
                <li>{`PR and speaking: press@vaultflow.com`}</li>
                <li>{`New business: newbusiness@vaultflow.com`}</li>
              </ul>
            </div>
            <div>
              <Heading
                variant="h4"
                className="mb-4 font-bold tracking-widest text-white"
              >
                Career
              </Heading>
              <p className="text-white/65 text-lg">{`careers@vaultflow.com`}</p>
            </div>
            <p className="text-white/35">
              © 2023 Vaultflow. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-8 w-full md:w-1/3">
            <div>
              <Heading
                variant="h4"
                className="mb-4 font-bold tracking-widest text-white"
              >
                Address
              </Heading>
              <p className="text-white/65 text-lg">
                {`398 11th Street, Floor`} <br /> {`2 San Francisco, CA 94103`}
              </p>
            </div>
            <div>
              <Heading
                variant="h4"
                className="mb-4 font-bold tracking-widest text-white"
              >
                Social
              </Heading>
              <ul className="flex flex-col gap-1 items-start justify-between text-white/65">
                <li>{`Twitter`}</li>
                <li>{`Instagram`}</li>
                <li>{`Tik Tok`}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-full md:w-1/3">
            <div className="mt-auto">
              <Link
                href="/"
                className="text-xl font-bold flex items-center gap-3"
              >
                <Image src="/logo.png" alt="VaultFlow" width={22} height={22} />
                VaultFlow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
