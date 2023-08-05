"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "./styles/globals.scss";
import { Mulish } from "next/font/google";
import { Providers } from "@/components/Providers";

const mulish = Mulish({
  weight: ["800", "600", "400", "300", "200"],
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Sushi Food",
//   description: "The best sushi restaurant in Yalta",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className={mulish.className}>
        <ProgressBar
          height="4px"
          color="#D64B4B"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
