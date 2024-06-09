import { Button } from '~/components/ui/button';
import { Heading } from '~/components/ui/heading';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-[960px]">
      <div className="absolute inset-0 bg-hero-bg top-0 left-0 w-screen h-screen -z-10" />
      <section className="flex flex-col items-center gap-[24px]">
        <Button
          variant="outline"
          size="large"
          className="mt-6 rounded-full text-[16px]"
        >
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
      </section>
    </div>
  );
}
