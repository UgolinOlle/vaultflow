'use client';

import { Theme } from '@radix-ui/themes';
import { ReactNode } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { useHotkeys } from 'react-hotkeys-hook';
import { Toaster, toast } from 'sonner';

export default function GlobalProviders({ children }: { children: ReactNode }) {
  // -- Variables
  useHotkeys('mod+/', () => toast.dismiss());

  // -- Render
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          zIndex: '100',
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
          zIndex: '100',
        }}
      />
      <Toaster richColors position="top-center" />
      <Theme className="w-full h-full flex flex-col justify-between items-center gap-[80px]">
        {children}
      </Theme>
    </>
  );
}
