"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1.2,
        smoothWheel: true,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
