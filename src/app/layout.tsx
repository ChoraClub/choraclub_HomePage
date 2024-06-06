import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./fonts";
import SmoothScrolling from "./components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Chora Club | Homepage",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {children} */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
