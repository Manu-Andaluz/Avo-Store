import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Avo Store</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
