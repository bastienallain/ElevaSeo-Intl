import clsx from "clsx";

import { globalMetaData, globalViewport } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Providers } from "@/app/providers";

import "@/styles/globals.css";

export const metadata = globalMetaData;
export const viewport = globalViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
