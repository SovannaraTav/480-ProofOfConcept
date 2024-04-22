import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavigationBarComponent from "./components/NavigationBarComponent";

const lato = Lato
(
  {
  subsets: ["latin"],
  weight: "400",
  }
)

export const metadata: Metadata = 
{
  title: "Proof of Concept"
}

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
      <body className={lato.className}>
        <NavigationBarComponent />
        {children}
      </body>
    </html>
  );
}
