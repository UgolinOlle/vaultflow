import { CircleDollarSign, LineChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

/**
 * @name Features
 * @description A simple component to present the features of the app.
 * @returns {React.ReactElement} - The Features component.
 * @exports Features
 */
export const Features: React.FC = (): React.ReactElement => {
  // -- Render
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col items-start gap-3 w-1/2 h-[360px] p-10 bg-features rounded-xl shadow-lightThird">
          <div className="border-purpleSecondary border-8 rounded-2xl shadow-purple">
            <LineChart
              size={44}
              className="p-2 bg-purplePrimary shadow-purple rounded-lg"
            />
          </div>
          <Heading variant="h3">Analytics Dashboard</Heading>
          <p className="text-justify text-white/65 w-[500px]">
            {`Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.`}
          </p>
          <Link
            href="/"
            className="text-md underline underline-offset-4"
          >{`View dashboard`}</Link>
        </div>
        <div className="flex flex-col items-start gap-3 w-1/2 h-[360px] p-10 bg-features rounded-xl shadow-lightThird">
          <div className="border-pinkSecondary border-8 rounded-2xl shadow-purple">
            <CircleDollarSign
              size={44}
              className="p-2 bg-pinkPrimary shadow-pink rounded-lg"
            />
          </div>
          <Heading variant="h3">Digital Credit Tokens</Heading>
          <p className="text-justify text-white/65 w-[500px]">
            {`Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.`}
          </p>
          <Link
            href="/"
            className="underline underline-offset-4 text-md"
          >{`View tokens`}</Link>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-3 w-full h-[400px] p-10 bg-features rounded-xl shadow-lightThird mt-20">
        <div className="w-1/2 h-full flex flex-col items-start justify-between">
          <div className="border-pinkSecondary border-8 rounded-2xl shadow-pink">
            <CircleDollarSign
              size={44}
              className="p-2 bg-pinkPrimary shadow-pink rounded-lg"
            />
          </div>
          <Heading variant="h3">Code collaboration</Heading>
          <p className="text-justify text-white/65 w-[500px]">
            {`Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.`}
          </p>
          <Link
            href="/"
            className="underline underline-offset-4 text-md"
          >{`View code collaboration`}</Link>
        </div>
        <Image
          src="/coding.png"
          alt="Coding"
          width={500}
          height={300}
          className="rounded-xl w-1/2 shadow-lightThird"
        />
      </div>
      <div className="flex flex-col justify-between items-center gap-5 w-full h-[400px] p-10 bg-features rounded-xl shadow-lightThird mt-20">
        <Heading
          variant="h2"
          className="bg-clip-text text-transparent bg-white-gradient text-center w-[700px]"
        >
          {`Our powerful analytics provides invaluable insights.`}
        </Heading>
        <p className="text-center text-white/65 text-lg w-[700px]">
          {`Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. `}
        </p>
        <Button variant="outline" size="large" className="rounded-full">
          {`Download the app`}
        </Button>
      </div>
    </div>
  );
};
