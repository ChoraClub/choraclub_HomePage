import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { inter } from "./fonts";
import SmoothScrolling from "./components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Chora Club",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57CJH2LT');`,
          }}
        ></script>
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57CJH2LT"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* {children} */}
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
