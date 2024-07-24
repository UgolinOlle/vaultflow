import type { Metadata } from "next";
import { Footer } from "~/components/footer";

import { Navbar } from "~/components/navbar";
import GlobalProviders from "~/lib/providers/global";

import "~/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaultflow.ugolin-olle.com"),
  title: {
    default: "VaultFlow",
    template: "%s | VaultFlow",
  },
  description: "Modern analytics for your business.",
  openGraph: {
    title: "VaultFlow",
    description: "Modern analytics for your business.",
    url: "https://vaultflow.ugolin-olle.com",
    siteName: "VaultFlow",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "VaultFlow",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex items-center justify-center w-full">
      <body className="relative flex flex-col antialiased justify-between items-center gap-14 mx-auto text-white bg-[#0B0121] w-full">
        <GlobalProviders>
          <Navbar />
          <main className="mt-6 flex flex-col justify-between items-center w-full">
            {children}
          </main>
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}
