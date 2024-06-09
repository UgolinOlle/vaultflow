"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 py-24">
      <h1 className="text-3xl font-bold">
        Oh là là, vous avez cassé quelque chose! 😱
      </h1>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-lg text-purple-500 underline underline-offset-4"
      >
        Retour à la page d'accueil
        <MoveUpRight size="16" fontWeight="4" />
      </Link>
    </div>
  );
}
