import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato
(
  {
  subsets: ["latin-ext"],
  weight: "400",
  }
);

export const metadata: Metadata = 
{
  title: "Proof of Concept"
};

export default function RootLayout
(
  {
    children,
  }: Readonly<
  {
    children: React.ReactNode;
  }>
) 
{
  return (
    <html lang="en-US">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
