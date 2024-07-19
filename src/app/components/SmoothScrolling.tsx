"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { memo } from "react";

const SmoothScrolling = memo(function SmoothScrolling({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
            {children}
        </ReactLenis>
    );
});

export default SmoothScrolling;