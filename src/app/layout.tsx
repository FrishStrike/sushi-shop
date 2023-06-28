import "./globals.scss";
import { Mulish } from "next/font/google";
import SushiFooter from "@/components/SushiFooter";
import Provider from "@/store/provider";
import QueryProvider from "@/store/QueryProvider";

const mulish = Mulish({
  weight: ["800", "600", "400", "300", "200"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sushi Food",
  description: "The best sushi restaurant in Yalta",
};

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
        <QueryProvider>
          <Provider>{children}</Provider>
        </QueryProvider>
      </body>
    </html>
  );
}
