import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ventas",
  description: "Nuestra aplicacion de Ventas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={inter.className}>{children}</section>;
}
