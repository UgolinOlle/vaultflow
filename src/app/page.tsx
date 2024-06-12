import Image from "next/image";

import { CompanyList } from "~/components/company-list";
import { Features } from "~/components/features";
import { BorderBeam } from "~/components/ui/border-beam";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mb-10 gap-[80px]">
      <div className="absolute inset-0 bg-hero-bg top-0 left-0 w-screen -z-10 bg-contain bg-no-repeat" />
      <section className="flex flex-col items-center w-[960px] gap-[24px] py-[60px]">
        <Button variant="outline" size="large" className="mt-6 rounded-full">
          {`We just raised $20M in Series B. Learn more`}
        </Button>
        <Heading
          variant="h1"
          className="bg-clip-text text-transparent bg-white-gradient text-center"
        >
          {`Modern analytics for the modern world`}
        </Heading>
        <p className="text-lg text-center w-[600px] h-20 text-white/65">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.`}
        </p>
        <div className="flex justify-between items-center gap-4">
          <Button
            size="large"
            className="rounded-full text-[16px]"
          >{`Download the app`}</Button>
          <Button
            variant="outline"
            size="large"
            className="rounded-full text-[16px]"
          >{`Talk to an expert`}</Button>
        </div>
      </section>
      <div className="relative rounded-xl">
        <Image
          src="/dashboard.png"
          alt="Dashboard preview"
          width={960}
          height={540}
          className="rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
      <section className="flex flex-col justify-center items-center gap-6 py-[60px] w-full">
        <p className="text-lg text-center w-[600px] h-20 text-white/65 flex justify-center items-center">
          {`Trusted by teams at over 1,000 of the world’s leading organizations`}
        </p>
        <CompanyList />
      </section>
      <section className="flex flex-col justify-center items-center gap-6 py-[60px] w-full">
        <div className="flex flex-col items-center gap-4 relative">
          <Heading
            variant="h2"
            className="bg-clip-text text-transparent bg-white-gradient text-center leading-[80px]"
          >
            {`Features that work for`} <br /> {`your future.`}
          </Heading>
          <p className="text-lg text-center w-[600px] h-20 text-white/65">
            {`Check out our amazing features and experience the`} <br />
            {`power of Vaultflow
            for yourself.`}
          </p>
          <Features />
        </div>
      </section>
    </div>
  );
}
