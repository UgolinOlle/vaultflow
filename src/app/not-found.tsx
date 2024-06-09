import { MoveUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <section className="h-screen w-screen py-24">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Le contenu que vous cherchez n'existe pas. Retour à la page
        <Link href="/"> d'accueil.</Link>
      </h1>
      <p>
        Contacte moi si tu pense avoir trouvé un bug. Merci!
        <br />
        <Link href="mailto:hello@ugolin-olle.com">
          <Button
            variant="link"
            size="default"
            className="flex items-center justify-center gap-1"
          >
            Mon mail
            <MoveUpRight size={16} />
          </Button>
        </Link>
      </p>
    </section>
  );
}
