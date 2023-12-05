import { globalMetaData, globalViewport } from "@/config/site";

import "@/styles/globals.css";

export const metadata = globalMetaData;
export const viewport = globalViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
