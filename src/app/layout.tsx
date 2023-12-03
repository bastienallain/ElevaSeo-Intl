import { ReactNode } from "react";
import { Providers } from "./providers";
import "./styles.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
